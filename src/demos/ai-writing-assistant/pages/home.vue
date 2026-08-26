<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Use Cases', 'Integrations', 'Pricing']

const pressLogos = ['TechCrunch', 'Forbes', 'Wired', 'The Verge']

const features = [
  { icon: 'zap', color: '#7c3aed', title: 'Lightning Fast', desc: 'Generate high-quality content in seconds, not hours. Our AI understands context and delivers instantly.' },
  { icon: 'shield', color: '#06b6d4', title: 'Plagiarism Free', desc: 'Every piece of content is 100% original. Built-in plagiarism checker ensures your work is unique.' },
  { icon: 'globe', color: '#7c3aed', title: '30+ Languages', desc: 'Write in any language or translate seamlessly. Perfect for global teams and multilingual content.' },
  { icon: 'user', color: '#06b6d4', title: 'Custom Tone', desc: 'Match your brand voice perfectly. Train the AI to write in your unique style and tone.' },
  { icon: 'search', color: '#7c3aed', title: 'SEO Optimized', desc: 'Content that ranks. Built-in SEO suggestions help your content perform better in search.' },
  { icon: 'lock', color: '#06b6d4', title: 'Enterprise Security', desc: 'Your data stays yours. SOC 2 compliant with end-to-end encryption and zero data retention.' },
]

const useCases = [
  { icon: 'bag', title: 'Marketing Copy', desc: 'Create compelling ad copy, landing pages, and marketing emails that convert.' },
  { icon: 'chart', title: 'Blog & Articles', desc: 'Generate SEO-optimized blog posts, articles, and long-form content effortlessly.' },
  { icon: 'heart', title: 'Social Media', desc: 'Craft engaging social media posts that drive engagement and grow your audience.' },
  { icon: 'mail', title: 'Email Writing', desc: 'Write professional emails, cold outreach, and follow-ups that get responses.' },
]

