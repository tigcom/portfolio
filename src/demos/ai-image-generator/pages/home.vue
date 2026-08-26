<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const navLinks = ['Gallery', 'Styles', 'Pricing', 'API']

const suggestions = ['Cosmic nebula', 'Anime character', 'Oil painting landscape', '3D render']
const styleChips = ['Fantasy Art', 'Sci-Fi', 'Abstract', 'Realistic']

const stats = [
  { v: '10M+', l: 'Images Created' },
  { v: '500K+', l: 'Active Users' },
  { v: '50+', l: 'Art Styles' },
  { v: '< 10s', l: 'Generation Time' },
]

const gallery = [
  { cat: 'Fantasy', prompt: 'Ethereal goddess emerging from cosmic nebula, digital art', likes: '2,847', grad: 'linear-gradient(135deg, #7c3aed, #db2777)' },
  { cat: 'Cyberpunk', prompt: 'Futuristic Tokyo street at night, neon lights, rain reflections', likes: '3,521', grad: 'linear-gradient(135deg, #06b6d4, #2563eb)' },
  { cat: 'Fantasy', prompt: 'Majestic dragon perched on mountain peak, sunset', likes: '4,102', grad: 'linear-gradient(135deg, #f97316, #ef4444)' },
  { cat: 'Abstract', prompt: 'Abstract fluid art, gold and marble textures', likes: '1,893', grad: 'linear-gradient(135deg, #f59e0b, #a16207)' },
  { cat: 'Realistic', prompt: 'Serene Japanese temple in cherry blossom garden', likes: '2,156', grad: 'linear-gradient(135deg, #ec4899, #f472b6)' },
  { cat: 'Steampunk', prompt: 'Steampunk mechanical owl, intricate gears, brass details', likes: '2,734', grad: 'linear-gradient(135deg, #b45309, #78350f)' },
  { cat: 'Sci-Fi', prompt: 'Underwater city with bioluminescent creatures', likes: '3,089', grad: 'linear-gradient(135deg, #0ea5e9, #0e7490)' },
  { cat: 'Portrait', prompt: 'Portrait of a warrior queen, oil painting style', likes: '2,567', grad: 'linear-gradient(135deg, #a855f7, #6d28d9)' },
]

const styleCats = ['Artistic', 'Digital Art', 'Photography', 'Fantasy & Sci-Fi']
const styles = [
  { emoji: '🎨', name: 'Oil Painting', cta: 'Click to apply' },
  { emoji: '💧', name: 'Watercolor', cta: 'Click to apply' },
  { emoji: '✏️', name: 'Pencil Sketch', cta: 'Click to apply' },
  { emoji: '🖼️', name: 'Impressionist', cta: 'Click to apply' },
]
const mixPoints = ['Mix up to 3 styles together', 'Adjust style strength (0-100%)', 'Custom aspect ratios', 'Negative prompts for exclusions']
const styleMix = ['Fantasy + Oil', 'Anime + Neon', '3D + Cyberpunk', 'Watercolor + Portrait']

const promptGroups = [
  { title: 'Characters', prompts: [
    { text: 'A wise old wizard with a long silver beard, holding a glowing staff, standing in an ancient library filled with floating books', tags: ['Fantasy', 'Character', 'Detailed'] },
    { text: 'Cyberpunk samurai with neon armor, katana reflecting city lights, rain-soaked streets of Neo Tokyo', tags: ['Sci-Fi', 'Action', 'Atmospheric'] },
    { text: 'Elegant elven princess with flowing silver hair, wearing a dress made of moonlight and starlight', tags: ['Fantasy', 'Portrait', 'Ethereal'] },
  ] },
  { title: 'Landscapes', prompts: [
    { text: 'Floating islands in a sunset sky, waterfalls cascading into clouds, ancient temples perched on cliffsides', tags: ['Fantasy', 'Epic', 'Colorful'] },
    { text: 'Bioluminescent forest at midnight, glowing mushrooms and fireflies, mystical fog rolling through ancient trees', tags: ['Nature', 'Magical', 'Dark'] },
    { text: 'Abandoned space station orbiting a dying star, debris field, dramatic lighting through broken windows', tags: ['Sci-Fi', 'Moody', 'Cinematic'] },
  ] },
  { title: 'Abstract', prompts: [
    { text: 'Liquid gold and marble swirling together, luxury abstract art, high contrast, metallic textures', tags: ['Abstract', 'Luxury', 'Texture'] },
    { text: 'Geometric explosion of colors, sacred geometry patterns, mandala-inspired, vibrant neon palette', tags: ['Geometric', 'Colorful', 'Spiritual'] },
    { text: 'Cosmic nebula forming the shape of a phoenix, stardust and galaxies, deep space colors', tags: ['Space', 'Symbolic', 'Epic'] },
  ] },
]

