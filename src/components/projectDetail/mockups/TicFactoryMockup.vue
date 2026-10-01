<template>
  <div class="tic-mockup-wrapper">
    <!-- Main Browser Frame for Hero (fireshot-008.png) -->
    <div class="tic-hero-frame" @click="openLightbox(0)">
      <div class="browser-header">
        <div class="browser-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="browser-address">
          <i class="fas fa-lock"></i>
          <span>https://ticfactory-demo.vercel.app</span>
        </div>
        <div class="browser-badge">
          <span class="pulse-dot"></span>
          <span>TIC Factory B2B Platform</span>
        </div>
      </div>
      <div class="browser-viewport">
        <img 
          src="/image/projects/renew-ticfactory/fireshot-008.jpg" 
          alt="TIC Factory Hero Home" 
          class="hero-img"
        />
        <div class="overlay-hover-hint">
          <i class="fas fa-expand-alt"></i>
          <span>Phóng to giao diện</span>
        </div>
      </div>
    </div>

    <!-- Section Header -->
    <div class="bento-section-header">
      <div class="section-tag font-mono">01 — KHÔNG GIAN BẢN SẮC & HỒ SƠ DỰ ÁN</div>
      <h3 class="bento-title">Bộ Trình Diễn Giao Diện Nông Sản Công Nghệ Cao</h3>
      <p class="bento-desc">Click vào bất kỳ thẻ phân khu để phóng to ảnh chụp màn hình độ phân giải cao</p>
    </div>

    <!-- Asymmetric Bento Grid (Anti-Slop High-End Layout) -->
    <div class="tic-bento-grid">
      <!-- Item 1: Factory Tech (Large Spanner 8 Cols) -->
      <div class="bento-card col-8" @click="openLightbox(1)">
        <div class="card-inner">
          <div class="card-badge">01 · KỸ THUẬT NHÀ MÁY</div>
          <img src="/image/projects/renew-ticfactory/fireshot-014.jpg" alt="Dây chuyền sản xuất TIC Factory" />
          <div class="card-caption">
            <h4>Dây Chuyền Ép Lạnh & Sấy Thăng Hoa Vô Trùng</h4>
            <p>Trình diễn công nghệ chế biến nông sản đạt chuẩn Dược phẩm — F&B</p>
          </div>
        </div>
      </div>

      <!-- Item 2: Tháp Hồ Sơ 3D (4 Cols) -->
      <div class="bento-card col-4" @click="openLightbox(3)">
        <div class="card-inner">
          <div class="card-badge accent">02 · THÁP HỒ SƠ 3D</div>
          <img src="/image/projects/renew-ticfactory/fireshot-017.jpg" alt="03 — Tháp Hồ Sơ 3D" />
          <div class="card-caption">
            <h4>Hồ Sơ Chứng Từ Kiêm Nghiệm COA</h4>
            <p>Minh bạch chỉ số Beta-Carotene & Lycopene theo từng lô hàng</p>
          </div>
        </div>
      </div>

      <!-- Item 3: Products Catalog (4 Cols) -->
      <div class="bento-card col-4" @click="openLightbox(2)">
        <div class="card-inner">
          <div class="card-badge">03 · SẢN PHẨM B2B</div>
          <img src="/image/projects/renew-ticfactory/fireshot-013.jpg" alt="Danh mục sản phẩm Gấc" />
          <div class="card-caption">
            <h4>Chiết Xuất Gấc & Nông Sản Xuất Khẩu</h4>
            <p>Dầu gấc ép lạnh, bột gấc sấy thăng hoa & puree cấp đông IQF</p>
          </div>
        </div>
      </div>

      <!-- Item 4: OEM / ODM Form (8 Cols) -->
      <div class="bento-card col-8" @click="openLightbox(4)">
        <div class="card-inner">
          <div class="card-badge highlight">04 · TƯ VẤN OEM/ODM</div>
          <img src="/image/projects/renew-ticfactory/fireshot-015.jpg" alt="Form Yêu Cầu Báo Giá OEM/ODM" />
          <div class="card-caption">
            <h4>Yêu Cầu Báo Giá Nguyên Liệu & Gia Công B2B</h4>
            <p>Form tư vấn hợp tác R&D, gửi Sample Kit miễn phí & cam kết NDA bảo mật</p>
          </div>
        </div>
      </div>

      <!-- Item 5: Insights & Agronomy (6 Cols) -->
      <div class="bento-card col-6" @click="openLightbox(5)">
        <div class="card-inner">
          <div class="card-badge">05 · HỒ SƠ NÔNG HỌC</div>
          <img src="/image/projects/renew-ticfactory/fireshot-019.jpg" alt="Góc nhìn chuyên gia & Tin tức" />
          <div class="card-caption">
            <h4>Báo Cáo Nghiên Cứu Dược Tính & Thị Trường</h4>
            <p>Chuyên mục Insights chia sẻ kiến thức chuyên sâu về Lycopene & Carotenoid</p>
          </div>
        </div>
      </div>

      <!-- Item 6: Footer & Logistics (6 Cols) -->
      <div class="bento-card col-6" @click="openLightbox(6)">
        <div class="card-inner">
          <div class="card-badge">06 · HẠ TẦNG NÔNG TRƯỜNG</div>
          <img src="/image/projects/renew-ticfactory/fireshot-018.jpg" alt="Chân trang & Nông trường Tây Ninh" />
          <div class="card-caption">
            <h4>Nông Trường 100+ Hecta Tây Ninh & Chân Trang</h4>
            <p>Hình ảnh thực tế vùng trồng & thông tin liên hệ hợp tác toàn cầu</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal Component -->
    <GalleryLightbox
      :index="lightboxIndex"
      :images="images"
      title="TIC Factory — Showcase"
      @close="closeLightbox"
      @prev="prevImage"
      @next="nextImage"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GalleryLightbox from '../gallery/GalleryLightbox.vue'

