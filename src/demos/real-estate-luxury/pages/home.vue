<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/demos/real-estate-luxury/'

const navLinks = ['Properties', 'Services', 'Agents', 'About', 'Contact']

const heroStats = [
  { v: '500+', l: 'Properties' },
  { v: '$2B+', l: 'Sales Volume' },
  { v: '15+', l: 'Years Experience' },
]

const properties = [
  { img: 'img-000.jpg', loc: 'Miami Beach, FL', name: 'Modern Waterfront Villa', beds: 5, baths: 4, sqft: '6,200', price: '$4,500,000', featured: true },
  { img: 'img-001.jpg', loc: 'Manhattan, NY', name: 'Luxury Penthouse Suite', beds: 4, baths: 3, sqft: '4,800', price: '$8,900,000', featured: false },
  { img: 'img-002.jpg', loc: 'Beverly Hills, CA', name: 'Contemporary Estate', beds: 7, baths: 8, sqft: '12,000', price: '$12,500,000', featured: true },
]

const whyChoose = [
  { icon: 'globe', title: 'Virtual Tours', desc: 'Experience properties from anywhere with our immersive 3D virtual tours.' },
  { icon: 'team', title: 'Expert Guidance', desc: 'Our experienced agents provide personalized service every step of the way.' },
  { icon: 'shield', title: 'Secure Transactions', desc: 'Rest easy with our secure, transparent, and legally compliant process.' },
  { icon: 'chart', title: 'Market Insights', desc: 'Make informed decisions with our comprehensive market analysis and data.' },
]

const agents = [
  { img: 'img-003.jpg', name: 'Victoria Sterling', role: 'Senior Luxury Agent', sales: '$120M+' },
  { img: 'img-004.jpg', name: 'James Crawford', role: 'Commercial Specialist', sales: '$85M+' },
  { img: 'img-005.jpg', name: 'Sophia Chen', role: 'Residential Expert', sales: '$95M+' },
  { img: 'img-006.jpg', name: 'Michael Ross', role: 'Investment Advisor', sales: '$150M+' },
]

const footerCols = [
  { title: 'Properties', links: ['For Sale', 'For Rent', 'New Developments', 'Commercial', 'Luxury'] },
  { title: 'Services', links: ['Buy', 'Sell', 'Rent', 'Property Management', 'Consulting'] },
  { title: 'Company', links: ['About Us', 'Our Team', 'Careers', 'Press', 'Contact'] },
]
</script>

