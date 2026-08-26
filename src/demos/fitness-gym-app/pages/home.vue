<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/portfolio/demos/fitness-gym-app/'

const navLinks = ['Workouts', 'Trainers', 'Pricing', 'Community']

const heroStats = [
  { v: '500K+', l: 'Active Members' },
  { v: '1000+', l: 'Workouts' },
  { v: '50+', l: 'Expert Trainers' },
]

const workoutSteps = [
  { name: 'Warm Up', time: '5 min' },
  { name: 'Circuit 1', time: '15 min' },
  { name: 'Circuit 2', time: '15 min' },
  { name: 'Cool Down', time: '5 min' },
]

const workouts = [
  { level: 'Intermediate', name: 'HIIT Cardio', time: '30 min', cal: '400', img: 'img-001.jpg' },
  { level: 'Advanced', name: 'Strength Training', time: '45 min', cal: '350', img: 'img-003.jpg' },
  { level: 'Beginner', name: 'Yoga Flow', time: '40 min', cal: '200', img: 'img-004.jpg' },
  { level: 'Intermediate', name: 'Boxing', time: '35 min', cal: '450', img: null },
]

const features = [
  { icon: 'zap', color: '#ff6b35', title: 'AI Personal Trainer', desc: 'Get personalized workout plans and real-time form corrections powered by AI.' },
  { icon: 'chart', color: '#0080ff', title: 'Progress Tracking', desc: 'Track your workouts, calories, and body metrics with detailed analytics.' },
  { icon: 'team', color: '#ff6b35', title: 'Live Classes', desc: 'Join live workout sessions with trainers and workout alongside the community.' },
  { icon: 'heart', color: '#0080ff', title: 'Nutrition Plans', desc: 'Custom meal plans and macro tracking to complement your fitness goals.' },
]

const trainers = [
  { name: 'Alex Rivera', role: 'HIIT & Cardio', exp: '8 years', img: 'img-005.jpg' },
  { name: 'Sarah Chen', role: 'Yoga & Pilates', exp: '10 years', img: 'img-006.jpg' },
  { name: 'Marcus Johnson', role: 'Strength Training', exp: '12 years', img: 'img-007.jpg' },
  { name: 'Emma Wilson', role: 'Boxing & MMA', exp: '6 years', img: null },
]

const plans = [
  { name: 'Basic', price: 9.99, desc: 'Perfect for getting started', feats: ['Access to 100+ workouts', 'Basic progress tracking', 'Community access', 'Email support'], popular: false },
  { name: 'Pro', price: 19.99, desc: 'Most popular choice', feats: ['Access to 500+ workouts', 'AI personal trainer', 'Advanced analytics', 'Live classes', 'Nutrition plans', 'Priority support'], popular: true },
  { name: 'Elite', price: 39.99, desc: 'For serious athletes', feats: ['Everything in Pro', '1-on-1 trainer sessions', 'Custom workout plans', 'Body composition tracking', 'Exclusive content', '24/7 support'], popular: false },
]

