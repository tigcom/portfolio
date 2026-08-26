<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Meditation', 'Fitness', 'Sleep']

const heroStats = [
  { v: '2M+', l: 'Active Users' },
  { v: '4.9', l: 'App Rating' },
  { v: '500+', l: 'Meditations' },
]

const features = [
  { icon: 'spark', color: '#87ceeb', title: 'Guided Meditation', desc: '500+ sessions for stress, anxiety, focus, and sleep. From 3 to 45 minutes.' },
  { icon: 'clock', color: '#90ee90', title: 'Sleep Stories', desc: 'Drift off with calming stories narrated by soothing voices.' },
  { icon: 'heart', color: '#87ceeb', title: 'Fitness Tracking', desc: 'Track workouts, steps, and calories. Sync with Apple Health & Google Fit.' },
  { icon: 'chart', color: '#90ee90', title: 'Progress Insights', desc: 'Weekly reports on your meditation streak, sleep quality, and activity.' },
  { icon: 'user', color: '#87ceeb', title: 'Mood Tracking', desc: 'Log your daily mood and discover patterns to improve wellbeing.' },
  { icon: 'team', color: '#90ee90', title: 'Community', desc: 'Join challenges, share progress, and connect with like-minded people.' },
]

const categories = [
  { icon: 'spark', title: 'Meditation', desc: 'Find your calm' },
  { icon: 'clock', title: 'Sleep', desc: 'Rest better' },
  { icon: 'heart', title: 'Fitness', desc: 'Stay active' },
]

const wellnessPoints = ['Personalized daily plans', 'Offline mode for meditation', 'Apple Watch & Wear OS support', 'Family sharing (up to 6 members)']

const testimonials = [
  { quote: 'Serenity has transformed my morning routine. The guided meditations are perfect for starting my day with clarity.', name: 'Sarah M.', role: 'Yoga Instructor', init: 'S' },
  { quote: 'As someone with a stressful job, this app has been a lifesaver. My sleep quality improved within the first week.', name: 'James L.', role: 'Software Engineer', init: 'J' },
  { quote: 'The sleep stories are amazing! They help me unwind after long days. Highly recommend to anyone struggling with sleep.', name: 'Emily R.', role: 'New Mom', init: 'E' },
]

const platforms = ['App Store', 'Google Play', 'Apple Watch', 'Wear OS']

