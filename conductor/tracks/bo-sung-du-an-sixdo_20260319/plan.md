# Implementation Plan - Bổ sung dự án Sixdo E-commerce

Track này tập trung vào việc thêm dự án Sixdo từ GitHub `tigcom/cloneSixdo` vào Portfolio.

---

## Phase 1: Cập nhật Dữ liệu (Data Phase)
- [x] **Task 1: Cập nhật `src/data/projects.js`**
  - [x] Thêm đối tượng dự án mới `sixdo-ecommerce` vào mảng `projects`.
  - [x] Điền thông tin chi tiết: `title`, `subtitle`, `techStack`, `overview`, `problem`, `processSteps`.
  - [x] Cập nhật lại số thứ tự (`num`) cho các dự án phía sau (Phong Vu Clone và Youtube Clone).
  - [x] Điều chỉnh `prevSlug` và `nextSlug` của Traveloka Clone và Phong Vu Clone để trỏ đến Sixdo Ecommerce.

## Phase 2: Kiểm thử & Hoàn thiện (Validation Phase)
- [ ] **Task 2: Kiểm tra liên kết dự án**
  - [ ] Đảm bảo nút Prev/Next trong trang chi tiết hoạt động đúng theo thứ tự: Traveloka Clone <-> Sixdo Ecommerce <-> Phong Vu Clone.
  - [ ] Kiểm tra hiển thị đầy đủ các thông tin của dự án mới.

---
[checkpoint: pending]
