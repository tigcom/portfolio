<template>
  <main class="contact-view">

    <!-- Hero -->
    <section class="contact-hero section">
      <div class="container">
        <div class="section-label" ref="labelEl">
          <StarIcon /><span class="shimmer">Get in Touch</span>
        </div>
        <h1 class="contact-title" ref="titleEl">
          <span class="title-word">Let's work</span>
          <span class="title-word hero-highlight">together</span>
        </h1>
        <p class="contact-subtitle" ref="subtitleEl">
          Have a project in mind? I'd love to hear about it. Send me a message and let's start a conversation.
        </p>
        <a href="mailto:khang2611200@gmail.com" class="contact-big-email" ref="emailEl"
          @mousemove="onEmailMouseMove" @mouseleave="onEmailMouseLeave">
          <span class="email-text">khang2611200@gmail.com</span>
          <svg class="email-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
          </svg>
        </a>
      </div>
    </section>

    <!-- Main content -->
    <section class="contact-main-section section">
      <div class="container">
        <div class="contact-grid">

          <!-- Form -->
          <div class="contact-form-wrapper" ref="formWrapperEl">
            <h2>Send a message</h2>
            <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <div class="input-wrapper">
                    <input type="text" id="name" v-model="form.name" placeholder="John Doe" @focus="onFocus" @blur="onBlur">
                    <div class="input-line"></div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <div class="input-wrapper">
                    <input type="email" id="email" v-model="form.email" placeholder="john@example.com" @focus="onFocus" @blur="onBlur">
                    <div class="input-line"></div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <div class="input-wrapper">
                  <input type="text" id="subject" v-model="form.subject" placeholder="Project Collaboration" @focus="onFocus" @blur="onBlur">
                  <div class="input-line"></div>
                </div>
              </div>

              <div class="form-group">
                <label>Type of Inquiry</label>
                <div class="checkbox-group">
                  <label v-for="opt in inquiryOptions" :key="opt.value" class="checkbox-label">
                    <input type="checkbox" :value="opt.value" v-model="form.inquiry">
                    <span class="checkbox-custom"></span>
                    {{ opt.label }}
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <div class="input-wrapper">
                  <textarea id="message" v-model="form.message" rows="5" placeholder="Tell me about your project..." @focus="onFocus" @blur="onBlur"></textarea>
                  <div class="input-line"></div>
                </div>
              </div>

              <button type="submit" class="btn btn-outline btn-submit" :disabled="submitting">
                <span>{{ submitting ? 'Sending...' : 'Send Message' }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </button>

              <Transition name="fade-up">
                <div v-if="submitted" class="form-success">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <span>Message sent! I'll get back to you soon.</span>
                </div>
              </Transition>
            </form>
          </div>

          <!-- Right: Info + FAQ -->
          <div class="contact-info-wrapper" ref="infoWrapperEl">
            <div class="contact-info-card">
              <h3>Contact Info</h3>
              <div class="contact-info-items">
                <div class="contact-info-item" v-for="info in contactInfo" :key="info.label">
                  <div class="contact-info-icon" v-html="info.icon"></div>
                  <div>
                    <span class="contact-info-label">{{ info.label }}</span>
                    <component :is="info.href ? 'a' : 'span'" :href="info.href" class="contact-info-value">{{ info.value }}</component>
                  </div>
                </div>
              </div>
              <div class="contact-socials">
                <a v-for="s in socials" :key="s.label" href="#" class="contact-social-btn"
                  @mousemove="e => onSocialMove(e, s.label)" @mouseleave="e => onSocialLeave(s.label)"
                  :data-social="s.label">
                  <span v-html="s.icon"></span>{{ s.label }}
                </a>
              </div>
            </div>

            <!-- FAQ -->
            <div class="faq-section">
              <div class="section-label" style="margin-bottom:24px">
                <StarIcon /><span class="shimmer">FAQs</span>
              </div>
              <h3>Have Questions?</h3>
              <div class="faq-list">
                <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
                  <button class="faq-header" @click="toggleFaq(i, $event)">
                    <span>{{ faq.q }}</span>
                    <svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                  </button>
                  <div class="faq-body" :ref="el => faqBodies[i] = el">
                    <p>{{ faq.a }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const StarIcon = { template: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>` }

// Form
const form = reactive({ name: '', email: '', subject: '', inquiry: [], message: '' })
const submitting = ref(false)
const submitted = ref(false)

const inquiryOptions = [
  { label: 'Freelance Project', value: 'freelance' },
  { label: 'Full-time Role', value: 'fulltime' },
  { label: 'Collaboration', value: 'collab' },
  { label: 'Other', value: 'other' },
]

async function handleSubmit() {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1500))
  submitting.value = false
  submitted.value = true
  Object.assign(form, { name: '', email: '', subject: '', inquiry: [], message: '' })
}

// Input focus animation
function onFocus(e) {
  const line = e.target.nextElementSibling
  if (line) gsap.to(line, { width: '100%', duration: 0.4, ease: 'power2.out' })
}
function onBlur(e) {
  if (!e.target.value) {
    const line = e.target.nextElementSibling
    if (line) gsap.to(line, { width: '0%', duration: 0.3 })
  }
}

// Email magnetic
const emailEl = ref(null)
function onEmailMouseMove(e) {
  const rect = emailEl.value.getBoundingClientRect()
  const x = (e.clientX - rect.left - rect.width / 2) * 0.2
  const y = (e.clientY - rect.top - rect.height / 2) * 0.3
  gsap.to(emailEl.value, { x, y, duration: 0.4, ease: 'power2.out' })
  gsap.to('.email-arrow', { rotate: 45, duration: 0.3 })
}
function onEmailMouseLeave() {
  gsap.to(emailEl.value, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
  gsap.to('.email-arrow', { rotate: 0, duration: 0.3 })
}

// Social magnetic
function onSocialMove(e, label) {
  const el = document.querySelector(`[data-social="${label}"]`)
  const rect = el.getBoundingClientRect()
  gsap.to(el, {
    x: (e.clientX - rect.left - rect.width / 2) * 0.25,
    y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    duration: 0.3, ease: 'power2.out'
  })
}
function onSocialLeave(label) {
  gsap.to(`[data-social="${label}"]`, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
}

// FAQ
const openFaq = ref(null)
const faqBodies = ref([])
function toggleFaq(i, e) {
  const body = faqBodies.value[i]
  if (!body) return
  if (openFaq.value === i) {
    openFaq.value = null
    gsap.to(body, { maxHeight: 0, duration: 0.4, ease: 'power2.inOut' })
    gsap.to(e.currentTarget.querySelector('.faq-chevron'), { rotation: 0, duration: 0.3 })
  } else {
    if (openFaq.value !== null && faqBodies.value[openFaq.value]) {
      gsap.to(faqBodies.value[openFaq.value], { maxHeight: 0, duration: 0.35 })
    }
    openFaq.value = i
    gsap.to(body, { maxHeight: body.scrollHeight + 40, duration: 0.5, ease: 'power3.out' })
    gsap.to(e.currentTarget.querySelector('.faq-chevron'), { rotation: 180, duration: 0.4 })
  }
}

const faqs = [
  { q: '01. Định hướng phát triển của bạn là gì?', a: "Mình đang tập trung trở thành một Full-Stack Developer chuyên nghiệp, có khả năng xây dựng các hệ thống Backend quy mô lớn (Microservices) và giao diện Frontend tối ưu." },
  { q: '02. Bạn có kinh nghiệm làm việc thực tế chưa?', a: 'Có, mình hiện đang là Java Developer Collaborator tại ngân hàng Kiên Long, tham gia trực tiếp vào các dự án Microservices tài chính thực tế.' },
  { q: '03. Bạn sử dụng Tech Stack nào chính?', a: 'Về Backend mình sử dụng Java Spring Boot, Microservices, Kafka, Redis. Về Frontend mình sử dụng Vue.js, Angular và Tailwind CSS.' },
  { q: '04. Bạn có sẵn sàng cho các cơ hội Full-time?', a: "Chắc chắn rồi! Mình luôn tìm kiếm các cơ hội làm việc Full-time tại các công ty công nghệ chuyên nghiệp để đóng góp và phát triển bản thân." },
]

const contactInfo = [
  { label: 'Email', value: 'khang2611200@gmail.com', href: 'mailto:khang2611200@gmail.com', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>` },
  { label: 'Location', value: 'Binh Thanh, Ho Chi Minh City', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>` },
  { label: 'Phone', value: '0949 468 591', href: 'tel:0949468591', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.79 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>` },
]
const socials = [
  { label: 'LinkedIn', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>` },
  { label: 'GitHub', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>` },
  { label: 'Instagram', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>` },
]

// Refs animation
const labelEl = ref(null), titleEl = ref(null), subtitleEl = ref(null), formWrapperEl = ref(null), infoWrapperEl = ref(null)

onMounted(() => {
  // Init FAQ body heights
  faqBodies.value.forEach(body => { if (body) body.style.maxHeight = '0px'; })

  const tl = gsap.timeline({ delay: 0.05, defaults: { ease: 'power3.out' } })
  tl.fromTo(labelEl.value, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.5 })
  tl.fromTo(titleEl.value.querySelectorAll('.title-word'),
    { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.08, duration: 0.9 }, '<0.1'
  )
  tl.fromTo(subtitleEl.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '<0.2')
  tl.fromTo(emailEl.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '<0.1')

  gsap.from(formWrapperEl.value, {
    scrollTrigger: { trigger: formWrapperEl.value, start: 'top 87%' },
    x: -60, opacity: 0, duration: 0.9, ease: 'power3.out'
  })
  gsap.from(infoWrapperEl.value, {
    scrollTrigger: { trigger: infoWrapperEl.value, start: 'top 87%' },
    x: 60, opacity: 0, duration: 0.9, ease: 'power3.out'
  })
})
</script>

<style scoped>
.contact-hero { padding-top: 140px !important; }
.contact-title {
  font-size: clamp(3.5rem, 8vw, 7rem);
  line-height: 1.0; margin: 16px 0 20px;
}
.title-word { display: block; overflow: hidden; }
.contact-subtitle {
  font-size: 1.1rem; max-width: 520px;
  line-height: 1.8; margin-bottom: 60px;
}
.contact-big-email {
  display: inline-flex; align-items: center; gap: 20px;
  font-family: var(--font-clash);
  font-size: clamp(1.5rem, 4vw, 3rem); font-weight: 500;
  color: var(--text-primary); text-decoration: none;
  border-bottom: 2px solid var(--border); padding-bottom: 16px;
  margin-bottom: 80px;
  transition: color 0.3s, border-color 0.3s, gap 0.4s;
}
.contact-big-email:hover { color: var(--highlight); border-color: var(--highlight); gap: 28px; }
.email-arrow { transition: transform 0.4s; color: var(--text-secondary); flex-shrink: 0; }
.contact-big-email:hover .email-arrow { color: var(--highlight); }
.contact-main-section { padding-top: 0 !important; }
.contact-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: start; }

.contact-form-wrapper h2 { font-size: 1.8rem; margin-bottom: 32px; }
.contact-form { display: flex; flex-direction: column; gap: 24px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group label {
  display: block; font-size: 0.8rem; text-transform: uppercase;
  letter-spacing: 1px; color: var(--text-secondary); margin-bottom: 10px;
}
.input-wrapper { position: relative; }
.input-wrapper input, .input-wrapper textarea {
  width: 100%; background: transparent; border: none;
  border-bottom: 1px solid var(--border); padding: 10px 0;
  font-size: 1rem; color: var(--text-primary);
  font-family: var(--font-satoshi); outline: none; resize: none; box-sizing: border-box;
}
.input-wrapper input::placeholder, .input-wrapper textarea::placeholder {
  color: var(--text-secondary); font-size: 0.9rem;
}
.input-line {
  position: absolute; bottom: 0; left: 0;
  height: 2px; background: var(--highlight); width: 0;
  transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
}

.checkbox-group { display: flex; flex-wrap: wrap; gap: 12px; }
.checkbox-label {
  display: flex; align-items: center; gap: 10px;
  cursor: pointer; font-size: 0.9rem; color: var(--text-secondary);
  transition: color 0.3s; user-select: none;
}
.checkbox-label:hover { color: var(--text-primary); }
.checkbox-label input { display: none; }
.checkbox-custom {
  width: 18px; height: 18px; border: 1.5px solid var(--border);
  border-radius: 4px; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all 0.3s; position: relative;
}
.checkbox-label input:checked ~ .checkbox-custom {
  background: var(--highlight); border-color: var(--highlight);
}
.checkbox-label input:checked ~ .checkbox-custom::after {
  content: ''; position: absolute;
  width: 5px; height: 9px;
  border: 2px solid var(--bg-900); border-top: none; border-left: none;
  transform: rotate(45deg) translate(-1px, -1px);
}

.btn-submit { align-self: flex-start; margin-top: 8px; }
.form-success {
  display: flex; align-items: center; gap: 12px;
  padding: 16px 20px;
  background: rgba(181,255,109,0.08);
  border: 1px solid rgba(181,255,109,0.3);
  border-radius: 12px; color: var(--highlight); font-size: 0.9rem;
}
.fade-up-enter-active { transition: all 0.5s ease; }
.fade-up-enter-from { opacity: 0; transform: translateY(20px); }

.contact-info-wrapper { display: flex; flex-direction: column; gap: 40px; }
.contact-info-card { border: 1px solid var(--border); border-radius: 24px; padding: 32px; }
.contact-info-card h3 { font-size: 1.2rem; margin-bottom: 28px; font-family: var(--font-clash); }
.contact-info-items { display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px; }
.contact-info-item { display: flex; align-items: flex-start; gap: 16px; }
.contact-info-icon {
  width: 40px; height: 40px; border-radius: 10px;
  border: 1px solid var(--border); display: flex;
  align-items: center; justify-content: center;
  flex-shrink: 0; color: var(--highlight);
}
.contact-info-label {
  display: block; font-size: 0.72rem; text-transform: uppercase;
  letter-spacing: 1px; color: var(--text-secondary); margin-bottom: 4px;
}
.contact-info-value {
  font-size: 0.9rem; color: var(--text-primary); font-weight: 500;
  text-decoration: none; transition: color 0.3s;
}
a.contact-info-value:hover { color: var(--highlight); }
.contact-socials { display: flex; gap: 10px; flex-wrap: wrap; }
.contact-social-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 14px; border: 1px solid var(--border);
  border-radius: 100px; font-size: 0.8rem; color: var(--text-secondary);
  text-decoration: none; transition: all 0.3s;
}
.contact-social-btn:hover { border-color: var(--highlight); color: var(--highlight); background: var(--highlight-glow); }

.faq-section h3 { font-size: 1.5rem; margin-bottom: 28px; font-family: var(--font-clash); }
.faq-list { display: flex; flex-direction: column; }
.faq-item { border-top: 1px solid var(--border); }
.faq-item:last-child { border-bottom: 1px solid var(--border); }
.faq-header {
  width: 100%; display: flex; justify-content: space-between;
  align-items: center; padding: 20px 0;
  background: transparent; border: none; cursor: pointer;
  font-family: var(--font-satoshi); font-size: 0.95rem; font-weight: 500;
  color: var(--text-primary); text-align: left; gap: 16px; transition: color 0.3s;
}
.faq-header:hover { color: var(--highlight); }
.faq-chevron { flex-shrink: 0; transition: transform 0.4s, color 0.3s; color: var(--text-secondary); }
.faq-item.open .faq-chevron { color: var(--highlight); }
.faq-body { overflow: hidden; max-height: 0; }
.faq-body p { padding: 0 0 20px; font-size: 0.9rem; line-height: 1.8; }

@media (max-width: 960px) { .contact-grid { grid-template-columns: 1fr; } }
@media (max-width: 600px) { .form-row { grid-template-columns: 1fr; } }
</style>
