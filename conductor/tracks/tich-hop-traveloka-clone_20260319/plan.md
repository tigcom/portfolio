# Implementation Plan - Tích hợp Dự án Traveloka Clone (DATN)

Track này sẽ thay thế dự án "Xe Ghép Phú Thọ" tại vị trí số 2 bằng thông tin dự án thực tế "Traveloka Clone".

---

## Phase 1: Chuẩn bị Dữ liệu & Cấu trúc (Setup Phase)
- [ ] **Task 1: Cập nhật `src/data/projects.js`**
  - [ ] Thay đổi thông tin của project `xe-ghep-phu-tho` thành `traveloka-clone`.
  - [ ] Điền dữ liệu thực tế: `title: "Traveloka Clone"`, `subtitle: "Travel Super App"`, `category: "development"`.
  - [ ] Cập nhật Tech Stack: `['Java Spring Boot', 'Microservices', 'Vue 3', 'Docker', 'JWT']`.
  - [ ] Soạn thảo nội dung `overview`, `problem`, `processSteps` dựa trên GitHub DATN.
- [ ] **Task 2: Cập nhật hình ảnh & Link**
  - [ ] Sử dụng placeholder images chất lượng cao liên quan đến du lịch/vé máy bay.
  - [ ] Cập nhật `githubLink: "https://github.com/thanhlam2802/DATN"`.

## Phase 2: Phát triển Mockup Interactive (UI Phase)
- [ ] **Task 3: Xây dựng Mockup UI cho Traveloka Clone**
  - [ ] Tạo `src/components/projectDetail/mockups/TravelokaMockup.vue`.
  - [ ] Mô phỏng giao diện tìm kiếm chuyến bay (Flight Search Dashboard).
  - [ ] Mô phỏng quy trình đặt vé và thanh toán tour du lịch.
- [ ] **Task 4: Tích hợp Mockup vào trang chi tiết**
  - [ ] Đảm bảo `ProjectDetailView.vue` tự động nhận và hiển thị Mockup mới cho dự án này.

## Phase 3: Animation & Trải nghiệm (GSAP Phase)
- [ ] **Task 5: Thiết lập Animation GSAP cho Mockup**
  - [ ] Tạo hiệu ứng "Searching" cho vé máy bay.
  - [ ] Tạo hiệu ứng chuyển đổi mượt mà giữa các phân hệ (Flights, Tours, Hotels).

## Phase 4: Kiểm thử & Hoàn thiện (Validation Phase)
- [ ] **Task 6: Kiểm tra Responsive & Navigation**
  - [ ] Đảm bảo thanh điều hướng Prev/Next trong trang chi tiết cập nhật đúng tên dự án mới.
  - [ ] Kiểm tra hiển thị tốt trên tất cả kích thước màn hình.

---
[checkpoint: pending]
