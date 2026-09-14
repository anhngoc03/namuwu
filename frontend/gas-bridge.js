/**
 * gas-bridge.js
 * ------------------------------------------------------------------
 * Lớp "cầu nối" giả lập API `google.script.run` của Google Apps Script,
 * nhưng thực chất gọi tới Apps Script Web App bằng fetch() thông thường.
 *
 * NHỜ FILE NÀY, app.js (chuyển nguyên vẹn từ JavaScript.html cũ) KHÔNG CẦN
 * SỬA BẤT KỲ DÒNG NÀO — mọi lời gọi kiểu:
 *
 *   google.script.run
 *     .withSuccessHandler(function (data) { ... })
 *     .withFailureHandler(function (err) { ... })
 *     .getAccountsData();
 *
 * vẫn hoạt động y hệt như cũ, chỉ khác là bên dưới nó dùng fetch() thay vì
 * cơ chế nội bộ của Apps Script HtmlService.
 *
 * CÁCH DÙNG:
 *   1. Deploy Code.gs thành Web App (Deploy > New deployment > Web app).
 *   2. Copy URL dạng: https://script.google.com/macros/s/XXXXXXXX/exec
 *   3. Dán vào API_BASE_URL bên dưới.
 *   4. Nhúng file này TRƯỚC app.js trong index.html:
 *        <script src="gas-bridge.js"></script>
 *        <script src="app.js"></script>
 * ------------------------------------------------------------------
 */

(function () {
  'use strict';

  // ⚠️ BẮT BUỘC: thay bằng URL Web App Apps Script thực tế của bạn sau khi deploy.
  var API_BASE_URL = 'https://script.google.com/macros/s/AKfycbw344nesbbvd4PXn4i8wjysTJHFrY2WcOz6b-UOdFDW5sPQfzNhDU7j4zTyhqcBMnk2Ww/exec';

  /**
   * Gọi 1 action lên Apps Script Web App.
   * QUAN TRỌNG: KHÔNG set header 'Content-Type': 'application/json' thủ công,
   * vì làm vậy trình duyệt sẽ gửi preflight OPTIONS — mà Apps Script Web App
   * không xử lý OPTIONS, sẽ gây lỗi CORS. Để fetch() tự gán Content-Type mặc
   * định là "text/plain;charset=UTF-8" (request được coi là "simple request",
   * không cần preflight), Apps Script vẫn đọc được JSON trong e.postData.contents
   * bình thường.
   */
  function callApi(action, args) {
    return fetch(API_BASE_URL, {
      method: 'POST',
      body: JSON.stringify({ action: action, args: args })
    })
      .then(function (res) {
        if (!res.ok) {
          throw new Error('HTTP ' + res.status + ' ' + res.statusText);
        }
        return res.json();
      })
      .then(function (payload) {
        if (!payload || payload.ok !== true) {
          var msg = (payload && payload.error) ? payload.error : 'Unknown server error';
          throw new Error(msg);
        }
        return payload.data;
      });
  }

  // Tạo 1 "builder" mô phỏng đúng cú pháp chaining của google.script.run:
  //   .withSuccessHandler(fn) -> trả về builder mới, ghi nhớ successHandler
  //   .withFailureHandler(fn) -> trả về builder mới, ghi nhớ failureHandler
  //   .tenHamBatKy(...args)   -> gọi callApi('tenHamBatKy', args), rồi tự
  //                              gọi successHandler/failureHandler tương ứng
  function createRunBuilder(successHandler, failureHandler) {
    return new Proxy(function () {}, {
      get: function (_target, prop) {
        if (prop === 'withSuccessHandler') {
          return function (fn) { return createRunBuilder(fn, failureHandler); };
        }
        if (prop === 'withFailureHandler') {
          return function (fn) { return createRunBuilder(successHandler, fn); };
        }
        if (prop === 'withUserObject') {
          // Không dùng trong app này, nhưng giữ lại cho tương thích API gốc.
          return function () { return createRunBuilder(successHandler, failureHandler); };
        }
        // Bất kỳ tên thuộc tính nào khác được hiểu là TÊN HÀM cần gọi trên server.
        var actionName = prop;
        return function () {
          var args = Array.prototype.slice.call(arguments);
          callApi(actionName, args)
            .then(function (data) {
              if (typeof successHandler === 'function') successHandler(data);
            })
            .catch(function (err) {
              if (typeof failureHandler === 'function') {
                failureHandler({ message: err.message });
              } else {
                console.error('[gas-bridge] Lỗi gọi "' + actionName + '":', err);
              }
            });
        };
      }
    });
  }

  // Gắn vào window.google.script.run, giữ nguyên đường dẫn truy cập như trong Apps Script.
  window.google = window.google || {};
  window.google.script = window.google.script || {};
  window.google.script.run = createRunBuilder(null, null);
})();
