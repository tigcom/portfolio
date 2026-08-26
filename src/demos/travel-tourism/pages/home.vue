<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/demos/travel-tourism/'

const navLinks = ['Destinations', 'Experiences', 'About', 'Contact']

const heroStats = [
  { v: '500+', l: 'Destinations' },
  { v: '50K+', l: 'Happy Travelers' },
  { v: '4.9', l: 'Rating' },
]

const destinations = [
  { img: 'img-004.jpg', name: 'Santorini, Greece', desc: 'Iconic white-washed buildings and stunning sunsets', price: '$1,299', days: '7 days', rating: '4.9' },
  { img: 'img-005.jpg', name: 'Bali, Indonesia', desc: 'Tropical paradise with ancient temples and beaches', price: '$899', days: '5 days', rating: '4.8' },
  { img: 'img-006.jpg', name: 'Swiss Alps', desc: 'Breathtaking mountain views and adventure sports', price: '$1,599', days: '6 days', rating: '4.9' },
  { img: 'img-007.jpg', name: 'Tokyo, Japan', desc: 'Where tradition meets cutting-edge modernity', price: '$1,199', days: '8 days', rating: '4.7' },
]

const whyChoose = [
  { icon: 'map-pin', color: '#0080ff', title: 'Curated Experiences', desc: 'Hand-picked destinations and activities tailored to your preferences.' },
  { icon: 'check-circle', color: '#ff7f00', title: 'Best Price Guarantee', desc: 'We match any competitor\'s price and offer exclusive deals.' },
  { icon: 'clock', color: '#0080ff', title: '24/7 Support', desc: 'Round-the-clock assistance wherever you are in the world.' },
  { icon: 'sync', color: '#ff7f00', title: 'Flexible Booking', desc: 'Free cancellation and easy rebooking on most trips.' },
]

const testimonials = [
  { quote: 'The Santorini trip was absolutely magical! Every detail was perfectly planned. Can\'t wait to book my next adventure with Wanderlust.', dest: 'Santorini, Greece', name: 'Sarah Johnson', loc: 'New York, USA', img: 'img-008.jpg' },
  { quote: 'Best travel experience ever! The local guides were knowledgeable and the accommodations exceeded expectations. Highly recommend!', dest: 'Tokyo, Japan', name: 'Michael Chen', loc: 'Toronto, Canada', img: 'img-009.jpg' },
  { quote: 'From booking to return, everything was seamless. The Bali trip was a dream come true. Thank you Wanderlust for the memories!', dest: 'Bali, Indonesia', name: 'Emma Williams', loc: 'London, UK', img: 'img-010.jpg' },
]

const ctaBadges = ['Secure Booking', 'Best Price Guarantee', '50K+ Happy Travelers']

