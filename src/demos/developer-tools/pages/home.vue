<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Docs', 'Pricing', 'Blog']

const heroStats = [
  { v: '50K+', l: 'Developers' },
  { v: '1M+', l: 'Downloads' },
  { v: '99.9%', l: 'Uptime' },
]

const features = [
  { icon: 'spark', color: '#39ff14', title: 'AI Autocomplete', desc: 'Context-aware code suggestions powered by machine learning.' },
  { icon: 'team', color: '#0080ff', title: 'Real-time Collab', desc: 'Code together with your team in real-time, anywhere.' },
  { icon: 'sync', color: '#39ff14', title: 'Git Integration', desc: 'Built-in version control with visual diff and merge tools.' },
  { icon: 'zap', color: '#0080ff', title: 'Fast & Lightweight', desc: 'Optimized performance with minimal resource usage.' },
  { icon: 'plug', color: '#39ff14', title: 'Extensions', desc: 'Thousands of extensions to customize your workflow.' },
  { icon: 'globe', color: '#0080ff', title: 'Cloud Sync', desc: 'Sync settings and projects across all your devices.' },
]

const codePoints = [
  'AI-powered autocomplete with 95% accuracy',
  'Real-time error detection and fixes',
  'Smart refactoring suggestions',
  'Inline documentation on hover',
]