const tips = [
  { icon: 'search', title: 'Be Specific', desc: 'Include details about lighting, mood, style, and composition for better results.' },
  { icon: 'user', title: 'Reference Artists', desc: "Mention art styles or artists like 'in the style of Studio Ghibli' or 'Monet-inspired'." },
  { icon: 'sync', title: 'Iterate & Refine', desc: 'Generate multiple variations and refine your prompt based on what works best.' },
]

const plans = [
  { name: 'Free', price: 0, credits: 50, desc: 'Perfect for trying out ImagineAI', feats: ['50 credits/month', 'Standard quality (512x512)', '5 styles available', 'Community gallery access', 'Watermarked images'], popular: false, cta: 'Get Started' },
  { name: 'Creator', price: 12, credits: 500, desc: 'For hobbyists and content creators', feats: ['500 credits/month', 'HD quality (1024x1024)', 'All 50+ styles', 'No watermarks', 'Priority generation', 'Commercial license'], popular: true, cta: 'Start Creating' },
  { name: 'Pro', price: 39, credits: 2000, desc: 'For professionals and studios', feats: ['2000 credits/month', '4K quality (2048x2048)', 'All styles + early access', 'API access', 'Batch generation', 'Private gallery', 'Priority support'], popular: false, cta: 'Go Pro' },
  { name: 'Enterprise', price: 'Custom', credits: 'Unlimited', desc: 'For teams and businesses', feats: ['Unlimited credits', 'Custom model training', 'Dedicated infrastructure', 'SLA guarantee', 'Account manager', 'Custom integrations'], popular: false, cta: 'Contact Sales' },
]

const creditPacks = [
  { credits: 100, price: 5, rate: '$0.05', best: false },
  { credits: 500, price: 20, rate: '$0.04', best: true },
  { credits: 1000, price: 35, rate: '$0.035', best: false },
  { credits: 5000, price: 150, rate: '$0.03', best: false },
]

