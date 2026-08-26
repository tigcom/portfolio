<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Features', 'Chains', 'Security', 'Download']

const chains = [
  { icon: 'E', color: '#627eea', name: 'Ethereum' },
  { icon: 'B', color: '#f7931a', name: 'Bitcoin' },
  { icon: 'S', color: '#14f195', name: 'Solana' },
  { icon: 'P', color: '#8247e5', name: 'Polygon' },
  { icon: 'A', color: '#12aaff', name: 'Arbitrum' },
]

const walletActions = [
  { icon: 'up', label: 'Send' },
  { icon: 'down', label: 'Receive' },
  { icon: 'sync', label: 'Swap' },
  { icon: 'arrow', label: 'Bridge' },
]

const assets = [
  { icon: 'B', color: '#f7931a', sym: 'BTC', amount: '1.2456', value: '$54,234.50', change: '+5.2%', up: true },
  { icon: 'E', color: '#627eea', sym: 'ETH', amount: '12.8', value: '$28,672.00', change: '+3.8%', up: true },
  { icon: 'S', color: '#14f195', sym: 'SOL', amount: '156.4', value: '$15,640.00', change: '-1.2%', up: false },
]

const features = [
  { icon: 'lock', color: '#00d4ff', title: 'Non-Custodial', desc: 'You control your private keys. Your crypto never leaves your wallet.' },
  { icon: 'sync', color: '#7b61ff', title: 'Cross-Chain Swaps', desc: 'Swap tokens across 50+ blockchains with the best rates, no bridges needed.' },
  { icon: 'card', color: '#ff6b6b', title: 'Hardware Wallet Support', desc: 'Connect Ledger, Trezor, and other hardware wallets for maximum security.' },
  { icon: 'zap', color: '#00d4ff', title: 'Instant Transactions', desc: 'Lightning-fast transactions with optimized gas fees across all networks.' },
  { icon: 'globe', color: '#7b61ff', title: 'DApp Browser', desc: 'Access DeFi, NFTs, and Web3 apps directly from your wallet.' },
  { icon: 'chart', color: '#ff6b6b', title: 'Staking & Earn', desc: 'Stake your assets and earn rewards directly in your wallet.' },
]

const chainCards = [
  { icon: 'ET', color: '#627eea', name: 'Ethereum', tvl: '$45.2B' },
  { icon: 'BT', color: '#f7931a', name: 'Bitcoin', tvl: '$38.1B' },
  { icon: 'SO', color: '#14f195', name: 'Solana', tvl: '$12.4B' },
  { icon: 'MA', color: '#8247e5', name: 'Polygon', tvl: '$8.7B' },
  { icon: 'AR', color: '#12aaff', name: 'Arbitrum', tvl: '$6.2B' },
  { icon: 'AV', color: '#e84142', name: 'Avalanche', tvl: '$4.8B' },
  { icon: 'BN', color: '#f0b90b', name: 'BNB Chain', tvl: '$3.9B' },
  { icon: 'OP', color: '#ff0420', name: 'Optimism', tvl: '$2.1B' },
]

const security = [
  { icon: 'lock', title: 'Non-Custodial Architecture', desc: 'Private keys stored locally, encrypted with your password' },
  { icon: 'fingerprint', title: 'Biometric Authentication', desc: 'Face ID, Touch ID, and fingerprint support' },
  { icon: 'card', title: 'Hardware Wallet Integration', desc: 'Connect Ledger, Trezor, and other cold wallets' },
  { icon: 'shield', title: 'Transaction Simulation', desc: 'Preview transactions before signing to prevent scams' },
  { icon: 'check-circle', title: 'Open Source & Audited', desc: 'Code audited by leading security firms' },
]

const secStats = [
  { label: 'Encryption', value: 'AES-256' },
  { label: '2FA', value: 'Enabled' },
  { label: 'Backup', value: 'Verified' },
  { label: 'Last Audit', value: 'Dec 2024' },
]

const downloads = [
  { icon: 'apple', label: 'iOS' },
  { icon: 'zap', label: 'Android' },
  { icon: 'globe', label: 'Chrome' },
  { icon: 'image', label: 'Desktop' },
]

