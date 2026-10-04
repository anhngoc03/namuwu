/**
 * enter-confirm.js
 * ------------------------------------------------------------------
 * Nhấn Enter ở bất kỳ đâu trong app = tự động bấm nút "đồng ý" gần nhất:
 *   - Trong các popup (#qr-modal, #qr-delete-modal, #home-reset-modal,
 *     #ms-win-modal, #ms-lose-modal, ...): bấm nút xác nhận (Yah / Save / OK...).
 *   - Trong form thêm/sửa dạng inline (vd dòng edit Home to-do, không phải popup):
 *     bấm nút "Save" gần nhất trong cùng khối đang sửa.
 *   - Ô "Note" (QR): Enter thường = Save luôn. Muốn xuống dòng thì bấm Shift+Enter.
 *
 * KHÔNG cần biết chính xác từng id/class — script tự tìm popup đang mở
 * (mọi id kết thúc bằng "-modal") và tự tìm nút theo CHỮ trên nút
 * (Yah / Save / OK / Submit / Lưu / Đồng ý / Xác nhận), nên không đụng
 * tới app.js / index.html hiện có.
 *
 * CÁCH DÙNG: thêm file này vào frontend/, rồi nhúng SAU app.js:
 *   <script src="gas-bridge.js"></script>
 *   <script src="app.js"></script>
 *   <script src="enter-confirm.js"></script>
 * ------------------------------------------------------------------
 */
(function () {
  'use strict';

  // Thứ tự ưu tiên khi tìm nút "xác nhận" bên trong 1 popup/khối đang mở.
  var CONFIRM_TEXTS = ['yah', 'save', 'lưu', 'ok', 'đồng ý', 'dong y', 'xác nhận', 'submit'];

  function isVisible(el) {
    if (!el) return false;
    if (el.offsetParent === null && el.style.position !== 'fixed') return false;
    var cs = window.getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0';
  }

  // Tìm tất cả popup đang mở (mọi id kết thúc bằng "-modal", hoặc class .modal/.popup/.overlay),
  // lấy cái nằm SAU CÙNG trong DOM (thường là popup mở gần nhất / z-index cao nhất).
  function findOpenModal() {
    var candidates = document.querySelectorAll('[id$="-modal"], .modal, .popup, .popup-overlay, .overlay');
    var openOnes = [];
    for (var i = 0; i < candidates.length; i++) {
      if (isVisible(candidates[i])) openOnes.push(candidates[i]);
    }
    if (!openOnes.length) return null;
    return openOnes[openOnes.length - 1];
  }

  function getButtons(container) {
    return Array.prototype.slice.call(container.querySelectorAll('button, [role="button"], input[type="button"], input[type="submit"]'));
  }

  function pickConfirmButton(buttons) {
    var visible = buttons.filter(function (b) {
      return isVisible(b) && !b.disabled;
    });
    if (!visible.length) return null;

    for (var t = 0; t < CONFIRM_TEXTS.length; t++) {
      for (var i = 0; i < visible.length; i++) {
        var txt = (visible[i].textContent || '').trim().toLowerCase();
        if (txt === CONFIRM_TEXTS[t]) return visible[i];
      }
    }
    // Không khớp chữ nào -> thử nút có class gợi ý "xác nhận / chính"
    for (var j = 0; j < visible.length; j++) {
      var cls = (visible[j].className || '').toLowerCase();
      if (cls.indexOf('confirm') !== -1 || cls.indexOf('primary') !== -1 || cls.indexOf('save') !== -1 || cls.indexOf('yah') !== -1) {
        return visible[j];
      }
    }
    return null; // không đoán bừa nếu không chắc (tránh bấm nhầm nút Huỷ/Xoá)
  }

  // Với form inline (không phải popup) như dòng Home to-do đang edit:
  // từ input đang gõ, đi lên tìm khối cha gần nhất có chứa nút Save.
  function findInlineSaveButton(fromEl) {
    var el = fromEl;
    var depth = 0;
    while (el && depth < 8) {
      var buttons = getButtons(el);
      if (buttons.length) {
        var btn = pickConfirmButton(buttons);
        if (btn) return btn;
      }
      el = el.parentElement;
      depth++;
    }
    return null;
  }

  function isEditableField(el) {
    if (!el) return false;
    var tag = el.tagName;
    if (tag === 'TEXTAREA') return true;
    if (tag === 'INPUT') {
      var type = (el.type || 'text').toLowerCase();
      return ['text', 'date', 'number', 'search', 'tel', 'email', 'url', 'password'].indexOf(type) !== -1;
    }
    return false;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' || e.shiftKey) return; // Shift+Enter = xuống dòng bình thường (vd ô Note)

    var target = e.target;
    if (!isEditableField(target)) return;

    // 1) Có popup đang mở? -> bấm nút xác nhận trong popup đó.
    var modal = findOpenModal();
    if (modal) {
      var btn = pickConfirmButton(getButtons(modal));
      if (btn) {
        e.preventDefault();
        btn.click();
      }
      return;
    }

    // 2) Không có popup -> đang gõ trong 1 form inline (vd sửa Home to-do) -> tìm nút Save gần nhất.
    var saveBtn = findInlineSaveButton(target);
    if (saveBtn) {
      e.preventDefault();
      saveBtn.click();
    }
  }, true);
})();