const footerCols = [
  { title: 'Product', links: ['Gallery', 'Styles', 'Pricing', 'API', 'Changelog'] },
  { title: 'Resources', links: ['Documentation', 'Prompt Guide', 'Tutorials', 'Blog', 'Community'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { title: 'Legal', links: ['Privacy', 'Terms', 'Content Policy'] },
]
</script>

<template>
  <div class="img">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="image" :size="16" /></span>
          ImagineAI
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#gallery">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <a href="javascript:;" class="nav-signin">Sign In</a>
          <button class="btn btn-cta">Start Creating</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container center">
        <span class="badge"><DemoIcon name="spark" :size="14" /> Powered by Stable Diffusion XL</span>
        <h1>Turn Words Into <span class="grad">Stunning Art</span></h1>
        <p class="hero-sub">Create breathtaking images from text in seconds. No design skills needed — just describe your vision.</p>
        <div class="prompt-bar">
          <input type="text" placeholder="Describe your image..." />
          <button class="btn btn-cta">Generate</button>
        </div>
        <div class="try-row"><span>Try:</span><a v-for="s in suggestions" :key="s" href="javascript:;">{{ s }}</a></div>
        <div class="style-chips">
          <span v-for="s in styleChips" :key="s">{{ s }}</span>
        </div>
        <div class="stats">
          <div class="stat" v-for="s in stats" :key="s.l"><b>{{ s.v }}</b><span>{{ s.l }}</span></div>
        </div>
      </div>
    </section>

    <!-- ============ GALLERY ============ -->
    <section class="section" id="gallery">
      <div class="container center">
        <span class="eyebrow">Community Gallery</span>
        <h2 class="h2">Explore <span class="grad">Amazing Creations</span></h2>
        <p class="sec-sub">Get inspired by what our community has created. Click any image to use its prompt.</p>
        <div class="gallery">
          <div class="g-card" v-for="g in gallery" :key="g.prompt">
            <div class="g-img" :style="{ background: g.grad }"></div>
            <div class="g-meta">
              <span class="g-cat">{{ g.cat }}</span>
              <span class="g-likes"><DemoIcon name="heart" :size="13" />{{ g.likes }}</span>
            </div>
            <p class="g-prompt">{{ g.prompt }}</p>
          </div>
        </div>
        <button class="btn btn-outline">View More</button>
      </div>
    </section>

    <!-- ============ STYLES ============ -->
    <section class="section section-alt">
      <div class="container center">
        <span class="eyebrow">Art Styles</span>
        <h2 class="h2">Choose Your <span class="grad">Creative Style</span></h2>
        <p class="sec-sub">Over 50 unique art styles to transform your ideas into stunning visuals.</p>
        <div class="style-cats">
          <span v-for="c in styleCats" :key="c">{{ c }}</span>
        </div>
        <div class="styles">
          <div class="style-card" v-for="s in styles" :key="s.name">
            <span class="sc-emoji">{{ s.emoji }}</span>
            <b>{{ s.name }}</b>
            <span class="sc-cta">{{ s.cta }}</span>
          </div>
        </div>
        <div class="mix-card">
          <div class="mix-copy">
            <h3>Style Mixing &amp; Customization</h3>
            <p>Combine multiple styles, adjust intensity, and fine-tune parameters to create truly unique artwork that matches your vision.</p>
            <ul>
              <li v-for="m in mixPoints" :key="m"><DemoIcon name="check" :size="16" />{{ m }}</li>
            </ul>
          </div>
          <div class="mix-chips">
            <span v-for="m in styleMix" :key="m">{{ m }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROMPT LIBRARY ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Prompt Library</span>
        <h2 class="h2">Master the Art of <span class="grad">Prompting</span></h2>
        <p class="sec-sub">Learn from our curated collection of prompts. Click any to use it as a starting point.</p>
        <div class="prompt-groups">
          <div class="pg" v-for="g in promptGroups" :key="g.title">
            <h3 class="pg-title">{{ g.title }}</h3>
            <div class="prompt-card" v-for="p in g.prompts" :key="p.text">
              <p class="pc-text">“{{ p.text }}”</p>
              <div class="pc-tags">
                <span v-for="t in p.tags" :key="t">{{ t }}</span>
              </div>
              <button class="pc-use">Use this prompt</button>
            </div>
          </div>
        </div>
        <div class="tips">
          <div class="tip" v-for="t in tips" :key="t.title">
            <div class="tip-icon"><DemoIcon :name="t.icon" :size="20" /></div>
            <h3>{{ t.title }}</h3>
            <p>{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PRICING ============ -->
    <section class="section section-alt" id="pricing">
      <div class="container center">
        <span class="eyebrow">Pricing</span>
        <h2 class="h2">Simple <span class="grad">Credit-Based</span> Pricing</h2>
        <p class="sec-sub">Pay only for what you create. 1 credit = 1 image generation.</p>
        <div class="plans">
          <div class="plan" v-for="p in plans" :key="p.name" :class="{ popular: p.popular }">
            <span v-if="p.popular" class="plan-badge">Most Popular</span>
            <h3>{{ p.name }}</h3>
            <div class="plan-price"><b v-if="p.price !== 'Custom'">${{ p.price }}</b><b v-else>{{ p.price }}</b><span>/month</span></div>
            <div class="plan-credits"><b>{{ p.credits }}</b> credits</div>
            <p class="plan-desc">{{ p.desc }}</p>
            <ul>
              <li v-for="f in p.feats" :key="f"><DemoIcon name="check" :size="15" />{{ f }}</li>
            </ul>
            <button class="btn" :class="p.popular ? 'btn-cta' : 'btn-outline'">{{ p.cta }}</button>
          </div>
        </div>

        <h3 class="pack-title">Need More Credits?</h3>
        <p class="pack-sub">Purchase additional credit packs anytime. Credits never expire.</p>
        <div class="packs">
          <div class="pack" v-for="c in creditPacks" :key="c.credits" :class="{ best: c.best }">
            <span v-if="c.best" class="pack-badge">Best Value</span>
            <b class="pack-credits">{{ c.credits }}</b>
            <span class="pack-label">credits</span>
            <div class="pack-price">${{ c.price }}</div>
            <span class="pack-rate">{{ c.rate }}/credit</span>
          </div>
        </div>
        <p class="faq">Questions about credits? <a href="javascript:;">Read our FAQ</a></p>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready to Create Something <span class="grad">Amazing?</span></h2>
        <p class="sec-sub">Join millions of creators using ImagineAI to bring their ideas to life. Start with 50 free credits — no credit card required.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Start Creating Free</button>
          <button class="btn btn-outline">View API Docs</button>
        </div>
        <div class="final-note">
          <span><DemoIcon name="check" :size="14" />50 free credits</span>
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
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="image" :size="16" /></span>
              ImagineAI
            </a>
            <p>Transform your imagination into stunning visuals with AI.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 ImagineAI. All rights reserved.</span>
          <span>Made with AI + Human Creativity</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@600;700;800&display=swap');

.img {
  --primary: #a855f7;
  --secondary: #06b6d4;
  --cta: #a855f7;
  --bg: #0a0e1a;
  --bg-alt: #0e1322;
  --card: #121829;
  --border: #374151;
  --text: #f9fafb;
  --muted: #9ca3af;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.img h1, .img h2, .img h3, .img h4 {
  font-family: 'Syne', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.img p { margin: 0; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(10, 14, 26, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.1rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 9px; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }
.nav-signin { font-size: 0.9rem; font-weight: 600; color: var(--muted); text-decoration: none; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: transform 0.15s, background 0.2s, box-shadow 0.2s; }
.btn:active { transform: translateY(1px); }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(168, 85, 247, 0.3); }
.btn-cta:hover { background: #9333ea; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--muted); }
.nav .btn-cta { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.badge { display: inline-flex; align-items: center; gap: 8px; padding: 7px 15px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--secondary); background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.22); }
.hero h1 { font-size: clamp(2.3rem, 5.2vw, 3.8rem); font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; margin-bottom: 20px; }
.grad { background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; }
.hero-sub { max-width: 560px; margin: 0 auto 28px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); }
.prompt-bar { display: flex; gap: 10px; max-width: 560px; margin: 0 auto 18px; }
.prompt-bar input { flex: 1; padding: 14px 18px; border-radius: 12px; background: var(--card); border: 1px solid var(--border); color: var(--text); font-family: inherit; font-size: 0.92rem; }
.prompt-bar input::placeholder { color: var(--muted); }
.prompt-bar input:focus { outline: none; border-color: var(--primary); }
.try-row { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 10px; font-size: 0.82rem; color: var(--muted); margin-bottom: 20px; }
.try-row a { color: var(--secondary); text-decoration: none; }
.style-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 40px; }
.style-chips span { padding: 8px 18px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); font-size: 0.85rem; font-weight: 600; color: var(--text); }
.stats { display: flex; flex-wrap: wrap; justify-content: center; gap: 48px; }
.stat { display: flex; flex-direction: column; gap: 4px; }
.stat b { font-size: 1.9rem; font-weight: 700; }
.stat span { font-size: 0.85rem; color: var(--muted); }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.85rem; font-weight: 600; color: var(--secondary); margin-bottom: 14px; }
.h2 { font-size: clamp(1.6rem, 3.4vw, 2.4rem); font-weight: 700; letter-spacing: -0.01em; margin: 0 0 14px; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Gallery */
.gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 40px; text-align: left; }
.g-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: transform 0.2s, border-color 0.2s; }
.g-card:hover { transform: translateY(-3px); border-color: var(--primary); }
.g-img { height: 150px; }
.g-meta { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px 4px; }
.g-cat { font-size: 0.72rem; font-weight: 700; color: var(--secondary); text-transform: uppercase; letter-spacing: 0.03em; }
.g-likes { display: inline-flex; align-items: center; gap: 5px; font-size: 0.78rem; color: var(--muted); }
.g-likes svg { color: #f87171; }
.g-prompt { padding: 0 14px 14px; font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

/* Styles */
.style-cats { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 30px; }
.style-cats span { padding: 7px 16px; border-radius: 999px; background: var(--card); border: 1px solid var(--border); font-size: 0.82rem; color: var(--muted); }
.styles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin-bottom: 40px; text-align: left; }
.style-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; display: flex; flex-direction: column; gap: 8px; }
.sc-emoji { font-size: 2rem; }
.style-card b { font-size: 1rem; font-weight: 600; }
.sc-cta { font-size: 0.78rem; color: var(--muted); }

