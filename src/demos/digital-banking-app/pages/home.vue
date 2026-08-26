<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Accounts', 'Security', 'Download']

const heroTrust = [
  { icon: 'shield', label: 'FDIC Insured' },
  { icon: 'lock', label: '256-bit Encryption' },
  { icon: 'check-circle', label: 'No Hidden Fees' },
]

const heroActions = [
  { icon: 'up', label: 'Send' },
  { icon: 'down', label: 'Receive' },
  { icon: 'card', label: 'Cards' },
  { icon: 'chart', label: 'Invest' },
]

const heroTx = [
  { icon: 'play', name: 'Netflix', amount: '-$15.99', up: false },
  { icon: 'dollar', name: 'Salary', amount: '+$4,500.00', up: true },
]

const features = [
  { icon: 'send', color: '#0052cc', title: 'Instant Transfers', desc: 'Send money to anyone, anywhere in seconds. No fees for domestic transfers.' },
  { icon: 'card', color: '#6554c0', title: 'Virtual Cards', desc: 'Create unlimited virtual cards for secure online shopping.' },
  { icon: 'gauge', color: '#36b37e', title: 'Smart Budgeting', desc: 'AI-powered insights to help you save more and spend wisely.' },
  { icon: 'chart', color: '#0052cc', title: 'Invest & Grow', desc: 'Start investing with as little as $1. Stocks, ETFs, and crypto.' },
  { icon: 'globe', color: '#6554c0', title: 'Global Payments', desc: 'Send money to 100+ countries with the best exchange rates.' },
  { icon: 'shield', color: '#36b37e', title: 'Bank-Grade Security', desc: 'Your money is protected with 256-bit encryption and biometric auth.' },
]

const accounts = [
  { name: 'Everyday Checking', tagline: 'For daily spending and bills', apy: '0.50%', feats: ['No monthly fees', 'Free ATM withdrawals', 'Instant notifications', 'Virtual cards'], popular: false },
  { name: 'High-Yield Savings', tagline: 'Grow your money faster', apy: '4.50%', feats: ['4.50% APY', 'No minimum balance', 'Automatic savings', 'Goal tracking'], popular: true },
  { name: 'Investment Account', tagline: 'Build long-term wealth', apy: 'Variable', feats: ['Stocks & ETFs', 'Crypto trading', 'Fractional shares', 'Auto-invest'], popular: false },
]

const security = [
  { icon: 'lock', title: '256-bit Encryption', desc: 'Bank-grade encryption protects all your data' },
  { icon: 'fingerprint', title: 'Biometric Login', desc: 'Face ID and fingerprint authentication' },
  { icon: 'shield', title: 'FDIC Insured', desc: 'Deposits insured up to $250,000' },
  { icon: 'bell', title: 'Real-time Alerts', desc: 'Instant notifications for all transactions' },
]

const secStatus = [
  { label: 'Two-Factor Authentication', state: 'Enabled' },
  { label: 'Biometric Login', state: 'Active' },
  { label: 'Transaction Alerts', state: 'On' },
  { label: 'Card Lock', state: 'Available' },
]

const secBadges = ['SOC 2 Certified', 'PCI DSS Compliant', 'FDIC Insured']

const appStats = [
  { v: '4.9', l: 'App Rating' },
  { v: '2M+', l: 'Downloads' },
  { v: '$50B+', l: 'Transferred' },
]

