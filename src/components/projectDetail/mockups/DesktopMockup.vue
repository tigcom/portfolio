<template>
  <div class="desktop-mockup" v-reveal>
    <div class="mockup-container">
      <!-- MacBook/Laptop Frame -->
      <div class="laptop-frame">
        <div class="screen">
          <img :src="mainImg" :alt="title" class="screen-img">
        </div>
        <div class="bottom-bar"></div>
      </div>

      <!-- Secondary Screens (Floating) -->
      <div class="floating-screen left" v-if="secondaryImg1" v-reveal data-delay="0.4">
        <img :src="secondaryImg1" alt="Secondary Screen 1">
      </div>
      
      <div class="floating-screen right" v-if="secondaryImg2" v-reveal data-delay="0.6">
        <img :src="secondaryImg2" alt="Secondary Screen 2">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mainImg: String,
  secondaryImg1: String,
  secondaryImg2: String,
  title: String
})
</script>

<style scoped>
.desktop-mockup {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}

.mockup-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
}

.laptop-frame {
  width: 80%;
  position: relative;
  z-index: 2;
}

.screen {
  background: #1a1a1a;
  border-radius: 20px 20px 0 0;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  aspect-ratio: 16/10;
}

.screen-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.bottom-bar {
  height: 20px;
  background: #252525;
  border-radius: 0 0 20px 20px;
  position: relative;
}

.bottom-bar::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.floating-screen {
  position: absolute;
  width: 30%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 3;
  transition: transform 0.4s ease;
}

.floating-screen img {
  width: 100%;
  display: block;
}

.floating-screen.left {
  left: 0;
  bottom: -40px;
  transform: rotate(-5deg);
}

.floating-screen.right {
  right: 0;
  top: -40px;
  transform: rotate(5deg);
}

.floating-screen:hover {
  transform: translateY(-10px) scale(1.05) rotate(0);
  z-index: 10;
}

@media (max-width: 1024px) {
  .floating-screen {
    display: none;
  }
  .laptop-frame {
    width: 100%;
  }
}
</style>