<template>
  <div class="re">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">LUXE<span>ESTATE</span></a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#properties">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-primary">Schedule Viewing</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container center">
        <span class="badge">Premium Properties</span>
        <h1>Find Your <span class="accent">Dream Home</span></h1>
        <p class="hero-sub">Discover exceptional properties in the most prestigious locations. Your perfect home awaits with our curated collection of luxury estates.</p>
        <div class="search-form">
          <div class="sf-field">
            <label>Location</label>
            <input type="text" placeholder="City, neighborhood, or ZIP" />
          </div>
          <div class="sf-field">
            <label>Property Type</label>
            <select>
              <option>All Types</option><option>House</option><option>Apartment</option><option>Villa</option><option>Penthouse</option>
            </select>
          </div>
          <div class="sf-field">
            <label>Price Range</label>
            <select>
              <option>Any Price</option><option>$500K - $1M</option><option>$1M - $2M</option><option>$2M - $5M</option><option>$5M+</option>
            </select>
          </div>
          <button class="btn btn-primary sf-btn"><DemoIcon name="search" :size="16" /> Search</button>
        </div>
        <div class="hero-stats">
          <div class="hstat" v-for="s in heroStats" :key="s.l">
            <b>{{ s.v }}</b><span>{{ s.l }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FEATURED LISTINGS ============ -->
    <section class="section" id="properties">
      <div class="container">
        <div class="sec-head">
          <div>
            <span class="eyebrow">Featured Listings</span>
            <h2 class="h2">Exceptional Properties</h2>
          </div>
          <button class="btn btn-outline">View All Properties</button>
        </div>
        <div class="properties">
          <div class="property" v-for="p in properties" :key="p.name">
            <div class="p-img">
              <img :src="IMG + p.img" :alt="p.name" loading="lazy" />
              <span v-if="p.featured" class="p-badge">Featured</span>
            </div>
            <div class="p-body">
              <span class="p-loc"><DemoIcon name="map-pin" :size="14" />{{ p.loc }}</span>
              <h3>{{ p.name }}</h3>
              <div class="p-specs">
                <span><b>{{ p.beds }}</b> Beds</span>
                <span><b>{{ p.baths }}</b> Baths</span>
                <span><b>{{ p.sqft }}</b> sqft</span>
              </div>
              <div class="p-foot">
                <span class="p-price">{{ p.price }}</span>
                <button class="p-btn">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ WHY CHOOSE US ============ -->
    <section class="section section-alt">
      <div class="container center">
        <span class="eyebrow">Why Choose Us</span>
        <h2 class="h2">The LuxeEstate Difference</h2>
        <p class="sec-sub">We combine expertise, technology, and personalized service to deliver an exceptional real estate experience.</p>
        <div class="whys">
          <div class="why" v-for="w in whyChoose" :key="w.title">
            <div class="w-icon"><DemoIcon :name="w.icon" :size="22" /></div>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ AGENTS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">Our Team</span>
        <h2 class="h2">Meet Our Expert Agents</h2>
        <p class="sec-sub">Our dedicated team of professionals is committed to helping you find your perfect property.</p>
        <div class="agents">
          <div class="agent" v-for="a in agents" :key="a.name">
            <div class="a-img"><img :src="IMG + a.img" :alt="a.name" loading="lazy" /></div>
            <h3>{{ a.name }}</h3>
            <p class="a-role">{{ a.role }}</p>
            <p class="a-sales">{{ a.sales }} <span>in Sales</span></p>
            <button class="btn btn-outline">Contact</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section class="section section-alt" id="contact">
      <div class="container">
        <div class="contact">
          <div class="c-copy">
            <span class="eyebrow">Get in Touch</span>
            <h2 class="h2">Ready to Find Your Dream Property?</h2>
            <p>Schedule a consultation with one of our expert agents. We'll help you navigate the market and find the perfect property that matches your lifestyle and investment goals.</p>
            <div class="c-info">
              <div class="c-line"><DemoIcon name="phone" :size="16" />+1 (555) 123-4567</div>
              <div class="c-line"><DemoIcon name="mail" :size="16" />contact@luxeestate.com</div>
              <div class="c-line"><DemoIcon name="map-pin" :size="16" />123 Luxury Ave, New York, NY 10001</div>
            </div>
            <button class="btn btn-primary">Schedule a Consultation</button>
          </div>
          <form class="c-form">
            <div class="cf-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message" rows="4"></textarea>
            <button class="btn btn-primary">Request Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">LUXE<span>ESTATE</span></a>
            <p>Your trusted partner in luxury real estate. Discover exceptional properties in the most prestigious locations.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 LuxeEstate. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Privacy Policy</a>
            <a href="javascript:;">Terms of Service</a>
            <a href="javascript:;">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=DM+Sans:wght@400;500;700&display=swap');

.re {
  --primary: #0077b6;
  --secondary: #b8913a;
  --bg: #ffffff;
  --bg-alt: #f5f7fa;
  --card: #ffffff;
  --border: #e2e8f0;
  --text: #1e293b;
  --muted: #64748b;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.re h1, .re h2, .re h3, .re h4 {
  font-family: 'Cinzel', 'DM Sans', Georgia, serif;
  margin: 0;
}
.re p { margin: 0; }
.re img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { font-family: 'Cinzel', serif; font-weight: 700; font-size: 1.25rem; letter-spacing: 0.06em; color: var(--text); text-decoration: none; }
.nav-brand span { color: var(--primary); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 22px; border-radius: 10px; font-size: 0.88rem; font-weight: 600; font-family: inherit; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: #005f92; }
.btn-outline { background: transparent; color: var(--primary); border: 1.5px solid var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }
.nav .btn-primary { padding: 9px 18px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 76px 0 48px; background: linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%); }
.badge { display: inline-block; padding: 7px 16px; border-radius: 999px; margin-bottom: 20px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(0, 119, 182, 0.1); }
.hero h1 { font-size: clamp(2.3rem, 5vw, 3.6rem); font-weight: 700; line-height: 1.1; margin-bottom: 18px; }
.accent { color: var(--primary); }
.hero-sub { max-width: 560px; margin: 0 auto 32px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); }

