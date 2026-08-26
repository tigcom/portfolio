<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/portfolio/demos/restaurant-food/'

const navLinks = ['Menu', 'Our Story', 'Reservation', 'Contact']

const menu = [
  { cat: 'Starters', items: [
    { img: 'img-004.jpg', name: 'Truffle Burrata', price: '$18', desc: 'Fresh burrata with black truffle, heirloom tomatoes' },
    { img: 'img-005.jpg', name: 'Tuna Tartare', price: '$22', desc: 'Yellowfin tuna, avocado, sesame, citrus ponzu' },
  ] },
  { cat: 'Mains', items: [
    { img: 'img-006.jpg', name: 'Wagyu Ribeye', price: '$85', desc: 'A5 Japanese wagyu, bone marrow butter, roasted vegetables' },
    { img: 'img-007.jpg', name: 'Lobster Risotto', price: '$48', desc: 'Maine lobster, saffron arborio, parmesan foam' },
  ] },
  { cat: 'Desserts', items: [
    { img: 'img-008.jpg', name: 'Chocolate Soufflé', price: '$16', desc: 'Valrhona chocolate, vanilla bean ice cream' },
    { img: 'img-009.jpg', name: 'Crème Brûlée', price: '$14', desc: 'Madagascar vanilla, caramelized sugar crust' },
  ] },
]

const storyStats = [
  { v: '15+', l: 'Years' },
  { v: '50K+', l: 'Happy Guests' },
  { v: '3', l: 'Michelin Stars' },
]

