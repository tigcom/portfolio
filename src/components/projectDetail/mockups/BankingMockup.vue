<template>
  <div class="banking-mockup" v-reveal>
    <!-- Browser UI Shell -->
    <div class="browser-frame">
      <div class="browser-header">
        <div class="browser-dots">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
        </div>
        <div class="browser-tab">
          <i class="fas fa-shield-alt"></i>
          <span>TigBank - Secure Banking</span>
        </div>
        <div class="browser-address">
          <i class="fas fa-lock"></i>
          <span>https://tigbank.com/dashboard/deposits</span>
        </div>
      </div>

      <div class="browser-content">
        <!-- Main Image from Project Data -->
        <img 
          src="/image/projects/internet-banking/screencapture-localhost-3001-banking-deposits-open-2026-03-30-09_53_05.png" 
          alt="Internet Banking Dashboard" 
          class="mockup-img main-img"
        >
        
        <!-- Floating Elements for depth -->
        <div class="floating-element approval-card" v-reveal data-delay="0.4">
          <img src="/image/projects/internet-banking/screencapture-localhost-3001-banking-approvals-d15db959-a039-4fd0-b02a-450021576d89-2026-03-30-09_51_26.png" alt="Approval Process">
          <div class="element-label">Transaction Approval Workflow</div>
        </div>

        <div class="floating-element login-card" v-reveal data-delay="0.6">
          <img src="/image/projects/internet-banking/screencapture-localhost-3001-login-2026-03-30-09_49_40.png" alt="Secure Login">
          <div class="element-label">Multi-factor Authentication</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const vReveal = {
  mounted(el) {
    const delay = parseFloat(el.dataset.delay || 0)
    // Tích hợp với logic reveal chung nếu cần, 
    // ở đây mockup đã có v-reveal từ component cha nên có thể không cần định nghĩa lại
  }
}
</script>

<style scoped>
.banking-mockup {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  perspective: 1000px;
  padding: 40px 0;
}

.browser-frame {
  background: #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
  transform: rotateX(5deg);
  transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.browser-frame:hover {
  transform: rotateX(0deg) scale(1.01);
}

.browser-header {
  background: #252525;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.browser-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.browser-tab {
  background: #1a1a1a;
  padding: 6px 16px;
  border-radius: 8px 8px 0 0;
  font-size: 11px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: none;
}

.browser-address {
  flex: 1;
  background: #121212;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 400px;
}

.browser-content {
  position: relative;
  background: #000;
  overflow: visible;
}

.mockup-img {
  width: 100%;
  display: block;
}

.floating-element {
  position: absolute;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #1a1a1a;
  transition: transform 0.4s ease;
}

.floating-element img {
  width: 100%;
  display: block;
}

.element-label {
  padding: 8px 12px;
  font-size: 10px;
  color: #00d9ff;
  font-family: var(--font-clash);
  text-transform: uppercase;
  letter-spacing: 1px;
  background: rgba(0, 0, 0, 0.8);
}

.approval-card {
  width: 35%;
  bottom: -30px;
  right: -30px;
  z-index: 2;
}

.login-card {
  width: 30%;
  top: 40px;
  left: -40px;
  z-index: 3;
}

.floating-element:hover {
  transform: translateY(-10px) scale(1.05);
  z-index: 10;
}

@media (max-width: 1024px) {
  .floating-element {
    display: none;
  }
  .browser-frame {
    transform: none !important;
  }
  .banking-mockup {
    padding: 20px 0;
  }
}
</style>