const footerCols = [
  { title: 'Products', links: ['Checking', 'Savings', 'Investments', 'Credit Cards'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
  { title: 'Resources', links: ['Help Center', 'Security', 'Fees', 'API'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Licenses', 'FDIC'] },
]
</script>

<template>
  <div class="bank">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="wallet" :size="16" /></span>
          NexBank
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Open Account</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge"><DemoIcon name="shield" :size="14" /> Bank-Grade Security</span>
            <h1>Banking Made <span class="grad">Simple</span></h1>
            <p class="hero-sub">Experience the future of banking. Manage your money, send payments, and grow your wealth — all from one powerful app.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Open Free Account</button>
              <button class="btn btn-outline">See How It Works</button>
            </div>
            <div class="hero-trust">
              <span v-for="t in heroTrust" :key="t.label"><DemoIcon :name="t.icon" :size="15" />{{ t.label }}</span>
            </div>
          </div>

          <div class="phone-wrap">
            <div class="phone">
              <div class="phone-status">
                <span>9:41</span>
                <span class="ph-icons">▮▮ ▮</span>
              </div>
              <div class="ph-greet">Good morning, Alex 👋</div>
              <div class="ph-balance-label">Total Balance</div>
              <div class="ph-balance">$24,562.80</div>
              <div class="ph-card">
                <div class="ph-card-top">
                  <span class="ph-chip"></span>
                  <span class="ph-contactless">))</span>
                </div>
                <div class="ph-card-num">•••• 4582</div>
                <div class="ph-card-bottom"><span>Primary</span><span>VISA</span></div>
              </div>
              <div class="ph-actions">
                <button v-for="a in heroActions" :key="a.label">
                  <span class="pa-icon"><DemoIcon :name="a.icon" :size="17" /></span>
                  {{ a.label }}
                </button>
              </div>
              <div class="ph-recent-label">Recent</div>
              <div class="ph-tx" v-for="t in heroTx" :key="t.name">
                <span class="ph-tx-icon"><DemoIcon :name="t.icon" :size="15" /></span>
                <span class="ph-tx-name">{{ t.name }}</span>
                <span class="ph-tx-amount" :class="t.up ? 'up' : ''">{{ t.amount }}</span>
              </div>
              <div class="ph-month"><span class="up-pill">+12.5%</span> This month</div>
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
        <span class="eyebrow">Features</span>
        <h2 class="h2">Everything You Need to <span class="grad">Manage Money</span></h2>
        <p class="sec-sub">Powerful features designed to give you complete control over your finances.</p>
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

    <!-- ============ ACCOUNTS ============ -->
    <section class="section section-alt" id="accounts">
      <div class="container center">
        <span class="eyebrow">Accounts</span>
        <h2 class="h2">Choose Your <span class="grad">Account</span></h2>
        <p class="sec-sub">Open an account in minutes. No credit check required.</p>
        <div class="accounts">
          <div class="account" v-for="a in accounts" :key="a.name" :class="{ popular: a.popular }">
            <span v-if="a.popular" class="ac-badge">Most Popular</span>
            <h3>{{ a.name }}</h3>
            <p class="ac-tagline">{{ a.tagline }}</p>
            <div class="ac-apy"><b>{{ a.apy }}</b><span>APY</span></div>
            <ul>
              <li v-for="f in a.feats" :key="f"><DemoIcon name="check" :size="15" />{{ f }}</li>
            </ul>
            <button class="btn" :class="a.popular ? 'btn-cta' : 'btn-outline'">Open Account</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SECURITY ============ -->
    <section class="section" id="security">
      <div class="container">
        <div class="sec-grid">
          <div class="sec-copy">
            <span class="eyebrow">Security First</span>
            <h2 class="h2">Your Money is <span class="grad">Protected</span></h2>
            <p>We use the same security measures as the world's largest banks. Your data and money are always safe with us.</p>
            <div class="sec-points">
              <div class="sec-point" v-for="s in security" :key="s.title">
                <span class="sp-icon"><DemoIcon :name="s.icon" :size="18" /></span>
                <div><b>{{ s.title }}</b><p>{{ s.desc }}</p></div>
              </div>
            </div>
          </div>
          <div class="sec-card">
            <div class="sc-head">
              <span class="sc-icon"><DemoIcon name="shield" :size="18" /></span>
              <div><b>Account Protected</b><span>All security measures active</span></div>
            </div>
            <div class="sc-row" v-for="s in secStatus" :key="s.label">
              <span>{{ s.label }}</span>
              <b class="sc-state">{{ s.state }}</b>
            </div>
            <div class="sc-badges">
              <span v-for="b in secBadges" :key="b"><DemoIcon name="check-circle" :size="14" />{{ b }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ DOWNLOAD ============ -->
    <section class="section section-alt" id="download">
      <div class="container">
        <div class="dl-grid">
          <div class="dl-copy">
            <span class="eyebrow">Download App</span>
            <h2 class="h2">Bank Anywhere, <span class="grad">Anytime</span></h2>
            <p>Download the NexBank app and take control of your finances. Available on iOS and Android.</p>
            <div class="stores">
              <span class="store"><DemoIcon name="apple" :size="20" /><div><b>Download on the</b>App Store</div></span>
              <span class="store"><DemoIcon name="play" :size="20" /><div><b>Get it on</b>Google Play</div></span>
            </div>
            <div class="dl-stats">
              <div class="dl-stat" v-for="s in appStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>
          <div class="dl-phone">
            <div class="phone phone-sm">
              <div class="phone-status"><span>9:41</span><span class="ph-icons">▮▮ ▮</span></div>
              <div class="ph-balance-label">Total Balance</div>
              <div class="ph-balance">$24,562.80 <span class="up-pill">+12.5%</span></div>
              <div class="ph-actions">
                <button v-for="a in ['Send', 'Request', 'Cards', 'More']" :key="a"><span class="pa-icon"><DemoIcon :name="a === 'Send' ? 'up' : a === 'Cards' ? 'card' : 'plus'" :size="16" /></span>{{ a }}</button>
              </div>
              <div class="ph-tx" v-for="t in [{n:'Apple',v:'-$14.99'},{n:'Salary',v:'+$4,500',u:true},{n:'Amazon',v:'-$89.00'}]" :key="t.n">
                <span class="ph-tx-icon"><DemoIcon name="bag" :size="14" /></span>
                <span class="ph-tx-name">{{ t.n }}</span>
                <span class="ph-tx-amount" :class="t.u ? 'up' : ''">{{ t.v }}</span>
              </div>
            </div>
            <div class="qr">
              <span class="qr-grid"></span>
              <i>Scan to download</i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="wallet" :size="16" /></span>
              NexBank
            </a>
            <p>Banking made simple. Your money, your way.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <p class="fdic">FDIC Insured — Deposits are insured up to $250,000 per depositor through our partner bank, Member FDIC.</p>
        <div class="footer-bottom">
          <span>© 2024 NexBank. All rights reserved.</span>
          <div class="footer-badges">
            <span><DemoIcon name="check-circle" :size="14" />SOC 2 Certified</span>
            <span><DemoIcon name="check-circle" :size="14" />PCI DSS Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.bank {
  --primary: #0052cc;
  --secondary: #00875a;
  --cta: #6554c0;
  --success: #36b37e;
  --bg: #0a1628;
  --bg-alt: #0e1c33;
  --card: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.1);
  --text: #ffffff;
  --muted: #a3b3c9;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.bank h1, .bank h2, .bank h3, .bank h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.bank p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(10, 22, 40, 0.82); backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--cta)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.88rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.88rem; font-weight: 600; color: var(--muted); text-decoration: none; }

/* Buttons */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 22px; border-radius: 12px;
  font-size: 0.9rem; font-weight: 700; font-family: inherit;
  border: none; cursor: pointer;
  transition: transform 0.15s, box-shadow 0.2s, background 0.2s;
}
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(101, 84, 192, 0.32); }
.btn-cta:hover { background: #7660d8; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--muted); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 40px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 15px; border-radius: 999px; margin-bottom: 22px;
  font-size: 0.82rem; font-weight: 600; color: var(--success);
  background: rgba(54, 179, 126, 0.12); border: 1px solid rgba(54, 179, 126, 0.22);
}
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.75rem); font-weight: 700; line-height: 1.06; letter-spacing: -0.02em; margin-bottom: 20px; }
.grad {
  background: linear-gradient(135deg, var(--primary), var(--cta));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px; }