const hours = [
  { day: 'Monday - Thursday', time: '11:00 AM - 10:00 PM' },
  { day: 'Friday - Saturday', time: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
]

const testimonials = [
  { quote: 'An extraordinary culinary journey. Every dish tells a story, and the attention to detail is impeccable. A must-visit for any food enthusiast.', name: 'Sarah Mitchell', role: 'Food Critic, NY Times' },
  { quote: "We've celebrated every anniversary here for the past 5 years. The ambiance, service, and food never disappoint. Simply the best in the city.", name: 'James Rodriguez', role: 'Regular Guest' },
  { quote: "The Wagyu ribeye is hands down the best steak I've ever had. Chef Marco's passion shines through in every bite. Absolutely phenomenal!", name: 'Emily Chen', role: 'Food Blogger' },
]

const footerCols = [
  { title: 'Menu', links: ['Starters', 'Mains', 'Desserts', 'Wine List', 'Cocktails'] },
  { title: 'Visit', links: ['Reservations', 'Private Events', 'Gift Cards', 'Catering'] },
  { title: 'About', links: ['Our Story', 'The Team', 'Press', 'Careers'] },
]
</script>

<template>
  <div class="rest">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">La Maison</a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#menu">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-cta">Book a Table</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="badge">Award-Winning Cuisine</span>
            <h1>Experience <em>Culinary Art</em></h1>
            <p>Discover the finest flavors crafted with passion. Fresh ingredients, timeless recipes, and an unforgettable dining experience await you.</p>
            <div class="hero-cta">
              <button class="btn btn-cta">Reserve a Table</button>
              <button class="btn btn-outline">View Menu</button>
            </div>
            <div class="hero-info">
              <span><DemoIcon name="clock" :size="15" />Open Daily 11AM - 11PM</span>
              <span><DemoIcon name="map-pin" :size="15" />123 Gourmet Street, NYC</span>
            </div>
          </div>
          <div class="hero-img">
            <img :src="IMG + 'img-000.jpg'" alt="La Maison dining" />
            <span class="hi-badge">15+ Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ MENU ============ -->
    <section class="section section-cream" id="menu">
      <div class="container center">
        <span class="eyebrow">Our Menu</span>
        <h2 class="h2">Seasonal ingredients, timeless techniques</h2>
        <div class="menu-cols">
          <div class="menu-col" v-for="cat in menu" :key="cat.cat">
            <h3 class="mc-title">{{ cat.cat }}</h3>
            <div class="dish" v-for="d in cat.items" :key="d.name">
              <div class="d-img"><img :src="IMG + d.img" :alt="d.name" loading="lazy" /></div>
              <div class="d-info">
                <div class="d-head"><b>{{ d.name }}</b><span class="d-dots"></span><b class="d-price">{{ d.price }}</b></div>
                <p>{{ d.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="chef-quote">
          <p>“Cooking is about passion, so it may look slightly temperamental in a way that it's too assertive to the naked eye.”</p>
          <span>— Chef Marco Bellini</span>
        </div>
        <button class="btn btn-outline">View Full Menu</button>
      </div>
    </section>

    <!-- ============ OUR STORY ============ -->
    <section class="section" id="story">
      <div class="container">
        <div class="story">
          <div class="story-img">
            <img :src="IMG + 'img-010.jpg'" alt="Chef Marco Bellini" loading="lazy" />
          </div>
          <div class="story-copy">
            <span class="eyebrow">Our Story</span>
            <h2 class="h2">A Legacy of Flavor</h2>
            <p>Founded in 2008, La Maison has been a cornerstone of culinary excellence in the heart of New York City. Our journey began with a simple vision: to create dishes that tell stories and bring people together.</p>
            <p>Under the guidance of Executive Chef Marco Bellini, our kitchen transforms the finest seasonal ingredients into memorable dining experiences. Every dish is a celebration of tradition, innovation, and passion.</p>
            <div class="story-stats">
              <div class="ss" v-for="s in storyStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ RESERVATION ============ -->
    <section class="section section-cream" id="reservation">
      <div class="container">
        <div class="reserve">
          <div class="r-copy">
            <span class="eyebrow">Reservations</span>
            <h2 class="h2">Book Your Table</h2>
            <p>Join us for an unforgettable dining experience. Reserve your table today and let us take care of the rest. For parties larger than 8, please call us directly.</p>
            <div class="r-info">
              <div class="r-line"><DemoIcon name="phone" :size="15" />+1 (555) 123-4567</div>
              <div class="r-line"><DemoIcon name="mail" :size="15" />reservations@lamaison.com</div>
              <div class="r-line"><DemoIcon name="map-pin" :size="15" />123 Gourmet Street, New York, NY 10001</div>
            </div>
            <div class="r-hours">
              <h4>Opening Hours</h4>
              <div class="rh-row" v-for="h in hours" :key="h.day">
                <span>{{ h.day }}</span><b>{{ h.time }}</b>
              </div>
            </div>
          </div>
          <form class="r-form">
            <div class="rf-row">
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone" />
            </div>
            <div class="rf-row">
              <input type="date" placeholder="Date" />
              <select><option>6:00 PM</option><option>6:30 PM</option><option>7:00 PM</option><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option><option>9:00 PM</option></select>
            </div>
            <select><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option><option>5 Guests</option><option>6 Guests</option><option>7 Guests</option><option>8 Guests</option></select>
            <textarea placeholder="Special Requests" rows="3"></textarea>
            <button class="btn btn-cta">Reserve Now</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="section">
      <div class="container center">
        <span class="eyebrow">What Our Guests Say</span>
        <h2 class="h2">Don't just take our word for it</h2>
        <div class="testimonials">
          <div class="testimonial" v-for="t in testimonials" :key="t.name">
            <p class="t-quote">“{{ t.quote }}”</p>
            <div class="t-author">
              <b>{{ t.name }}</b>
              <span>{{ t.role }}</span>
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
            <a class="nav-brand" href="javascript:;">La Maison</a>
            <p>Experience culinary excellence in the heart of New York City. Award-winning cuisine, exceptional service, unforgettable moments.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 La Maison. All rights reserved.</span>
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
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display+SC:wght@400;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

.rest {
  --primary: #ff6b35;
  --secondary: #8b4513;
  --bg: #fffaf0;
  --bg-cream: #fdf6ec;
  --card: #ffffff;
  --border: #e8ddd4;
  --text: #2c1810;
  --muted: #6b5344;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
}
.rest h1, .rest h2, .rest h3, .rest h4 {
  font-family: 'Playfair Display SC', 'Playfair Display', Georgia, serif;
  margin: 0;
}
.rest p { margin: 0; }
.rest img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.center { text-align: center; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: rgba(255, 250, 240, 0.92); backdrop-filter: blur(14px); border-bottom: 1px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { font-family: 'Playfair Display SC', serif; font-weight: 700; font-size: 1.2rem; color: var(--text); text-decoration: none; }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--muted); text-decoration: none; transition: color 0.15s; }
.nav-links a:hover { color: var(--text); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 26px; border-radius: 10px; font-size: 0.88rem; font-weight: 700; font-family: inherit; border: none; cursor: pointer; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.btn-cta { background: var(--primary); color: #fff; }
.btn-cta:hover { background: #e8551f; }
.btn-outline { background: transparent; color: var(--primary); border: 1.5px solid var(--primary); }
.btn-outline:hover { background: var(--primary); color: #fff; }
.nav .btn-cta { padding: 10px 20px; font-size: 0.85rem; }

/* Hero */
.hero { padding: 72px 0 48px; }
.hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; }
.badge { display: inline-block; padding: 7px 16px; border-radius: 999px; margin-bottom: 22px; font-size: 0.82rem; font-weight: 600; color: var(--primary); background: rgba(255, 107, 53, 0.1); }
.hero-copy h1 { font-size: clamp(2.4rem, 5vw, 3.6rem); font-weight: 700; line-height: 1.1; margin-bottom: 20px; }
.hero-copy h1 em { font-style: italic; color: var(--primary); }
.hero-copy > p { max-width: 500px; font-size: 1.05rem; line-height: 1.65; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 24px; }
.hero-info { display: flex; gap: 22px; flex-wrap: wrap; }
.hero-info span { display: inline-flex; align-items: center; gap: 7px; font-size: 0.85rem; color: var(--muted); }
.hero-info svg { color: var(--primary); }

.hero-img { position: relative; }
.hero-img img { width: 100%; border-radius: 16px; }
.hi-badge { position: absolute; bottom: 20px; left: -16px; padding: 12px 20px; background: var(--primary); color: #fff; border-radius: 10px; font-size: 0.85rem; font-weight: 700; box-shadow: 0 16px 34px rgba(255, 107, 53, 0.3); }

/* Sections */
.section { padding: 84px 0; }
.section-cream { background: var(--bg-cream); }
.eyebrow { display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--primary); margin-bottom: 12px; }
.h2 { font-size: clamp(1.7rem, 3.4vw, 2.4rem); font-weight: 700; margin: 0 0 40px; }

/* Menu */
.menu-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; text-align: left; margin-bottom: 48px; }
.mc-title { font-size: 1.3rem; margin-bottom: 22px; padding-bottom: 10px; border-bottom: 2px solid var(--primary); display: inline-block; }
.dish { display: flex; gap: 16px; margin-bottom: 22px; }
.d-img { width: 84px; height: 84px; border-radius: 12px; overflow: hidden; flex-shrink: 0; }
.d-img img { width: 100%; height: 100%; object-fit: cover; }
.d-info { flex: 1; }
.d-head { display: flex; align-items: baseline; gap: 6px; margin-bottom: 6px; }
.d-head b { font-size: 0.98rem; font-weight: 600; }
.d-dots { flex: 1; border-bottom: 1px dotted var(--border); }
.d-price { color: var(--primary); white-space: nowrap; }
.d-info p { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

.chef-quote { max-width: 560px; margin: 0 auto 32px; }
.chef-quote p { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1.15rem; line-height: 1.6; color: var(--text); margin-bottom: 10px; }
.chef-quote span { font-size: 0.85rem; color: var(--primary); font-weight: 600; }

/* Story */
.story { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 56px; align-items: center; }
.story-img img { width: 100%; border-radius: 16px; }
.story-copy .h2 { margin-bottom: 20px; }
.story-copy > p { color: var(--muted); line-height: 1.7; margin-bottom: 18px; }
.story-stats { display: flex; gap: 40px; margin-top: 28px; }
.ss { display: flex; flex-direction: column; gap: 4px; }
.ss b { font-size: 1.8rem; font-weight: 700; color: var(--primary); }
.ss span { font-size: 0.82rem; color: var(--muted); }

/* Reservation */
.reserve { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.r-copy .h2 { margin-bottom: 18px; }
.r-copy > p { color: var(--muted); line-height: 1.65; margin-bottom: 22px; }
.r-info { display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px; }
.r-line { display: flex; align-items: center; gap: 10px; font-size: 0.88rem; }
.r-line svg { color: var(--primary); flex-shrink: 0; }
.r-hours h4 { font-size: 0.95rem; margin-bottom: 12px; }
.rh-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border); font-size: 0.85rem; }
.rh-row span { color: var(--muted); }
.rh-row b { font-weight: 600; }

.r-form { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; gap: 14px; }
.rf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.r-form input, .r-form select, .r-form textarea { padding: 12px 16px; border: 1px solid var(--border); border-radius: 10px; font-family: inherit; font-size: 0.9rem; color: var(--text); background: #fff; }
.r-form input:focus, .r-form select:focus, .r-form textarea:focus { outline: none; border-color: var(--primary); }
.r-form textarea { resize: vertical; }
.r-form .btn { width: 100%; }

/* Testimonials */
.testimonials { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; text-align: left; }
.testimonial { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 28px; display: flex; flex-direction: column; }
.t-quote { font-family: 'Playfair Display', serif; font-style: italic; font-size: 1rem; line-height: 1.6; color: var(--text); margin-bottom: 20px; flex: 1; }
.t-author b { display: block; font-size: 0.9rem; margin-bottom: 3px; }
.t-author span { font-size: 0.78rem; color: var(--muted); }

/* Footer */
.footer { background: #2c1810; padding: 56px 0 32px; color: #d7c5b6; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 40px; }
.footer-brand .nav-brand { color: #fff; margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: #b8a696; max-width: 280px; line-height: 1.6; }
.footer-col h4 { font-size: 0.9rem; font-weight: 600; margin-bottom: 14px; color: #fff; }
.footer-col a { display: block; font-size: 0.85rem; color: #b8a696; text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: #fff; }
.footer-bottom { padding-top: 22px; border-top: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: #b8a696; }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: #b8a696; text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hero-grid, .story, .reserve { grid-template-columns: 1fr; }
  .menu-cols { grid-template-columns: 1fr; }
  .testimonials { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .rf-row { grid-template-columns: 1fr; }
  .hero-info { flex-direction: column; gap: 10px; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
