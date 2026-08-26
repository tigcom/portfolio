<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/portfolio/demos/sales-crm-platform/'

const trustBadges = [
  { icon: 'shield', color: '#10b981', label: 'SOC 2 Certified' },
  { icon: 'star', color: '#f59e0b', label: '4.9/5 on G2' },
  { icon: 'team', color: '#2563eb', label: '10,000+ Teams' },
]

const stats = [
  { v: '35%', l: 'Increase in Close Rate' },
  { v: '50%', l: 'Time Saved on Admin' },
  { v: '2.5x', l: 'Pipeline Visibility' },
  { v: '99.9%', l: 'Uptime SLA' },
]

const stages = [
  { name: 'Lead', count: 24, value: '$120,000', color: '#94A3B8', deals: [
    { n: 'Acme Corp', v: '$15,000', init: 'A' },
    { n: 'TechStart Inc', v: '$8,500', init: 'T' },
  ] },
  { name: 'Qualified', count: 18, value: '$245,000', color: '#3B82F6', deals: [
    { n: 'Global Systems', v: '$45,000', init: 'G' },
    { n: 'DataFlow Ltd', v: '$22,000', init: 'D' },
  ] },
  { name: 'Proposal', count: 12, value: '$380,000', color: '#F59E0B', deals: [
    { n: 'Enterprise Co', v: '$85,000', init: 'E' },
    { n: 'CloudNine', v: '$32,000', init: 'C' },
  ] },
  { name: 'Negotiation', count: 8, value: '$290,000', color: '#8B5CF6', deals: [
    { n: 'MegaCorp', v: '$120,000', init: 'M' },
    { n: 'StartupXYZ', v: '$18,000', init: 'S' },
  ] },
  { name: 'Closed Won', count: 15, value: '$520,000', color: '#10B981', deals: [
    { n: 'Fortune 500', v: '$150,000', init: 'F' },
    { n: 'Scale Inc', v: '$65,000', init: 'S' },
  ] },
]

const miniFeatures = [
  { icon: 'dollar', title: 'Revenue Forecasting', desc: 'AI-powered predictions based on historical data and deal velocity.' },
  { icon: 'check-circle', title: 'Automated Workflows', desc: 'Move deals automatically based on triggers and conditions.' },
  { icon: 'chat', title: 'Team Collaboration', desc: 'Comments, mentions, and real-time updates on every deal.' },
]

const features = [
  { icon: 'user', color: '#2563EB', title: 'Contact Management', desc: 'Centralize all your contacts with complete interaction history, notes, and custom fields. Never lose track of a relationship.' },
  { icon: 'calendar', color: '#10B981', title: 'Smart Scheduling', desc: 'Book meetings without the back-and-forth. Sync with Google Calendar, Outlook, and send automatic reminders.' },
  { icon: 'mail', color: '#F59E0B', title: 'Email Sequences', desc: 'Create automated email campaigns with personalization. Track opens, clicks, and replies in real-time.' },
  { icon: 'bars', color: '#8B5CF6', title: 'Sales Analytics', desc: 'Real-time dashboards with conversion rates, win/loss analysis, and team performance metrics.' },
  { icon: 'clock', color: '#EC4899', title: 'Activity Tracking', desc: 'Log calls, meetings, and tasks automatically. See a complete timeline of every customer interaction.' },
  { icon: 'shield', color: '#06B6D4', title: 'Enterprise Security', desc: 'SOC 2 Type II certified with SSO, role-based access, and audit logs. Your data is always protected.' },
]

const aiPoints = [
  'Auto-enrich contact data from 50+ sources',
  'Smart lead scoring based on engagement',
  'AI-generated email templates',
  'Predictive deal insights',
]

