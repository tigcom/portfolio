<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Markets', 'Security', 'Pricing']

const heroTrust = [
  { icon: 'shield', label: 'Bank-grade Security' },
  { icon: 'clock', label: '24/7 Trading' },
]

const ticker = [
  { sym: 'BTC', name: 'Bitcoin', price: '$43,521.80', change: '+2.34%', up: true },
  { sym: 'ETH', name: 'Ethereum', price: '$2,284.15', change: '+1.87%', up: true },
  { sym: 'SOL', name: 'Solana', price: '$98.42', change: '-0.54%', up: false },
]

const features = [
  { icon: 'zap', color: '#0080ff', title: 'Instant Trades', desc: 'Execute trades in milliseconds with our high-performance matching engine.' },
  { icon: 'lock', color: '#39ff14', title: 'Cold Storage', desc: '95% of assets stored in air-gapped cold wallets with multi-sig protection.' },
  { icon: 'chart', color: '#0080ff', title: 'Advanced Charts', desc: 'Professional trading tools with 100+ technical indicators and drawing tools.' },
  { icon: 'bag', color: '#39ff14', title: 'Multi-Wallet', desc: 'Connect hardware wallets, browser wallets, or use our secure custodial solution.' },
  { icon: 'plug', color: '#0080ff', title: 'API Access', desc: 'Build trading bots with our REST and WebSocket APIs. Full documentation included.' },
  { icon: 'dollar', color: '#39ff14', title: 'Fiat On-Ramp', desc: 'Buy crypto with credit card, bank transfer, or Apple Pay in 180+ countries.' },
]

const stats = [
  { v: '$12B+', l: 'Trading Volume', s: '24h' },
  { v: '2M+', l: 'Active Users', s: 'Worldwide' },
  { v: '150+', l: 'Cryptocurrencies', s: 'Supported' },
  { v: '99.99%', l: 'Uptime', s: 'Guaranteed' },
]

const security = [
  { icon: 'shield', title: 'Multi-Signature Wallets', desc: 'All withdrawals require multiple approvals from geographically distributed key holders.' },
  { icon: 'shield', title: 'Insurance Coverage', desc: '$250M insurance policy covering digital assets held in our custody.' },
  { icon: 'lock', title: '2FA & Biometrics', desc: 'Hardware keys, authenticator apps, and biometric verification supported.' },
  { icon: 'check-circle', title: 'SOC 2 Type II', desc: 'Independently audited security controls and compliance certifications.' },
]

const secStats = [
  { v: '95%', l: 'Cold Storage' },
  { v: '$250M', l: 'Insurance' },
  { v: '99.99%', l: 'Uptime' },
  { v: '180+', l: 'Countries' },
]

