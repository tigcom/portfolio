<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Courses', 'Teachers', 'Pricing', 'About']

const heroStats = [
  { v: '10K+', l: 'Courses' },
  { v: '2M+', l: 'Students' },
  { v: '500+', l: 'Instructors' },
]

const courses = [
  { title: 'Web Development Bootcamp', author: 'Sarah Chen', lessons: 48, hours: '24h', students: '12.5K', rating: '4.9', grad: 'linear-gradient(135deg, #667eea, #764ba2)' },
  { title: 'UI/UX Design Mastery', author: 'Mike Johnson', lessons: 36, hours: '18h', students: '8.2K', rating: '4.8', grad: 'linear-gradient(135deg, #fdbcb4, #f97316)' },
  { title: 'Data Science with Python', author: 'Emily Davis', lessons: 52, hours: '30h', students: '15.3K', rating: '4.9', grad: 'linear-gradient(135deg, #43cea2, #185a9d)' },
  { title: 'Mobile App Development', author: 'Alex Kim', lessons: 42, hours: '22h', students: '9.8K', rating: '4.7', grad: 'linear-gradient(135deg, #ff6b6b, #c0392b)' },
]

const whyChoose = [
  { icon: 'clock', color: '#fdbcb4', title: 'Learn at Your Pace', desc: 'Access courses anytime, anywhere. Pause, rewind, and replay lessons as needed.' },
  { icon: 'team', color: '#add8e6', title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience.' },
  { icon: 'check-circle', color: '#22c55e', title: 'Certificates', desc: 'Earn recognized certificates to showcase your new skills.' },
  { icon: 'chat', color: '#fdbcb4', title: 'Community Support', desc: 'Join a community of learners. Ask questions and share knowledge.' },
]

const testimonials = [
  { quote: 'LearnHub helped me transition from marketing to tech. The courses are well-structured and the community is incredibly supportive!', name: 'Jessica Wang', role: 'Software Developer', init: 'J' },
  { quote: 'The UI/UX course was exactly what I needed. I landed my dream job just 3 months after completing it!', name: 'David Miller', role: 'UX Designer', init: 'D' },
  { quote: "Best investment I've made in my career. The Python course gave me practical skills I use every day at work.", name: 'Maria Garcia', role: 'Data Analyst', init: 'M' },
]

const footerCols = [
  { title: 'Courses', links: ['Web Development', 'Design', 'Data Science', 'Mobile Apps', 'Marketing'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'] },
  { title: 'Support', links: ['Help Center', 'Contact', 'Community', 'FAQ'] },
]
</script>

<template>
  <div class="edu">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="chart" :size="16" /></span>
          LearnHub
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#courses">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Log In</a>
          <button class="btn btn-cta">Start Free</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">✨ New: AI-Powered Learning</span>
            <h1>Learn Anything, <span class="accent">Anytime</span>, Anywhere!</h1>
            <p class="hero-sub">Join millions of learners worldwide. Access 10,000+ courses taught by expert instructors.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Start Learning Free</button>
              <button class="btn btn-outline">Browse Courses</button>
            </div>
            <div class="hero-stats">
              <div class="hstat" v-for="s in heroStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>

          <div class="continue-card">
            <div class="cc-top">
              <span class="cc-emoji">📚</span>
              <span class="cc-tag">Web Development</span>
            </div>
            <h3 class="cc-title">Web Development</h3>
            <p class="cc-meta">12 lessons • 4h 30m</p>
            <div class="cc-progress-label"><span>Progress</span><b>65%</b></div>
            <div class="cc-track"><div class="cc-fill"></div></div>
            <button class="btn btn-cta cc-btn">Continue Learning</button>
            <div class="cc-float f1">🎯</div>
            <div class="cc-float f2">⭐</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ POPULAR COURSES ============ -->
    <section class="section" id="courses">
      <div class="container center">
        <span class="eyebrow">Popular Courses</span>
        <h2 class="h2">Explore Top-Rated Courses</h2>
        <p class="sec-sub">Learn from industry experts and gain real-world skills</p>
        <div class="courses">
          <div class="course" v-for="c in courses" :key="c.title">
            <div class="c-cover" :style="{ background: c.grad }"></div>
            <div class="c-body">
              <h3>{{ c.title }}</h3>
              <p class="c-author">by <b>{{ c.author }}</b></p>
              <div class="c-meta">
                <span><b>{{ c.lessons }}</b> lessons</span>
                <span><b>{{ c.hours }}</b></span>
                <span><b>{{ c.students }}</b> students</span>
              </div>
              <div class="c-foot">
                <span class="c-rating"><DemoIcon name="star" :size="14" />{{ c.rating }}</span>
                <span class="c-enroll">Enroll</span>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-outline">View All Courses</button>
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="section section-soft">
      <div class="container center">
        <span class="eyebrow">Why Choose Us</span>
        <h2 class="h2">Everything You Need to Succeed</h2>
        <div class="whys">
          <div class="why" v-for="w in whyChoose" :key="w.title">
            <div class="w-icon" :style="{ backgroundColor: w.color + '40' }"><DemoIcon :name="w.icon" :size="22" /></div>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Student Stories</span>
        <h2 class="h2">What Our Students Say</h2>
        <div class="testimonials">
          <div class="testimonial" v-for="t in testimonials" :key="t.name">
            <p class="t-quote">“{{ t.quote }}”</p>
            <div class="t-author">
              <span class="t-avatar">{{ t.init }}</span>
              <div><b>{{ t.name }}</b><span>{{ t.role }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready to Start Learning?</h2>
        <p>Join over 2 million students and start your learning journey today. First 7 days are completely free!</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Free Trial</button>
          <button class="btn btn-outline">View Pricing</button>
        </div>
        <div class="final-note">
          <span><DemoIcon name="check" :size="14" />No credit card required</span>
          <span><DemoIcon name="check" :size="14" />Cancel anytime</span>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="chart" :size="16" /></span>
              LearnHub
            </a>
            <p>Empowering millions of learners worldwide with quality education accessible to everyone.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 LearnHub. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Privacy</a>
            <a href="javascript:;">Terms</a>
            <a href="javascript:;">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fredoka:wght@500;600;700&display=swap');

.edu {
  --primary: #fdbcb4;
  --secondary: #add8e6;
  --cta: #22c55e;
  --bg: #ffffff;
  --bg-soft: #fff7f5;
  --card: #ffffff;
  --border: #e2e8f0;
  --text: #2d3748;
  --muted: #64748b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.edu h1, .edu h2, .edu h3, .edu h4 {
  font-family: 'Fredoka', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.edu p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 1.15rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 10px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--text); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 14px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(34, 197, 94, 0.28); }
.btn-cta:hover { background: #16a34a; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--cta); color: var(--cta); }
.nav .btn-cta { padding: 9px 20px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-block; padding: 8px 16px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--cta); background: rgba(34, 197, 94, 0.1); }
.hero-copy h1 { font-size: clamp(2.2rem, 4.8vw, 3.5rem); font-weight: 700; line-height: 1.1; margin-bottom: 20px; }
.accent { color: #f97316; }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 32px; }
.hero-stats { display: flex; gap: 40px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.7rem; font-weight: 700; }
.hstat span { font-size: 0.82rem; color: var(--muted); }

/* Continue card */
.continue-card { position: relative; background: var(--card); border: 1px solid var(--border); border-radius: 22px; padding: 28px; box-shadow: 0 30px 60px rgba(45, 55, 72, 0.1); }
.cc-top { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.cc-emoji { font-size: 1.6rem; }
.cc-tag { padding: 5px 12px; border-radius: 999px; background: rgba(253, 188, 180, 0.3); color: #e07b6a; font-size: 0.74rem; font-weight: 600; }
.cc-title { font-size: 1.3rem; font-weight: 600; margin-bottom: 6px; }
.cc-meta { font-size: 0.85rem; color: var(--muted); margin-bottom: 20px; }
.cc-progress-label { display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 8px; }
.cc-progress-label b { color: var(--cta); }
.cc-track { height: 10px; border-radius: 999px; background: #f1f5f9; overflow: hidden; margin-bottom: 22px; }
.cc-fill { width: 65%; height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--primary), var(--cta)); }
.cc-btn { width: 100%; }
.cc-float { position: absolute; font-size: 1.5rem; }
.f1 { top: -16px; right: 20px; }
.f2 { bottom: -14px; left: 24px; }

/* Sections */
.section { padding: 84px 0; }
.section-soft { background: var(--bg-soft); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: #f97316; margin-bottom: 14px; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Courses */
.courses { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; margin-bottom: 40px; }
.course { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
.course:hover { box-shadow: 0 20px 44px rgba(45, 55, 72, 0.12); transform: translateY(-3px); }
.c-cover { height: 110px; }
.c-body { padding: 18px; }
.c-body h3 { font-size: 0.98rem; font-weight: 600; margin-bottom: 6px; line-height: 1.35; }
.c-author { font-size: 0.8rem; color: var(--muted); margin-bottom: 12px; }
.c-author b { color: var(--text); }
.c-meta { display: flex; gap: 10px; flex-wrap: wrap; font-size: 0.74rem; color: var(--muted); margin-bottom: 14px; }
.c-meta b { color: var(--text); }
.c-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid var(--border); }
.c-rating { display: inline-flex; align-items: center; gap: 5px; font-size: 0.82rem; font-weight: 700; color: #f59e0b; }
.c-enroll { padding: 6px 14px; border-radius: 8px; background: var(--cta); color: #fff; font-size: 0.76rem; font-weight: 700; }

/* Why choose */
.whys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; }
.why { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; }
.w-icon { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; margin-bottom: 16px; }
.why h3 { font-size: 1.02rem; font-weight: 600; margin-bottom: 8px; }
.why p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* Testimonials */
.testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.testimonial { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; display: flex; flex-direction: column; }
.t-quote { font-size: 0.92rem; line-height: 1.6; color: var(--text); margin-bottom: 20px; flex: 1; }
.t-author { display: flex; align-items: center; gap: 12px; }
.t-avatar { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; font-weight: 700; }
.t-author b { display: block; font-size: 0.9rem; }
.t-author span { font-size: 0.78rem; color: var(--muted); }

/* Final */
.final { padding: 84px 0; background: var(--bg-soft); }
.final .h2 { margin-bottom: 16px; }
.final > .container > p { max-width: 520px; margin: 0 auto 26px; color: var(--muted); line-height: 1.6; }
.final .hero-cta { justify-content: center; margin-bottom: 20px; }
.final-note { display: flex; justify-content: center; gap: 24px; }
.final-note span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-note svg { color: var(--cta); }

/* Footer */
.footer { background: #fff; border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 280px; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: var(--muted); text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; }
  .courses { grid-template-columns: repeat(2, 1fr); }
  .whys { grid-template-columns: repeat(2, 1fr); }
  .testimonials { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .courses { grid-template-columns: 1fr; }
  .whys { grid-template-columns: 1fr; }
  .hero-stats { gap: 24px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
