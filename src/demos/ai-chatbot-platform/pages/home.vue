<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Demo', 'Pricing', 'Docs']

const features = [
  { icon: 'spark', color: '#6366f1', title: 'Multi-Model Support', desc: 'Access GPT-4, Claude, Gemini, and more through a single unified API.' },
  { icon: 'chart', color: '#10b981', title: 'Code Generation', desc: 'Generate, explain, and debug code in 50+ programming languages.' },
  { icon: 'image', color: '#6366f1', title: 'Document Analysis', desc: 'Upload PDFs, docs, and images. Get instant summaries and insights.' },
  { icon: 'sync', color: '#10b981', title: 'Context Memory', desc: 'Long-term memory that remembers your preferences and past conversations.' },
  { icon: 'shield', color: '#6366f1', title: 'Enterprise Security', desc: 'SOC 2 compliant with end-to-end encryption and data privacy controls.' },
  { icon: 'zap', color: '#10b981', title: 'Streaming Responses', desc: 'Real-time streaming for instant feedback. No waiting for complete responses.' },
]

const integrations = [
  { name: 'Slack', color: '#4A154B' },
  { name: 'Discord', color: '#5865F2' },
  { name: 'Notion', color: '#000000' },
  { name: 'GitHub', color: '#181717' },
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Vercel', color: '#000000' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Google', color: '#4285F4' },
]

