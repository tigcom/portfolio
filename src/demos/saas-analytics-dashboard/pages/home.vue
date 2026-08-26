<script setup>
import { computed } from 'vue'
import DemoIcon from '../../_kit/DemoIcon.vue'

function toPoints(data) {
  const n = data.length
  const step = 100 / (n - 1 || 1)
  return data.map((v, i) => `${(i * step).toFixed(1)},${(100 - v).toFixed(1)}`).join(' ')
}

// Hero live bar chart — 12 bars, last two highlighted (full green).
const heroBars = [35, 45, 55, 40, 60, 50, 70, 65, 80, 75, 90, 85].map((h, i) => ({
  height: h,
  hot: i >= 10,
}))

const heroMetrics = [
  { label: 'Revenue', value: '+24.5%', hot: true },
  { label: 'Users', value: '8.5K' },
  { label: 'Sources', value: '80%' },
  { label: 'Growth', value: '+32%', hot: true },
]

const stats = [
  { v: '10K+', l: 'Active Users' },
  { v: '99.9%', l: 'Uptime' },
  { v: '50M+', l: 'Data Points' },
]

const features = [
  { icon: 'chart', color: '#0080ff', title: 'Real-time Analytics', desc: 'Get instant insights with live data streaming. Monitor your metrics as they happen.' },
  { icon: 'dash', color: '#8b00ff', title: 'Custom Dashboards', desc: 'Build personalized dashboards with drag-and-drop widgets tailored to your needs.' },
  { icon: 'shield', color: '#22c55e', title: 'Enterprise Security', desc: 'Bank-grade encryption and SOC 2 compliance to keep your data safe and secure.' },
  { icon: 'plug', color: '#0080ff', title: 'API Integration', desc: 'Connect with 100+ tools and services. RESTful API with comprehensive documentation.' },
  { icon: 'team', color: '#8b00ff', title: 'Team Collaboration', desc: 'Share insights, create reports, and collaborate with your team in real-time.' },
  { icon: 'bell', color: '#22c55e', title: 'Smart Alerts', desc: 'Get notified instantly when metrics hit thresholds. Never miss critical changes.' },
]

const overviewStats = [
  { label: 'Total Revenue', value: '$124,592', delta: '+12.5%', up: true },
  { label: 'Active Users', value: '8,549', delta: '+8.2%', up: true },
  { label: 'Conversion Rate', value: '3.24%', delta: '-0.4%', up: false },
  { label: 'Avg. Session', value: '4m 32s', delta: '+15.3%', up: true },
]

const trendSeries = [
  { name: 'Revenue', color: '#0080ff', data: [28, 42, 36, 55, 50, 72] },
  { name: 'Expenses', color: '#8b00ff', data: [20, 30, 26, 38, 34, 46] },
]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const traffic = [
  { label: 'Organic', pct: 45, color: '#0080ff' },
  { label: 'Direct', pct: 30, color: '#22c55e' },
  { label: 'Referral', pct: 25, color: '#8b00ff' },
]
const donutStyle = computed(() => {
  const stops = []
  let acc = 0
  for (const t of traffic) {
    stops.push(`${t.color} ${acc}% ${acc + t.pct}%`)
    acc += t.pct
  }
  return { background: `conic-gradient(${stops.join(', ')})` }
})

const goals = [
  { label: 'Revenue Target', pct: 78, color: '#0080ff' },
  { label: 'New Users', pct: 92, color: '#22c55e' },
  { label: 'Engagement', pct: 65, color: '#8b00ff' },
]

const plans = [
  { name: 'Starter', price: 29, desc: 'Perfect for small teams getting started', feats: ['Up to 5 team members', '10,000 events/month', '7-day data retention', 'Basic analytics', 'Email support'], popular: false },
  { name: 'Professional', price: 79, desc: 'For growing teams with advanced needs', feats: ['Up to 20 team members', '100,000 events/month', '90-day data retention', 'Advanced analytics', 'Custom dashboards', 'API access', 'Priority support'], popular: true },
  { name: 'Enterprise', price: 199, desc: 'For large organizations with custom needs', feats: ['Unlimited team members', 'Unlimited events', 'Unlimited data retention', 'Advanced analytics', 'Custom integrations', 'Dedicated account manager', '24/7 phone support'], popular: false },
]

