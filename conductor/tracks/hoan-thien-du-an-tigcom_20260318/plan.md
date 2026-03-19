# Implementation Plan - Hoàn thiện danh mục dự án từ tigcom

Track này tập trung vào việc bổ sung các dự án từ tài khoản GitHub `tigcom` vào Portfolio.

---

## Phase 1: Chuẩn bị Dữ liệu & Mockups
- [x] **Task 1: Cập nhật `src/data/projects.js`**
  - [x] Bổ sung dữ liệu chi tiết cho: Banking System, Motorbike Sales System, Youtube Clone.
  - [x] Soạn thảo nội dung Overview, Problem, Process dựa trên nghiên cứu code.
- [x] **Task 2: Tạo Component Mockup UI cho Banking System**
  - [x] Tạo `src/components/projectDetail/mockups/BankingMockup.vue`.
  - [x] Mô phỏng giao diện Dashboard ngân hàng (Số dư, Chuyển tiền nhanh, Biểu đồ chi tiêu).

## Phase 2: Triển khai Giao diện & Animation
- [x] **Task 3: Tích hợp dữ liệu vào View**
  - [x] Đảm bảo các dự án mới hiển thị đúng trong `ProjectsView` và `ProjectDetailView`.
  - [x] Tích hợp `BankingMockup` vào trang chi tiết dự án tương ứng.
- [x] **Task 4: Cấu hình GSAP cho các dự án mới**
  - [x] Đảm bảo hiệu ứng scroll reveal và counter hoạt động tốt với dữ liệu mới.

## Phase 3: Kiểm thử & Hoàn thiện
- [x] **Task 5: Kiểm tra tính nhất quán (Consistency Check)**
  - [x] Kiểm tra lại toàn bộ danh mục dự án (từ cả 2 tài khoản GitHub).
  - [x] Đảm bảo hình ảnh, màu sắc và font chữ đồng nhất.
- [x] **Task 6: Manual Verification**
  - [x] Kiểm tra responsive trên các thiết bị.
  - [x] Kiểm tra điều hướng logic (Prev/Next project).

---
[checkpoint: pending]
