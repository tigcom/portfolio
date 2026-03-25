# Implementation Plan: Rebuild Project Detail Page

## Phase 1: Setup & Data Structure
- [ ] Task: Mở khóa Routing cho Project Detail
    - [ ] Tìm và gỡ bỏ biến tạm khóa (boolean toggle) đang ngăn router tới `/project/:id`.
    - [ ] Kiểm tra router configuration trong `src/main.js` hoặc `src/router/index.js` (nếu có).
- [ ] Task: Chuẩn hóa Dữ liệu Dự án
    - [ ] Cập nhật `src/data/projects.js` hoặc `projects.json` để bổ sung các trường: `functionalities` (array), `techStack` (array), và `images` (array các object ảnh với metadata).
    - [ ] Chuẩn bị bộ nội dung mẫu (Placeholder) cho các dự án để phục vụ phát triển.
- [ ] Task: Conductor - User Manual Verification 'Phase 1' (Protocol in workflow.md)

## Phase 2: Core Page Construction (TDD)
- [ ] Task: Xây dựng cấu trúc Layout theo Storytelling
    - [ ] Viết test cho component `ProjectDetailView`.
    - [ ] Triển khai khung HTML/CSS (Vue 3) cho trang Detail (Hero, Intro, Gallery, Content).
    - [ ] Áp dụng Tỷ lệ Vàng (1.618) cho các khoảng cách padding/margin.
- [ ] Task: Tích hợp Dữ liệu Động
    - [ ] Viết test cho việc load dữ liệu từ ID trên URL.
    - [ ] Triển khai logic lấy dự án hiện tại dựa trên route params và hiển thị lên UI.
- [ ] Task: Conductor - User Manual Verification 'Phase 2' (Protocol in workflow.md)

## Phase 3: GSAP Visuals & Transitions (TDD/Visual)
- [ ] Task: Triển khai Page Transition (FLIP)
    - [ ] Viết test cho trạng thái chuyển đổi (nếu có thể tự động) hoặc mockup logic.
    - [ ] Sử dụng GSAP FLIP để tạo hiệu ứng chuyển cảnh từ trang danh sách vào trang chi tiết.
- [ ] Task: ScrollTrigger Reveals & Text Staggering
    - [ ] Viết test cho các class kích hoạt hiệu ứng.
    - [ ] Triển khai hiệu ứng hiện ảnh/khối khi cuộn tới.
    - [ ] Triển khai hiệu ứng stagger cho text mô tả.
- [ ] Task: Conductor - User Manual Verification 'Phase 3' (Protocol in workflow.md)

## Phase 4: Final Polish & Mobile Optimization
- [ ] Task: Tối ưu Responsive & Tương tác Mobile
    - [ ] Kiểm tra và điều chỉnh layout trên kích thước màn hình nhỏ.
    - [ ] Đảm bảo các hiệu ứng GSAP không gây giật lag trên mobile.
- [ ] Task: Kiểm tra Chất lượng Tổng thể (Quality Gate)
    - [ ] Đạt >80% code coverage cho code mới.
    - [ ] Không còn lỗi linting.
- [ ] Task: Conductor - User Manual Verification 'Phase 4' (Protocol in workflow.md)
