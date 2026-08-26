<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Markets', 'Trade', 'Earn', 'Security']

const heroStats = [
  { v: '$76B', l: '24h Volume' },
  { v: '350+', l: 'Coins Listed' },
  { v: '120M+', l: 'Users' },
]

const buyOrders = [
  { price: '43,560', amount: '4.9938' },
  { price: '43,555', amount: '2.9611' },
  { price: '43,550', amount: '3.2772' },
]

const sellOrders = [
  { price: '43,570', amount: '4.2083' },
  { price: '43,575', amount: '3.6528' },
  { price: '43,580', amount: '4.0477' },
]

const markets = [
  { icon: 'BT', color: '#f7931a', sym: 'BTC', name: 'Bitcoin', price: '$43,567.80', change: '+2.34%', vol: '$28.5B', up: true },
  { icon: 'ET', color: '#627eea', sym: 'ETH', name: 'Ethereum', price: '$2,345.60', change: '+3.12%', vol: '$15.2B', up: true },
  { icon: 'BN', color: '#f0b90b', sym: 'BNB', name: 'BNB', price: '$312.45', change: '-0.89%', vol: '$1.8B', up: false },
  { icon: 'SO', color: '#14f195', sym: 'SOL', name: 'Solana', price: '$98.72', change: '+5.67%', vol: '$2.4B', up: true },
  { icon: 'XR', color: '#25a768', sym: 'XRP', name: 'Ripple', price: '$0.62', change: '-1.23%', vol: '$1.2B', up: false },
  { icon: 'AD', color: '#0033ad', sym: 'ADA', name: 'Cardano', price: '$0.58', change: '+1.45%', vol: '$890M', up: true },
]

const security = [
  { icon: 'lock', title: 'Cold Storage', desc: '95% of assets stored in offline cold wallets' },
  { icon: 'shield', title: 'SAFU Fund', desc: '$1B emergency insurance fund for users' },
  { icon: 'fingerprint', title: '2FA Security', desc: 'Multi-factor authentication on all accounts' },
  { icon: 'chart', title: 'Real-time Monitoring', desc: '24/7 security monitoring and threat detection' },
]

const secBadges = [
  { v: 'SOC 2', l: 'Type II Certified' },
  { v: 'ISO 27001', l: 'Certified' },
  { v: '$1B+', l: 'SAFU Fund' },
  { v: '0', l: 'Security Breaches' },
]

