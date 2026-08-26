<script setup>
import DemoIcon from '../../_kit/DemoIcon.vue'

const IMG = '/portfolio/demos/creative-agency-portfolio/'

const navLinks = ['Work', 'Services', 'About', 'Contact']

const marquee = ['BRANDING', 'WEB DESIGN', 'MOTION', 'STRATEGY', 'DEVELOPMENT', 'UX/UI']

const projects = [
  { img: 'img-000.jpg', cat: 'Branding', name: 'Neon Nights' },
  { img: 'img-001.jpg', cat: 'Web Design', name: 'Tech Forward' },
  { img: 'img-002.jpg', cat: 'Motion', name: 'Urban Flow' },
  { img: 'img-003.jpg', cat: 'UX/UI', name: 'Minimal Max' },
]

const services = [
  { num: '01', title: 'Brand Strategy', desc: 'We build brands that stand out. From naming to visual identity, we create memorable brand experiences.' },
  { num: '02', title: 'Web Design', desc: 'Bold, functional websites that convert. We design digital experiences that push boundaries.' },
  { num: '03', title: 'Motion Design', desc: 'Bring your brand to life with animation. From micro-interactions to full campaigns.' },
  { num: '04', title: 'Development', desc: 'We build fast, scalable, and accessible websites using modern technologies.' },
]

const aboutStats = [
  { v: '50+', l: 'Projects' },
  { v: '12', l: 'Awards' },
  { v: '5', l: 'Years' },
]

const team = [
  { init: 'A', name: 'Alex Chen', role: 'Creative Director' },
  { init: 'S', name: 'Sarah Kim', role: 'Lead Designer' },
  { init: 'M', name: 'Mike Ross', role: 'Developer' },
  { init: 'E', name: 'Emma Liu', role: 'Strategist' },
]

const footerCols = [
  { title: 'Links', links: ['Work', 'Services', 'About', 'Contact'] },
  { title: 'Social', links: ['Instagram', 'Twitter', 'Dribbble', 'LinkedIn'] },
]
</script>