.hero-trust { display: flex; gap: 20px; flex-wrap: wrap; }
.hero-trust span { display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--muted); }
.hero-trust svg { color: var(--success); }

/* Phone mockup */
.phone-wrap { position: relative; display: flex; justify-content: center; }
.glow { position: absolute; width: 260px; height: 260px; border-radius: 50%; filter: blur(110px); }
.g1 { top: -20px; left: 0; background: var(--primary); opacity: 0.25; }
.g2 { bottom: -20px; right: 0; background: var(--cta); opacity: 0.22; }
.phone {
  position: relative; z-index: 2;
  width: 300px; border-radius: 34px;
  background: #0c1d35; border: 1px solid rgba(255,255,255,0.12);
  padding: 16px 16px 20px;
  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);
}
.phone-status { display: flex; align-items: center; justify-content: space-between; font-size: 0.72rem; color: var(--muted); padding: 2px 4px 14px; }
.ph-icons { letter-spacing: 1px; }
.ph-greet { font-size: 0.92rem; font-weight: 500; color: var(--text); margin-bottom: 14px; }
.ph-balance-label { font-size: 0.72rem; color: var(--muted); }
.ph-balance { font-size: 1.7rem; font-weight: 700; letter-spacing: -0.01em; margin: 2px 0 16px; display: flex; align-items: center; gap: 10px; }
.ph-card {
  border-radius: 16px; padding: 16px;
  background: linear-gradient(135deg, #0052cc, #6554c0);
  margin-bottom: 16px;
}
.ph-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.ph-chip { width: 26px; height: 18px; border-radius: 4px; background: linear-gradient(135deg, #ffd86f, #c9a24b); display: inline-block; }
.ph-contactless { color: rgba(255,255,255,0.8); font-size: 0.9rem; }
.ph-card-num { font-size: 1.05rem; font-weight: 600; letter-spacing: 0.06em; margin-bottom: 12px; }
.ph-card-bottom { display: flex; justify-content: space-between; font-size: 0.68rem; opacity: 0.9; }

.ph-actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 16px; }
.ph-actions button {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  background: var(--card); border: 1px solid var(--border); border-radius: 12px;
  padding: 10px 4px; color: var(--muted); font-size: 0.66rem; font-weight: 600;
  cursor: pointer; font-family: inherit;
}
.pa-icon {
  width: 30px; height: 30px; border-radius: 9px;
  display: grid; place-items: center; background: rgba(0, 82, 204, 0.16); color: var(--primary);
}
.ph-recent-label { font-size: 0.72rem; color: var(--muted); font-weight: 600; margin-bottom: 8px; }
.ph-tx { display: flex; align-items: center; gap: 10px; padding: 9px 0; }
.ph-tx-icon { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: var(--card); color: var(--muted); flex-shrink: 0; }
.ph-tx-name { font-size: 0.82rem; flex: 1; }
.ph-tx-amount { font-size: 0.82rem; font-weight: 600; }
.ph-tx-amount.up { color: var(--success); }
.ph-month { font-size: 0.72rem; color: var(--muted); margin-top: 6px; }
.up-pill { display: inline-block; padding: 2px 8px; border-radius: 999px; background: rgba(54,179,126,0.14); color: var(--success); font-size: 0.72rem; font-weight: 700; }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 14px; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature {
  background: var(--card); border: 1px solid var(--border);
  border-radius: 16px; padding: 26px;
  transition: border-color 0.2s, transform 0.2s;
}
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Accounts */
.accounts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: stretch; text-align: left; }
.account {
  position: relative; display: flex; flex-direction: column;
  background: var(--card); border: 1px solid var(--border);
  border-radius: 18px; padding: 28px;
}
.account.popular { border: 2px solid var(--cta); box-shadow: 0 24px 50px rgba(101, 84, 192, 0.16); }
.ac-badge {
  position: absolute; top: -13px; left: 50%; transform: translateX(-50%);
  background: var(--cta); color: #fff; font-size: 0.72rem; font-weight: 700;
  padding: 5px 14px; border-radius: 999px; white-space: nowrap;
}
.account h3 { font-size: 1.08rem; font-weight: 600; margin-bottom: 6px; }
.ac-tagline { font-size: 0.85rem; color: var(--muted); margin-bottom: 18px; }
.ac-apy { display: flex; align-items: baseline; gap: 6px; margin-bottom: 18px; }
.ac-apy b { font-size: 2.2rem; font-weight: 700; }
.ac-apy span { font-size: 0.8rem; color: var(--muted); }
.account ul { list-style: none; margin: 0 0 24px; padding: 0; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.account li { display: flex; align-items: center; gap: 9px; font-size: 0.85rem; color: var(--muted); }
.account li svg { color: var(--success); flex-shrink: 0; }
.account .btn { width: 100%; }

/* Security */
.sec-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.sec-copy .h2 { margin-bottom: 16px; }
.sec-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 28px; max-width: 480px; }
.sec-points { display: flex; flex-direction: column; gap: 18px; }
.sec-point { display: flex; gap: 14px; align-items: flex-start; }
.sp-icon { width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0; display: grid; place-items: center; background: rgba(0, 82, 204, 0.14); color: var(--primary); }
.sec-point b { display: block; font-size: 0.95rem; font-weight: 600; margin-bottom: 3px; }
.sec-point p { font-size: 0.84rem; color: var(--muted); line-height: 1.5; }

.sec-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; }
.sc-head { display: flex; align-items: center; gap: 12px; padding-bottom: 18px; margin-bottom: 10px; border-bottom: 1px solid var(--border); }
.sc-icon { width: 42px; height: 42px; border-radius: 12px; display: grid; place-items: center; background: rgba(54, 179, 126, 0.14); color: var(--success); flex-shrink: 0; }
.sc-head b { display: block; font-size: 0.98rem; font-weight: 600; }
.sc-head span { font-size: 0.78rem; color: var(--muted); }
.sc-row { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border); font-size: 0.86rem; color: var(--muted); }
.sc-row:last-of-type { border-bottom: none; }
.sc-state { color: var(--success); font-weight: 600; }
.sc-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
.sc-badges span { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); font-size: 0.74rem; color: var(--muted); }
.sc-badges svg { color: var(--success); }