.mix-card { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px; align-items: center; text-align: left; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 32px; }
.mix-copy h3 { font-size: 1.3rem; font-weight: 700; margin-bottom: 12px; }
.mix-copy p { color: var(--muted); margin-bottom: 18px; line-height: 1.6; }
.mix-copy ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
.mix-copy li { display: flex; align-items: center; gap: 9px; font-size: 0.88rem; color: var(--text); }
.mix-copy li svg { color: var(--secondary); flex-shrink: 0; }
.mix-chips { display: flex; flex-wrap: wrap; gap: 10px; }
.mix-chips span { padding: 9px 16px; border-radius: 999px; background: rgba(168, 85, 247, 0.14); border: 1px solid rgba(168, 85, 247, 0.3); color: var(--primary); font-size: 0.85rem; font-weight: 600; }

/* Prompt library */
.prompt-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; margin-bottom: 40px; }
.pg-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; }
.prompt-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 18px; margin-bottom: 14px; }
.pc-text { font-size: 0.86rem; color: var(--text); line-height: 1.55; margin-bottom: 12px; font-style: italic; }
.pc-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.pc-tags span { padding: 4px 10px; border-radius: 999px; background: var(--bg-alt); border: 1px solid var(--border); font-size: 0.7rem; color: var(--muted); }
.pc-use { padding: 7px 14px; border-radius: 9px; background: var(--primary); color: #fff; border: none; font-size: 0.78rem; font-weight: 600; cursor: pointer; font-family: inherit; }

.tips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.tip { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; }
.tip-icon { width: 44px; height: 44px; border-radius: 11px; display: grid; place-items: center; background: rgba(6, 182, 212, 0.12); color: var(--secondary); margin-bottom: 14px; }
.tip h3 { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
.tip p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* Pricing */
.plans { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: stretch; text-align: left; margin-bottom: 48px; }
.plan { position: relative; display: flex; flex-direction: column; background: var(--card); border: 1px solid var(--border); border-radius: 18px; padding: 26px; }
.plan.popular { border: 2px solid var(--primary); box-shadow: 0 24px 50px rgba(168, 85, 247, 0.16); }
.plan-badge { position: absolute; top: -13px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 0.72rem; font-weight: 700; padding: 5px 14px; border-radius: 999px; white-space: nowrap; }
.plan h3 { font-size: 1.05rem; font-weight: 600; margin-bottom: 8px; }
.plan-price { display: flex; align-items: baseline; gap: 6px; margin-bottom: 4px; }
.plan-price b { font-size: 2rem; font-weight: 700; }
.plan-price span { color: var(--muted); }
.plan-credits { font-size: 0.85rem; color: var(--secondary); font-weight: 600; margin-bottom: 12px; }
.plan-credits b { font-size: 1rem; }
.plan-desc { font-size: 0.82rem; color: var(--muted); margin-bottom: 16px; }
.plan ul { list-style: none; margin: 0 0 22px; padding: 0; display: flex; flex-direction: column; gap: 9px; flex: 1; }
.plan li { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--muted); }
.plan li svg { color: var(--secondary); flex-shrink: 0; }
.plan .btn { width: 100%; }

.pack-title { font-size: 1.3rem; font-weight: 700; margin-bottom: 8px; }
.pack-sub { font-size: 0.9rem; color: var(--muted); margin-bottom: 28px; }
.packs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; max-width: 760px; margin: 0 auto 24px; }
.pack { position: relative; background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 22px; display: flex; flex-direction: column; gap: 4px; }
.pack.best { border: 2px solid var(--primary); }
.pack-badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--primary); color: #fff; font-size: 0.68rem; font-weight: 700; padding: 4px 12px; border-radius: 999px; white-space: nowrap; }
.pack-credits { font-size: 1.5rem; font-weight: 700; }
.pack-label { font-size: 0.78rem; color: var(--muted); }
.pack-price { font-size: 1.2rem; font-weight: 700; margin-top: 8px; }
.pack-rate { font-size: 0.76rem; color: var(--secondary); }
.faq { font-size: 0.88rem; color: var(--muted); }
.faq a { color: var(--secondary); }

/* Final */
.final { padding: 84px 0; }
.final .sec-sub { margin-bottom: 26px; }
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
.final-note { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.final-note span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-note svg { color: var(--secondary); }

/* Footer */
.footer { background: var(--bg-alt); border-top: 1px solid var(--border); padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: var(--muted); max-width: 260px; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; }
.footer-col a { display: block; font-size: 0.85rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: var(--muted); }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .gallery { grid-template-columns: repeat(2, 1fr); }
  .styles { grid-template-columns: repeat(2, 1fr); }
  .prompt-groups { grid-template-columns: 1fr; }
  .tips { grid-template-columns: 1fr; }
  .plans { grid-template-columns: repeat(2, 1fr); }
  .mix-card { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .gallery { grid-template-columns: 1fr; }
  .plans { grid-template-columns: 1fr; }
  .packs { grid-template-columns: repeat(2, 1fr); }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
