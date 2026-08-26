<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/portfolio/demos/luxury-ecommerce/'

const navLinks = ['New Arrivals', 'Collections', 'Our Story', 'Boutiques']

const heroStats = [
  { v: '150+', l: 'Exclusive Pieces' },
  { v: '48', l: 'Global Boutiques' },
  { v: '1892', l: 'Est. Paris' },
]

const products = [
  { img: 'img-001.jpg', name: 'Silk Evening Gown', price: '$4,890', badge: 'New' },
  { img: 'img-002.jpg', name: 'Leather Tote Bag', price: '$2,450', badge: '' },
  { img: 'img-003.jpg', name: 'Cashmere Coat', price: '$6,200', badge: 'Exclusive' },
  { img: 'img-004.jpg', name: 'Diamond Pendant', price: '$12,500', badge: '' },
]

const values = [
  { title: 'Quality', desc: 'Uncompromising standards' },
  { title: 'Passion', desc: 'Artisan dedication' },
  { title: 'Timeless', desc: 'Enduring design' },
]

const collections = [
  { img: 'img-006.jpg', name: 'Haute Couture', desc: 'Exquisite evening wear' },
  { img: 'img-007.jpg', name: 'Fine Jewelry', desc: 'Timeless treasures' },
  { img: 'img-008.jpg', name: 'Leather Goods', desc: 'Artisan crafted' },
]

const benefits = [
  'Priority access to limited editions',
  'Invitations to private events',
  'Complimentary gift wrapping',
  'Personal style advisor',
]

const footerCols = [
  { title: 'Shop', links: ['New Arrivals', 'Collections', 'Accessories', 'Sale'] },
  { title: 'Services', links: ['Personal Styling', 'Alterations', 'Gift Cards', 'Store Locator'] },
  { title: 'Company', links: ['Our Story', 'Careers', 'Press', 'Sustainability'] },
  { title: 'Support', links: ['Contact Us', 'Shipping', 'Returns', 'FAQ'] },
]
</script>