const footerCols = [
  { title: 'Products', links: ['Spot Trading', 'Futures', 'Margin', 'Earn'] },
  { title: 'Services', links: ['VIP', 'Referral', 'API', 'Launchpad'] },
  { title: 'Support', links: ['Help Center', 'Fees', 'Trading Rules', 'Status'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
]
</script>

<template>
  <div class="cex">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo">X</span>
          <span class="nav-name">XCHANGE</span>
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#markets">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Log In</a>
          <button class="btn btn-cta">Register</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">Trade Crypto with <b>Confidence</b></span>
            <h1>The world's most trusted cryptocurrency exchange.</h1>
            <p class="hero-sub">Trade 350+ coins with industry-leading security and lowest fees.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Get Started <DemoIcon name="arrow" :size="16" /></button>
            </div>
            <p class="hero-reward">Sign up and get <b>$100</b> in trading rewards</p>
            <div class="hero-stats">
              <div class="hstat" v-for="s in heroStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>

          <div class="terminal">
            <div class="term-head">
              <div>
                <div class="term-pair">BTC/USDT</div>
                <div class="term-price">$43,567.80 <span>+2.34%</span></div>
              </div>
              <div class="term-tabs"><button class="active">Spot</button><button>Futures</button></div>
            </div>
            <div class="orderbook">
              <div class="ob-col">
                <div class="ob-label green">Buy Orders</div>
                <div class="ob-row" v-for="o in buyOrders" :key="o.price">
                  <span class="ob-price green">{{ o.price }}</span>
                  <span class="ob-amt">{{ o.amount }}</span>
                </div>
              </div>
              <div class="ob-col">
                <div class="ob-label red">Sell Orders</div>
                <div class="ob-row" v-for="o in sellOrders" :key="o.price">
                  <span class="ob-price red">{{ o.price }}</span>
                  <span class="ob-amt">{{ o.amount }}</span>
                </div>
              </div>
            </div>
            <div class="term-actions">
              <button class="buy">Buy BTC</button>
              <button class="sell">Sell BTC</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ MARKETS ============ -->
    <section class="section" id="markets">
      <div class="container">
        <div class="sec-head">
          <div>
            <h2 class="h2">Markets</h2>
            <p class="sec-sub">Trade 350+ cryptocurrencies</p>
          </div>
          <button class="btn btn-outline">View All Markets</button>
        </div>
        <div class="market-table">
          <div class="mt-head">
            <span>Name</span><span>Price</span><span>24h Change</span><span>24h Volume</span><span></span>
          </div>
          <div class="mt-row" v-for="m in markets" :key="m.sym">
            <span class="mt-name"><i :style="{ background: m.color }">{{ m.icon }}</i><b>{{ m.sym }}</b><em>{{ m.name }}</em></span>
            <span class="mt-price">{{ m.price }}</span>
            <span class="mt-change" :class="m.up ? 'up' : 'down'">{{ m.change }}</span>
            <span class="mt-vol">{{ m.vol }}</span>
            <span class="mt-trade"><button class="btn btn-cta btn-sm">Trade</button></span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SECURITY ============ -->
    <section class="section section-alt" id="security">
      <div class="container center">
        <h2 class="h2">Industry-Leading <span class="accent">Security</span></h2>
        <p class="sec-sub">Your assets are protected by the most advanced security infrastructure in the industry.</p>
        <div class="security">
          <div class="sec-item" v-for="s in security" :key="s.title">
            <div class="si-icon"><DemoIcon :name="s.icon" :size="22" /></div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
        <div class="sec-badges">
          <div class="sb" v-for="b in secBadges" :key="b.l">
            <b>{{ b.v }}</b><span>{{ b.l }}</span>
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
              <span class="nav-logo">X</span>
              <span class="nav-name">XCHANGE</span>
            </a>
            <p>Trade crypto with confidence.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 XCHANGE. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Terms</a>
            <a href="javascript:;">Privacy</a>
            <a href="javascript:;">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.cex {
  --primary: #f0b90b;
  --cta: #0ecb81;
  --bg: #0b0e11;
  --bg-alt: #12161c;
  --card: #151a21;
  --border: #2b3139;
  --text: #eaecef;
  --muted: #848e9c;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.cex h1, .cex h2, .cex h3, .cex h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.cex p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(11, 14, 17, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: var(--primary); color: #0b0e11; font-weight: 800; font-size: 1.05rem; }
.nav-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--text); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.88rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.88rem; font-weight: 600; color: var(--muted); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 11px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #04140c; box-shadow: 0 10px 26px rgba(14, 203, 129, 0.24); }
.btn-cta:hover { background: #14e08e; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--muted); }
.btn-sm { padding: 7px 14px; font-size: 0.8rem; }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 40px; }
.hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.badge { display: inline-block; font-size: 0.9rem; color: var(--muted); margin-bottom: 20px; }
.badge b { color: var(--text); }
.hero-copy h1 { font-size: clamp(2rem, 4.4vw, 3.2rem); font-weight: 700; line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 18px; }
.hero-sub { font-size: 1.05rem; line-height: 1.6; color: var(--muted); margin-bottom: 26px; max-width: 440px; }
.hero-cta { margin-bottom: 16px; }
.hero-reward { font-size: 0.9rem; color: var(--muted); margin-bottom: 30px; }
.hero-reward b { color: var(--primary); }
.hero-stats { display: flex; gap: 40px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.7rem; font-weight: 700; }
.hstat span { font-size: 0.82rem; color: var(--muted); }

/* Terminal */
.terminal { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4); }
.term-head { display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; border-bottom: 1px solid var(--border); }
.term-pair { font-weight: 700; font-size: 1rem; }
.term-price { font-size: 1.5rem; font-weight: 700; letter-spacing: -0.01em; }
.term-price span { font-size: 0.85rem; color: var(--cta); font-weight: 600; }
.term-tabs { display: flex; gap: 6px; }
.term-tabs button { padding: 5px 12px; border-radius: 8px; border: none; cursor: pointer; font-size: 0.74rem; font-weight: 600; font-family: inherit; color: var(--muted); background: transparent; }
.term-tabs button.active { background: var(--primary); color: #0b0e11; }

.orderbook { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; padding: 16px 20px; }
.ob-label { font-size: 0.74rem; font-weight: 600; margin-bottom: 10px; }
.ob-label.green { color: var(--cta); }
.ob-label.red { color: #f6465d; }
.ob-row { display: flex; justify-content: space-between; padding: 6px 0; font-size: 0.82rem; }
.ob-price.green { color: var(--cta); }
.ob-price.red { color: #f6465d; }
.ob-amt { color: var(--muted); }

.term-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--border); }
.term-actions button { padding: 14px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; }
.term-actions .buy { background: var(--cta); color: #04140c; }
.term-actions .sell { background: #f6465d; color: #fff; }

/* Sections */
.section { padding: 72px 0; }
.section-alt { background: var(--bg-alt); }
.sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 32px; flex-wrap: wrap; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.3rem); font-weight: 700; letter-spacing: -0.01em; margin-bottom: 8px; }
.sec-sub { font-size: 1rem; color: var(--muted); max-width: 560px; margin: 0 auto; }
.sec-head .sec-sub { margin: 0; }

/* Market table */
.market-table { background: var(--bg-alt); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
.mt-head, .mt-row { display: grid; grid-template-columns: 2fr 1.2fr 1fr 1fr 0.8fr; gap: 12px; align-items: center; padding: 14px 20px; }
.mt-head { font-size: 0.76rem; color: var(--muted); font-weight: 600; border-bottom: 1px solid var(--border); }
.mt-row { border-bottom: 1px solid var(--border); font-size: 0.9rem; }
.mt-row:last-child { border-bottom: none; }
.mt-row:hover { background: rgba(255, 255, 255, 0.02); }
.mt-name { display: flex; align-items: center; gap: 10px; }
.mt-name i { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-size: 0.66rem; font-weight: 700; font-style: normal; flex-shrink: 0; }
.mt-name b { font-weight: 700; }
.mt-name em { font-style: normal; color: var(--muted); font-size: 0.82rem; }
.mt-price { font-weight: 600; }
.mt-change.up { color: var(--cta); font-weight: 600; }
.mt-change.down { color: #f6465d; font-weight: 600; }
.mt-vol { color: var(--muted); }
.mt-trade { text-align: right; }

/* Security */
.security { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; margin-bottom: 40px; }
.sec-item { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 24px; }
.si-icon { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; background: rgba(240, 185, 11, 0.12); color: var(--primary); margin-bottom: 16px; }
.sec-item h3 { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
.sec-item p { font-size: 0.85rem; color: var(--muted); line-height: 1.5; }
.sec-badges { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 760px; margin: 0 auto; }
.sb { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 20px; display: flex; flex-direction: column; gap: 5px; }
.sb b { font-size: 1.4rem; font-weight: 700; color: var(--primary); }
.sb span { font-size: 0.78rem; color: var(--muted); }
.accent { color: var(--primary); }

/* Footer */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 40px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); }
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
  .security { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .security { grid-template-columns: 1fr; }
  .sec-badges { grid-template-columns: repeat(2, 1fr); }
  .mt-head, .mt-row { grid-template-columns: 1.6fr 1fr 1fr; }
  .mt-head span:nth-child(4), .mt-row .mt-vol, .mt-head span:last-child, .mt-row .mt-trade { display: none; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
