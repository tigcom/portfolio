// Verifies the two things the black-screen fix has to guarantee:
//   1. With JS fully disabled, the pre-rendered pages still show their content
//      and nothing overlays them.
//   2. With JS on, the loader still plays and — the whole point — always ends.
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve('dist')
const PORT = 4173

const TYPES = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml',
  '.pdf': 'application/pdf', '.woff2': 'font/woff2',
}

// Mimics Cloudflare Pages clean-URL resolution, which is order-sensitive:
// exact asset, then <path>.html, then <path>/index.html. Trying the directory
// first would wrongly resolve /projects to the projects/ folder and 404.
const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0])
  const exact = path.join(ROOT, urlPath)
  let file = null
  if (fs.existsSync(exact) && fs.statSync(exact).isFile()) file = exact
  else if (fs.existsSync(`${exact}.html`)) file = `${exact}.html`
  else if (fs.existsSync(path.join(exact, 'index.html'))) file = path.join(exact, 'index.html')

  if (!file) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    return res.end(fs.readFileSync(path.join(ROOT, '404.html')))
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
})
await new Promise((r) => server.listen(PORT, r))

const browser = await chromium.launch()
const BASE = `http://localhost:${PORT}`
const ROUTES = ['/', '/about', '/projects', '/marketplace', '/projects/kplus-digital-banking']

console.log('=== 1. JS DISABLED — static HTML must stand on its own ===')
const noJs = await browser.newContext({ javaScriptEnabled: false })
for (const route of ROUTES) {
  const page = await noJs.newPage()
  await page.goto(BASE + route, { waitUntil: 'load' })
  const r = await page.evaluate(() => {
    const app = document.querySelector('#app')
    // Anything fixed covering the viewport would black out the page.
    const overlay = [...document.querySelectorAll('body *')].filter((el) => {
      const s = getComputedStyle(el)
      return s.position === 'fixed' && el.getBoundingClientRect().height > innerHeight * 0.8
    }).map((el) => el.className)
    return { text: (app?.innerText || '').replace(/\s+/g, ' ').trim().length, overlay }
  })
  console.log(`  ${route.padEnd(32)} text=${String(r.text).padStart(5)} chars  overlay=${r.overlay.length ? r.overlay : 'none'}`)
  await page.close()
}
await noJs.close()

console.log('\n=== 2. JS ENABLED — loader must appear, then always dismiss ===')
const ctx = await browser.newContext()
for (const route of ROUTES) {
  const page = await ctx.newPage()
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })

  const t0 = Date.now()
  await page.goto(BASE + route, { waitUntil: 'domcontentloaded' })

  let appearedAt = null
  let goneAt = null
  for (let i = 0; i < 60; i++) {           // sample for 6s
    const has = await page.evaluate(() => !!document.querySelector('.page-loader')).catch(() => false)
    if (has && appearedAt === null) appearedAt = Date.now() - t0
    if (!has && appearedAt !== null) { goneAt = Date.now() - t0; break }
    await page.waitForTimeout(100)
  }
  const status = goneAt !== null ? `dismissed @${goneAt}ms`
    : appearedAt === null ? 'never appeared (ok if page had no content to gate)'
      : 'STUCK ON SCREEN — BUG'
  console.log(`  ${route.padEnd(32)} appeared=${appearedAt}ms  ${status}  errors=${errors.length}`)
  if (errors.length) errors.forEach((e) => console.log(`      ! ${e.slice(0, 160)}`))
  await page.close()
}

await ctx.close()
await browser.close()
server.close()