const footerCols = [
  { title: 'App', links: ['Features', 'Pricing', 'Download', 'Reviews'] },
  { title: 'Resources', links: ['Blog', 'Help Center', 'Community', 'Meditation Guide'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
]
</script>

<template>
  <div class="well">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="spark" :size="16" /></span>
          Serenity
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-cta">Download Free</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">#1 Wellness App 2024</span>
            <h1>Find Your <span class="accent">Inner Peace</span></h1>
            <p class="hero-sub">Meditation, fitness tracking, and sleep analysis all in one beautiful app. Start your wellness journey today.</p>
            <div class="hero-cta">
              <button class="btn btn-cta"><DemoIcon name="apple" :size="17" /> App Store</button>
              <button class="btn btn-outline"><DemoIcon name="play" :size="16" /> Google Play</button>
            </div>
            <div class="hero-stats">
              <div class="hstat" v-for="s in heroStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>

          <div class="phone-wrap">
            <div class="phone">
              <div class="phone-status"><span>9:41</span><span class="ph-icons">▮▮ ▮</span></div>
              <div class="ph-label">Today's Session</div>
              <div class="ph-session">
                <div class="ph-ring">
                  <span><b>15:00</b>Morning Calm</span>
                </div>
              </div>
              <div class="ph-progress"><span class="ph-pill">75% Complete</span></div>
              <button class="ph-start">Start Session</button>
              <div class="ph-streak"><DemoIcon name="spark" :size="15" /> 7 Day Streak!</div>
              <div class="ph-sleep">Sleep Score: <b>92</b></div>
            </div>
            <div class="glow g1"></div>
            <div class="glow g2"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="eyebrow">Everything for Your <b>Wellness</b></span>
        <p class="sec-sub">A complete toolkit for meditation, fitness, and better sleep—all in one beautiful app.</p>
        <div class="features">
          <div class="feature" v-for="f in features" :key="f.title">
            <div class="f-icon" :style="{ backgroundColor: f.color + '30', color: '#2d3748' }">
              <DemoIcon :name="f.icon" :size="22" />
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CATEGORIES ============ -->
    <section class="section section-soft">
      <div class="container center">
        <div class="categories">
          <div class="category" v-for="c in categories" :key="c.title">
            <div class="c-icon"><DemoIcon :name="c.icon" :size="26" /></div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ COMPLETE WELLNESS ============ -->
    <section class="section">
      <div class="container">
        <div class="wellness">
          <div class="w-copy">
            <span class="eyebrow">One App for <b>Complete Wellness</b></span>
            <h2 class="h2">Everything You Need to Thrive</h2>
            <p>Whether you want to reduce stress, sleep better, or stay fit—Serenity has you covered with personalized programs designed by experts.</p>
            <ul>
              <li v-for="p in wellnessPoints" :key="p"><DemoIcon name="check" :size="16" />{{ p }}</li>
            </ul>
          </div>
          <div class="w-visual">
            <div class="wv-ring"><span>92</span><i>Sleep Score</i></div>
            <div class="wv-badge b1"><DemoIcon name="heart" :size="16" /> Calm</div>
            <div class="wv-badge b2"><DemoIcon name="spark" :size="16" /> Mindful</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section section-soft">
      <div class="container center">
        <span class="eyebrow">Loved by <b>Millions</b></span>
        <h2 class="h2">Join over 2 million people who have found their calm</h2>
        <div class="testimonials">
          <div class="testimonial" v-for="t in testimonials" :key="t.name">
            <p class="t-quote">“{{ t.quote }}”</p>
            <div class="t-author">
              <span class="t-avatar">{{ t.init }}</span>
              <div><b>{{ t.name }}</b><span>{{ t.role }}</span></div>
            </div>
          </div>
        </div>
        <div class="platforms">
          <span v-for="p in platforms" :key="p">{{ p }}</span>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Start Your Journey <span class="accent">Today</span></h2>
        <p>Download Serenity for free and get 7 days of premium access. No credit card required.</p>
        <div class="hero-cta">
          <button class="btn btn-cta"><DemoIcon name="apple" :size="17" /> Download for iOS</button>
          <button class="btn btn-outline"><DemoIcon name="play" :size="16" /> Download for Android</button>
        </div>
        <p class="final-note">Free forever plan available • Premium from $9.99/month</p>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="spark" :size="16" /></span>
              Serenity
            </a>
            <p>Your companion for meditation, better sleep, and a healthier life.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 Serenity. All rights reserved.</span>
          <span>Made with <i class="heart">♥</i> for your wellness</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lora:wght@500;600;700&display=swap');

.well {
  --primary: #87ceeb;
  --secondary: #90ee90;
  --cta: #22c55e;
  --bg: #f5f5f5;
  --bg-soft: #eef7f3;
  --card: #ffffff;
  --border: #e2e8f0;
  --text: #2d3748;
  --muted: #718096;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.well h1, .well h2, .well h3, .well h4 {
  font-family: 'Lora', 'DM Sans', Georgia, serif;
  margin: 0;
}
.well p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(245, 245, 245, 0.9); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Lora', serif; font-weight: 700; font-size: 1.15rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--cta)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 999px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(34, 197, 94, 0.28); }
.btn-cta:hover { background: #16a34a; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--cta); color: var(--cta); }
.nav .btn-cta { padding: 9px 20px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-block; padding: 7px 16px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 700; color: var(--cta); background: rgba(34, 197, 94, 0.1); }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.6rem); font-weight: 700; line-height: 1.1; margin-bottom: 20px; }
.accent { color: var(--cta); }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 30px; }
.hero-stats { display: flex; gap: 40px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.7rem; font-weight: 700; }
.hstat span { font-size: 0.82rem; color: var(--muted); }

