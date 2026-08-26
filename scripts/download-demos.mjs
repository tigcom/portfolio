// Download the 18 UI UX Pro Max demo pages (rendered) from uupm.cc
// into C:/Users/GIGABYTE/Downloads/template/demos/<slug>/ for local study.
// Each folder gets: index.html (rendered DOM), screenshot.png (full-page), assets/* (images).
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const OUT = 'C:/Users/GIGABYTE/Downloads/template/demos'
const BASE = 'https://www.uupm.cc/demo/'

// [portfolio slug] -> [uupm.cc slug]
const demos = [
  ['saas-analytics-dashboard', 'saas-analytics-dashboard'],
  ['sales-crm-platform', 'sales-crm-platform'],
  ['fintech-crypto-dashboard', 'fintech-crypto'],
  ['digital-banking-app', 'digital-banking'],
  ['cex-trading-platform', 'cex-trading'],
  ['crypto-wallet', 'crypto-wallet'],
  ['ai-writing-assistant', 'ai-writing-assistant'],
  ['ai-chatbot-platform', 'ai-chatbot-platform'],
  ['ai-image-generator', 'ai-image-generator'],
  ['luxury-ecommerce', 'luxury-ecommerce'],
  ['health-wellness-app', 'health-wellness'],
  ['real-estate-luxury', 'real-estate'],
  ['educational-platform', 'educational-platform'],
  ['restaurant-food', 'restaurant-food'],
  ['travel-tourism', 'travel-tourism'],
  ['fitness-gym-app', 'fitness-gym'],
  ['developer-tools', 'developer-tools'],
  ['creative-agency-portfolio', 'creative-agency'],
]

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function downloadImage(request, url, dir, i) {
  try {
    const res = await request.get(url, { timeout: 25000 })
    const buf = await res.body()
    if (!buf || !buf.length) return null
    const ct = (res.headers()['content-type'] || '').toLowerCase()
    let ext = '.img'
    if (ct.includes('png')) ext = '.png'
    else if (ct.includes('jpeg') || ct.includes('jpg')) ext = '.jpg'
    else if (ct.includes('webp')) ext = '.webp'
    else if (ct.includes('svg')) ext = '.svg'
    else if (ct.includes('gif')) ext = '.gif'
    else if (ct.includes('avif')) ext = '.avif'
    else if (ct.includes('ico')) ext = '.ico'
    const name = `img-${String(i).padStart(3, '0')}${ext}`
    fs.writeFileSync(path.join(dir, 'assets', name), buf)
    return name
  } catch {
    return null
  }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true })
  const browser = await chromium.launch()
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  const page = await context.newPage()

  for (const [slug, uupm] of demos) {
    const url = BASE + uupm
    const dir = path.join(OUT, slug)
    fs.mkdirSync(path.join(dir, 'assets'), { recursive: true })
    console.log(`[${slug}] loading ${url}`)

    // 1) navigate + wait for render
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 90000 })
    } catch (e) {
      console.log(`  goto warn: ${e.message}`)
    }
    await sleep(3000)

    // 2) scroll through page to trigger lazy-loaded images, then back to top
    try {
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let y = 0
          const t = setInterval(() => {
            window.scrollBy(0, 700)
            y += 700
            if (y >= document.body.scrollHeight) { clearInterval(t); resolve() }
          }, 130)
        })
        window.scrollTo(0, 0)
      })
    } catch (e) {
      console.log(`  scroll warn: ${e.message}`)
    }
    await sleep(800)

    // 3) full-page screenshot
    try {
      await page.screenshot({ path: path.join(dir, 'screenshot.png'), fullPage: true })
    } catch (e) {
      console.log(`  screenshot fail: ${e.message}`)
    }

    // 4) rendered DOM
    let html = ''
    try {
      html = await page.evaluate(() => document.documentElement.outerHTML)
    } catch (e) {
      console.log(`  html fail: ${e.message}`)
    }

    // 5) download images + rewrite references
    let imgUrls = []
    try {
      imgUrls = await page.evaluate(() =>
        Array.from(document.images)
          .map((im) => im.currentSrc || im.src)
          .filter((s) => s && s.startsWith('http'))
      )
    } catch {}

    const unique = [...new Set(imgUrls)]
    let idx = 0
    for (const u of unique) {
      const local = await downloadImage(page.request, u, dir, idx++)
      if (local) {
        html = html.split(u.replace(/&/g, '&amp;')).join('assets/' + local)
        html = html.split(u).join('assets/' + local)
      }
    }

    // 6) write files
    fs.writeFileSync(path.join(dir, 'index.html'), '<!DOCTYPE html>\n' + html)
    fs.writeFileSync(
      path.join(dir, 'meta.json'),
      JSON.stringify({ slug, uupm, url, imageCount: unique.length, htmlBytes: html.length }, null, 2)
    )

    console.log(`[${slug}] DONE — ${unique.length} imgs, ${html.length} bytes`)
  }

  await browser.close()
  console.log('ALL DONE')
}

main().catch((e) => { console.error(e); process.exit(1) })