const logos = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix']

const trust = [
  { icon: 'shield', color: '#0080ff', label: 'SOC 2 Certified', sub: 'Enterprise-grade security' },
  { icon: 'lock', color: '#8b00ff', label: 'GDPR Compliant', sub: 'Data privacy protected' },
  { icon: 'gauge', color: '#22c55e', label: '99.9% Uptime', sub: 'Reliable infrastructure' },
  { icon: 'spark', color: '#0080ff', label: 'Lightning Fast', sub: 'Sub-second response time' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'API', 'Changelog'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Partners'] },
  { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Webinars', 'Templates'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'] },
]
</script>

<template>
  <div class="saas">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-brand">
        <span class="nav-logo"><DemoIcon name="spark" :size="16" /></span>
        DataPulse
      </div>
      <nav class="nav-links">
        <a href="#features">Features</a>
        <a href="#preview">Dashboard</a>
        <a href="#pricing">Pricing</a>
        <a href="#resources">Resources</a>
      </nav>
      <div class="nav-actions">
        <a href="javascript:;" class="nav-signin">Sign In</a>
        <button class="btn btn-cta">Start Free Trial</button>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">
          <DemoIcon name="sync" :size="14" /> Real-time Analytics
        </span>
        <h1>Transform Data Into <span class="grad">Actionable Insights</span></h1>
        <p class="hero-sub">
          Powerful analytics dashboard that helps you understand your business metrics,
          track KPIs, and make data-driven decisions in real-time.
        </p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Free Trial</button>
          <button class="btn btn-outline"><DemoIcon name="play" :size="16" /> Watch Demo</button>
        </div>
        <div class="hero-stats">
          <div class="hstat" v-for="s in stats" :key="s.l">
            <b>{{ s.v }}</b><span>{{ s.l }}</span>
          </div>
        </div>
      </div>

      <!-- Hero live chart card -->
      <div class="hero-card">
        <div class="hc-top">
          <div class="hc-title">Revenue &amp; Users</div>
          <div class="hc-legend">
            <span class="hc-key"><i style="background:#0080ff"></i>Revenue</span>
            <span class="hc-key"><i style="background:#8b00ff"></i>Users</span>
            <span class="hc-key"><i style="background:#22c55e"></i>Growth</span>
          </div>
        </div>
        <div class="hc-bars">
          <div
            v-for="(b, i) in heroBars"
            :key="i"
            class="hc-bar"
            :class="{ hot: b.hot }"
            :style="{ height: b.height + '%' }"
          ></div>
        </div>
        <div class="hc-metrics">
          <div v-for="m in heroMetrics" :key="m.label" class="hc-metric">
            <span class="hc-metric-label">{{ m.label }}</span>
            <b :class="{ hot: m.hot }">{{ m.value }}</b>
          </div>
        </div>
        <div class="hc-foot">
          <span class="hc-live"><i></i> Live Sync</span>
          <span class="hc-active"><i></i> Active now <b>1,247</b></span>
        </div>
        <div class="hc-toast">
          <DemoIcon name="spark" :size="15" />
          <span><b>New milestone!</b> 10K users reached</span>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <span class="eyebrow">Features</span>
      <h2 class="h2">Everything You Need to <span class="grad">Succeed</span></h2>
      <p class="sec-sub">Powerful features designed to help you understand your data and make better decisions.</p>
      <div class="features">
        <div class="feature" v-for="f in features" :key="f.title">
          <div class="f-icon" :style="{ backgroundColor: f.color + '15', color: f.color }">
            <DemoIcon :name="f.icon" :size="22" />
          </div>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- ============ DASHBOARD PREVIEW ============ -->
    <section class="section" id="preview">
      <span class="eyebrow">Dashboard Preview</span>
      <h2 class="h2">Visualize Your Data <span class="grad">Beautifully</span></h2>
      <p class="sec-sub">Interactive charts, customizable widgets, and real-time updates all in one place.</p>

      <div class="preview">
        <div class="pv-head">
          <div>
            <div class="pv-title">Analytics Overview</div>
            <div class="pv-sub">Last 30 days performance</div>
          </div>
          <div class="pv-actions">
            <button class="pv-btn">Export</button>
            <button class="pv-btn pv-btn-solid">Customize</button>
          </div>
        </div>

        <div class="pv-stats">
          <div class="pv-stat" v-for="s in overviewStats" :key="s.label">
            <span class="pv-label">{{ s.label }}</span>
            <span class="pv-value">{{ s.value }}</span>
            <span class="pv-delta" :class="s.up ? 'up' : 'down'">
              <DemoIcon :name="s.up ? 'up' : 'down'" :size="12" /> {{ s.delta }}
            </span>
          </div>
        </div>

        <div class="pv-grid">
          <div class="pv-card">
            <div class="pv-card-head">
              <div class="pv-card-title">Revenue Trend</div>
              <div class="pv-legend">
                <span v-for="s in trendSeries" :key="s.name" class="hc-key"><i :style="{ background: s.color }"></i>{{ s.name }}</span>
              </div>
            </div>
            <svg class="pv-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line v-for="y in [0, 25, 50, 75, 100]" :key="y" :x1="0" :y1="y" :x2="100" :y2="y" class="grid-line" />
              <polygon :points="`0,100 ${toPoints(trendSeries[0].data)} 100,100`" :fill="trendSeries[0].color" opacity="0.1" />
              <polyline :points="toPoints(trendSeries[0].data)" fill="none" :stroke="trendSeries[0].color" stroke-width="2.5" stroke-linecap="round" />
              <polyline :points="toPoints(trendSeries[1].data)" fill="none" :stroke="trendSeries[1].color" stroke-width="2.5" stroke-linecap="round" />
            </svg>
            <div class="pv-x">
              <span v-for="m in months" :key="m">{{ m }}</span>
            </div>
          </div>

          <div class="pv-card">
            <div class="pv-card-title">Traffic Sources</div>
            <div class="pv-donut-wrap">
              <div class="pv-donut" :style="donutStyle"></div>
              <div class="pv-donut-legend">
                <div v-for="t in traffic" :key="t.label" class="pv-donut-row">
                  <i :style="{ background: t.color }"></i>
                  <span>{{ t.label }}</span>
                  <b>{{ t.pct }}%</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pv-card">
          <div class="pv-card-title">Goals Progress</div>
          <div class="pv-goal" v-for="g in goals" :key="g.label">
            <div class="pv-goal-head"><span>{{ g.label }}</span><b>{{ g.pct }}%</b></div>
            <div class="pv-goal-track"><div class="pv-goal-fill" :style="{ width: g.pct + '%', background: g.color }"></div></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section" id="pricing">
      <span class="eyebrow">Pricing</span>
      <h2 class="h2">Simple, Transparent <span class="grad">Pricing</span></h2>
      <p class="sec-sub">Choose the plan that fits your needs. All plans include a 14-day free trial.</p>
      <div class="plans">
        <div class="plan" v-for="p in plans" :key="p.name" :class="{ popular: p.popular }">
          <span v-if="p.popular" class="plan-badge">Most Popular</span>
          <h3>{{ p.name }}</h3>
          <p class="plan-desc">{{ p.desc }}</p>
          <div class="plan-price"><b>${{ p.price }}</b><span>/month</span></div>
          <ul>
            <li v-for="f in p.feats" :key="f"><DemoIcon name="check" :size="15" /> {{ f }}</li>
          </ul>
          <button class="btn" :class="p.popular ? 'btn-cta' : 'btn-outline'">
            {{ p.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial' }}
          </button>
        </div>
      </div>
      <p class="plan-note">30-day money-back guarantee</p>
    </section>

    <!-- ============ TRUST ============ -->
    <section class="section" id="resources">
      <p class="sec-sub">Trusted by 10,000+ companies worldwide</p>
      <div class="logos">
        <div class="logo" v-for="l in logos" :key="l">
          <span class="logo-mark">{{ l[0] }}</span>{{ l }}
        </div>
      </div>
      <div class="trust">
        <div class="trust-card" v-for="t in trust" :key="t.label">
          <div class="t-icon" :style="{ backgroundColor: t.color + '15', color: t.color }">
            <DemoIcon :name="t.icon" :size="20" />
          </div>
          <div>
            <b>{{ t.label }}</b>
            <span>{{ t.sub }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIAL ============ -->
    <section class="section">
      <div class="testimonial">
        <div class="stars">
          <DemoIcon v-for="i in 5" :key="i" name="star" :size="18" />
        </div>
        <p class="quote">
          "DataPulse transformed how we understand our business. The real-time insights
          have helped us increase revenue by 40% in just 6 months."
        </p>
        <div class="author">
          <div class="avatar">SJ</div>
          <div class="author-meta">
            <b>Sarah Johnson</b>
            <span>CEO, TechStart Inc.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <h2>Ready to Transform Your Data?</h2>
      <p>Join thousands of companies using DataPulse to make smarter, data-driven decisions. Start your free trial today.</p>
      <div class="hero-cta">
        <button class="btn btn-cta">Start Free Trial</button>
        <button class="btn btn-outline">Schedule Demo</button>
      </div>
      <p class="final-note">No credit card required • 14-day free trial • Cancel anytime</p>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-brand">
            <span class="nav-logo"><DemoIcon name="spark" :size="16" /></span>
            DataPulse
          </div>
          <p>Transform your data into actionable insights with our powerful analytics platform.</p>
        </div>
        <div class="footer-col" v-for="c in footerCols" :key="c.title">
          <h4>{{ c.title }}</h4>
          <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2024 DataPulse. All rights reserved.</span>
        <div class="footer-legal">
          <a href="javascript:;">Privacy Policy</a>
          <a href="javascript:;">Terms of Service</a>
          <a href="javascript:;">Cookie Settings</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@600;700&display=swap');

.saas {
  --primary: #0080ff;
  --secondary: #8b00ff;
  --cta: #22c55e;
  --text: #0f172a;
  --text-muted: #475569;
  --bg-subtle: #f8fafc;
  --border: #e2e8f0;

  min-height: 100vh;
  background: #ffffff;
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.saas h1, .saas h2, .saas h3, .saas h4 {
  font-family: 'Poppins', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.saas p { margin: 0; }

/* ---------- Nav (floating) ---------- */
.nav {
  position: fixed;
  top: 16px; left: 16px; right: 16px;
  z-index: 100;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 22px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(14px);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.08);
}
.nav-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700; font-size: 1.1rem;
  color: var(--text);
}
.nav-logo {
  width: 30px; height: 30px; border-radius: 9px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #0080ff, #8b00ff);
  color: #fff;
}
.nav-links {
  display: flex; gap: 26px; margin-left: 12px;
}
.nav-links a {
  font-size: 0.9rem; font-weight: 500; color: var(--text-muted);
  text-decoration: none; transition: color 0.15s;
}
.nav-links a:hover { color: var(--text); }
.nav-actions {
  display: flex; align-items: center; gap: 14px; margin-left: auto;
}
.nav-signin {
  font-size: 0.9rem; font-weight: 600; color: var(--text);
  text-decoration: none;
}

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 24px; border-radius: 12px;
  font-size: 0.9rem; font-weight: 700; font-family: inherit;
  border: none; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s, background 0.2s, color 0.2s;
}
.btn:active { transform: translateY(1px); }
.btn-cta {
  background: var(--cta); color: #fff;
  box-shadow: 0 10px 24px rgba(34, 197, 94, 0.28);
}
.btn-cta:hover { background: #1fb354; }
.btn-outline {
  background: transparent; color: var(--primary);
  border: 1.5px solid var(--primary);
}
.btn-outline:hover { background: rgba(0, 128, 255, 0.06); }
.nav .btn-cta { padding: 10px 20px; font-size: 0.85rem; }

/* ---------- Hero ---------- */
.hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 24px 60px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.eyebrow {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 16px; border-radius: 999px;
  font-size: 0.8rem; font-weight: 600;
  color: var(--primary);
  background: rgba(0, 128, 255, 0.1);
}
.hero h1 {
  font-size: clamp(2.3rem, 5vw, 3.75rem);
  font-weight: 700; line-height: 1.08; letter-spacing: -0.02em;
  margin: 22px 0 20px;
}
.grad {
  background: linear-gradient(135deg, #0080ff, #8b00ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.hero-sub {
  max-width: 520px; font-size: 1.06rem; line-height: 1.65;
  color: var(--text-muted); margin-bottom: 28px;
}
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 34px; }
.hero-stats {
  display: flex; gap: 40px;
}
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.9rem; font-weight: 700; letter-spacing: -0.02em; }
.hstat span { font-size: 0.85rem; color: var(--text-muted); }

/* Hero chart card */
.hero-card {
  position: relative;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.1);
}
.hc-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.hc-title { font-weight: 700; font-size: 1rem; }
.hc-legend { display: flex; gap: 14px; }
.hc-key { display: inline-flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--text-muted); }
.hc-key i { width: 9px; height: 9px; border-radius: 3px; }