/* Phone */
.phone-wrap { position: relative; display: flex; justify-content: center; }
.glow { position: absolute; width: 260px; height: 260px; border-radius: 50%; filter: blur(110px); }
.g1 { top: -20px; left: 0; background: var(--primary); opacity: 0.5; }
.g2 { bottom: -20px; right: 0; background: var(--secondary); opacity: 0.4; }
.phone { position: relative; z-index: 2; width: 300px; border-radius: 34px; background: #fff; border: 1px solid var(--border); padding: 16px 18px 22px; box-shadow: 0 40px 90px rgba(45, 55, 72, 0.18); }
.phone-status { display: flex; align-items: center; justify-content: space-between; font-size: 0.72rem; color: var(--muted); padding: 2px 4px 14px; }
.ph-icons { letter-spacing: 1px; }
.ph-label { font-size: 0.8rem; color: var(--muted); margin-bottom: 12px; }
.ph-session { display: flex; justify-content: center; margin-bottom: 14px; }
.ph-ring { width: 150px; height: 150px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--cta) 0 75%, #e2e8f0 75% 100%); }
.ph-ring::before { content: ''; grid-area: 1/1; width: 126px; height: 126px; border-radius: 50%; background: #fff; }
.ph-ring span { grid-area: 1/1; text-align: center; display: flex; flex-direction: column; gap: 2px; }
.ph-ring b { font-size: 1.7rem; font-weight: 700; }
.ph-ring span { font-size: 0.74rem; color: var(--muted); }
.ph-progress { text-align: center; margin-bottom: 14px; }
.ph-pill { display: inline-block; padding: 5px 14px; border-radius: 999px; background: rgba(34, 197, 94, 0.12); color: var(--cta); font-size: 0.78rem; font-weight: 700; }
.ph-start { width: 100%; padding: 13px; border-radius: 999px; background: var(--cta); color: #fff; border: none; font-size: 0.9rem; font-weight: 700; cursor: pointer; font-family: inherit; margin-bottom: 16px; }
.ph-streak { display: flex; align-items: center; gap: 7px; justify-content: center; font-size: 0.82rem; font-weight: 600; color: #f59e0b; margin-bottom: 10px; }
.ph-sleep { text-align: center; font-size: 0.82rem; color: var(--muted); }
.ph-sleep b { color: var(--cta); font-size: 1rem; }

/* Sections */
.section { padding: 84px 0; }
.section-soft { background: var(--bg-soft); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 14px; }
.eyebrow b { color: var(--text); }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; margin: 0 0 16px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
.feature:hover { border-color: var(--cta); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Categories */
.categories { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.category { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 30px; }
.c-icon { width: 54px; height: 54px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, rgba(135,206,235,0.3), rgba(34,197,94,0.2)); color: var(--text); margin-bottom: 16px; }
.category h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 6px; }
.category p { font-size: 0.88rem; color: var(--muted); }

/* Wellness */
.wellness { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.w-copy .h2 { margin-bottom: 16px; }
.w-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 24px; }
.w-copy ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.w-copy li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; }
.w-copy li svg { color: var(--cta); flex-shrink: 0; }
.w-visual { position: relative; display: flex; justify-content: center; padding: 40px 0; }
.wv-ring { width: 200px; height: 200px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--cta) 0 92%, #e2e8f0 92% 100%); }
.wv-ring::before { content: ''; grid-area: 1/1; width: 170px; height: 170px; border-radius: 50%; background: #fff; }
.wv-ring span { grid-area: 1/1; font-size: 2.6rem; font-weight: 700; }
.wv-ring i { grid-area: 1/1; align-self: end; transform: translateY(-40px); font-style: normal; font-size: 0.8rem; color: var(--muted); }
.wv-badge { position: absolute; display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 999px; background: #fff; border: 1px solid var(--border); font-size: 0.8rem; font-weight: 600; box-shadow: 0 8px 20px rgba(0,0,0,0.06); }
.b1 { top: 10px; left: 10%; color: #22c55e; }
.b2 { bottom: 10px; right: 10%; color: #87ceeb; }

/* Testimonials */
.testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; margin-bottom: 40px; }
.testimonial { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 28px; display: flex; flex-direction: column; }
.t-quote { font-size: 0.92rem; line-height: 1.6; color: var(--text); margin-bottom: 20px; flex: 1; }
.t-author { display: flex; align-items: center; gap: 12px; }
.t-avatar { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--cta)); color: #fff; font-weight: 700; }
.t-author b { display: block; font-size: 0.9rem; }
.t-author span { font-size: 0.78rem; color: var(--muted); }
.platforms { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
.platforms span { padding: 10px 20px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); font-size: 0.84rem; font-weight: 600; }

/* Final */
.final { padding: 84px 0; }
.final .h2 { margin-bottom: 16px; }
.final > .container > p { max-width: 520px; margin: 0 auto 26px; color: var(--muted); line-height: 1.6; }
.final .hero-cta { justify-content: center; margin-bottom: 20px; }
.final-note { font-size: 0.85rem; color: var(--muted); }

/* Footer */
.footer { background: var(--card); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 260px; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }
.heart { color: #ef4444; font-style: normal; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid, .wellness { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .categories { grid-template-columns: 1fr; }
  .testimonials { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