const integrations = [
  { name: 'Google Docs', color: '#4285F4' },
  { name: 'Notion', color: '#000000' },
  { name: 'Slack', color: '#4A154B' },
  { name: 'WordPress', color: '#21759b' },
  { name: 'Chrome', color: '#4285F4' },
  { name: 'VS Code', color: '#007ACC' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Zapier', color: '#FF4A00' },
]

const plans = [
  { name: 'Free', price: 0, period: 'forever', desc: 'Perfect for trying out WriteAI', feats: ['5,000 words/month', 'Basic writing templates', 'Chrome extension', 'Email support'], popular: false, cta: 'Get Started' },
  { name: 'Pro', price: 19, period: '/month', desc: 'For professionals and creators', feats: ['Unlimited words', '50+ premium templates', 'All integrations', 'Custom tone training', 'Priority support', 'API access'], popular: true, cta: 'Start Free Trial' },
  { name: 'Team', price: 49, period: '/user/month', desc: 'For teams and businesses', feats: ['Everything in Pro', 'Team collaboration', 'Admin dashboard', 'SSO & SAML', 'Dedicated account manager', 'Custom integrations'], popular: false, cta: 'Contact Sales' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Use Cases', 'Integrations', 'Pricing', 'Changelog'] },
  { title: 'Resources', links: ['Documentation', 'API Reference', 'Blog', 'Templates', 'Community'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]
</script>

<template>
  <div class="wai">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="zap" :size="16" /></span>
          WriteAI
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Start Writing</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge"><DemoIcon name="spark" :size="14" /> Powered by Advanced AI</span>
            <h1>Write Better, <span class="grad">Faster</span></h1>
            <p class="hero-sub">Your AI writing companion that helps you create compelling content in seconds. From emails to essays, let AI handle the heavy lifting.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Start Writing Free</button>
              <button class="btn btn-outline"><DemoIcon name="play" :size="16" /> Watch Demo</button>
            </div>
          </div>

          <div class="editor">
            <div class="ed-head">
              <span class="ed-dots"><i></i><i></i><i></i></span>
              <span class="ed-title">WriteAI Editor</span>
            </div>
            <div class="ed-tabs"><span class="active">AI Writing</span><span>Your prompt</span><span>AI Generated</span></div>
            <p class="ed-text">Introducing the EcoFlow Water Bottle — your perfect companion for sustainable hydration. Crafted from premium recycled stainless steel, this sleek 24oz bottle keeps your drinks ice-cold for 24 hours or piping hot for 12.</p>
            <div class="ed-foot">
              <span class="ed-model">✨ K</span>
              <span class="ed-words">47 words</span>
              <div class="ed-actions">
                <button class="ed-copy"><DemoIcon name="check" :size="14" /> Copy</button>
                <button class="ed-regen"><DemoIcon name="sync" :size="14" /> Regenerate</button>
              </div>
            </div>
          </div>
        </div>

        <div class="press">
          <span class="press-label">Trusted by 100,000+ writers worldwide</span>
          <div class="press-logos">
            <span v-for="l in pressLogos" :key="l">{{ l }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="eyebrow">Features</span>
        <h2 class="h2">Everything You Need to Write <span class="grad">Brilliantly</span></h2>
        <p class="sec-sub">Powerful AI writing tools designed to help you create better content, faster than ever before.</p>
        <div class="features">
          <div class="feature" v-for="f in features" :key="f.title">
            <div class="f-icon" :style="{ backgroundColor: f.color + '15', color: f.color }">
              <DemoIcon :name="f.icon" :size="22" />
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ USE CASES ============ -->
    <section class="section section-alt">
      <div class="container center">
        <span class="eyebrow">Use Cases</span>
        <h2 class="h2">One Tool, <span class="grad">Endless Possibilities</span></h2>
        <p class="sec-sub">From marketing to customer support, WriteAI adapts to your needs.</p>
        <div class="use-cases">
          <div class="use-case" v-for="u in useCases" :key="u.title">
            <div class="uc-icon"><DemoIcon :name="u.icon" :size="22" /></div>
            <h3>{{ u.title }}</h3>
            <p>{{ u.desc }}</p>
          </div>
        </div>

        <div class="demo-card">
          <div class="dc-col">
            <span class="dc-label">Prompt</span>
            <p class="dc-prompt">Write a Facebook ad for a fitness app</p>
          </div>
          <div class="dc-col">
            <span class="dc-label">AI Output</span>
            <p class="dc-output">🏋️ Transform your body in just 15 minutes a day! Tired of complicated routines? FitPro makes fitness simple. ✅ Personalized workouts ✅ No equipment needed ✅ Track your progress. Join 500K+ users today!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ INTEGRATIONS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Integrations</span>
        <h2 class="h2">Works Where <span class="grad">You Work</span></h2>
        <p class="sec-sub">Seamlessly integrate WriteAI into your favorite tools and workflows.</p>
        <div class="integrations">
          <div class="int" v-for="i in integrations" :key="i.name">
            <span class="int-dot" :style="{ background: i.color }"></span>
            {{ i.name }}
          </div>
        </div>
        <p class="int-more">And many more coming soon...</p>
        <button class="btn btn-outline">Request Integration</button>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section section-alt" id="pricing">
      <div class="container center">
        <span class="eyebrow">Pricing</span>
        <h2 class="h2">Simple, <span class="grad">Transparent</span> Pricing</h2>
        <p class="sec-sub">Start free, upgrade when you need more. No hidden fees, cancel anytime.</p>
        <div class="plans">
          <div class="plan" v-for="p in plans" :key="p.name" :class="{ popular: p.popular }">
            <span v-if="p.popular" class="plan-badge">Most Popular</span>
            <h3>{{ p.name }}</h3>
            <div class="plan-price"><b>${{ p.price }}</b><span>{{ p.period }}</span></div>
            <p class="plan-desc">{{ p.desc }}</p>
            <ul>
              <li v-for="f in p.feats" :key="f"><DemoIcon name="check" :size="15" />{{ f }}</li>
            </ul>
            <button class="btn" :class="p.popular ? 'btn-cta' : 'btn-outline'">{{ p.cta }}</button>
          </div>
        </div>
        <p class="faq">Have questions? Check out our <a href="javascript:;">FAQ</a> or <a href="javascript:;">contact us</a></p>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready to Transform Your Writing?</h2>
        <p class="sec-sub">Join 100,000+ writers who are creating better content in less time. Start your free trial today — no credit card required.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Writing Free</button>
          <button class="btn btn-outline">Schedule Demo</button>
        </div>
        <div class="final-note">
          <span><DemoIcon name="check" :size="14" />No credit card required</span>
          <span><DemoIcon name="check" :size="14" />5,000 free words</span>
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
              <span class="nav-logo"><DemoIcon name="zap" :size="16" /></span>
              WriteAI
            </a>
            <p>AI-powered writing assistant that helps you create better content, faster.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 WriteAI. All rights reserved.</span>
          <span>Made with <i class="heart">♥</i> for writers everywhere</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@600;700&display=swap');

.wai {
  --primary: #7c3aed;
  --secondary: #a78bfa;
  --cta: #06b6d4;
  --bg: #faf5ff;
  --bg-alt: #f3ecff;
  --card: #ffffff;
  --border: #ddd6fe;
  --text: #1e1b4b;
  --muted: #6b7280;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.wai h1, .wai h2, .wai h3, .wai h4 {
  font-family: 'Poppins', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.wai p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(250, 245, 255, 0.88); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--cta)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--text); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(6, 182, 212, 0.28); }
.btn-cta:hover { background: #0891b2; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--primary); color: var(--primary); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 15px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(124, 58, 237, 0.1); border: 1px solid var(--border); }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.75rem); font-weight: 700; line-height: 1.06; letter-spacing: -0.02em; margin-bottom: 20px; }
.grad { background: linear-gradient(135deg, var(--primary), var(--cta)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

/* Editor */
.editor { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: 0 30px 60px rgba(124, 58, 237, 0.12); }
.ed-head { display: flex; align-items: center; gap: 12px; padding: 14px 18px; border-bottom: 1px solid var(--border); }
.ed-dots { display: flex; gap: 6px; }
.ed-dots i { width: 11px; height: 11px; border-radius: 50%; }
.ed-dots i:nth-child(1) { background: #ff5f57; }
.ed-dots i:nth-child(2) { background: #febc2e; }
.ed-dots i:nth-child(3) { background: #28c840; }
.ed-title { font-size: 0.82rem; font-weight: 600; color: var(--muted); }
.ed-tabs { display: flex; gap: 4px; padding: 12px 18px 0; border-bottom: 1px solid var(--border); }
.ed-tabs span { padding: 8px 14px; font-size: 0.8rem; font-weight: 600; color: var(--muted); cursor: pointer; border-bottom: 2px solid transparent; }
.ed-tabs span.active { color: var(--primary); border-bottom-color: var(--primary); }
.ed-text { padding: 20px 18px; font-size: 0.9rem; line-height: 1.65; color: var(--text); }
.ed-foot { display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-top: 1px solid var(--border); }
.ed-model { font-size: 0.8rem; font-weight: 600; color: var(--primary); }
.ed-words { font-size: 0.78rem; color: var(--muted); margin-left: auto; }
.ed-actions { display: flex; gap: 8px; }
.ed-copy, .ed-regen { display: inline-flex; align-items: center; gap: 6px; padding: 7px 14px; border-radius: 9px; font-size: 0.78rem; font-weight: 600; font-family: inherit; cursor: pointer; }
.ed-copy { background: var(--primary); color: #fff; border: none; }
.ed-regen { background: transparent; color: var(--muted); border: 1px solid var(--border); }

/* Press */
.press { text-align: center; margin-top: 48px; }
.press-label { font-size: 0.82rem; color: var(--muted); display: block; margin-bottom: 18px; }
.press-logos { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px; }
.press-logos span { font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--muted); opacity: 0.7; }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--primary); margin-bottom: 14px; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Use cases */
.use-cases { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; margin-bottom: 40px; }
.use-case { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 24px; }
.uc-icon { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; background: rgba(124, 58, 237, 0.1); color: var(--primary); margin-bottom: 14px; }
.use-case h3 { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
.use-case p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

.demo-card { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; text-align: left; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; }
.dc-label { font-size: 0.74rem; font-weight: 700; letter-spacing: 0.04em; color: var(--primary); text-transform: uppercase; display: block; margin-bottom: 10px; }
.dc-prompt { font-size: 1rem; font-weight: 600; color: var(--text); }
.dc-output { font-size: 0.9rem; color: var(--muted); line-height: 1.6; }

/* Integrations */
.integrations { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 20px; }
.int { display: inline-flex; align-items: center; gap: 9px; padding: 12px 20px; border-radius: 12px; background: var(--card); border: 1px solid var(--border); font-weight: 600; font-size: 0.9rem; }
.int-dot { width: 14px; height: 14px; border-radius: 4px; }
.int-more { font-size: 0.85rem; color: var(--muted); margin-bottom: 24px; }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; text-align: left; }
.plan { position: relative; display: flex; flex-direction: column; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 28px; }
.plan.popular { border: 2px solid var(--primary); box-shadow: 0 24px 50px rgba(124, 58, 237, 0.14); }
.plan-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 5px 14px; border-radius: 999px; white-space: nowrap; }
.plan h3 { font-size: 1.08rem; font-weight: 600; margin-bottom: 10px; }
.plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 10px; }
.plan-price b { font-size: 2.4rem; font-weight: 700; }
.plan-price span { color: var(--muted); }
.plan-desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 18px; }
.plan ul { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.plan li { display: flex; align-items: center; gap: 9px; font-size: 0.87rem; color: var(--muted); }
.plan li svg { color: var(--cta); flex-shrink: 0; }
.plan .btn { width: 100%; }
.faq { margin-top: 24px; font-size: 0.88rem; color: var(--muted); }
.faq a { color: var(--primary); font-weight: 600; }

/* Final */
.final { padding: 84px 0; }
.final .sec-sub { margin-bottom: 26px; }
.final .hero-cta { justify-content: center; margin-bottom: 20px; }
.final-note { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.final-note span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-note svg { color: var(--cta); }

/* Footer */
.footer { background: #fff; border-top: 1px solid var(--border); padding: 56px 0 32px; }
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
  .hero-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .use-cases { grid-template-columns: repeat(2, 1fr); }
  .demo-card { grid-template-columns: 1fr; }
  .plans { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .use-cases { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