<template>
  <div class="lux">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">MAISON</a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#collections">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="icon-btn" aria-label="Search"><DemoIcon name="search" :size="18" /></button>
          <button class="icon-btn" aria-label="Account"><DemoIcon name="user" :size="18" /></button>
          <button class="icon-btn" aria-label="Cart"><DemoIcon name="bag" :size="18" /><span class="cart-badge">2</span></button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="hero-bg">
        <img :src="IMG + 'img-000.jpg'" alt="Luxury fashion" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-copy">
          <span class="eyebrow"><i></i>Autumn/Winter 2024</span>
          <h1>The Art of <em>Timeless</em> Elegance</h1>
          <p>Discover our curated collection of exceptional pieces, crafted with uncompromising attention to detail.</p>
          <div class="hero-cta">
            <button class="btn btn-primary">Explore Collection</button>
            <button class="btn btn-outline">Book Appointment</button>
          </div>
          <div class="hero-stats">
            <div class="hstat" v-for="s in heroStats" :key="s.l">
              <b>{{ s.v }}</b><span>{{ s.l }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURED PIECES ============ -->
    <section class="section section-cream">
      <div class="container center">
        <span class="eyebrow-dark">Curated Selection</span>
        <h2 class="h2">Featured Pieces</h2>
        <div class="products">
          <div class="product" v-for="p in products" :key="p.name">
            <div class="p-img">
              <img :src="IMG + p.img" :alt="p.name" loading="lazy" />
              <span v-if="p.badge" class="p-badge">{{ p.badge }}</span>
              <div class="p-hover"><button>Quick View</button></div>
            </div>
            <h3>{{ p.name }}</h3>
            <p>{{ p.price }}</p>
          </div>
        </div>
        <button class="btn btn-outline-dark">View All Products</button>
      </div>
    </section>

    <!-- ============ HERITAGE ============ -->
    <section class="section" id="story">
      <div class="container">
        <div class="heritage">
          <div class="h-img">
            <img :src="IMG + 'img-005.jpg'" alt="Maison heritage" loading="lazy" />
          </div>
          <div class="h-copy">
            <span class="eyebrow-dark"><i></i>130+ Years of Excellence</span>
            <span class="h-kicker">Our Heritage</span>
            <h2 class="h2">A Legacy of Craftsmanship</h2>
            <p>Since 1892, Maison has been synonymous with exceptional quality and timeless design. Our artisans carry forward centuries-old techniques, blending tradition with contemporary vision.</p>
            <p>Each piece in our collection tells a story—of meticulous craftsmanship, of rare materials sourced from around the world, and of an unwavering commitment to excellence.</p>
            <div class="h-values">
              <div class="h-value" v-for="v in values" :key="v.title">
                <b>{{ v.title }}</b><span>{{ v.desc }}</span>
              </div>
            </div>
            <button class="btn btn-primary">Discover Our Story</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ COLLECTIONS ============ -->
    <section class="section section-cream" id="collections">
      <div class="container center">
        <span class="eyebrow-dark">Explore</span>
        <h2 class="h2">Our Collections</h2>
        <div class="collections">
          <div class="collection" v-for="c in collections" :key="c.name">
            <div class="c-img"><img :src="IMG + c.img" :alt="c.name" loading="lazy" /></div>
            <h3>{{ c.name }}</h3>
            <p>{{ c.desc }}</p>
            <a href="javascript:;" class="c-link">Explore <DemoIcon name="arrow" :size="14" /></a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ EXCLUSIVE ACCESS ============ -->
    <section class="section">
      <div class="container">
        <div class="exclusive">
          <div class="ex-copy">
            <span class="eyebrow-dark"><i></i>Exclusive Access</span>
            <h2 class="h2">Join the Inner Circle</h2>
            <p>Become a member and unlock exclusive benefits: early access to new collections, private events, personal styling consultations, and complimentary alterations.</p>
            <ul>
              <li v-for="b in benefits" :key="b"><DemoIcon name="check" :size="16" />{{ b }}</li>
            </ul>
            <button class="btn btn-primary">Request Membership</button>
            <span class="vip">VIP — Member Benefits</span>
          </div>
          <div class="ex-img">
            <img :src="IMG + 'img-009.jpg'" alt="Exclusive access" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ NEWSLETTER ============ -->
    <section class="newsletter">
      <div class="container center">
        <h2 class="h2">Stay in Touch</h2>
        <p>Subscribe to receive updates on new arrivals, exclusive offers, and styling tips.</p>
        <div class="nl-form">
          <input type="email" placeholder="Email address" />
          <button class="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <span class="nav-brand">MAISON</span>
          <p>Crafting timeless elegance since 1892. Paris • Milan • New York • Tokyo</p>
        </div>
        <div class="footer-grid">
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 Maison. All rights reserved.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

.lux {
  --primary: #000000;
  --secondary: #b8913a;
  --bg: #ffffff;
  --bg-cream: #faf9f6;
  --border: #e5e5e5;
  --text: #1a1a1a;
  --muted: #6b6b6b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.lux h1, .lux h2, .lux h3, .lux h4 {
  font-family: 'Playfair Display', 'DM Sans', Georgia, serif;
  margin: 0;
  font-weight: 400;
}
.lux p { margin: 0; }
.lux img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 80px; display: flex; align-items: center; gap: 40px; }
.nav-brand { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 600; letter-spacing: 0.12em; color: var(--text); text-decoration: none; }
.nav-links { display: flex; gap: 30px; margin-left: auto; }
.nav-links a { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 6px; margin-left: 30px; }
.icon-btn { position: relative; width: 38px; height: 38px; border: none; background: transparent; color: var(--text); display: grid; place-items: center; cursor: pointer; }
.cart-badge { position: absolute; top: 0; right: 0; width: 16px; height: 16px; border-radius: 50%; background: var(--secondary); color: var(--primary); font-size: 0.6rem; font-weight: 700; display: grid; place-items: center; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 14px 32px; border: none; cursor: pointer; font-family: inherit; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--secondary); color: var(--primary); }
.btn-outline { background: transparent; color: var(--primary); border: 1px solid var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }
.btn-outline-dark { background: transparent; color: var(--text); border: 1px solid var(--border); }
.btn-outline-dark:hover { border-color: var(--text); }

/* Hero */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; }
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-bg img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, #fff 0%, rgba(255,255,255,0.85) 45%, transparent 100%); }
.hero-content { position: relative; z-index: 1; width: 100%; }
.hero-copy { max-width: 520px; padding: 80px 0 40px; }
.eyebrow { display: inline-flex; align-items: center; gap: 12px; margin-bottom: 28px; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); }
.eyebrow i { width: 30px; height: 1px; background: var(--secondary); }
.hero h1 { font-size: clamp(2.6rem, 5.5vw, 4.2rem); line-height: 1.1; margin-bottom: 22px; }
.hero h1 em { font-style: italic; }
.hero-copy > p { font-size: 1.05rem; line-height: 1.7; color: var(--muted); margin-bottom: 30px; max-width: 420px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-stats { display: flex; gap: 40px; margin-top: 44px; padding-top: 28px; border-top: 1px solid var(--border); }
.hstat { display: flex; flex-direction: column; gap: 4px; }
.hstat b { font-size: 1.7rem; font-weight: 300; }
.hstat span { font-size: 0.66rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--muted); }