<template>
  <div class="brutal">
    <!-- ============ NAV ============ -->
    <header class="nav">
      <div class="nav-inner">
        <a class="nav-brand" href="javascript:;">BRUTAL<span>.</span></a>
        <nav class="nav-links">
          <a v-for="l in navLinks" :key="l" href="#work">{{ l }}</a>
        </nav>
        <div class="nav-actions">
          <button class="btn btn-yellow">Let's Talk</button>
        </div>
      </div>
    </header>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container">
        <span class="kicker">Creative Agency</span>
        <h1>WE CREATE <span class="hl-red">BOLD</span><br />EXPERIENCES</h1>
        <p class="hero-sub">A creative studio that breaks conventions. We design brands, build digital products, and create unforgettable experiences.</p>
        <div class="hero-cta">
          <button class="btn btn-black">View Our Work</button>
          <button class="btn btn-yellow">Get in Touch</button>
        </div>
      </div>
      <div class="marquee">
        <div class="marquee-track">
          <span v-for="(m, i) in [...marquee, ...marquee]" :key="i">{{ m }} <i>✦</i></span>
        </div>
      </div>
    </section>

    <!-- ============ SELECTED WORK ============ -->
    <section class="section" id="work">
      <div class="container">
        <div class="sec-head">
          <span class="sec-kicker">Selected Work</span>
          <h2 class="h2">CASE <span class="hl-blue">STUDIES</span></h2>
          <button class="btn btn-black">View All Projects</button>
        </div>
        <div class="projects">
          <div class="project" v-for="p in projects" :key="p.name">
            <div class="p-img"><img :src="IMG + p.img" :alt="p.name" loading="lazy" /></div>
            <div class="p-meta">
              <span class="p-cat">{{ p.cat }}</span>
              <h3>{{ p.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ SERVICES ============ -->
    <section class="section section-blue">
      <div class="container">
        <span class="sec-kicker">What We Do</span>
        <h2 class="h2 light">OUR <span class="hl-yellow">SERVICES</span></h2>
        <div class="services">
          <div class="service" v-for="s in services" :key="s.num">
            <span class="s-num">{{ s.num }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ ABOUT ============ -->
    <section class="section" id="about">
      <div class="container">
        <div class="about">
          <div class="about-copy">
            <span class="sec-kicker">About Us</span>
            <h2 class="h2">WE ARE <span class="hl-red">BRUTAL</span></h2>
            <p>Founded in 2019, we're a team of designers, developers, and strategists who believe in the power of bold design.</p>
            <p>We don't follow trends—we set them. Our work is raw, honest, and unapologetically creative.</p>
            <div class="about-stats">
              <div class="as" v-for="s in aboutStats" :key="s.l">
                <b>{{ s.v }}</b><span>{{ s.l }}</span>
              </div>
            </div>
          </div>
          <div class="team">
            <span class="team-label">THE TEAM</span>
            <div class="team-grid">
              <div class="member" v-for="m in team" :key="m.name">
                <span class="m-avatar">{{ m.init }}</span>
                <div><b>{{ m.name }}</b><span>{{ m.role }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section class="section section-yellow" id="contact">
      <div class="container">
        <span class="sec-kicker">Get in Touch</span>
        <h2 class="h2">LET'S CREATE<br /><span class="hl-red">SOMETHING BOLD</span></h2>
        <div class="contact">
          <div class="c-info">
            <div class="c-line"><b>Email:</b> hello@brutal.studio</div>
            <div class="c-line"><b>Phone:</b> +1 (555) 123-4567</div>
            <div class="c-line"><b>Location:</b> New York, NY</div>
          </div>
          <form class="c-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message" rows="3"></textarea>
            <button class="btn btn-black">Send Message</button>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="nav-brand" href="javascript:;">BRUTAL<span>.</span></a>
            <p>A creative studio that breaks conventions. We design brands, build digital products, and create unforgettable experiences.</p>
          </div>
          <div class="footer-col" v-for="c in footerCols" :key="c.title">
            <h4>{{ c.title }}</h4>
            <a v-for="l in c.links" :key="l" href="javascript:;">{{ l }}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 BRUTAL. All rights reserved.</span>
          <div class="footer-legal">
            <a href="javascript:;">Privacy</a>
            <a href="javascript:;">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Syne:wght@700;800&display=swap');

.brutal {
  --red: #ff0000;
  --blue: #0000ff;
  --yellow: #ffd500;
  --bg: #ffffff;
  --text: #000000;
  --muted: #666666;
  --border: #000000;

  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
.brutal h1, .brutal h2, .brutal h3, .brutal h4 {
  font-family: 'Syne', 'DM Sans', system-ui, sans-serif;
  margin: 0;
  text-transform: uppercase;
}
.brutal p { margin: 0; }
.brutal img { display: block; max-width: 100%; }

.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* Nav */
.nav { position: sticky; top: 0; z-index: 100; background: var(--bg); border-bottom: 3px solid var(--border); }
.nav-inner { max-width: 1200px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; gap: 24px; }
.nav-brand { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.4rem; letter-spacing: -0.01em; color: var(--text); text-decoration: none; }
.nav-brand span { color: var(--red); }
.nav-links { display: flex; gap: 26px; margin-left: 12px; }
.nav-links a { font-size: 0.9rem; font-weight: 700; text-transform: uppercase; color: var(--text); text-decoration: none; }
.nav-links a:hover { color: var(--blue); }
.nav-actions { display: flex; align-items: center; gap: 14px; margin-left: auto; }

/* Buttons */
.btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 13px 26px; font-size: 0.88rem; font-weight: 700; font-family: inherit; cursor: pointer; text-transform: uppercase; border: 3px solid var(--border); border-radius: 0; box-shadow: 5px 5px 0 var(--border); transition: transform 0.1s, box-shadow 0.1s; }
.btn:active { transform: translate(3px, 3px); box-shadow: 2px 2px 0 var(--border); }
.btn-black { background: var(--text); color: #fff; }
.btn-black:hover { background: var(--blue); }
.btn-yellow { background: var(--yellow); color: var(--text); }
.btn-yellow:hover { background: #ffc300; }
.nav .btn-yellow { padding: 10px 20px; font-size: 0.82rem; }

/* Hero */
.hero { padding: 72px 0 0; }
.kicker { display: inline-block; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; padding: 6px 14px; border: 2px solid var(--border); background: var(--yellow); margin-bottom: 24px; }
.hero h1 { font-size: clamp(2.8rem, 8vw, 6rem); font-weight: 800; line-height: 0.95; letter-spacing: -0.02em; margin-bottom: 24px; }
.hl-red { color: var(--red); }
.hl-blue { color: var(--blue); }
.hl-yellow { color: #000; background: var(--yellow); padding: 0 8px; }
.hero-sub { max-width: 520px; font-size: 1.05rem; line-height: 1.6; color: var(--muted); margin-bottom: 28px; }
.hero-cta { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 48px; }

/* Marquee */
.marquee { border-top: 3px solid var(--border); border-bottom: 3px solid var(--border); overflow: hidden; padding: 14px 0; background: var(--blue); }
.marquee-track { display: flex; gap: 36px; white-space: nowrap; animation: marquee 24s linear infinite; }
.marquee-track span { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.3rem; color: #fff; text-transform: uppercase; display: inline-flex; align-items: center; gap: 36px; }
.marquee-track i { color: var(--yellow); font-style: normal; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* Sections */
.section { padding: 84px 0; border-top: 3px solid var(--border); }
.section-blue { background: var(--blue); }
.section-yellow { background: var(--yellow); }
.sec-kicker { display: inline-block; font-size: 0.76rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.14em; color: var(--muted); margin-bottom: 12px; }
.sec-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; margin-bottom: 36px; flex-wrap: wrap; }
.h2 { font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 800; letter-spacing: -0.01em; }
.h2.light { color: #fff; }

/* Projects */
.projects { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.project { border: 3px solid var(--border); box-shadow: 6px 6px 0 var(--border); transition: transform 0.15s, box-shadow 0.15s; }
.project:hover { transform: translate(-3px, -3px); box-shadow: 10px 10px 0 var(--border); }
.p-img { aspect-ratio: 4/3; overflow: hidden; border-bottom: 3px solid var(--border); }
.p-img img { width: 100%; height: 100%; object-fit: cover; }
.p-meta { display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; }
.p-cat { font-size: 0.76rem; font-weight: 700; text-transform: uppercase; color: var(--blue); }
.p-meta h3 { font-size: 1.2rem; font-weight: 800; }

/* Services */
.services { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
.service { background: #fff; border: 3px solid var(--border); box-shadow: 5px 5px 0 rgba(0,0,0,0.8); padding: 26px; }
.s-num { display: inline-block; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.6rem; color: var(--red); margin-bottom: 12px; }
.service h3 { font-size: 1.3rem; font-weight: 800; margin-bottom: 10px; }
.service p { font-size: 0.9rem; color: var(--muted); line-height: 1.55; }

/* About */
.about { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
.about-copy .h2 { margin-bottom: 20px; }
.about-copy > p { color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
.about-stats { display: flex; gap: 32px; margin-top: 28px; }
.as { display: flex; flex-direction: column; gap: 4px; }
.as b { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--red); }
.as span { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; }

.team { border: 3px solid var(--border); padding: 24px; }
.team-label { display: inline-block; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.9rem; margin-bottom: 20px; background: var(--blue); color: #fff; padding: 5px 12px; }
.team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.member { display: flex; align-items: center; gap: 12px; }
.m-avatar { width: 46px; height: 46px; border: 2px solid var(--border); display: grid; place-items: center; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.2rem; background: var(--yellow); flex-shrink: 0; }
.member b { display: block; font-size: 0.9rem; }
.member span { font-size: 0.78rem; color: var(--muted); }

/* Contact */
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
.c-info { display: flex; flex-direction: column; gap: 14px; }
.c-line { font-size: 1rem; }
.c-line b { font-weight: 700; margin-right: 6px; }
.c-form { display: flex; flex-direction: column; gap: 14px; }
.c-form input, .c-form textarea { padding: 14px 16px; border: 3px solid var(--border); font-family: inherit; font-size: 0.9rem; background: #fff; }
.c-form input:focus, .c-form textarea:focus { outline: none; background: #fffbe6; }
.c-form textarea { resize: vertical; }
.c-form .btn { align-self: flex-start; }

/* Footer */
.footer { background: var(--text); color: #fff; padding: 56px 0 32px; }
.footer-grid { display: grid; grid-template-columns: 1.8fr 1fr 1fr; gap: 32px; text-align: left; margin-bottom: 36px; }
.footer-brand .nav-brand { color: #fff; margin-bottom: 14px; }
.footer-brand p { font-size: 0.88rem; color: #bbb; max-width: 280px; line-height: 1.6; }
.footer-col h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 14px; color: #fff; }
.footer-col a { display: block; font-size: 0.85rem; color: #bbb; text-decoration: none; margin-bottom: 10px; transition: color 0.15s; }
.footer-col a:hover { color: var(--yellow); }
.footer-bottom { padding-top: 22px; border-top: 1px solid #333; display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; font-size: 0.82rem; color: #bbb; }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { color: #bbb; text-decoration: none; }

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .projects { grid-template-columns: 1fr; }
  .services { grid-template-columns: 1fr; }
  .about { grid-template-columns: 1fr; }
  .contact { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 540px) {
  .team-grid { grid-template-columns: 1fr; }
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