.hc-bars {
  display: flex; align-items: flex-end; gap: 5px;
  height: 150px; margin-top: 18px;
}
.hc-bar {
  flex: 1; border-radius: 4px 4px 0 0;
  background: rgba(34, 197, 94, 0.28);
  min-height: 4px;
  transition: background 0.2s;
}
.hc-bar.hot { background: var(--cta); }

.hc-metrics {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;
  margin-top: 18px;
}
.hc-metric {
  background: #fff; border: 1px solid var(--border);
  border-radius: 10px; padding: 10px;
  display: flex; flex-direction: column; gap: 3px;
}
.hc-metric-label { font-size: 0.72rem; color: var(--text-muted); }
.hc-metric b { font-size: 0.95rem; font-weight: 700; }
.hc-metric b.hot { color: var(--cta); }

.hc-foot {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 16px;
}
.hc-live {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.75rem; font-weight: 700; color: #16a34a;
  background: #f0fdf4; border: 1px solid #bbf7d0;
  padding: 5px 12px; border-radius: 999px;
}
.hc-live i { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; animation: pulse 1.6s infinite; }
.hc-active { display: inline-flex; align-items: center; gap: 7px; font-size: 0.8rem; color: var(--text-muted); }
.hc-active i { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; }
.hc-active b { color: var(--text); }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