const integrations = [
  { name: 'Salesforce', color: '#00A1E0' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Zoom', color: '#2D8CFF' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Mailchimp', color: '#FFE01B' },
]

const intCats = [
  { name: 'CRM & Sales', count: 45 },
  { name: 'Marketing', count: 38 },
  { name: 'Communication', count: 25 },
  { name: 'Productivity', count: 52 },
]

const companyNames = ['Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel', 'Linear', 'Loom', 'Webflow']

const testimonials = [
  { stat: '+40%', label: 'Close Rate', quote: 'SalesPro transformed how our team works. We\'ve increased our close rate by 40% in just 3 months. The pipeline visibility alone is worth the investment.', name: 'Sarah Chen', role: 'VP of Sales, TechScale Inc', img: 'img-002.jpg' },
  { stat: '10hrs', label: 'Saved Weekly', quote: 'The automation features save our reps 10+ hours per week. No more manual data entry or forgotten follow-ups. It\'s like having an extra team member.', name: 'Michael Rodriguez', role: 'Sales Director, GrowthForce', img: 'img-003.jpg' },
  { stat: 'Day 1', label: 'Productive', quote: 'We evaluated 5 CRMs before choosing SalesPro. The onboarding was seamless, and our team was productive from day one. Best decision we made this year.', name: 'Emily Watson', role: 'Head of Revenue, CloudNine Solutions', img: 'img-004.jpg' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Pipeline', 'Integrations', 'Pricing', 'Security'] },
  { title: 'Resources', links: ['Documentation', 'API Reference', 'Blog', 'Webinars', 'Templates'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Partners', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'GDPR', 'Cookies'] },
]
</script>

<template>
  <div class="crm">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="bars" :size="18" /></span>
          SalesPro
        </a>
        <nav class="nav-links">
          <a href="#features">Features</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#integrations">Integrations</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Start Free Trial</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container center">
        <div class="trust-badges">
          <div class="trust-badge" v-for="b in trustBadges" :key="b.label">
            <DemoIcon :name="b.icon" :size="15" :style="{ color: b.color }" />
            <span>{{ b.label }}</span>
          </div>
        </div>

        <h1>Close More Deals with <span class="accent">Intelligent Sales CRM</span></h1>
        <p class="hero-sub">
          Streamline your sales pipeline, automate follow-ups, and gain actionable insights.
          Everything your team needs to hit quota.
        </p>

        <div class="hero-cta">
          <button class="btn btn-cta">Start 14-Day Free Trial <DemoIcon name="arrow" :size="15" /></button>
          <button class="btn btn-outline"><DemoIcon name="play" :size="15" /> Watch Demo</button>
        </div>
        <p class="hero-note">No credit card required • Setup in 5 minutes</p>

        <div class="hero-shot">
          <img :src="IMG + 'img-000.jpg'" alt="SalesPro Dashboard Preview" loading="lazy" />
        </div>

        <div class="hero-stats">
          <div class="stat" v-for="s in stats" :key="s.l">
            <b>{{ s.v }}</b>
            <span>{{ s.l }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PIPELINE ============ -->
    <section class="section section-alt" id="pipeline">
      <div class="container center">
        <span class="badge">Visual Pipeline</span>
        <h2 class="h2">See Your Entire Pipeline at a Glance</h2>
        <p class="sec-sub">Drag-and-drop deals between stages, track progress, and forecast revenue with confidence.</p>

        <div class="board">
          <div class="stage" v-for="st in stages" :key="st.name">
            <div class="stage-head">
              <span class="stage-title">
                <i class="stage-dot" :style="{ background: st.color }"></i>{{ st.name }}
              </span>
              <span class="stage-count">{{ st.count }}</span>
            </div>
            <div class="stage-value">{{ st.value }}</div>

            <div class="deal" v-for="d in st.deals" :key="d.n">
              <div class="deal-top">
                <span class="deal-avatar" :style="{ background: st.color }">{{ d.init }}</span>
                <div class="deal-meta">
                  <div class="deal-name">{{ d.n }}</div>
                  <div class="deal-value">{{ d.v }}</div>
                </div>
              </div>
              <div class="deal-foot">
                <span class="deal-dots"><i></i><i></i></span>
                <span class="deal-tasks">2 tasks</span>
              </div>
            </div>

            <button class="add-deal"><DemoIcon name="plus" :size="14" /> Add Deal</button>
          </div>
        </div>

        <div class="mini-features">
          <div class="mini-card" v-for="f in miniFeatures" :key="f.title">
            <div class="mini-icon"><DemoIcon :name="f.icon" :size="20" /></div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="badge">Powerful Features</span>
        <h2 class="h2">Everything You Need to Close More Deals</h2>
        <p class="sec-sub">From lead capture to closed-won, SalesPro gives your team the tools to succeed at every stage.</p>

        <div class="features">
          <div class="feature" v-for="f in features" :key="f.title">
            <div class="f-icon" :style="{ backgroundColor: f.color + '15', color: f.color }">
              <DemoIcon :name="f.icon" :size="22" />
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>

        <!-- AI -->
        <div class="ai-card">
          <div class="ai-copy">
            <span class="badge badge-success">AI-Powered</span>
            <h3>Let AI Handle the Busywork</h3>
            <p>Our AI assistant automatically enriches leads, suggests next best actions, and drafts personalized follow-up emails.</p>
            <ul class="ai-list">
              <li v-for="p in aiPoints" :key="p"><DemoIcon name="check" :size="18" />{{ p }}</li>
            </ul>
            <button class="btn btn-primary">Explore AI Features <DemoIcon name="arrow" :size="15" /></button>
          </div>
          <div class="ai-shot">
            <img :src="IMG + 'img-001.jpg'" alt="AI Features Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ INTEGRATIONS ============ -->
    <section class="section section-alt" id="integrations">
      <div class="container center">
        <span class="badge">200+ Integrations</span>
        <h2 class="h2">Connect Your Entire Tech Stack</h2>
        <p class="sec-sub">SalesPro integrates with the tools you already use. Sync data, automate workflows, and work seamlessly.</p>

        <div class="integrations">
          <div class="int-logo" v-for="it in integrations" :key="it.name">
            <span class="int-tile" :style="{ color: it.color, borderColor: it.color + '55' }">{{ it.name[0] }}</span>
            <span class="int-tooltip">{{ it.name }}</span>
          </div>
        </div>

        <div class="int-cats">
          <div class="int-cat" v-for="c in intCats" :key="c.name">
            <b>{{ c.name }}</b>
            <span>{{ c.count }} apps</span>
          </div>
        </div>

        <button class="btn btn-outline">View All Integrations <DemoIcon name="arrow" :size="15" /></button>
      </div>
    </section>

    <!-- ============ CUSTOMER SUCCESS ============ -->
    <section class="section" id="pricing">
      <div class="container center">
        <span class="badge badge-success">Customer Success</span>
        <h2 class="h2">Trusted by 10,000+ Sales Teams</h2>
        <p class="sec-sub">See why leading companies choose SalesPro to power their revenue growth.</p>

        <div class="logos-row">
          <span class="logo-name" v-for="c in companyNames" :key="c">{{ c }}</span>
        </div>

        <div class="testimonials">
          <div class="testimonial" v-for="t in testimonials" :key="t.name">
            <div class="t-stat">
              <b>{{ t.stat }}</b>
              <span>{{ t.label }}</span>
            </div>
            <p class="t-quote">“{{ t.quote }}”</p>
            <div class="t-author">
              <img :src="IMG + t.img" :alt="t.name" class="t-avatar" loading="lazy" />
              <div class="t-meta">
                <b>{{ t.name }}</b>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-outline">Read Customer Stories <DemoIcon name="arrow" :size="15" /></button>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2>Ready to Close More Deals?</h2>
        <p>Join 10,000+ sales teams already using SalesPro to hit their targets. Start your free trial today—no credit card required.</p>
        <div class="final-form">
          <input type="email" placeholder="Enter your work email" />
          <button class="btn btn-cta">Start Free Trial</button>
        </div>
        <div class="final-points">
          <span><DemoIcon name="check" :size="15" />14-day free trial</span>
          <span><DemoIcon name="check" :size="15" />No credit card required</span>
          <span><DemoIcon name="check" :size="15" />Cancel anytime</span>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo nav-logo-outline"><DemoIcon name="bars" :size="18" /></span>
              SalesPro
            </a>
            <p>The modern CRM for high-performing sales teams.</p>
            <div class="social">
              <a href="javascript:;" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              <a href="javascript:;" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg></a>
              <a href="javascript:;" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
            </div>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 SalesPro. All rights reserved.</span>
          <div class="footer-badges">
            <span><DemoIcon name="shield" :size="14" />SOC 2 Type II</span>
            <span><DemoIcon name="shield" :size="14" />GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.crm {
  --primary: #2563eb;
  --cta: #f97316;
  --success: #10b981;
  --warning: #f59e0b;
  --bg: #0b0b10;
  --bg-alt: #121218;
  --bg-muted: #1a1a24;
  --border: #1e293b;
  --text: #f8fafc;
  --muted: #94a3b8;
  --subtle: #64748b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.crm h1, .crm h2, .crm h3, .crm h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.crm p { margin: 0; }
.crm img { display: block; max-width: 100%; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.center { text-align: center; }

/* ---------- Nav ---------- */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(11, 11, 16, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.nav-brand {
  display: flex; align-items: center; gap: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: 1.1rem;
  color: var(--text);
  text-decoration: none;
}
.nav-logo {
  width: 30px; height: 30px; border-radius: 9px;
  display: grid; place-items: center;
  background: var(--primary);
  color: #fff;
}
.nav-logo-outline { background: #fff; color: var(--primary); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a {
  font-size: 0.9rem; font-weight: 500; color: var(--muted);
  text-decoration: none; transition: color 0.15s;
}
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--text); text-decoration: none; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 22px; border-radius: 12px;
  font-size: 0.9rem; font-weight: 700; font-family: inherit;
  border: none; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s, background 0.2s, color 0.2s;
}
.btn:active { transform: translateY(1px); }
.btn-cta {
  background: var(--cta); color: #fff;
  box-shadow: 0 10px 24px rgba(249, 115, 22, 0.28);
}
.btn-cta:hover { background: #ea580c; }
.btn-primary {
  background: var(--primary); color: #fff;
  box-shadow: 0 10px 24px rgba(37, 99, 235, 0.28);
}
.btn-primary:hover { background: #1d4ed8; }
.btn-outline {
  background: transparent; color: var(--text);
  border: 1.5px solid var(--border);
}
.btn-outline:hover { border-color: var(--muted); background: rgba(255, 255, 255, 0.04); }
.nav .btn-cta { padding: 10px 20px; font-size: 0.85rem; }

/* ---------- Hero ---------- */
.hero { padding: 72px 0 0; }
.trust-badges {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 14px;
  margin-bottom: 26px;
}
.trust-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 16px; border-radius: 999px;
  font-size: 0.82rem; font-weight: 600;
  color: var(--text);
  background: var(--bg-alt);
  border: 1px solid var(--border);
}
.hero h1 {
  font-size: clamp(2.3rem, 5vw, 3.75rem);
  font-weight: 700; line-height: 1.08; letter-spacing: -0.02em;
  max-width: 780px; margin: 0 auto 20px;
}
.accent { color: var(--primary); }
.hero-sub {
  max-width: 560px; margin: 0 auto 28px;
  font-size: 1.06rem; line-height: 1.6; color: var(--muted);
}
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 16px; }
.hero-note { font-size: 0.85rem; color: var(--subtle); margin-bottom: 44px; }

.hero-shot {
  max-width: 960px; margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 16px; overflow: hidden;
  background: var(--bg-muted);
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);
}
.hero-shot img { width: 100%; height: auto; }

.hero-stats {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 48px;
  padding: 44px 0 20px;
}
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat b { font-size: 1.9rem; font-weight: 700; letter-spacing: -0.02em; }
.stat span { font-size: 0.85rem; color: var(--muted); }

/* ---------- Sections ---------- */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.badge {
  display: inline-block;
  padding: 7px 16px; border-radius: 999px;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.02em;
  color: var(--primary);
  background: rgba(37, 99, 235, 0.12);
  margin-bottom: 18px;
}
.badge-success { color: var(--success); background: rgba(16, 185, 129, 0.12); }
.h2 {
  font-size: clamp(1.6rem, 3.4vw, 2.4rem);
  font-weight: 700; letter-spacing: -0.01em;
  margin: 0 0 14px;
}
.sec-sub {
  max-width: 560px; margin: 0 auto 48px;
  font-size: 1rem; color: var(--muted); line-height: 1.6;
}

/* ---------- Pipeline board ---------- */
.board {
  display: flex; gap: 16px;
  overflow-x: auto;
  padding-bottom: 12px;
  text-align: left;
  margin-bottom: 48px;
}
.stage {
  flex: 0 0 256px;
  background: var(--bg-muted);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px;
}
.stage-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.stage-title { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; font-size: 0.9rem; }
.stage-dot { width: 10px; height: 10px; border-radius: 50%; }
.stage-count {
  font-size: 0.72rem; color: var(--muted);
  background: var(--bg-alt); padding: 2px 8px; border-radius: 999px;
}
.stage-value { font-size: 0.82rem; color: var(--muted); margin-bottom: 12px; }

.deal {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 11px;
  padding: 12px;
  margin-bottom: 10px;
}
.deal-top { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.deal-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  display: grid; place-items: center;
  color: #fff; font-size: 0.82rem; font-weight: 600; flex-shrink: 0;
}
.deal-name { font-size: 0.86rem; font-weight: 500; }
.deal-value { font-size: 0.76rem; color: var(--muted); }
.deal-foot { display: flex; align-items: center; gap: 8px; }
.deal-dots { display: inline-flex; gap: 3px; }
.deal-dots i {
  width: 16px; height: 16px; border-radius: 50%;
  background: var(--bg-muted); border: 2px solid var(--border);
}
.deal-tasks { font-size: 0.72rem; color: var(--subtle); }

.add-deal {
  width: 100%; padding: 8px;
  font-size: 0.82rem; font-weight: 600; color: var(--muted);
  background: transparent; border: none; border-radius: 8px;
  display: flex; align-items: center; justify-content: center; gap: 6px;
  cursor: pointer; font-family: inherit;
  transition: color 0.15s, background 0.15s;
}
.add-deal:hover { color: var(--primary); background: var(--bg-alt); }

/* Mini features */
.mini-features {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  text-align: left;
}
.mini-card {
  background: var(--bg-muted);
  border: 1px solid var(--border);
  border-radius: 14px; padding: 24px;
  transition: border-color 0.2s;
}
.mini-card:hover { border-color: var(--primary); }
.mini-icon {
  width: 46px; height: 46px; border-radius: 12px;
  display: grid; place-items: center; margin-bottom: 16px;
  background: rgba(37, 99, 235, 0.1); color: var(--primary);
}
.mini-card h3 { font-size: 1.02rem; font-weight: 600; margin-bottom: 8px; }
.mini-card p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* ---------- Features ---------- */
.features {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  text-align: left; margin-bottom: 24px;
}
.feature {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 16px; padding: 26px;
  transition: border-color 0.2s, transform 0.2s;
}
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon {
  width: 48px; height: 48px; border-radius: 13px;
  display: grid; place-items: center; margin-bottom: 16px;
}
.feature h3 { font-size: 1.06rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* ---------- AI card ---------- */
.ai-card {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center;
  text-align: left;
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 20px; padding: 40px;
}
.ai-copy h3 { font-size: 1.6rem; font-weight: 700; margin-bottom: 14px; }
.ai-copy p { color: var(--muted); margin-bottom: 22px; line-height: 1.6; }
.ai-list { list-style: none; margin: 0 0 28px; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.ai-list li { display: flex; align-items: center; gap: 10px; font-size: 0.92rem; }
.ai-list li svg { color: var(--success); flex-shrink: 0; }
.ai-shot { background: var(--bg-muted); border-radius: 14px; padding: 16px; }
.ai-shot img { width: 100%; border-radius: 8px; }

/* ---------- Integrations ---------- */
.integrations {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 20px;
  margin-bottom: 44px;
}
.int-logo { position: relative; }
.int-tile {
  width: 58px; height: 58px; border-radius: 14px;
  display: grid; place-items: center;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem; font-weight: 700;
  background: var(--bg-muted);
  border: 1.5px solid;
}
.int-tooltip {
  position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%);
  font-size: 0.74rem; color: var(--muted); white-space: nowrap;
  opacity: 0; transition: opacity 0.15s; pointer-events: none;
}
.int-logo:hover .int-tooltip { opacity: 1; }

.int-cats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
  max-width: 720px; margin: 0 auto 40px;
}
.int-cat {
  background: var(--bg-muted);
  border: 1px solid var(--border);
  border-radius: 12px; padding: 16px;
  transition: background 0.15s;
}
.int-cat:hover { background: var(--bg-alt); }
.int-cat b { display: block; font-size: 0.92rem; font-weight: 600; margin-bottom: 4px; }
.int-cat span { font-size: 0.8rem; color: var(--muted); }

/* ---------- Customer success ---------- */
.logos-row {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 28px;
  margin-bottom: 48px; opacity: 0.6;
}
.logo-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.15rem; font-weight: 600; color: var(--muted);
}
.testimonials {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
  text-align: left; margin-bottom: 40px;
}
.testimonial {
  background: var(--bg-alt);
  border: 1px solid var(--border);
  border-radius: 16px; padding: 24px;
  display: flex; flex-direction: column;
}
.t-stat {
  display: flex; align-items: center; gap: 10px;
  padding-bottom: 18px; margin-bottom: 18px;
  border-bottom: 1px solid var(--border);
}
.t-stat b { font-size: 1.5rem; font-weight: 700; color: var(--primary); }
.t-stat span { font-size: 0.82rem; color: var(--muted); }
.t-quote { color: var(--text); line-height: 1.6; font-size: 0.92rem; margin-bottom: 20px; flex: 1; }
.t-author { display: flex; align-items: center; gap: 12px; }
.t-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
.t-meta b { display: block; font-size: 0.9rem; font-weight: 600; }
.t-meta span { font-size: 0.78rem; color: var(--muted); }

/* ---------- Final CTA ---------- */
.final { background: var(--primary); padding: 80px 0; }
.final h2 { font-size: clamp(1.7rem, 3.6vw, 2.5rem); font-weight: 700; color: #fff; margin-bottom: 14px; }
.final p { max-width: 560px; margin: 0 auto 28px; color: rgba(255, 255, 255, 0.85); line-height: 1.6; }
.final-form { display: flex; gap: 12px; max-width: 460px; margin: 0 auto 24px; }
.final-form input {
  flex: 1; padding: 13px 16px; border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.22);
  color: #fff; font-family: inherit; font-size: 0.9rem;
}
.final-form input::placeholder { color: rgba(255, 255, 255, 0.5); }
.final-form input:focus { outline: none; border-color: #fff; }
.final-points { display: flex; flex-wrap: wrap; justify-content: center; gap: 24px; }
.final-points span {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.84rem; color: rgba(255, 255, 255, 0.75);
}

/* ---------- Footer ---------- */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid {
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 32px; text-align: left; margin-bottom: 44px;
}
.footer-brand .nav-brand { margin-bottom: 16px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); line-height: 1.6; max-width: 240px; margin-bottom: 20px; }
.social { display: flex; gap: 10px; }
.social a {
  width: 34px; height: 34px; border-radius: 9px;
  display: grid; place-items: center;
  background: rgba(255, 255, 255, 0.08); color: rgba(255, 255, 255, 0.6);
  transition: color 0.15s, background 0.15s;
}
.social a svg { width: 15px; height: 15px; }
.social a:hover { color: #fff; background: rgba(255, 255, 255, 0.16); }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; color: #fff; }
.footer-col a {
  display: block; font-size: 0.85rem; color: var(--muted);
  text-decoration: none; margin-bottom: 10px; transition: color 0.15s;
}
.footer-col a:hover { color: #fff; }
.footer-bottom {
  padding-top: 22px; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font-size: 0.82rem; color: var(--muted);
}
.footer-badges { display: flex; gap: 18px; }
.footer-badges span { display: inline-flex; align-items: center; gap: 7px; }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .mini-features { grid-template-columns: 1fr; }
  .ai-card { grid-template-columns: 1fr; padding: 28px; }
  .testimonials { grid-template-columns: 1fr; }
  .int-cats { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .hero-stats { gap: 28px; }
  .final-form { flex-direction: column; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