const footerCols = [
  { title: 'Destinations', links: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'] },
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
  { title: 'Support', links: ['Help Center', 'Contact', 'FAQ', 'Travel Insurance'] },
]
</script>

<template>
  <div class="trv">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">
          <span class="nav-logo"><DemoIcon name="globe" :size="16" /></span>
          Wanderlust
        </a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#destinations">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-cta">Plan Your Trip</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">Rated #1 Travel Agency 2024</span>
            <h1>Discover Your <span class="accent">Next Adventure</span></h1>
            <p class="hero-sub">Explore breathtaking destinations, create unforgettable memories, and experience the world like never before with our curated travel experiences.</p>
            <div class="search-form">
              <div class="sf-field"><label>Where to?</label><input type="text" placeholder="Destination" /></div>
              <div class="sf-field"><label>Check in</label><input type="text" placeholder="Date" /></div>
              <div class="sf-field"><label>Travelers</label><input type="text" placeholder="2 Guests" /></div>
              <button class="btn btn-cta sf-btn"><DemoIcon name="search" :size="15" /> Search</button>
            </div>
            <div class="hero-stats">
              <div class="hstat" v-for="s in heroStats" :key="s.l">
                <b v-if="s.l !== 'Rating'">{{ s.v }}</b>
                <b v-else><DemoIcon name="star" :size="18" />{{ s.v }}</b>
                <span>{{ s.l }}</span>
              </div>
            </div>
          </div>

          <div class="next-trip">
            <img :src="IMG + 'img-000.jpg'" alt="Next trip" />
            <div class="nt-overlay"></div>
            <div class="nt-body">
              <span class="nt-label">Next Trip</span>
              <h3>Bali, Indonesia</h3>
              <button class="nt-btn">Explore <DemoIcon name="arrow" :size="14" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ DESTINATIONS ============ -->
    <section class="section" id="destinations">
      <div class="container">
        <div class="sec-head">
          <div>
            <span class="eyebrow">Popular Destinations</span>
            <h2 class="h2">Explore the World</h2>
          </div>
          <button class="btn btn-outline">View All Destinations</button>
        </div>
        <div class="destinations">
          <div class="destination" v-for="d in destinations" :key="d.name">
            <div class="d-img">
              <img :src="IMG + d.img" :alt="d.name" loading="lazy" />
              <span class="d-rating"><DemoIcon name="star" :size="13" />{{ d.rating }}</span>
            </div>
            <div class="d-body">
              <h3>{{ d.name }}</h3>
              <p>{{ d.desc }}</p>
              <div class="d-foot">
                <span class="d-price">{{ d.price }} <i>/ {{ d.days }}</i></span>
                <button class="d-btn">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="section section-soft">
      <div class="container center">
        <span class="eyebrow">Why Choose Us</span>
        <h2 class="h2">Travel with <span class="accent">Confidence</span></h2>
        <div class="whys">
          <div class="why" v-for="w in whyChoose" :key="w.title">
            <div class="w-icon" :style="{ backgroundColor: w.color + '15', color: w.color }">
              <DemoIcon :name="w.icon" :size="22" />
            </div>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Testimonials</span>
        <h2 class="h2">What Travelers <span class="accent">Say</span></h2>
        <div class="testimonials">
          <div class="testimonial" v-for="t in testimonials" :key="t.name">
            <p class="t-quote">“{{ t.quote }}”</p>
            <span class="t-dest"><DemoIcon name="map-pin" :size="13" />{{ t.dest }}</span>
            <div class="t-author">
              <img :src="IMG + t.img" :alt="t.name" class="t-avatar" loading="lazy" />
              <div><b>{{ t.name }}</b><span>{{ t.loc }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FINAL CTA ============ -->
    <section class="final">
      <div class="container center">
        <h2 class="h2">Ready for Your Next <span class="accent">Adventure?</span></h2>
        <p>Start planning your dream trip today. Our travel experts are ready to help you create unforgettable memories.</p>
        <div class="hero-cta">
          <button class="btn btn-cta">Plan Your Trip</button>
          <button class="btn btn-outline">Talk to Expert</button>
        </div>
        <div class="final-badges">
          <span v-for="b in ctaBadges" :key="b"><DemoIcon name="check" :size="14" />{{ b }}</span>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">
              <span class="nav-logo"><DemoIcon name="globe" :size="16" /></span>
              Wanderlust
            </a>
            <p>Discover the world with us. Curated travel experiences that create lasting memories.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 Wanderlust. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Privacy Policy</a>
            <a href="javascript:;">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Outfit:wght@500;600;700;800&display=swap');

.trv {
  --primary: #0080ff;
  --cta: #ff7f00;
  --bg: #ffffff;
  --bg-soft: #f5f9ff;
  --card: #ffffff;
  --border: #e2e8f0;
  --text: #0f172a;
  --muted: #64748b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.trv h1, .trv h2, .trv h3, .trv h4 {
  font-family: 'Outfit', 'DM Sans', system-ui, sans-serif;
  margin: 0;
}
.trv p { margin: 0; }
.trv img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { display: flex; align-items: center; gap: 9px; font-family: 'Outfit', sans-serif; font-weight: 700; font-size: 1.15rem; color: var(--text); text-decoration: none; }
.nav-logo { width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: linear-gradient(135deg, var(--primary), var(--cta)); color: #fff; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 24px; border-radius: 12px; font-size: 0.9rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.btn-cta { background: var(--cta); color: #fff; box-shadow: 0 10px 26px rgba(255, 127, 0, 0.28); }
.btn-cta:hover { background: #e86e00; }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--cta); color: var(--cta); }
.nav .btn-cta { padding: 9px 20px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
.badge { display: inline-block; padding: 7px 16px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(0, 128, 255, 0.1); }
.hero-copy h1 { font-size: clamp(2.3rem, 5vw, 3.6rem); font-weight: 800; line-height: 1.08; letter-spacing: -0.02em; margin-bottom: 20px; }
.accent { color: var(--primary); }
.hero-sub { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }

.search-form { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 12px; margin-bottom: 32px; background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 16px; box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08); }
.sf-field { display: flex; flex-direction: column; gap: 5px; }
.sf-field label { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); }
.sf-field input { padding: 9px 12px; border: 1px solid var(--border); border-radius: 9px; font-family: inherit; font-size: 0.85rem; }
.sf-field input:focus { outline: none; border-color: var(--primary); }
.sf-btn { align-self: end; height: 40px; }

.hero-stats { display: flex; gap: 40px; }
.hstat { display: flex; flex-direction: column; gap: 3px; }
.hstat b { font-size: 1.7rem; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; }
.hstat b svg { color: #f59e0b; }
.hstat span { font-size: 0.82rem; color: var(--muted); }

/* Next trip */
.next-trip { position: relative; border-radius: 18px; overflow: hidden; }
.next-trip img { width: 100%; height: 420px; object-fit: cover; }
.nt-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent 55%); }
.nt-body { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; }
.nt-label { display: inline-block; padding: 5px 12px; border-radius: 999px; background: var(--cta); color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 10px; }
.nt-body h3 { color: #fff; font-size: 1.6rem; font-weight: 700; margin-bottom: 14px; }
.nt-btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 10px; background: #fff; color: var(--text); border: none; font-weight: 700; font-size: 0.85rem; cursor: pointer; font-family: inherit; }
.nt-btn:hover { background: var(--cta); color: #fff; }

/* Sections */
.section { padding: 84px 0; }
.section-soft { background: var(--bg-soft); }
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cta); margin-bottom: 12px; }
.h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 700; margin: 0 0 14px; }
.sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }

/* Destinations */
.destinations { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.destination { background: var(--card); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
.destination:hover { box-shadow: 0 20px 44px rgba(15, 23, 42, 0.12); transform: translateY(-3px); }
.d-img { position: relative; aspect-ratio: 3/2; overflow: hidden; }
.d-img img { width: 100%; height: 100%; object-fit: cover; }
.d-rating { position: absolute; top: 12px; right: 12px; display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 999px; background: rgba(0,0,0,0.6); color: #fff; font-size: 0.76rem; font-weight: 700; }
.d-rating svg { color: #f59e0b; }
.d-body { padding: 18px; }
.d-body h3 { font-size: 1.02rem; font-weight: 700; margin-bottom: 6px; }
.d-body p { font-size: 0.82rem; color: var(--muted); line-height: 1.5; margin-bottom: 14px; min-height: 40px; }
.d-foot { display: flex; align-items: center; justify-content: space-between; }
.d-price { font-size: 1rem; font-weight: 700; color: var(--cta); }
.d-price i { font-style: normal; font-size: 0.76rem; font-weight: 400; color: var(--muted); }
.d-btn { padding: 7px 14px; border-radius: 8px; border: 1px solid var(--primary); background: transparent; color: var(--primary); font-size: 0.8rem; font-weight: 600; cursor: pointer; font-family: inherit; }
.d-btn:hover { background: var(--primary); color: #fff; }

/* Why choose */
.whys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; }
.why { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; }
.w-icon { width: 48px; height: 48px; border-radius: 13px; display: grid; place-items: center; margin-bottom: 16px; }
.why h3 { font-size: 1.02rem; font-weight: 600; margin-bottom: 8px; }
.why p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* Testimonials */
.testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; text-align: left; }
.testimonial { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; display: flex; flex-direction: column; }
.t-quote { font-size: 0.92rem; line-height: 1.6; color: var(--text); margin-bottom: 16px; flex: 1; }
.t-dest { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--primary); font-weight: 600; margin-bottom: 16px; }
.t-author { display: flex; align-items: center; gap: 12px; }
.t-avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; }
.t-author b { display: block; font-size: 0.9rem; }
.t-author span { font-size: 0.78rem; color: var(--muted); }

/* Final */
.final { padding: 84px 0; background: var(--bg-soft); }
.final .h2 { margin-bottom: 16px; }
.final > .container > p { max-width: 520px; margin: 0 auto 26px; color: var(--muted); line-height: 1.6; }
.hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 22px; }
.final-badges { display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; }
.final-badges span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.final-badges svg { color: var(--cta); }

/* Footer */
.footer { background: #0f172a; padding: 56px 0 32px; color: #cbd5e1; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 40px; }
.footer-brand .nav-brand { color: #fff; margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: #94a3b8; max-width: 280px; line-height: 1.6; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; color: #fff; }
.footer-col a { display: block; font-size: 0.85rem; color: #94a3b8; text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: #fff; }
.footer-bottom { padding-top: 22px; border-top: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: #94a3b8; }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: #94a3b8; text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid { grid-template-columns: 1fr; }
  .destinations { grid-template-columns: repeat(2, 1fr); }
  .whys { grid-template-columns: repeat(2, 1fr); }
  .testimonials { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .search-form { grid-template-columns: 1fr 1fr; }
  .destinations { grid-template-columns: 1fr; }
  .whys { grid-template-columns: 1fr; }
  .hero-stats { gap: 24px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