const plans = [
  { name: 'Free', price: 0, desc: 'For personal projects and testing', feats: ['100 messages/day', 'GPT-3.5 access', 'Basic chat interface', 'Community support'], popular: false, cta: 'Get Started' },
  { name: 'Pro', price: 29, desc: 'For professionals and small teams', feats: ['Unlimited messages', 'GPT-4 & Claude access', 'Custom chatbots', 'API access', 'Priority support', 'Analytics dashboard'], popular: true, cta: 'Start Free Trial' },
  { name: 'Enterprise', price: 'Custom', desc: 'For large organizations', feats: ['Everything in Pro', 'Custom model fine-tuning', 'SSO & SAML', 'Dedicated infrastructure', 'SLA guarantee', '24/7 phone support'], popular: false, cta: 'Contact Sales' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Pricing', 'API', 'Changelog', 'Status'] },
  { title: 'Resources', links: ['Documentation', 'Tutorials', 'Blog', 'Community', 'Support'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
]
</script>

<template>
  <div class="chat">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="chat" :size="16" /></span>
          NexusAI
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Try Free</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge"><DemoIcon name="spark" :size="14" /> Powered by GPT-4 &amp; Claude</span>
            <h1>Your AI Assistant for <span class="grad">Everything</span></h1>
            <p class="hero-sub">Build intelligent chatbots and AI assistants in minutes. No coding required. Enterprise-ready from day one.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Try Now — It's Free</button>
              <button class="btn btn-outline">View Documentation</button>
            </div>
          </div>

          <div class="chat-card">
            <div class="cc-head">
              <div class="cc-avatar"><DemoIcon name="chat" :size="18" /></div>
              <div class="cc-meta">
                <b>NexusAI Assistant</b>
                <span class="cc-online"><i></i>Online</span>
              </div>
            </div>
            <div class="cc-body">
              <div class="msg user">What can you help me with?</div>
              <div class="msg ai">I can help you analyze data, write code, answer questions, and much more. What would you like to explore today?</div>
            </div>
            <div class="cc-input">
              <span>Ask anything...</span>
              <button><DemoIcon name="send" :size="15" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="eyebrow">Built for <b>Developers</b></span>
        <p class="sec-sub">Everything you need to build powerful AI applications, from simple chatbots to complex agents.</p>
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

    <!-- ============ DEMO ============ -->
    <section class="section section-alt" id="demo">
      <div class="container center">
        <span class="eyebrow">See It In <b>Action</b></span>
        <p class="sec-sub">Experience the power of AI across different use cases.</p>
        <div class="demo-tabs"><span class="active">Chat</span><span>Code</span><span>Analyze</span></div>
        <div class="convo">
          <div class="msg user">Explain quantum computing in simple terms</div>
          <div class="msg ai">
            <p><b>Quantum computing</b> is like having a super-powered calculator that can explore many possibilities at once.</p>
            <p><b>Traditional computers</b> use bits (0s and 1s) — like light switches that are either ON or OFF.</p>
            <p><b>Quantum computers</b> use qubits that can be both 0 AND 1 at the same time (called superposition). This lets them:</p>
            <ul>
              <li>Process multiple calculations simultaneously</li>
              <li>Solve complex problems much faster</li>
              <li>Handle encryption and optimization tasks</li>
            </ul>
            <p>Think of it like reading a book: a regular computer reads one page at a time, while a quantum computer can read all pages simultaneously.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ INTEGRATIONS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Integrates with Your <b>Stack</b></span>
        <p class="sec-sub">Connect NexusAI to your favorite tools and platforms in minutes.</p>
        <div class="integrations">
          <div class="int" v-for="i in integrations" :key="i.name">
            <span class="int-dot" :style="{ background: i.color }"></span>{{ i.name }}
          </div>
        </div>

        <div class="code-card">
          <div class="code-head"><span>api-example.js</span><button class="code-copy"><DemoIcon name="check" :size="13" /> Copy</button></div>
          <pre class="code"><code><span class="k">import</span> { NexusAI } <span class="k">from</span> <span class="s">'@nexusai/sdk'</span>;
<span class="k">const</span> ai = <span class="k">new</span> NexusAI({ apiKey: process.env.<span class="v">NEXUS_API_KEY</span> });
<span class="k">const</span> response = <span class="k">await</span> ai.chat({ model: <span class="s">'gpt-4'</span>, messages: [{ role: <span class="s">'user'</span>, content: <span class="s">'Hello!'</span> }], stream: <span class="k">true</span> });
<span class="k">for await</span> (<span class="k">const</span> chunk <span class="k">of</span> response) { process.stdout.write(chunk.content); }</code></pre>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section section-alt" id="pricing">
      <div class="container center">
        <span class="eyebrow">Simple, Transparent <b>Pricing</b></span>
        <p class="sec-sub">Start free, upgrade when you need more. No hidden fees.</p>
        <div class="plans">
          <div class="plan" v-for="p in plans" :key="p.name" :class="{ popular: p.popular }">
            <span v-if="p.popular" class="plan-badge">Most Popular</span>
            <h3>{{ p.name }}</h3>
            <p class="plan-desc">{{ p.desc }}</p>
            <div class="plan-price"><b v-if="p.price !== 'Custom'">${{ p.price }}</b><b v-else>{{ p.price }}</b><span>/month</span></div>
            <ul>
              <li v-for="f in p.feats" :key="f"><DemoIcon name="check" :size="15" />{{ f }}</li>
            </ul>
            <button class="btn" :class="p.popular ? 'btn-cta' : 'btn-outline'">{{ p.cta }}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready to Build with AI?</h2>
        <p class="sec-sub">Join thousands of developers building the next generation of AI-powered applications.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Building Free</button>
          <button class="btn btn-outline">Talk to Sales</button>
        </div>
        <p class="final-note">No credit card required • Free forever plan available</p>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="chat" :size="16" /></span>
              NexusAI
            </a>
            <p>Build intelligent AI applications with the most powerful language models.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 NexusAI. All rights reserved.</span>
          <span class="status"><i></i>All systems operational</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.chat {
  --primary: #6366f1;
  --secondary: #10b981;
  --cta: #6366f1;
  --bg: #f5f5f5;
  --bg-alt: #ececef;
  --card: #ffffff;
  --border: #e5e7eb;
  --text: #111827;
  --muted: #6b7280;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.chat h1, .chat h2, .chat h3, .chat h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.chat p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(245, 245, 245, 0.9); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--text); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(99, 102, 241, 0.3); }
.btn-cta:hover { background: #4f46e5; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--primary); color: var(--primary); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 15px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(99, 102, 241, 0.1); border: 1px solid var(--border); }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.75rem); font-weight: 700; line-height: 1.06; letter-spacing: -0.02em; margin-bottom: 20px; }
.grad { background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }

/* Chat card */
.chat-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: 0 30px 60px rgba(17, 24, 39, 0.1); }
.cc-head { display: flex; align-items: center; gap: 12px; padding: 16px 18px; border-bottom: 1px solid var(--border); }
.cc-avatar { width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; }
.cc-meta b { display: block; font-size: 0.92rem; }
.cc-online { font-size: 0.76rem; color: var(--secondary); display: inline-flex; align-items: center; gap: 5px; font-weight: 600; }
.cc-online i { width: 7px; height: 7px; border-radius: 50%; background: var(--secondary); }
.cc-body { display: flex; flex-direction: column; gap: 10px; padding: 18px; min-height: 150px; }
.msg { padding: 12px 16px; border-radius: 14px; font-size: 0.88rem; line-height: 1.55; }
.msg.user { align-self: flex-end; background: var(--primary); color: #fff; border-bottom-right-radius: 4px; max-width: 80%; }
.msg.ai { align-self: flex-start; background: #f3f4f6; color: var(--text); border-bottom-left-radius: 4px; max-width: 88%; }
.cc-input { display: flex; align-items: center; gap: 8px; margin: 0 18px 18px; padding: 10px 14px; border: 1px solid var(--border); border-radius: 12px; }
.cc-input span { flex: 1; color: var(--muted); font-size: 0.85rem; }
.cc-input button { width: 30px; height: 30px; border-radius: 9px; border: none; background: var(--primary); color: #fff; display: grid; place-items: center; cursor: pointer; }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 14px; }
.eyebrow b { color: var(--text); }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Demo */
.demo-tabs { display: inline-flex; gap: 6px; padding: 5px; background: var(--bg-alt); border-radius: 12px; margin-bottom: 30px; }
.demo-tabs span { padding: 8px 22px; border-radius: 9px; font-size: 0.86rem; font-weight: 600; color: var(--muted); cursor: pointer; }
.demo-tabs span.active { background: var(--card); color: var(--text); box-shadow: 0 2px 8px rgba(0,0,0,0.06); }
.convo { max-width: 720px; margin: 0 auto; text-align: left; display: flex; flex-direction: column; gap: 14px; }
.convo .msg.ai { background: var(--card); border: 1px solid var(--border); }
.convo .msg.ai b { font-weight: 700; }
.convo .msg.ai ul { margin: 8px 0; padding-left: 20px; }
.convo .msg.ai li { margin-bottom: 5px; }

/* Integrations */
.integrations { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-bottom: 40px; }
.int { display: inline-flex; align-items: center; gap: 9px; padding: 12px 20px; border-radius: 12px; background: var(--card); border: 1px solid var(--border); font-weight: 600; font-size: 0.9rem; }
.int-dot { width: 14px; height: 14px; border-radius: 4px; }

.code-card { max-width: 620px; margin: 0 auto; background: #111827; border-radius: 14px; overflow: hidden; text-align: left; }
.code-head { display: flex; align-items: center; justify-content: space-between; padding: 12px 18px; border-bottom: 1px solid rgba(255,255,255,0.1); color: #9ca3af; font-size: 0.8rem; }
.code-copy { display: inline-flex; align-items: center; gap: 6px; padding: 5px 11px; border-radius: 8px; background: rgba(255,255,255,0.1); color: #d1d5db; border: none; font-size: 0.74rem; cursor: pointer; font-family: inherit; }
.code { margin: 0; padding: 18px; overflow-x: auto; font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', monospace; font-size: 0.8rem; line-height: 1.7; color: #e5e7eb; }
.code .k { color: #c084fc; }
.code .s { color: #34d399; }
.code .v { color: #fbbf24; }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; text-align: left; }
.plan { position: relative; display: flex; flex-direction: column; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 28px; }
.plan.popular { border: 2px solid var(--primary); box-shadow: 0 24px 50px rgba(99, 102, 241, 0.14); }
.plan-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 5px 14px; border-radius: 999px; white-space: nowrap; }
.plan h3 { font-size: 1.08rem; font-weight: 600; margin-bottom: 6px; }
.plan-desc { font-size: 0.85rem; color: var(--muted); margin-bottom: 16px; }
.plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 18px; }
.plan-price b { font-size: 2.2rem; font-weight: 700; }
.plan-price span { color: var(--muted); }
.plan ul { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.plan li { display: flex; align-items: center; gap: 9px; font-size: 0.87rem; color: var(--muted); }
.plan li svg { color: var(--secondary); flex-shrink: 0; }
.plan .btn { width: 100%; }

/* Final */
.final { padding: 84px 0; }
.final .sec-sub { margin-bottom: 26px; }
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
.status { display: inline-flex; align-items: center; gap: 7px; }
.status i { width: 8px; height: 8px; border-radius: 50%; background: var(--secondary); }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .plans { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