const footerCols = [
  { title: 'Products', links: ['Spot Trading', 'Futures', 'Staking', 'NFT', 'Earn'] },
  { title: 'Resources', links: ['API Docs', 'Help Center', 'Blog', 'Research', 'Status'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Legal', 'Contact'] },
  { title: 'Community', links: ['Twitter', 'Discord', 'Telegram', 'Reddit'] },
]
</script>

<template>
  <div class="ftx">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="chart" :size="16" /></span>
          CryptoVault
        </a>
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
      <div class="hero-glow g1"></div>
      <div class="hero-glow g2"></div>
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge-live"><i></i> Live Trading Available</span>
            <h1>Trade Crypto with <span class="grad">Confidence</span></h1>
            <p class="hero-sub">
              The most secure and advanced cryptocurrency trading platform. Buy, sell, and manage
              your digital assets with institutional-grade security.
            </p>
            <div class="hero-cta">
              <button class="btn btn-cta">Start Trading <DemoIcon name="arrow" :size="17" /></button>
              <button class="btn btn-outline">View Markets</button>
            </div>
            <div class="hero-trust">
              <span v-for="t in heroTrust" :key="t.label"><DemoIcon :name="t.icon" :size="16" />{{ t.label }}</span>
            </div>
          </div>

          <div class="hero-chart-wrap">
            <div class="glass chart-card">
              <div class="chart-head">
                <div>
                  <h3>BTC/USD</h3>
                  <p>Bitcoin</p>
                </div>
                <div class="chart-price">
                  <b>$43,521.80</b>
                  <span>+2.34%</span>
                </div>
              </div>
              <svg class="chart-svg" viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ftxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#39ff14" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#39ff14" stop-opacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,100 C20,95 40,80 60,85 C80,90 100,60 120,55 C140,50 160,70 180,45 C200,20 220,35 240,25 C260,15 280,30 300,20" fill="none" stroke="#39ff14" stroke-width="2.5" stroke-linecap="round" />
                <path d="M0,100 C20,95 40,80 60,85 C80,90 100,60 120,55 C140,50 160,70 180,45 C200,20 220,35 240,25 C260,15 280,30 300,20 L300,120 L0,120 Z" fill="url(#ftxGrad)" />
              </svg>
              <div class="chart-tabs">
                <button>1H</button><button>1D</button><button class="active">1W</button><button>1M</button><button>1Y</button>
              </div>
            </div>
            <div class="float-card btc">
              <span class="coin">₿</span>
              <div><b>$43,521</b><i>+2.34%</i></div>
            </div>
            <div class="float-card eth">
              <span class="coin">Ξ</span>
              <div><b>$2,284</b><i>+1.87%</i></div>
            </div>
          </div>
        </div>

        <div class="ticker glass">
          <div class="ticker-item" v-for="c in ticker" :key="c.sym">
            <span class="tk-sym">{{ c.sym }}</span>
            <span class="tk-name">{{ c.name }}</span>
            <b class="tk-price">{{ c.price }}</b>
            <span class="tk-change" :class="c.up ? 'up' : 'down'">{{ c.change }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES ============ -->
    <section class="section" id="features">
      <div class="container center">
        <span class="eyebrow">Built for <b>Serious Traders</b></span>
        <p class="sec-sub">Professional-grade tools and security for both beginners and advanced traders.</p>
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

    <!-- ============ STATS ============ -->
    <section class="stats-band">
      <div class="container">
        <div class="stats">
          <div class="stat" v-for="s in stats" :key="s.l">
            <b>{{ s.v }}</b>
            <span>{{ s.l }}</span>
            <i>{{ s.s }}</i>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SECURITY ============ -->
    <section class="section" id="security">
      <div class="container">
        <div class="sec-grid">
          <div class="sec-copy">
            <span class="eyebrow">Bank-Grade Security</span>
            <h2>Your Assets Are <span class="grad">Protected 24/7</span></h2>
            <p>We employ the same security measures used by leading financial institutions. Your crypto is protected by multiple layers of defense.</p>
            <div class="sec-points">
              <div class="sec-point" v-for="s in security" :key="s.title">
                <span class="sp-icon"><DemoIcon :name="s.icon" :size="18" /></span>
                <div>
                  <b>{{ s.title }}</b>
                  <p>{{ s.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sec-stats">
            <div class="sec-stat" v-for="s in secStats" :key="s.l">
              <b>{{ s.v }}</b>
              <span>{{ s.l }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2>Start Trading in <span class="grad">Minutes</span></h2>
        <p>Join over 2 million traders worldwide. Create your account, deposit funds, and start trading crypto with zero fees on your first $10,000.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Create Free Account</button>
          <button class="btn btn-outline">Download App</button>
        </div>
        <div class="final-note">
          <span><DemoIcon name="check" :size="14" />No credit card required</span>
          <span><DemoIcon name="check" :size="14" />$10K zero-fee trading</span>
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
              CryptoVault
            </a>
            <p>The most trusted cryptocurrency exchange. Trade with confidence.</p>
            <div class="stores">
              <span class="store"><b>Download on</b> App Store</span>
              <span class="store"><b>Get it on</b> Google Play</span>
            </div>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 CryptoVault. All rights reserved.</span>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.ftx {
  --primary: #0080ff;
  --secondary: #39ff14;
  --bg: #0a0e27;
  --card: rgba(255, 255, 255, 0.04);
  --border: #1e2650;
  --text: #ffffff;
  --muted: #8b92b3;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.ftx h1, .ftx h2, .ftx h3, .ftx h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.ftx p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* ---------- Nav ---------- */
.nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(10, 14, 39, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 14px 24px;
  display: flex; align-items: center; gap: 24px;
}
.nav-brand {
  display: flex; align-items: center; gap: 9px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700; font-size: 1.1rem; color: var(--text);
  text-decoration: none;
}
.nav-logo {
  width: 30px; height: 30px; border-radius: 9px;
  display: grid; place-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
}
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.88rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.88rem; font-weight: 600; color: var(--muted); text-decoration: none; }
.nav-signin:hover { color: var(--text); }

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
  background: var(--secondary); color: #04180a;
  box-shadow: 0 10px 26px rgba(57, 255, 20, 0.24);
}
.btn-cta:hover { background: #4bff28; }
.btn-outline {
  background: transparent; color: var(--text);
  border: 1.5px solid var(--border);
}
.btn-outline:hover { border-color: var(--muted); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* ---------- Hero ---------- */
.hero { position: relative; padding: 76px 0 40px; }
.hero-glow {
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  filter: blur(120px); pointer-events: none;
}
.g1 { top: 60px; left: -40px; background: var(--primary); opacity: 0.18; }
.g2 { bottom: 20px; right: -40px; background: var(--secondary); opacity: 0.1; }
.hero-grid {
  display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center;
}
.badge-live {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 7px 15px; border-radius: 999px; margin-bottom: 22px;
  font-size: 0.82rem; font-weight: 600; color: var(--secondary);
  background: rgba(57, 255, 20, 0.1);
  border: 1px solid rgba(57, 255, 20, 0.22);
}
.badge-live i { width: 7px; height: 7px; border-radius: 50%; background: var(--secondary); animation: pulse 1.6s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }

.hero-copy h1 {
  font-size: clamp(2.3rem, 5vw, 3.75rem);
  font-weight: 700; line-height: 1.06; letter-spacing: -0.02em; margin-bottom: 20px;
}
.grad {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent; color: transparent;
}
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px; }
.hero-trust { display: flex; gap: 22px; flex-wrap: wrap; }
.hero-trust span { display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--muted); }
.hero-trust svg { color: var(--secondary); }

/* Hero chart */
.glass {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  backdrop-filter: blur(12px);
}
.hero-chart-wrap { position: relative; }
.chart-card { padding: 22px; }
.chart-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
.chart-head h3 { font-size: 1.05rem; font-weight: 600; }
.chart-head p { font-size: 0.82rem; color: var(--muted); }
.chart-price { text-align: right; }
.chart-price b { display: block; font-size: 1.4rem; font-weight: 700; }
.chart-price span { font-size: 0.85rem; color: var(--secondary); font-weight: 600; }
.chart-svg { height: 150px; width: 100%; }
.chart-tabs { display: flex; gap: 6px; margin-top: 14px; }
.chart-tabs button {
  padding: 5px 12px; border-radius: 8px; border: none; cursor: pointer;
  font-size: 0.74rem; font-weight: 600; font-family: inherit;
  color: var(--muted); background: transparent; transition: color 0.15s, background 0.15s;
}
.chart-tabs button:hover { color: var(--text); }
.chart-tabs button.active { background: var(--primary); color: #fff; }

.float-card {
  position: absolute; display: flex; align-items: center; gap: 11px;
  padding: 12px 16px; border-radius: 14px;
  background: rgba(18, 22, 48, 0.9); border: 1px solid var(--border);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
}
.float-card .coin {
  width: 38px; height: 38px; border-radius: 50%;
  display: grid; place-items: center; font-weight: 700; color: #fff; font-size: 1.05rem;
}
.float-card b { display: block; font-size: 0.9rem; }
.float-card i { font-style: normal; font-size: 0.76rem; color: var(--secondary); font-weight: 600; }
.float-card.btc { top: -18px; right: -14px; }
.float-card.btc .coin { background: #F7931A; }
.float-card.eth { bottom: -18px; left: -14px; }
.float-card.eth .coin { background: #627EEA; }

/* Ticker */
.ticker {
  margin-top: 40px; padding: 14px 22px;
  display: flex; flex-wrap: wrap; gap: 32px; align-items: center;
}
.ticker-item { display: flex; align-items: center; gap: 9px; font-size: 0.88rem; }
.tk-sym { font-weight: 700; color: var(--text); }
.tk-name { color: var(--muted); }
.tk-price { font-weight: 600; color: var(--text); margin-left: 4px; }
.tk-change { font-weight: 600; }
.tk-change.up { color: var(--secondary); }
.tk-change.down { color: #f87171; }

/* ---------- Sections ---------- */
.section { padding: 84px 0; }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 14px; }
.eyebrow b { color: var(--text); }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left;
}
.feature {
  background: var(--card); border: 1px solid var(--border);
  border-radius: 16px; padding: 26px;
  transition: border-color 0.2s, transform 0.2s;
}
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon {
  width: 48px; height: 48px; border-radius: 13px;
  display: grid; place-items: center; margin-bottom: 16px;
}
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Stats band */
.stats-band { background: var(--card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.stats { display: grid; grid-template-columns: repeat(4, 1fr); }
.stat {
  padding: 34px 20px; text-align: center;
  display: flex; flex-direction: column; gap: 5px;
  border-right: 1px solid var(--border);
}
.stat:last-child { border-right: none; }
.stat b { font-size: 2rem; font-weight: 700; letter-spacing: -0.02em; }
.stat span { font-size: 0.9rem; color: var(--muted); }
.stat i { font-style: normal; font-size: 0.75rem; color: var(--muted); opacity: 0.7; }

/* Security */
.sec-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.sec-copy h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 16px; }
.sec-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 28px; max-width: 480px; }
.sec-points { display: flex; flex-direction: column; gap: 18px; }
.sec-point { display: flex; gap: 14px; align-items: flex-start; }
.sp-icon {
  width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0;
  display: grid; place-items: center;
  background: rgba(0, 128, 255, 0.12); color: var(--primary);
}
.sec-point b { display: block; font-size: 0.95rem; font-weight: 600; margin-bottom: 3px; }
.sec-point p { font-size: 0.84rem; color: var(--muted); line-height: 1.5; }

.sec-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.sec-stat {
  background: var(--card); border: 1px solid var(--border); border-radius: 16px;
  padding: 30px 20px; text-align: center;
  display: flex; flex-direction: column; gap: 6px;
}
.sec-stat b { font-size: 1.8rem; font-weight: 700; color: var(--secondary); }
.sec-stat span { font-size: 0.85rem; color: var(--muted); }

/* ---------- Final CTA ---------- */
.final { padding: 84px 0; }
.final h2 { font-size: clamp(1.8rem, 3.8vw, 2.6rem); font-weight: 700; margin-bottom: 14px; }
.final p { max-width: 560px; margin: 0 auto 26px; color: var(--muted); line-height: 1.6; }
.final .hero-cta { justify-content: center; margin-bottom: 20px; }
.final-note { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.final-note span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-note svg { color: var(--secondary); }

/* ---------- Footer ---------- */
.footer { background: rgba(0, 0, 0, 0.24); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid {
  display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
  gap: 32px; text-align: left; margin-bottom: 44px;
}
.footer-brand .nav-brand { margin-bottom: 16px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); line-height: 1.6; max-width: 240px; margin-bottom: 20px; }
.stores { display: flex; gap: 10px; }
.store {
  display: flex; flex-direction: column; gap: 1px;
  padding: 8px 14px; border-radius: 10px;
  background: var(--card); border: 1px solid var(--border);
  font-size: 0.72rem; font-weight: 600; color: var(--text);
}
.store b { font-size: 0.62rem; font-weight: 500; color: var(--muted); }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a {
  display: block; font-size: 0.85rem; color: var(--muted);
  text-decoration: none; margin-bottom: 10px; transition: color 0.15s;
}
.footer-col a:hover { color: var(--text); }
.footer-bottom {
  padding-top: 22px; border-top: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
  font-size: 0.82rem; color: var(--muted);
}
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: var(--muted); text-decoration: none; }
.footer-legal a:hover { color: var(--text); }

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .stats { grid-template-columns: repeat(2, 1fr); }
  .stat { border-right: none; border-bottom: 1px solid var(--border); }
  .sec-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .sec-stats { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
