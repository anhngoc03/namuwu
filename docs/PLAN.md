# Trợ lý cuộc sống — kế hoạch từng bước

## 1. Yêu cầu (đã làm rõ)

| Mục | Chốt |
|---|---|
| Nơi dùng | Mục **Personal** của web hiện có (Cloudflare Pages + `functions/api.js` + Supabase). Máy tính + điện thoại. |
| Khoá | Bấm Personal → chỉ hiện ngôi làng, **không chữ**, bấm vào cảnh không có gì xảy ra. Nút nhỏ `✮⋆˙` góc phải (rê chuột không hiện chữ) → bảng mật khẩu. Đúng mật khẩu → hiện tên các nhà và mở được chức năng. Bấm `✮⋆˙` lần nữa → khoá lại. |
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
- Bước 2: `ANTHROPIC_API_KEY`
- Khi làm nhà có ảnh/file: `GOOGLE_SERVICE_ACCOUNT_JSON`, `GOOGLE_DRIVE_ROOT_FOLDER_ID`

## 5. Các bước

1. ✅ **Ngôi làng + cổng mật khẩu ẩn** (`frontend/village.js`). 4 nhà nối vào chức năng cũ, 7 nhà "Coming soon", Town Hall gom việc tới hạn.
2. **Town Hall = AI agent (Claude)**: khung chat trong Town Hall; agent đọc Work/Calendar/Expenses, tạo/sửa task, nhắc việc; đính kèm tài liệu chỉ để tham khảo (không lưu). Key chỉ nằm ở server.
3. **Nhắc nhở tự động**: lịch chạy định kỳ (Supabase pg_cron hoặc Cloudflare Worker Cron) + kênh báo (Web Push trên điện thoại / email / Telegram — bạn chọn).
4. Từng nhà một (thứ tự bạn chọn): Languages → Notes → Food & Gym → Goals → Love → Skills → Law.

## 6. Cần bạn trả lời trước bước 2–3

1. Agent được **tự làm** tới đâu: chỉ gợi ý, hay được tự tạo/sửa/xoá task, ghi chi tiêu…?
2. Nhắc nhở gửi qua đâu khi không mở web: thông báo trên điện thoại (Web Push), email, hay Telegram?
3. Pháp luật: theo dõi lĩnh vực nào, nguồn nào (vd. vbpl.vn, thuvienphapluat.vn)? Bao lâu cập nhật 1 lần?
4. Mục 3.4: Savings goal cũ giữ trong Expenses hay chuyển sang Goals?
5. Thứ tự làm các nhà ở bước 4.
