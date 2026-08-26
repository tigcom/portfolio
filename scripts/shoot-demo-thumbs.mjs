// Capture a 3:2 hero thumbnail for each "app" demo page and save it as
// public/demos/<slug>/thumb.jpg (matches the 3/2 aspect-ratio of the
// marketplace card preview). Usage:
//   node scripts/shoot-demo-thumbs.mjs [slug...]
// With no args, shoots every `type: "app"` entry in templates.json.
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const templates = JSON.parse(fs.readFileSync(path.join(root, 'src/data/templates.json'), 'utf8'))
const apps = templates.filter((t) => t.type === 'app')

const argv = process.argv.slice(2)
const targets = argv.length ? apps.filter((t) => argv.includes(t.slug)) : apps
if (!targets.length) {
  console.error('No matching demos found.')
  process.exit(1)
}

const port = process.env.PORT || 5173
// 1200x800 == 3:2, matching .card-preview { aspect-ratio: 3 / 2 }
const VIEW_W = 1200
const VIEW_H = 800

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: VIEW_W, height: VIEW_H }, deviceScaleFactor: 1 })

let fail = 0
for (const t of targets) {
  const slug = t.slug
  const url = `http://localhost:${port}/portfolio/#/marketplace/${slug}/demo`
  const outDir = path.join(root, 'public/demos', slug)
  const outFile = path.join(outDir, 'thumb.jpg')
  fs.mkdirSync(outDir, { recursive: true })

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
    // Wait for webfonts + lazy images so the hero renders fully before shooting.
    await page.evaluate(async () => {
      await Promise.race([
        document.fonts ? document.fonts.ready : Promise.resolve(),
        new Promise((r) => setTimeout(r, 4000)),
      ])
      const imgs = Array.from(document.images).filter((i) => !i.complete)
      await Promise.all(imgs.map((i) => new Promise((r) => { i.onload = i.onerror = r })))
    })
    await page.waitForTimeout(1200)

    // Hide the floating escape-hatch back button so it doesn't pollute the thumb.
    await page.addStyleTag({ content: '.demo-exit { display: none !important; }' })
    await page.waitForTimeout(200)

    await page.screenshot({ path: outFile, type: 'jpeg', quality: 82 })
    console.log(`OK   ${slug} -> ${outFile}`)
  } catch (err) {
    fail++
    console.error(`ERR  ${slug}: ${err.message}`)
  }
}

await browser.close()
console.log(fail ? `DONE with ${fail} failure(s)` : 'DONE — all thumbs captured')
process.exit(fail ? 1 : 0)
