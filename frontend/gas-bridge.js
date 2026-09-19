/**
 * gas-bridge.js
 * ------------------------------------------------------------------
 * Lớp "cầu nối" giả lập API `google.script.run` của Google Apps Script,
 * nhưng thực chất gọi tới Cloudflare Pages Function (/api) bằng fetch().
 *
 * NHỜ FILE NÀY, app.js KHÔNG CẦN SỬA BẤT KỲ DÒNG N ÀO — mọi lời gọi kiểu:
 *
 *   google.script.run
 *     .withSuccessHandler(function (data) { ... })
 *     .withFailureHandler(function (err) { ... })
 *     .getAccountsData();
 *
 * vẫn hoạt động y hệt như cũ.
 *
 * Backend giờ là functions/api.js (Cloudflare Pages Function), đọc/ghi
 * dữ liệu ở Supabase — cùng domain với frontend nên KHÔNG cần lo CORS.
 * ------------------------------------------------------------------
 */

(function () {
  'use strict';

  // Cùng domain (namuwu.pages.dev) nên chỉ cần đường dẫn tương đối — không
  // cần sửa gì thêm dù bạn đổi custom domain sau này.
  var API_BASE_URL = '/api';

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
