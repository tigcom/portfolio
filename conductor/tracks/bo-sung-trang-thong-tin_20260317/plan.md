# Implementation Plan - Nâng cấp danh mục dự án & Nội dung thực tế

Track này tập trung vào việc cập nhật nội dung các dự án từ GitHub và cải thiện giao diện theo hướng dẫn chi tiết.

---

## Phase 1: Chuẩn bị Dữ liệu & Mockups (Setup Phase)
Mục tiêu: Cập nhật `src/data/projects.js` và tạo các component mô phỏng giao diện.

- [x] **Task 1: Cập nhật cấu trúc và dữ liệu thực tế cho `src/data/projects.js`**
  - [x] Thêm các dự án: Clean Hub, Xe Ghép Phú Thọ, Election Voting, ZCaro Online.
  - [x] Điền đầy đủ các thông tin: `overview`, `problem`, `techStack`, `role`, `results`, `processSteps`.
  - [x] Sử dụng các mô tả đã trích xuất từ GitHub.
- [x] **Task 2: Tạo Component Mockup UI cho Clean Hub**
  - [x] Tạo `src/components/projectDetail/mockups/CleanHubMockup.vue`.
  - [x] Mô phỏng giao diện Sidebar, TopNav và Dashboard của Clean Hub bằng Vue 3 + Tailwind CSS (dựa trên thiết kế đã nghiên cứu).
- [ ] **Task 3: Tạo Component Mockup UI cho các dự án khác (Nếu cần)**
  - [ ] Cân nhắc mô phỏng các màn hình chính cho Xe Ghép Phú Thọ hoặc ZCaro.

## Phase 2: Nâng cấp Giao diện (UI Phase)
Mục tiêu: Áp dụng định dạng trình bày mới cho Projects Page và Project Detail Page.

- [x] **Task 4: Cập nhật Project Detail View (`src/views/ProjectDetailView.vue`)**
  - [x] Bổ sung các section mới: Tech Strip, Problem Statement, My Process, Key Results.
  - [x] Tích hợp các UI Mockups vào phần Gallery hoặc Overview.
- [x] **Task 5: Cập nhật Projects View (`src/views/ProjectsView.vue`)**
  - [x] Cập nhật danh sách hiển thị với đầy đủ thông tin số thứ tự, năm, tags.

## Phase 3: Animation & Trải nghiệm người dùng (GSAP Phase)
Mục tiêu: Tích hợp GSAP vào các phần mới.

- [x] **Task 6: Implement GSAP Scroll Reveals**
  - [x] Thêm hiệu ứng xuất hiện cho các section mới trong trang Detail.
- [x] **Task 7: Implement Counter Animation cho Results**
  - [x] Sử dụng GSAP để chạy số tự động khi người dùng cuộn đến phần Results.
- [x] **Task 8: Hoàn thiện Hover Image Follower**
  - [x] Đảm bảo hiệu ứng ảnh chạy theo chuột hoạt động mượt mà với dữ liệu mới.

## Phase 4: Kiểm thử & Hoàn thiện (Validation Phase)
Mục tiêu: Đảm bảo 100% độ chính xác và hiệu năng.

- [x] **Task 9: Kiểm tra Responsive**
  - [x] Kiểm tra hiển thị trên Mobile, Tablet, Desktop.
- [x] **Task 10: Kiểm thử TDD & Bug Fix**
  - [x] Viết unit tests cho các logic dữ liệu mới.
  - [x] Khắc phục các lỗi về animation hoặc layout.

---
[checkpoint: pending]