const footerCols = [
  { title: 'Workouts', links: ['HIIT', 'Strength', 'Yoga', 'Boxing', 'Cardio'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
  { title: 'Support', links: ['Help Center', 'Contact', 'FAQ', 'Community'] },
]
</script>

<template>
  <div class="fit">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">PULSE<span>FIT</span></a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#workouts">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Log In</a>
          <button class="btn btn-cta">Start Free Trial</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="hero-bg"><img :src="IMG + 'img-000.jpg'" alt="" /><div class="hero-overlay"></div></div>
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">New: AI-Powered Training</span>
            <h1>Transform <span class="outline">Your Body</span><br />Your Life</h1>
            <p class="hero-sub">Join thousands achieving their fitness goals with personalized workouts, expert trainers, and a supportive community. Start your transformation today.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Start 7-Day Free Trial</button>
              <button class="btn btn-outline"><DemoIcon name="play" :size="16" /> Watch Demo</button>
            </div>
            <div class="hero-stats">
              <div class="hstat" v-for="s in heroStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>

          <div class="workout-card">
            <div class="wc-head">
              <span class="wc-tag">Today's Workout</span>
              <span class="wc-icon"><DemoIcon name="zap" :size="16" /></span>
            </div>
            <h3>HIIT Training</h3>
            <div class="wc-steps">
              <div class="wc-step" v-for="s in workoutSteps" :key="s.name">
                <span class="ws-dot"></span>
                <span class="ws-name">{{ s.name }}</span>
                <span class="ws-time">{{ s.time }}</span>
              </div>
            </div>
            <div class="wc-progress">
              <div class="wc-label"><span>50% Complete</span></div>
              <div class="wc-track"><div class="wc-fill"></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ WORKOUTS ============ -->
    <section class="section" id="workouts">
      <div class="container">
        <div class="sec-head">
          <div>
            <span class="eyebrow">Workouts</span>
            <h2 class="h2">Popular Programs</h2>
          </div>
          <button class="btn btn-outline">View All Workouts</button>
        </div>
        <div class="workouts">
          <div class="workout" v-for="w in workouts" :key="w.name">
            <div class="w-img" :class="{ placeholder: !w.img }">
              <img v-if="w.img" :src="IMG + w.img" :alt="w.name" loading="lazy" />
              <span v-else class="w-ph"><DemoIcon name="zap" :size="26" /></span>
              <span class="w-level">{{ w.level }}</span>
            </div>
            <div class="w-body">
              <h3>{{ w.name }}</h3>
              <div class="w-meta"><span><DemoIcon name="clock" :size="13" />{{ w.time }}</span><span><DemoIcon name="zap" :size="13" />{{ w.cal }} cal</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section section-alt">
      <div class="container center">
        <span class="eyebrow">Features</span>
        <h2 class="h2">Everything You <span class="accent">Need</span></h2>
        <div class="features">
          <div class="feature" v-for="f in features" :key="f.title">
            <div class="f-icon" :style="{ backgroundColor: f.color + '1f', color: f.color }">
              <DemoIcon :name="f.icon" :size="22" />
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TRAINERS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Our Team</span>
        <h2 class="h2">Expert <span class="accent">Trainers</span></h2>
        <p class="sec-sub">Learn from certified professionals who are passionate about helping you achieve your goals.</p>
        <div class="trainers">
          <div class="trainer" v-for="t in trainers" :key="t.name">
            <div class="t-img" :class="{ placeholder: !t.img }">
              <img v-if="t.img" :src="IMG + t.img" :alt="t.name" loading="lazy" />
              <span v-else class="t-ph">{{ t.name[0] }}</span>
            </div>
            <h3>{{ t.name }}</h3>
            <p class="t-role">{{ t.role }}</p>
            <p class="t-exp">{{ t.exp }} <span>experience</span></p>
            <button class="btn btn-outline">View Profile</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section section-alt" id="pricing">
      <div class="container center">
        <span class="eyebrow">Pricing</span>
        <h2 class="h2">Choose Your <span class="accent">Plan</span></h2>
        <p class="sec-sub">Start with a 7-day free trial. Cancel anytime.</p>
        <div class="plans">
          <div class="plan" v-for="p in plans" :key="p.name" :class="{ popular: p.popular }">
            <span v-if="p.popular" class="plan-badge">Most Popular</span>
            <h3>{{ p.name }}</h3>
            <p class="plan-desc">{{ p.desc }}</p>
            <div class="plan-price"><b>${{ p.price }}</b><span>/month</span></div>
            <ul>
              <li v-for="f in p.feats" :key="f"><DemoIcon name="check" :size="15" />{{ f }}</li>
            </ul>
            <button class="btn" :class="p.popular ? 'btn-cta' : 'btn-outline'">Start Free Trial</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">PULSE<span>FIT</span></a>
            <p>Transform your body and life with personalized workouts, expert trainers, and a supportive community.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 PulseFit. All rights reserved.</span>
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
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;700&display=swap');

.fit {
  --primary: #ff6b35;
  --secondary: #0080ff;
  --cta: #ff6b35;
  --bg: #0a0a0a;
  --bg-alt: #121214;
  --card: #161618;
  --border: #262626;
  --text: #ffffff;
  --muted: #9ca3af;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.fit h1, .fit h2, .fit h3, .fit h4 {
  font-family: 'Barlow Condensed', 'DM Sans', system-ui, sans-serif;
  margin: 0;
  text-transform: uppercase;
}
.fit p { margin: 0; }
.fit img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(10, 10, 10, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1.4rem; letter-spacing: 0.04em; color: var(--text); text-decoration: none; }
.nav-brand span { color: var(--primary); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 600; letter-spacing: 0.02em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--muted); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 8px; font-size: 0.88rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s; text-transform: uppercase; letter-spacing: 0.04em; }
.btn-cta { background: var(--cta); color: #fff; }
.btn-cta:hover { background: #e8551f; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--primary); color: var(--primary); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.82rem; }

/* Hero */
.hero { position: relative; padding: 80px 0 64px; }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; opacity: 0.28; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.95)); }
.hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.badge { display: inline-block; padding: 7px 16px; border-radius: 6px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 700; color: var(--primary); background: rgba(255, 107, 53, 0.12); text-transform: uppercase; letter-spacing: 0.05em; }
.hero-copy h1 { font-size: clamp(3rem, 7vw, 5rem); font-weight: 800; line-height: 0.95; letter-spacing: -0.01em; margin-bottom: 22px; }
.outline { color: transparent; -webkit-text-stroke: 2px var(--primary); }
.hero-sub { max-width: 480px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 32px; }
.hero-stats { display: flex; gap: 40px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-family: 'Barlow Condensed', sans-serif; font-size: 1.9rem; font-weight: 700; color: var(--primary); }
.hstat span { font-size: 0.8rem; color: var(--muted); }