/* Sections */
.section { padding: 96px 0; }
.section-cream { background: var(--bg-cream); }
.eyebrow-dark { display: inline-flex; align-items: center; gap: 12px; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: var(--muted); margin-bottom: 20px; }
.eyebrow-dark i { width: 30px; height: 1px; background: var(--secondary); }
.h2 { font-size: clamp(1.9rem, 4vw, 2.9rem); margin-bottom: 40px; }

/* Products */
.products { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; text-align: left; margin-bottom: 40px; }
.p-img { position: relative; aspect-ratio: 3/4; overflow: hidden; background: var(--border); margin-bottom: 16px; }
.p-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.product:hover .p-img img { transform: scale(1.05); }
.p-badge { position: absolute; top: 16px; left: 16px; padding: 5px 12px; background: var(--secondary); color: var(--primary); font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 600; }
.p-hover { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; background: linear-gradient(to top, rgba(0,0,0,0.55), transparent); opacity: 0; transition: opacity 0.3s; }
.product:hover .p-hover { opacity: 1; }
.p-hover button { width: 100%; padding: 12px; background: #fff; color: var(--primary); border: none; font-size: 0.68rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; cursor: pointer; }
.p-hover button:hover { background: var(--secondary); }
.product h3 { font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 500; margin-bottom: 4px; }
.product p { font-size: 0.85rem; color: var(--muted); }

/* Heritage */
.heritage { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; align-items: center; }
.h-img { aspect-ratio: 4/5; overflow: hidden; }
.h-img img { width: 100%; height: 100%; object-fit: cover; }
.h-kicker { display: block; font-size: 0.82rem; color: var(--secondary); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
.h-copy .h2 { margin-bottom: 22px; }
.h-copy > p { color: var(--muted); line-height: 1.7; margin-bottom: 18px; }
.h-values { display: flex; gap: 32px; margin: 28px 0; }
.h-value { display: flex; flex-direction: column; gap: 4px; }
.h-value b { font-size: 0.95rem; font-weight: 600; }
.h-value span { font-size: 0.8rem; color: var(--muted); }

/* Collections */
.collections { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: left; }
.c-img { aspect-ratio: 4/3; overflow: hidden; margin-bottom: 18px; }
.c-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
.collection:hover .c-img img { transform: scale(1.05); }
.collection h3 { font-size: 1.3rem; margin-bottom: 6px; }
.collection p { font-size: 0.85rem; color: var(--muted); margin-bottom: 12px; }
.c-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text); text-decoration: none; font-weight: 600; }
.c-link:hover { color: var(--secondary); }

/* Exclusive */
.exclusive { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center; }
.ex-copy .h2 { margin-bottom: 20px; }
.ex-copy > p { color: var(--muted); line-height: 1.7; margin-bottom: 24px; }
.ex-copy ul { list-style: none; margin: 0 0 28px; padding: 0; display: flex; flex-direction: column; gap: 12px; }
.ex-copy li { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; }
.ex-copy li svg { color: var(--secondary); flex-shrink: 0; }
.vip { display: inline-block; margin-left: 16px; font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
.ex-img { aspect-ratio: 3/4; overflow: hidden; }
.ex-img img { width: 100%; height: 100%; object-fit: cover; }

/* Newsletter */
.newsletter { background: var(--bg-cream); padding: 80px 0; }
.newsletter .h2 { margin-bottom: 12px; }
.newsletter p { color: var(--muted); margin-bottom: 28px; }
.nl-form { display: flex; gap: 10px; max-width: 440px; margin: 0 auto; }
.nl-form input { flex: 1; padding: 14px 18px; border: 1px solid var(--border); background: #fff; font-family: inherit; font-size: 0.9rem; }
.nl-form input:focus { outline: none; border-color: var(--text); }

/* Footer */
.footer { background: #fff; border-top: 1px solid var(--border); padding: 64px 0 32px; }
.footer-top { margin-bottom: 44px; }
.footer-top .nav-brand { font-size: 1.3rem; }
.footer-top p { font-size: 0.82rem; color: var(--muted); margin-top: 12px; }
.footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; text-align: left; margin-bottom: 44px; }
.footer-col h4 { font-family: 'DM Sans', sans-serif; font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 600; margin-bottom: 16px; }
.footer-col a { display: block; font-size: 0.86rem; color: var(--muted); text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--text); }
.footer-bottom { padding-top: 22px; border-top: 1px solid var(--border); font-size: 0.8rem; color: var(--muted); }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .products { grid-template-columns: repeat(2, 1fr); }
  .heritage, .exclusive { grid-template-columns: 1fr; }
  .collections { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .products { grid-template-columns: 1fr; }
  .hero-stats { gap: 24px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