const images = [
  "/image/projects/renew-ticfactory/fireshot-008.jpg",
  "/image/projects/renew-ticfactory/fireshot-014.jpg",
  "/image/projects/renew-ticfactory/fireshot-013.jpg",
  "/image/projects/renew-ticfactory/fireshot-017.jpg",
  "/image/projects/renew-ticfactory/fireshot-015.jpg",
  "/image/projects/renew-ticfactory/fireshot-019.jpg",
  "/image/projects/renew-ticfactory/fireshot-018.jpg"
]

const lightboxIndex = ref(null)

const openLightbox = (idx) => {
  lightboxIndex.value = idx
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + images.length) % images.length
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % images.length
}
</script>

<style scoped>
.tic-mockup-wrapper {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px 0 60px;
}

/* ── Hero Browser Frame ────────────────────────────── */
.tic-hero-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: oklch(0.14 0.04 145);
  border: 1px solid oklch(0.35 0.08 145 / 0.4);
  box-shadow: 
    0 0 0 1px oklch(1 0 0 / 0.06),
    0 10px 30px -10px oklch(0 0 0 / 0.4),
    0 30px 70px -20px oklch(0 0 0 / 0.6);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
}

.tic-hero-frame:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 0 0 1px oklch(0.7 0.15 145 / 0.5),
    0 20px 40px -10px oklch(0 0 0 / 0.5),
    0 40px 90px -30px oklch(0 0 0 / 0.7);
}

.browser-header {
  background: oklch(0.18 0.04 145);
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid oklch(1 0 0 / 0.08);
}

.browser-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }

.browser-address {
  background: oklch(0.12 0.03 145);
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.8rem;
  color: oklch(0.85 0.04 145);
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid oklch(1 0 0 / 0.06);
}

.browser-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: oklch(0.78 0.18 145);
  letter-spacing: 0.5px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: oklch(0.75 0.2 145);
  box-shadow: 0 0 8px oklch(0.75 0.2 145);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.browser-viewport {
  position: relative;
  overflow: hidden;
}

.hero-img {
  width: 100%;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.tic-hero-frame:hover .hero-img {
  transform: scale(1.015);
}

.overlay-hover-hint {
  position: absolute;
  inset: 0;
  background: oklch(0.1 0.04 145 / 0.35);
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.tic-hero-frame:hover .overlay-hover-hint {
  opacity: 1;
}

.overlay-hover-hint i {
  font-size: 2rem;
}

/* ── Section Header ────────────────────────────── */
.bento-section-header {
  margin: 60px 0 32px;
  text-align: center;
}

.section-tag {
  font-size: 0.8rem;
  letter-spacing: 2px;
  color: oklch(0.75 0.16 145);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.bento-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: var(--color-text-primary, #fff);
  margin-bottom: 8px;
}

.bento-desc {
  font-size: 0.95rem;
  color: var(--color-text-muted, rgba(255, 255, 255, 0.6));
}

/* ── Asymmetric Bento Grid ────────────────────────────── */
.tic-bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

.bento-card {
  border-radius: 16px;
  overflow: hidden;
  background: oklch(0.16 0.04 145);
  border: 1px solid oklch(1 0 0 / 0.08);
  box-shadow: 
    0 1px 2px -1px oklch(0 0 0 / 0.2),
    0 10px 30px -10px oklch(0 0 0 / 0.4);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.4s ease;
}

.bento-card:hover {
  transform: translateY(-6px);
  border-color: oklch(0.7 0.16 145 / 0.5);
  box-shadow: 
    0 0 0 1px oklch(0.7 0.16 145 / 0.3),
    0 20px 40px -12px oklch(0 0 0 / 0.6);
}

.col-12 { grid-column: span 12; }
.col-8  { grid-column: span 8; }
.col-6  { grid-column: span 6; }
.col-4  { grid-column: span 4; }

.card-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  background: oklch(0.12 0.04 145 / 0.85);
  backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: oklch(0.85 0.1 145);
  border: 1px solid oklch(1 0 0 / 0.12);
}

.card-badge.accent {
  color: oklch(0.8 0.2 60);
  border-color: oklch(0.8 0.2 60 / 0.3);
}

.card-badge.highlight {
  color: oklch(0.85 0.2 145);
  border-color: oklch(0.85 0.2 145 / 0.4);
}

.card-inner img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.col-8 .card-inner img {
  height: 340px;
}

.bento-card:hover .card-inner img {
  transform: scale(1.03);
}

.card-caption {
  padding: 18px 20px;
  background: oklch(0.14 0.04 145);
  border-top: 1px solid oklch(1 0 0 / 0.06);
  flex-grow: 1;
}

.card-caption h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 4px;
}

.card-caption p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  line-height: 1.4;
}

/* ── Responsive ────────────────────────────── */
@media (max-width: 1024px) {
  .col-8, .col-6, .col-4 {
    grid-column: span 12;
  }
  .card-inner img, .col-8 .card-inner img {
    height: 240px;
  }
}
</style>