.search-form { display: grid; grid-template-columns: 1fr 1fr 1fr auto; gap: 14px; max-width: 880px; margin: 0 auto 40px; background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 18px; box-shadow: 0 20px 50px rgba(30, 41, 59, 0.08); text-align: left; }
.sf-field { display: flex; flex-direction: column; gap: 6px; }
.sf-field label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--muted); }
.sf-field input, .sf-field select { padding: 10px 12px; border: 1px solid var(--border); border-radius: 9px; font-family: inherit; font-size: 0.88rem; color: var(--text); background: #fff; }
.sf-field input:focus, .sf-field select:focus { outline: none; border-color: var(--primary); }
.sf-btn { align-self: end; height: 40px; }

.hero-stats { display: flex; justify-content: center; gap: 56px; }
.hstat { display: flex; flex-direction: column; gap: 4px; }
.hstat b { font-size: 1.8rem; font-weight: 700; }
.hstat span { font-size: 0.85rem; color: var(--muted); }

/* Sections */
.section { padding: 84px 0; }
.section-alt { background: var(--bg-alt); }
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--secondary); margin-bottom: 12px; }
.h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 700; margin: 0 0 14px; }
.sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.sec-sub { max-width: 560px; margin: 0 auto 48px; font-size: 1rem; color: var(--muted); line-height: 1.6; }

/* Properties */
.properties { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.property { background: var(--card); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
.property:hover { box-shadow: 0 24px 50px rgba(30, 41, 59, 0.12); transform: translateY(-3px); }
.p-img { position: relative; aspect-ratio: 4/3; overflow: hidden; }
.p-img img { width: 100%; height: 100%; object-fit: cover; }
.p-badge { position: absolute; top: 14px; left: 14px; padding: 5px 12px; border-radius: 6px; background: var(--secondary); color: #fff; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
.p-body { padding: 20px; }
.p-loc { display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; color: var(--muted); margin-bottom: 8px; }
.p-loc svg { color: var(--primary); }
.p-body h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 14px; }
.p-specs { display: flex; gap: 18px; padding-bottom: 16px; margin-bottom: 16px; border-bottom: 1px solid var(--border); font-size: 0.82rem; color: var(--muted); }
.p-specs b { color: var(--text); }
.p-foot { display: flex; align-items: center; justify-content: space-between; }
.p-price { font-size: 1.15rem; font-weight: 700; color: var(--primary); }
.p-btn { padding: 8px 16px; border-radius: 8px; border: 1px solid var(--primary); background: transparent; color: var(--primary); font-size: 0.82rem; font-weight: 600; cursor: pointer; font-family: inherit; }
.p-btn:hover { background: var(--primary); color: #fff; }

/* Why choose */
.whys { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; text-align: left; }
.why { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 26px; }
.w-icon { width: 48px; height: 48px; border-radius: 12px; display: grid; place-items: center; background: rgba(0, 119, 182, 0.1); color: var(--primary); margin-bottom: 16px; }
.why h3 { font-size: 1.02rem; font-weight: 600; margin-bottom: 8px; }
.why p { font-size: 0.85rem; color: var(--muted); line-height: 1.55; }

/* Agents */
.agents { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.agent { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px; }
.a-img { width: 90px; height: 90px; border-radius: 50%; overflow: hidden; margin: 0 auto 16px; }
.a-img img { width: 100%; height: 100%; object-fit: cover; }
.agent h3 { font-size: 1rem; font-weight: 600; margin-bottom: 4px; }
.a-role { font-size: 0.8rem; color: var(--muted); margin-bottom: 10px; }
.a-sales { font-size: 0.9rem; font-weight: 700; color: var(--primary); margin-bottom: 16px; }
.a-sales span { font-weight: 400; color: var(--muted); font-size: 0.8rem; }
.agent .btn { width: 100%; }

/* Contact */
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.c-copy .h2 { margin-bottom: 16px; }
.c-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 24px; }
.c-info { display: flex; flex-direction: column; gap: 12px; margin-bottom: 26px; }
.c-line { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text); }
.c-line svg { color: var(--primary); flex-shrink: 0; }

.c-form { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px; }
.cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.c-form input, .c-form textarea { padding: 12px 16px; border: 1px solid var(--border); border-radius: 10px; font-family: inherit; font-size: 0.9rem; }
.c-form input:focus, .c-form textarea:focus { outline: none; border-color: var(--primary); }
.c-form textarea { resize: vertical; }
.c-form .btn { width: 100%; }

/* Footer */
.footer { background: #0f1c2a; padding: 56px 0 32px; color: #cbd5e1; }
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
  .search-form { grid-template-columns: 1fr 1fr; }
  .properties { grid-template-columns: 1fr; }
  .whys { grid-template-columns: repeat(2, 1fr); }
  .agents { grid-template-columns: repeat(2, 1fr); }
  .contact { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .search-form { grid-template-columns: 1fr; }
  .whys { grid-template-columns: 1fr; }
  .agents { grid-template-columns: 1fr; }
  .hero-stats { gap: 28px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