/* Workout card */
.workout-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; }
.wc-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
.wc-tag { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--secondary); }
.wc-icon { width: 34px; height: 34px; border-radius: 8px; display: grid; place-items: center; background: rgba(255, 107, 53, 0.14); color: var(--primary); }
.workout-card h3 { font-size: 1.6rem; font-weight: 700; margin-bottom: 20px; }
.wc-steps { display: flex; flex-direction: column; gap: 12px; margin-bottom: 22px; }
.wc-step { display: flex; align-items: center; gap: 12px; }
.ws-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--primary); }
.ws-name { flex: 1; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; text-transform: none; }
.ws-time { font-size: 0.82rem; color: var(--muted); }
.wc-label { font-size: 0.78rem; color: var(--muted); margin-bottom: 8px; }
.wc-track { height: 8px; border-radius: 999px; background: var(--border); overflow: hidden; }
.wc-fill { width: 50%; height: 100%; border-radius: 999px; background: linear-gradient(90deg, var(--primary), var(--secondary)); }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--primary); margin-bottom: 12px; }
.h2 { font-size: clamp(2rem, 4.5vw, 3rem); font-weight: 800; letter-spacing: 0.01em; margin: 0 0 14px; }
.accent { color: var(--primary); }
.sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Workouts */
.workouts { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.workout { background: var(--card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: border-color 0.2s, transform 0.2s; }
.workout:hover { border-color: var(--primary); transform: translateY(-3px); }
.w-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.w-img img { width: 100%; height: 100%; object-fit: cover; }
.w-img.placeholder { display: grid; place-items: center; background: linear-gradient(135deg, #ff6b35, #0080ff); }
.w-ph { color: #fff; }
.w-level { position: absolute; top: 12px; left: 12px; padding: 4px 10px; border-radius: 6px; background: rgba(0,0,0,0.7); color: #fff; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.w-body { padding: 16px; }
.w-body h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 10px; }
.w-meta { display: flex; gap: 16px; font-size: 0.8rem; color: var(--muted); }
.w-meta span { display: inline-flex; align-items: center; gap: 5px; }
.w-meta svg { color: var(--primary); }

/* Features */
.features { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 26px; }
.f-icon { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; }
.feature p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* Trainers */
.trainers { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.trainer { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; }
.t-img { width: 100%; aspect-ratio: 1/1; border-radius: 12px; overflow: hidden; margin-bottom: 16px; }
.t-img img { width: 100%; height: 100%; object-fit: cover; }
.t-img.placeholder { display: grid; place-items: center; background: linear-gradient(135deg, #ff6b35, #0080ff); }
.t-ph { font-size: 2.4rem; font-weight: 800; color: #fff; }
.trainer h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; }
.t-role { font-size: 0.82rem; color: var(--muted); margin-bottom: 8px; text-transform: uppercase; }
.t-exp { font-size: 0.88rem; font-weight: 700; color: var(--primary); margin-bottom: 16px; }
.t-exp span { font-weight: 400; color: var(--muted); font-size: 0.8rem; }
.trainer .btn { width: 100%; }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; text-align: left; }
.plan { position: relative; display: flex; flex-direction: column; background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 28px; }
.plan.popular { border: 2px solid var(--primary); }
.plan-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 5px 14px; border-radius: 6px; white-space: nowrap; text-transform: uppercase; letter-spacing: 0.05em; }
.plan h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 6px; }
.plan-desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 16px; }
.plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 18px; }
.plan-price b { font-size: 2.4rem; font-weight: 800; }
.plan-price span { color: var(--muted); }
.plan ul { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.plan li { display: flex; align-items: center; gap: 9px; font-size: 0.85rem; color: var(--muted); }
.plan li svg { color: var(--primary); flex-shrink: 0; }
.plan .btn { width: 100%; }

/* Footer */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 280px; line-height: 1.6; }
.footer-col h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.04em; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: var(--muted); text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; }
  .workouts { grid-template-columns: repeat(2, 1fr); }
  .features { grid-template-columns: repeat(2, 1fr); }
  .trainers { grid-template-columns: repeat(2, 1fr); }
  .plans { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .workouts { grid-template-columns: 1fr; }
  .features { grid-template-columns: 1fr; }
  .trainers { grid-template-columns: 1fr; }
  .hero-stats { gap: 24px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