const integrations = [
  { icon: 'GH', name: 'GitHub', color: '#ffffff' },
  { icon: 'GL', name: 'GitLab', color: '#fc6d26' },
  { icon: '▲', name: 'Vercel', color: '#ffffff' },
  { icon: 'AWS', name: 'AWS', color: '#ff9900' },
  { icon: '🐳', name: 'Docker', color: '#2496ed' },
  { icon: '#', name: 'Slack', color: '#4A154B' },
  { icon: 'J', name: 'Jira', color: '#0052cc' },
  { icon: 'L', name: 'Linear', color: '#5e6ad2' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
  { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Blog'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
]
</script>

<template>
  <div class="dev">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;"><span class="nav-logo">&lt;/&gt;</span>DevKit</a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Get Started</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container center">
        <span class="badge">v2.0 Now Available</span>
        <h1>Build faster with <span class="accent">modern dev tools</span></h1>
        <p class="hero-sub">A complete toolkit for modern developers. Ship production-ready code faster with intelligent autocomplete, real-time collaboration, and seamless integrations.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Building Free</button>
          <button class="btn btn-outline">View Documentation</button>
        </div>
        <div class="terminal">
          <span class="term-prompt">$</span> npm install @devkit/cli
        </div>
        <div class="hero-stats">
          <div class="hstat" v-for="s in heroStats" :key="s.l">
            <b>{{ s.v }}</b><span>{{ s.l }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="eyebrow">Features</span>
        <h2 class="h2">Everything you need to <span class="accent">ship faster</span></h2>
        <div class="features">
          <div class="feature" v-for="f in features" :key="f.title">
            <div class="f-icon" :style="{ backgroundColor: f.color + '1a', color: f.color }">
              <DemoIcon :name="f.icon" :size="22" />
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CODE PREVIEW ============ -->
    <section class="section section-alt">
      <div class="container">
        <div class="code-grid">
          <div class="code-copy">
            <span class="eyebrow">Code Preview</span>
            <h2 class="h2">Write code <span class="accent">smarter</span></h2>
            <p>Our intelligent code editor understands your codebase and provides context-aware suggestions, helping you write better code faster.</p>
            <ul>
              <li v-for="p in codePoints" :key="p"><DemoIcon name="check" :size="16" />{{ p }}</li>
            </ul>
          </div>
          <div class="code-editor">
            <div class="ce-head">
              <span class="ce-dots"><i></i><i></i><i></i></span>
              <span class="ce-file">app.ts</span>
            </div>
            <pre class="ce-code"><code><span class="k">import</span> { DevKit } <span class="k">from</span> <span class="s">'@devkit/core'</span>;

<span class="k">const</span> app = <span class="k">new</span> <span class="fn">DevKit</span>({
  ai: <span class="k">true</span>,
  collab: <span class="k">true</span>,
  theme: <span class="s">'dark'</span>
});

<span class="cm">// AI suggests: Add error handling</span>
app.start().then(() =&gt; {
  <span class="fn">console</span>.log(<span class="s">'Ready!'</span>);
});</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ INTEGRATIONS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Integrations</span>
        <h2 class="h2">Works with your <span class="accent">favorite tools</span></h2>
        <p class="sec-sub">Seamlessly integrate with the tools you already use and love.</p>
        <div class="integrations">
          <div class="int" v-for="i in integrations" :key="i.name">
            <span class="int-icon" :style="{ color: i.color }">{{ i.icon }}</span>
            {{ i.name }}
          </div>
        </div>
        <a href="javascript:;" class="int-link">View all 50+ integrations <DemoIcon name="arrow" :size="14" /></a>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready to build <span class="accent">faster?</span></h2>
        <p>Join thousands of developers who ship better code with DevKit. Start free, no credit card required.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Get Started Free</button>
          <button class="btn btn-outline">Schedule Demo</button>
        </div>
        <div class="final-note">
          <span><DemoIcon name="check" :size="14" />Free forever plan</span>
          <span><DemoIcon name="check" :size="14" />No credit card</span>
          <span><DemoIcon name="check" :size="14" />Cancel anytime</span>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;"><span class="nav-logo">&lt;/&gt;</span>DevKit</a>
            <p>Modern developer tools for building better software, faster.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 DevKit. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Privacy</a>
            <a href="javascript:;">Terms</a>
            <a href="javascript:;">Status</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=IBM+Plex+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

.dev {
  --primary: #39ff14;
  --secondary: #0080ff;
  --cta: #39ff14;
  --bg: #0d0d0d;
  --bg-alt: #131316;
  --card: #17171a;
  --border: #27272a;
  --text: #e4e4e7;
  --muted: #71717a;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.dev h1, .dev h2, .dev h3, .dev h4 {
  font-family: 'IBM Plex Sans', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.dev p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(13, 13, 13, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'IBM Plex Sans', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { font-family: 'JetBrains Mono', monospace; font-weight: 700; color: var(--primary); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--muted); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 10px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.btn-cta { background: var(--cta); color: #04180a; }
.btn-cta:hover { background: #4bff28; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--primary); color: var(--primary); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 76px 0 56px; }
.badge { display: inline-block; padding: 6px 15px; border-radius: 999px; margin-bottom: 22px; font-size: 0.8rem; font-weight: 600; color: var(--primary); background: rgba(57, 255, 20, 0.08); border: 1px solid rgba(57, 255, 20, 0.2); font-family: 'JetBrains Mono', monospace; }
.hero h1 { font-size: clamp(2.3rem, 5vw, 3.6rem); font-weight: 700; line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 20px; }
.accent { color: var(--primary); }
.hero-sub { max-width: 560px; margin: 0 auto 28px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); }
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 28px; }

.terminal { display: inline-block; margin-bottom: 36px; padding: 14px 22px; border-radius: 10px; background: #0a0a0a; border: 1px solid var(--border); font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; color: var(--text); }
.term-prompt { color: var(--primary); margin-right: 8px; }

.hero-stats { display: flex; justify-content: center; gap: 56px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.9rem; font-weight: 700; color: var(--primary); }
.hstat span { font-size: 0.85rem; color: var(--muted); }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--secondary); margin-bottom: 12px; }
.h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Code preview */
.code-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.code-copy .h2 { margin-bottom: 16px; }
.code-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 24px; }
.code-copy ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.code-copy li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; }
.code-copy li svg { color: var(--primary); flex-shrink: 0; }

.code-editor { background: #0a0a0a; border: 1px solid var(--border); border-radius: 14px; overflow: hidden; }
.ce-head { display: flex; align-items: center; gap: 14px; padding: 12px 16px; border-bottom: 1px solid var(--border); }
.ce-dots { display: flex; gap: 6px; }
.ce-dots i { width: 11px; height: 11px; border-radius: 50%; }
.ce-dots i:nth-child(1) { background: #ff5f57; }
.ce-dots i:nth-child(2) { background: #febc2e; }
.ce-dots i:nth-child(3) { background: #28c840; }
.ce-file { font-family: 'JetBrains Mono', monospace; font-size: 0.78rem; color: var(--muted); }
.ce-code { margin: 0; padding: 20px; overflow-x: auto; font-family: 'JetBrains Mono', monospace; font-size: 0.84rem; line-height: 1.7; color: #d4d4d8; }
.ce-code .k { color: #c084fc; }
.ce-code .s { color: #39ff14; }
.ce-code .fn { color: #38bdf8; }
.ce-code .cm { color: #52525b; }

/* Integrations */
.integrations { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 24px; }
.int { display: inline-flex; align-items: center; gap: 10px; padding: 14px 20px; border-radius: 12px; background: var(--card); border: 1px solid var(--border); font-weight: 600; font-size: 0.9rem; }
.int-icon { font-family: 'JetBrains Mono', monospace; font-weight: 700; font-size: 1.1rem; }
.int-link { display: inline-flex; align-items: center; gap: 6px; color: var(--secondary); font-size: 0.9rem; font-weight: 600; text-decoration: none; }
.int-link:hover { color: var(--primary); }

/* Final */
.final { padding: 84px 0; background: var(--bg-alt); }
.final .h2 { margin-bottom: 16px; }
.final > .container > p { max-width: 520px; margin: 0 auto 26px; color: var(--muted); line-height: 1.6; }
.final .hero-cta { justify-content: center; margin-bottom: 20px; }
.final-note { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.final-note span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-note svg { color: var(--primary); }

/* Footer */
.footer { background: var(--bg); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 260px; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: var(--muted); text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .code-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .hero-stats { gap: 28px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