/* Download */
.dl-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.dl-copy .h2 { margin-bottom: 16px; }
.dl-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 28px; max-width: 440px; }
.stores { display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap; }
.store {
  display: flex; align-items: center; gap: 10px;
  padding: 10px 18px; border-radius: 12px;
  background: var(--card); border: 1px solid var(--border);
  color: var(--text); cursor: pointer;
}
.store b { display: block; font-size: 0.64rem; font-weight: 500; color: var(--muted); }
.store > svg { color: var(--text); }
.dl-stats { display: flex; gap: 34px; }
.dl-stat { display: flex; flex-direction: column; gap: 4px; }
.dl-stat b { font-size: 1.6rem; font-weight: 700; }
.dl-stat span { font-size: 0.8rem; color: var(--muted); }

.dl-phone { position: relative; display: flex; justify-content: center; }
.phone-sm { width: 280px; }
.qr {
  position: absolute; bottom: -10px; right: -6px;
  background: #fff; color: #0a1628; border-radius: 14px;
  padding: 12px; display: flex; flex-direction: column; align-items: center; gap: 6px;
  box-shadow: 0 20px 44px rgba(0,0,0,0.4);
}
.qr-grid {
  width: 64px; height: 64px; border-radius: 4px;
  background:
    linear-gradient(90deg, #0a1628 50%, transparent 50%) 0 0/16px 16px,
    linear-gradient(#0a1628 50%, transparent 50%) 0 0/16px 16px,
    #fff;
  opacity: 0.9;
}
.qr i { font-style: normal; font-size: 0.66rem; font-weight: 600; }

/* Footer */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 32px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 240px; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.fdic { font-size: 0.72rem; color: var(--muted); opacity: 0.7; margin-bottom: 20px; }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }
.footer-badges { display: flex; gap: 18px; }
.footer-badges span { display: inline-flex; align-items: center; gap: 7px; }
.footer-badges svg { color: var(--success); }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid, .sec-grid, .dl-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .accounts { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
