# Trợ lý cuộc sống — kế hoạch từng bước

## 1. Yêu cầu (đã làm rõ)

| Mục | Chốt |
|---|---|
| Nơi dùng | Mục **Personal** của web hiện có (Cloudflare Pages + `functions/api.js` + Supabase). Máy tính + điện thoại. |
| Khoá | Bấm Personal → ngôi làng **toàn màn hình**, **không chữ**, bấm vào cảnh không có gì xảy ra. Góc phải chỉ có `🍅` (về Home, lối ra duy nhất) và `✮⋆˙` (rê chuột không hiện chữ) → bảng mật khẩu. Đúng mật khẩu → hiện tên các nhà và mở được chức năng. Bấm `✮⋆˙` lần nữa → khoá lại. Trong từng chức năng (Work, Money…): góc trái có `‹` (về làng) và `🍅` (về Home), thanh menu dưới bị ẩn. |
| AI agent | Ở Town Hall. Được **tự làm mọi việc** với dữ liệu (tạo/sửa/xoá task, chi tiêu, thu nhập, lịch, to-do); hỏi lại trước khi xoá. Tìm web được; luật thì ưu tiên vbpl.vn, baochinhphu.vn, thuvienphapluat.vn. Cuộc trò chuyện chỉ nằm trong tab đang mở (khoá/tải lại là quên). File gửi kèm chỉ để Claude đọc, không lưu. Model `claude-opus-5-5`, có fallback tự động khi bị từ chối. |
| Mật khẩu | Dùng **mật khẩu Personal sẵn có** (bảng `pass`, đã băm HMAC, sai 5 lần khoá 15 phút, 10 phút không dùng tự khoá). Không tạo mật khẩu mới. |
| Giao diện | Làng pixel: người, mèo, chó, cá trong hồ, cây, hoa. Mỗi nhà = 1 chức năng. Nhà to ở giữa = **Town Hall**: khi có việc tới hạn (hôm nay/ngày mai hoặc trễ) mà chưa xong, dân làng kéo về đây, chuông nhấp nháy. Màu pastel; chế độ tối = làng ban đêm có đom đóm. |
| Dữ liệu | Supabase (mỗi nhà mới có file SQL riêng trong `supabase/`, tạo khi làm tới nhà đó). Ảnh/file cần lưu → Google Drive (thư mục riêng từng nhà, tạo khi làm tới). Tài liệu **chỉ để Claude tham khảo** → gửi thẳng cho Claude trong lượt đó, **không lưu** ở đâu. |
| Bảo mật | Không dán key vào chat. Key chỉ điền ở Cloudflare → Settings → Variables and Secrets. `.env`, `.dev.vars` nằm trong `.gitignore`. `.env.example` chỉ có **tên** biến. |

## 2. Các nhà trong làng

| Nhà | Chức năng | Tình trạng |
|---|---|---|
| Work | Quản lý công việc | ✅ dùng **Work có sẵn** |
| Money | Quản lý chi tiêu | ✅ dùng **Expenses có sẵn** |
| Calendar | Lịch, ghi chú ngày, nhắc | ✅ dùng **Calendar có sẵn** |
| Account | Tài khoản/mật khẩu | ✅ dùng **Account có sẵn** |
| Languages | Tiếng Nhật + tiếng Anh | ⏳ |
| Skills | Học kỹ năng mới | ⏳ |
| Law | Cập nhật văn bản pháp luật | ⏳ |
| Food & Gym | Ăn uống + luyện tập | ⏳ |
| Notes | Ghi chú theo lĩnh vực | ⏳ |
| Love | Ảnh + thông tin tình cảm | ⏳ |
| Goals | Mục tiêu + chi phí theo năm | ⏳ |
| Town Hall | Việc sắp tới hạn → (bước 2) chat với AI agent | ✅ phần "tới hạn" |

## 3. ⚠ Những chỗ TRÙNG với chức năng cũ

Nguyên tắc: **dữ liệu cũ giữ nguyên**, nhà mới dùng lại bảng cũ thay vì tạo bảng trùng.

1. **Quản lý công việc ↔ Work** (task, hạn, checklist, bấm giờ, Posts) và **To-do ở Home**. → Nhà Work = Work cũ. Không tạo bảng task mới. AI agent sẽ đọc/ghi thẳng vào `work_tasks`.
2. **Nhắc nhở ↔ Calendar** (loại ghi chú `remind`, `work`, lặp tháng/năm) **+ hạn trong Work + To-do Home**. → Nhắc nhở của agent sẽ lấy từ 3 nguồn này, không tạo bảng "reminder" riêng (trừ khi bạn muốn).
3. **Quản lý chi tiêu ↔ Expenses** (ví, ngân sách, thu nhập, chuyển tiền). → Nhà Money = Expenses cũ.
4. **Mục tiêu + chi phí theo năm ↔ Expenses › Savings goal** (hiện chỉ có 1 mục tiêu tiết kiệm). → Nhà Goals sẽ có bảng `goals` mới (nhiều mục tiêu, theo năm), phần chi phí thực tế **đọc từ Expenses** chứ không nhập lại. Cần bạn chọn: giữ Savings goal cũ trong Expenses, hay chuyển nó sang Goals?
5. **Tình cảm ↔ Calendar mark "Him"** (tim xanh, lặp hằng năm — ngày kỷ niệm). → Nhà Love dùng lại các ngày "Him" làm mốc; ảnh lưu Drive.
6. **Ăn uống ↔ Yakult tracker** (Tools). Trùng nhỏ. → Giữ Yakult ở Tools; Food & Gym làm riêng (bữa ăn, buổi tập). Có thể hiển thị chuỗi Yakult trong nhà này nếu bạn muốn.
7. **Ghi chú ↔ ghi chú theo ngày ở Calendar, ô note ở Account.** → Notes là ghi chú theo **lĩnh vực** (không theo ngày), bảng mới.
8. **Menu Personal trên điện thoại** trước đây hiện 4 tên (Account/Expenses/Work/Calendar) trước khi nhập mật khẩu → **đã bỏ**, giờ chỉ còn nút Personal (đúng yêu cầu "không hiện chữ").
9. **Tên biến**: code đang dùng `SUPABASE_SERVICE_KEY` (không phải `SUPABASE_SERVICE_ROLE_KEY`). → Giữ tên cũ để khỏi phải đổi trên Cloudflare.