.hc-toast {
  position: absolute; top: 84px; right: -14px;
  display: flex; align-items: center; gap: 8px;
  background: #0f172a; color: #fff;
  padding: 11px 14px; border-radius: 12px;
  font-size: 0.78rem;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.28);
}
.hc-toast svg { color: #22c55e; }
.hc-toast b { font-weight: 700; }

/* ---------- Sections ---------- */
.section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 24px;
  text-align: center;
}
.h2 {
  font-size: clamp(1.6rem, 3.4vw, 2.4rem);
  font-weight: 700; letter-spacing: -0.01em;
  margin: 18px 0 14px;
}
.sec-sub {
  max-width: 560px; margin: 0 auto 36px;
  font-size: 1rem; color: var(--text-muted); line-height: 1.6;
}

/* Features */
.features {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  text-align: left;
}
.feature {
  background: #fff; border: 1px solid var(--border);
  border-radius: 16px; padding: 26px;
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature:hover { box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08); transform: translateY(-3px); }
.f-icon {
  width: 48px; height: 48px; border-radius: 13px;
  display: grid; place-items: center; margin-bottom: 16px;
}
.feature h3 { font-size: 1.06rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.88rem; color: var(--text-muted); line-height: 1.55; }

/* Preview */
.preview {
  text-align: left;
  background: #fff; border: 1px solid var(--border);
  border-radius: 20px; padding: 26px;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
}
.pv-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-bottom: 22px; }
.pv-title { font-size: 1.08rem; font-weight: 700; }
.pv-sub { font-size: 0.8rem; color: var(--text-muted); }
.pv-actions { display: flex; gap: 8px; }
.pv-btn {
  padding: 8px 16px; border-radius: 10px; font-size: 0.82rem; font-weight: 600;
  border: 1px solid var(--border); background: #fff; color: var(--text-muted);
  cursor: pointer; font-family: inherit;
}
.pv-btn-solid { background: var(--primary); border-color: var(--primary); color: #fff; }

.pv-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 20px; }
.pv-stat {
  display: flex; flex-direction: column; gap: 5px;
  padding: 16px; border-radius: 14px;
  background: var(--bg-subtle); border: 1px solid var(--border);
}
.pv-label { font-size: 0.75rem; color: var(--text-muted); }
.pv-value { font-size: 1.35rem; font-weight: 700; letter-spacing: -0.01em; }
.pv-delta { display: inline-flex; align-items: center; gap: 3px; font-size: 0.78rem; font-weight: 700; }
.pv-delta.up { color: #16a34a; }
.pv-delta.down { color: #dc2626; }

.pv-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 18px; margin-bottom: 18px; }
.pv-card {
  border: 1px solid var(--border); border-radius: 14px; padding: 18px;
  background: #fff;
}
.pv-card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
.pv-card-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 12px; }
.pv-legend { display: flex; gap: 14px; }
.pv-svg { height: 190px; margin-top: 6px; }
.grid-line { stroke: rgba(15, 23, 42, 0.07); stroke-width: 0.5; }
.pv-x { display: flex; justify-content: space-between; font-size: 0.72rem; color: var(--text-muted); margin-top: 6px; }