const dlStats = [
  { v: '2M+', l: 'Downloads' },
  { v: '4.9', l: 'App Rating' },
  { v: '$10B+', l: 'Assets Secured' },
]

const footerCols = [
  { title: 'Product', links: ['Features', 'Security', 'Chains', 'Download'] },
  { title: 'Resources', links: ['Docs', 'API', 'Support', 'Status'] },
  { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Bug Bounty'] },
]
</script>

<template>
  <div class="vault">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="wallet" :size="16" /></span>
          VaultX
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#features">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-cta">Launch App</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge"><DemoIcon name="lock" :size="14" /> Secure &amp; Non-Custodial</span>
            <h1>Your Keys, Your <span class="grad">Crypto</span></h1>
            <p class="hero-sub">The most secure multi-chain wallet. Store, swap, and manage your digital assets across 50+ blockchains with complete control.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Download Wallet</button>
              <button class="btn btn-outline">Web App</button>
            </div>
            <div class="hero-chains">
              <span class="hc" v-for="c in chains" :key="c.name">
                <i :style="{ background: c.color }">{{ c.icon }}</i>{{ c.name }}
              </span>
              <span class="hc more">+45</span>
            </div>
          </div>

          <div class="wallet-wrap">
            <div class="wallet">
              <div class="w-balance-label">Total Balance</div>
              <div class="w-balance">$98,546.50 <span>+4.32% today</span></div>
              <div class="w-actions">
                <button v-for="a in walletActions" :key="a.label">
                  <span class="wa-icon"><DemoIcon :name="a.icon" :size="17" /></span>{{ a.label }}
                </button>
              </div>
              <div class="w-assets">
                <div class="w-asset" v-for="a in assets" :key="a.sym">
                  <span class="w-coin" :style="{ background: a.color }">{{ a.icon }}</span>
                  <div class="w-meta">
                    <b>{{ a.sym }}</b><span>{{ a.amount }}</span>
                  </div>
                  <div class="w-val">
                    <b>{{ a.value }}</b>
                    <span :class="a.up ? 'up' : 'down'">{{ a.change }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="toast">
              <DemoIcon name="sync" :size="15" />
              <span><b>Swap Complete</b> 0.5 ETH → 1,250 USDC</span>
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
        <h2 class="h2">Everything You Need in a <span class="grad">Wallet</span></h2>
        <p class="sec-sub">Powerful features for managing your digital assets securely.</p>
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

    <!-- ============ MULTI-CHAIN ============ -->
    <section class="section section-alt" id="chains">
      <div class="container center">
        <span class="eyebrow">Multi-Chain</span>
        <h2 class="h2">50+ Blockchains, <span class="grad">One Wallet</span></h2>
        <p class="sec-sub">Manage all your assets across every major blockchain from a single interface.</p>
        <div class="chains">
          <div class="chain" v-for="c in chainCards" :key="c.name">
            <span class="ch-icon" :style="{ background: c.color }">{{ c.icon }}</span>
            <b>{{ c.name }}</b>
            <span class="ch-tvl">{{ c.tvl }} <i>TVL</i></span>
          </div>
        </div>
        <button class="btn btn-outline">View All 50+ Chains</button>
      </div>
    </section>

    <!-- ============ SECURITY ============ -->
    <section class="section" id="security">
      <div class="container">
        <div class="sec-grid">
          <div class="sec-copy">
            <span class="eyebrow">Security First</span>
            <h2 class="h2">Your Assets, <span class="grad">Protected</span></h2>
            <p>Industry-leading security measures to keep your crypto safe. Your keys never leave your device.</p>
            <div class="sec-points">
              <div class="sec-point" v-for="s in security" :key="s.title">
                <span class="sp-icon"><DemoIcon :name="s.icon" :size="18" /></span>
                <div><b>{{ s.title }}</b><p>{{ s.desc }}</p></div>
              </div>
            </div>
          </div>
          <div class="sec-card">
            <div class="sc-score">
              <div class="sc-ring"><b>98</b><span>/100</span></div>
              <div><h3>Security Score</h3><p>Excellent Protection</p></div>
            </div>
            <div class="sc-row" v-for="s in secStats" :key="s.label">
              <span>{{ s.label }}</span><b>{{ s.value }}</b>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ DOWNLOAD ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Start Your <span class="grad">Crypto Journey</span></h2>
        <p class="sec-sub">Download VaultX and take control of your digital assets. Available on all platforms.</p>
        <div class="downloads">
          <button class="dl" v-for="d in downloads" :key="d.label">
            <span class="dl-icon"><DemoIcon :name="d.icon" :size="20" /></span>
            <div><b>Download for</b>{{ d.label }}</div>
          </button>
        </div>
        <div class="dl-stats">
          <div class="dl-stat" v-for="s in dlStats" :key="s.l">
            <b>{{ s.v }}</b><span>{{ s.l }}</span>
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
              VaultX
            </a>
            <p>Your keys, your crypto.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 VaultX. All rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.vault {
  --primary: #00d4ff;
  --secondary: #7b61ff;
  --cta: #ff6b6b;
  --success: #00ff88;
  --bg: #0a0e17;
  --bg-alt: #0e1320;
  --card: rgba(255, 255, 255, 0.04);
  --border: rgba(255, 255, 255, 0.1);
  --text: #ffffff;
  --muted: #94a3b8;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.vault h1, .vault h2, .vault h3, .vault h4 {
  font-family: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.vault p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(10, 14, 23, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.88rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(255, 107, 107, 0.28); }
.btn-cta:hover { background: #ff7f7f; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--muted); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 40px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 15px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.2); }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.75rem); font-weight: 700; line-height: 1.06; letter-spacing: -0.02em; margin-bottom: 20px; }
.grad { background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 28px; }
.hero-chains { display: flex; flex-wrap: wrap; gap: 10px; }
.hc { display: inline-flex; align-items: center; gap: 7px; padding: 7px 13px; border-radius: 10px; background: var(--card); border: 1px solid var(--border); font-size: 0.8rem; font-weight: 600; }
.hc i { width: 22px; height: 22px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-style: normal; font-size: 0.66rem; font-weight: 700; }
.hc.more { color: var(--muted); font-weight: 500; }

/* Wallet card */
.wallet-wrap { position: relative; display: flex; justify-content: center; }
.glow { position: absolute; width: 260px; height: 260px; border-radius: 50%; filter: blur(110px); }
.g1 { top: -20px; left: 0; background: var(--primary); opacity: 0.22; }
.g2 { bottom: -20px; right: 0; background: var(--secondary); opacity: 0.2; }
.wallet { position: relative; z-index: 2; width: 360px; background: var(--bg-alt); border: 1px solid var(--border); border-radius: 20px; padding: 24px; box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5); }
.w-balance-label { font-size: 0.76rem; color: var(--muted); }
.w-balance { font-size: 2rem; font-weight: 700; letter-spacing: -0.02em; margin: 4px 0 20px; }
.w-balance span { font-size: 0.85rem; color: var(--success); font-weight: 600; margin-left: 8px; }
.w-actions { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 20px; }
.w-actions button { display: flex; flex-direction: column; align-items: center; gap: 7px; background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 12px 4px; color: var(--muted); font-size: 0.7rem; font-weight: 600; cursor: pointer; font-family: inherit; }
.wa-icon { width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center; background: rgba(0, 212, 255, 0.14); color: var(--primary); }
.w-assets { display: flex; flex-direction: column; gap: 4px; }
.w-asset { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 12px; }
.w-asset:hover { background: var(--card); }
.w-coin { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 0.82rem; flex-shrink: 0; }
.w-meta { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.w-meta b { font-size: 0.9rem; }
.w-meta span { font-size: 0.76rem; color: var(--muted); }
.w-val { text-align: right; display: flex; flex-direction: column; gap: 2px; }
.w-val b { font-size: 0.9rem; }
.w-val span { font-size: 0.76rem; font-weight: 600; }
.w-val span.up { color: var(--success); }
.w-val span.down { color: #ff6b6b; }

.toast {
  position: absolute; z-index: 3; bottom: 40px; right: -20px;
  display: flex; align-items: center; gap: 8px;
  background: #10182a; border: 1px solid var(--border);
  padding: 11px 14px; border-radius: 12px; font-size: 0.78rem;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
}
.toast svg { color: var(--success); }
.toast b { font-weight: 700; }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin-bottom: 14px; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Features */
.features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.feature { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; transition: border-color 0.2s, transform 0.2s; }
.feature:hover { border-color: var(--primary); transform: translateY(-3px); }
.f-icon { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; margin-bottom: 16px; }
.feature h3 { font-size: 1.04rem; font-weight: 600; margin-bottom: 8px; }
.feature p { font-size: 0.87rem; color: var(--muted); line-height: 1.55; }

/* Chains */
.chains { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 40px; }
.chain { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 22px; display: flex; flex-direction: column; align-items: flex-start; gap: 8px; transition: border-color 0.2s; }
.chain:hover { border-color: var(--primary); }
.ch-icon { width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; color: #fff; font-weight: 700; font-size: 0.72rem; margin-bottom: 4px; }
.chain b { font-size: 0.95rem; font-weight: 600; }
.ch-tvl { font-size: 0.82rem; color: var(--muted); }
.ch-tvl i { font-style: normal; opacity: 0.6; }

/* Security */
.sec-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.sec-copy .h2 { margin-bottom: 16px; }
.sec-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 28px; max-width: 480px; }
.sec-points { display: flex; flex-direction: column; gap: 18px; }
.sec-point { display: flex; gap: 14px; align-items: flex-start; }
.sp-icon { width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0; display: grid; place-items: center; background: rgba(0, 212, 255, 0.14); color: var(--primary); }
.sec-point b { display: block; font-size: 0.95rem; font-weight: 600; margin-bottom: 3px; }
.sec-point p { font-size: 0.84rem; color: var(--muted); line-height: 1.5; }

.sec-card { background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; }
.sc-score { display: flex; align-items: center; gap: 16px; padding-bottom: 20px; margin-bottom: 8px; border-bottom: 1px solid var(--border); }
.sc-ring { width: 66px; height: 66px; border-radius: 50%; display: grid; place-items: center; background: conic-gradient(var(--primary) 0 98%, var(--border) 98% 100%); position: relative; flex-shrink: 0; }
.sc-ring::before { content: ''; position: absolute; inset: 6px; border-radius: 50%; background: #0e1320; }
.sc-ring b { position: relative; font-size: 1.2rem; font-weight: 700; }
.sc-ring span { position: relative; font-size: 0.6rem; color: var(--muted); }
.sc-score h3 { font-size: 1.1rem; font-weight: 700; }
.sc-score p { font-size: 0.8rem; color: var(--success); font-weight: 600; }
.sc-row { display: flex; align-items: center; justify-content: space-between; padding: 13px 0; border-bottom: 1px solid var(--border); font-size: 0.88rem; color: var(--muted); }
.sc-row:last-child { border-bottom: none; }
.sc-row b { color: var(--text); font-weight: 600; }

/* Download */
.final { padding: 84px 0; }
.downloads { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; margin-bottom: 40px; }
.dl { display: flex; align-items: center; gap: 12px; padding: 14px 20px; border-radius: 14px; background: var(--card); border: 1px solid var(--border); color: var(--text); cursor: pointer; font-family: inherit; }
.dl:hover { border-color: var(--primary); }
.dl-icon { width: 40px; height: 40px; border-radius: 11px; display: grid; place-items: center; background: rgba(0, 212, 255, 0.14); color: var(--primary); flex-shrink: 0; }
.dl b { display: block; font-size: 0.66rem; font-weight: 500; color: var(--muted); }
.dl > div { font-size: 0.95rem; font-weight: 700; }
.dl-stats { display: flex; justify-content: center; gap: 48px; }
.dl-stat { display: flex; flex-direction: column; gap: 4px; }
.dl-stat b { font-size: 1.7rem; font-weight: 700; }
.dl-stat span { font-size: 0.82rem; color: var(--muted); }

/* Footer */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 40px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); font-size: 0.82rem; color: var(--muted); }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid, .sec-grid { grid-template-columns: 1fr; }
  .features { grid-template-columns: repeat(2, 1fr); }
  .chains { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .features { grid-template-columns: 1fr; }
  .chains { grid-template-columns: 1fr 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