## 4. Biến môi trường (chỉ tên)

Điền ở Cloudflare Pages → Settings → Variables and Secrets (Encrypt):

- Đang dùng: `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`, `PERSONAL_SECRET` (⚠ không được đổi — đổi là mất khả năng giải mã Account).
- Bước 2 (đã cần ngay): `ANTHROPIC_API_KEY`
- Bước 3 (thông báo đẩy): `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`, `CRON_SECRET`
- Khi làm nhà có ảnh/file: `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_DRIVE_ROOT_FOLDER_ID`

## 5. Các bước

1. ✅ **Ngôi làng + cổng mật khẩu ẩn** (`frontend/village.js`). 4 nhà nối vào chức năng cũ, 7 nhà "Coming soon", Town Hall gom việc tới hạn.
2. ✅ **Toàn màn hình + 🍅 + AI agent ở Town Hall** (`lib/agent.js`, action `agentChat` trong `functions/api.js`, cần `ANTHROPIC_API_KEY`). Thư viện `@anthropic-ai/sdk` khai báo ở `package.json`.
3. **Thông báo đẩy trên điện thoại** (Web Push): service worker + bảng `push_subscriptions` + lịch chạy định kỳ (Supabase pg_cron gọi `/api` với `CRON_SECRET`) gửi nhắc việc sắp tới hạn. iPhone: phải "Thêm vào MH chính" (iOS 16.4+) mới nhận được.
4. **Law**: lịch chạy hằng ngày, agent tìm văn bản mới (y tế + luật, bộ luật) trên 3 nguồn, lưu bảng `law_docs` (số hiệu, ngày ban hành, hiệu lực, tóm tắt, link), báo qua thông báo đẩy.
5. **Goals**: bảng `goals` (nhiều mục tiêu theo năm + chi phí dự kiến), chi phí thực tế lấy từ Expenses; **chuyển Savings goal cũ sang đây** (giữ nguyên dữ liệu `expense_savings` / `expense_savings_log`).
6. Các nhà còn lại: Languages → Notes → Food & Gym → Love (ảnh lên Drive) → Skills.

## 5b. Giao diện làng 3D

- `src/village3d.js` (three.js) → đóng gói thành `frontend/village3d.js` bằng `npm run build` (file đã build được commit sẵn, Cloudflare không cần build). Sửa cảnh 3D thì sửa `src/village3d.js` rồi chạy lại `npm run build`.
- Xoay (kéo), zoom (lăn chuột / 2 ngón), dời (chuột phải / 2 ngón). Máy tính: bố cục ngang; điện thoại dọc: bố cục dọc riêng (xoay máy là đổi).
- Trời sáng/tối theo **giờ thật** của máy (bình minh ~6h, hoàng hôn ~18h; đêm có sao, đom đóm, đèn đường, cửa sổ sáng). Nút ☼/☾ của web không đổi màu làng nữa. Thử giờ khác: thêm `?hour=22` vào link.
- Góc phải: đồng hồ + thứ/ngày, 🍅, ✮⋆˙.

## 5c. Nhắc việc (thông báo đẩy) — `supabase/push.sql`, `lib/push.js`, `frontend/sw.js`

- **Không cần thêm biến nào**: khoá VAPID do server tự tạo lần đầu, lưu ở `app_settings` (phần bí mật được mã hoá bằng `PERSONAL_SECRET`).
- ⚙ (sau khi nhập mật khẩu): bật/tắt thông báo trên từng máy, gửi thử; giờ nhắc sáng (hôm nay + trễ), tối (ngày mai), nhắc trước N ngày; chọn nguồn Work / Calendar / To-do; ẩn nội dung trên màn hình khoá.
- Supabase `pg_cron` gọi `POST /api {action: runReminders}` 5 phút/lần. Mỗi loại nhắc gửi tối đa 1 lần/ngày (`push_log`), trong vòng 1,5 giờ sau giờ đã đặt.
- iPhone: Safari → Chia sẻ → Thêm vào MH chính → mở từ icon → ⚙ → Turn on.
- ◐ / ☼ / ☾ (sau khi nhập mật khẩu): trời theo giờ thật / luôn ngày / luôn đêm (nhớ trên từng máy).
- Làng: chó mèo né nhà, cây, hồ; bấm chó/mèo → nằm ngủ ~3 giây; bấm hồ → thả mồi, cá bơi tới ăn. Di chuyển: trackpad vuốt 2 ngón / chuột phải kéo / Shift+kéo / phím mũi tên; điện thoại: 2 ngón.

## 6. Đã chốt

1. Agent được tự làm tất cả (hỏi lại trước khi xoá).
2. Nhắc qua thông báo đẩy trên điện thoại.
3. Luật: vbpl.vn, baochinhphu.vn, thuvienphapluat.vn — văn bản QPPL + hướng dẫn lĩnh vực y tế, và tất cả các luật, bộ luật.
4. Savings goal chuyển sang nhà Goals.
5. Thứ tự các nhà: như mục 5.