.pv-donut-wrap { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
.pv-donut {
  width: 150px; height: 150px; border-radius: 50%; flex-shrink: 0;
  -webkit-mask: radial-gradient(circle, transparent 0 54%, #000 55% 100%);
  mask: radial-gradient(circle, transparent 0 54%, #000 55% 100%);
}
.pv-donut-legend { display: flex; flex-direction: column; gap: 12px; flex: 1; min-width: 140px; }
.pv-donut-row { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; }
.pv-donut-row i { width: 10px; height: 10px; border-radius: 3px; }
.pv-donut-row span { color: var(--text-muted); }
.pv-donut-row b { margin-left: auto; }

.pv-goal { margin-bottom: 16px; }
.pv-goal:last-child { margin-bottom: 0; }
.pv-goal-head { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 7px; }
.pv-goal-head span { color: var(--text-muted); }
.pv-goal-head b { font-weight: 700; }
.pv-goal-track { height: 9px; border-radius: 999px; background: var(--bg-subtle); border: 1px solid var(--border); overflow: hidden; }
.pv-goal-fill { height: 100%; border-radius: 999px; }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; }
.plan {
  position: relative; text-align: left;
  background: #fff; border: 1px solid var(--border);
  border-radius: 18px; padding: 28px;
  display: flex; flex-direction: column;
}
.plan.popular {
  border: 2px solid var(--primary);
  box-shadow: 0 24px 50px rgba(0, 128, 255, 0.14);
  transform: translateY(-8px);
}
.plan-badge {
  position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
  background: var(--primary); color: #fff;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.02em;
  padding: 6px 15px; border-radius: 999px; white-space: nowrap;
}
.plan h3 { font-size: 1.08rem; font-weight: 600; margin-bottom: 6px; }
.plan-desc { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 18px; }
.plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 20px; }
.plan-price b { font-size: 2.4rem; font-weight: 700; }
.plan-price span { color: var(--text-muted); }
.plan ul { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.plan li { display: flex; align-items: center; gap: 9px; font-size: 0.87rem; color: var(--text-muted); }
.plan li svg { color: #16a34a; flex-shrink: 0; }
.plan .btn { width: 100%; }
.plan-note { margin-top: 24px; font-size: 0.85rem; color: var(--text-muted); }

/* Trust */
.logos {
  display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-bottom: 32px;
}
.logo {
  display: flex; align-items: center; gap: 9px;
  background: #fff; border: 1px solid var(--border);
  padding: 12px 18px; border-radius: 12px;
  font-weight: 700; font-size: 0.9rem; color: var(--text);
}
.logo-mark {
  width: 26px; height: 26px; border-radius: 7px;
  display: grid; place-items: center;
  background: var(--bg-subtle); color: var(--text-muted);
  font-weight: 700; font-size: 0.8rem;
}
.trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.trust-card {
  display: flex; align-items: center; gap: 12px; text-align: left;
  background: #fff; border: 1px solid var(--border);
  padding: 18px; border-radius: 14px;
}
.t-icon {
  width: 42px; height: 42px; flex-shrink: 0;
  display: grid; place-items: center; border-radius: 11px;
}
.trust-card b { display: block; font-size: 0.9rem; font-weight: 600; }
.trust-card span { font-size: 0.76rem; color: var(--text-muted); }

/* Testimonial */
.testimonial {
  max-width: 720px; margin: 0 auto;
  background: #fff; border: 1px solid var(--border);
  border-radius: 18px; padding: 38px;
  box-shadow: 0 24px 50px rgba(15, 23, 42, 0.08);
}
.stars { display: flex; justify-content: center; gap: 4px; color: #f59e0b; margin-bottom: 16px; }
.quote { font-size: 1.15rem; line-height: 1.6; color: #334155; margin-bottom: 24px; }
.author { display: flex; align-items: center; justify-content: center; gap: 12px; }
.avatar {
  width: 46px; height: 46px; border-radius: 50%;
  display: grid; place-items: center;
  background: linear-gradient(135deg, #0080ff, #8b00ff);
  color: #fff; font-weight: 700;
}
.author-meta { text-align: left; }
.author-meta b { display: block; font-size: 0.95rem; }
.author-meta span { font-size: 0.82rem; color: var(--text-muted); }

/* Final CTA */
.final {
  max-width: 760px; margin: 0 auto; text-align: center;
  padding: 70px 24px 80px;
}
.final h2 { font-size: clamp(1.7rem, 3.6vw, 2.5rem); font-weight: 700; margin-bottom: 14px; }
.final p { max-width: 560px; margin: 0 auto 26px; color: var(--text-muted); line-height: 1.6; }
.final-note { font-size: 0.82rem; color: var(--text-muted); margin-top: 20px !important; }

/* Footer */
.footer {
  border-top: 1px solid var(--border);
  background: #fff;
  padding: 56px 24px 32px;
}
.footer-grid {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 32px; text-align: left;
}
.footer-brand p {
  margin-top: 14px; font-size: 0.88rem; color: var(--text-muted);
  line-height: 1.6; max-width: 260px;
}
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a {
  display: block; font-size: 0.85rem; color: var(--text-muted);
  text-decoration: none; margin-bottom: 10px; transition: color 0.15s;
}
.footer-col a:hover { color: var(--text); }
.footer-bottom {
  max-width: 1200px; margin: 40px auto 0;
  padding-top: 22px; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font-size: 0.82rem; color: var(--text-muted);
}
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: var(--text-muted); text-decoration: none; }
.footer-legal a:hover { color: var(--text); }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding-top: 120px; }
  .nav-links { display: none; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .plans { grid-template-columns: 1fr; }
  .plan.popular { transform: none; }
  .trust { grid-template-columns: repeat(2, 1fr); }
  .pv-stats { grid-template-columns: repeat(2, 1fr); }
  .pv-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .trust { grid-template-columns: 1fr; }
  .hc-metrics { grid-template-columns: repeat(2, 1fr); }
  .hc-toast { right: 12px; }
  .hero-stats { gap: 24px; }
}
</style>
