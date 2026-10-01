import { chromium } from 'playwright'

const URL = 'http://localhost:5173/projects/renew-ticfactory'
const browser = await chromium.launch()
let failures = 0
const check = (name, ok, detail = '') => {
  if (!ok) failures++
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`)
}

async function newPage(theme = 'dark', lang = 'vi') {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  await ctx.addInitScript(([t, l]) => {
    localStorage.setItem('portfolio-theme', t)
    localStorage.setItem('lang', l)
  }, [theme, lang])
  const page = await ctx.newPage()
  const bytes = {}
  page.on('response', r => {
    if (r.url().includes('/image/projects/renew-ticfactory/')) {
      const h = r.headers()['content-length']
      bytes[r.url().split('/').pop()] = h ? +h : 0
    }
  })
  return { ctx, page, bytes }
}

/* ── A + F: images match headings, and page weight ───────────────────────── */
{
  console.log('\n===== A. ẢNH KHỚP TIÊU ĐỀ =====')
  const { ctx, page, bytes } = await newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(3000)

  const expected = {
    'landing-page': ['ticfactory-full-landing'],
    'factory-process': ['ticfactory-full-factory', 'fireshot-015', 'fireshot-018'],
    'products-b2b': ['fireshot-017'],
    'oem-odm-services': ['ticfactory-full-oem', 'fireshot-013'],
    'agronomy-insights': ['fireshot-019'],
    'contact-logistics': ['fireshot-014'],
  }

  for (const [id, want] of Object.entries(expected)) {
    const got = await page.evaluate((sid) => {
      const sec = document.getElementById(sid)
      return [...sec.querySelectorAll('img')].map(i => i.getAttribute('src').split('/').pop().replace(/\.jpg$/, ''))
    }, id)
    check(`#${id}`, JSON.stringify(got) === JSON.stringify(want), `got ${got.join(',')}`)
  }

  const sum = Object.values(bytes).reduce((a, b) => a + b, 0)
  const max = Math.max(...Object.values(bytes))
  console.log('\n===== F. DUNG LƯỢNG =====')
  console.log(`  tổng: ${(sum / 1048576).toFixed(2)}MB (baseline 18.86MB) | file lớn nhất: ${(max / 1048576).toFixed(2)}MB`)
  check('tổng < 9MB', sum < 9 * 1048576, `${(sum / 1048576).toFixed(2)}MB`)
  check('không file nào > 3MB', max < 3 * 1048576, `${(max / 1048576).toFixed(2)}MB`)

  // lazy loading actually engaged?
  const lazy = await page.evaluate(() => [...document.querySelectorAll('.docs-main-column img')].filter(i => i.loading === 'lazy').length)
  const total = await page.evaluate(() => document.querySelectorAll('.docs-main-column img').length)
  check('ảnh lazy', lazy === total, `${lazy}/${total}`)

  await ctx.close()
}

/* ── B: contrast in both themes ──────────────────────────────────────────── */
console.log('\n===== B. TƯƠNG PHẢN 2 THEME =====')
for (const theme of ['dark', 'light']) {
  const { ctx, page } = await newPage(theme)
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)

  const res = await page.evaluate(() => {
    const lum = (r, g, b) => {
      const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4) }
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)
    }
    const parse = s => {
      const m = s.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/)
      return m ? { r: +m[1], g: +m[2], b: +m[3], a: m[4] === undefined ? 1 : +m[4] } : null
    }
    const bgOf = el => {
      let n = el
      while (n && n !== document.documentElement) {
        const c = parse(getComputedStyle(n).backgroundColor)
        if (c && c.a > 0.5) return c
        n = n.parentElement
      }
      return parse(getComputedStyle(document.body).backgroundColor) || { r: 255, g: 255, b: 255 }
    }
    const out = {}
    const sels = ['.project-title', '.section-text', '.section-h2', '.section-h3', '.intro-desc',
      '.breadcrumb .current', '.meta-val', '.toc-title', '.toc-item.is-active', '.nav-title',
      '.nav-label', '.share-label', '.tag-pill', '.year-pill', '.image-caption']
    for (const sel of sels) {
      const el = document.querySelector(sel)
      if (!el) { out[sel] = null; continue }
      const fg = parse(getComputedStyle(el).color)
      const bg = bgOf(el)
      if (!fg) { out[sel] = null; continue }
      const a = Math.max(lum(fg.r, fg.g, fg.b), lum(bg.r, bg.g, bg.b)) + 0.05
      const b = Math.min(lum(fg.r, fg.g, fg.b), lum(bg.r, bg.g, bg.b)) + 0.05
      const size = parseFloat(getComputedStyle(el).fontSize)
      const bold = parseInt(getComputedStyle(el).fontWeight, 10) >= 700
      const large = size >= 24 || (size >= 18.66 && bold)
      out[sel] = { ratio: +(a / b).toFixed(2), min: large ? 3 : 4.5 }
    }
    return out
  })

  const bad = Object.entries(res).filter(([, v]) => v && v.ratio < v.min)
  for (const [sel, v] of Object.entries(res)) {
    if (!v) { console.log(`  ${theme}  ${sel.padEnd(24)} n/a`); continue }
    console.log(`  ${theme}  ${sel.padEnd(24)} ${String(v.ratio).padStart(6)}  (min ${v.min})${v.ratio < v.min ? '  <-- FAIL' : ''}`)
  }
  check(`${theme}: mọi text đạt WCAG AA`, bad.length === 0, bad.length ? bad.map(([s]) => s).join(', ') : '')
  await ctx.close()
}

/* ── E: i18n ─────────────────────────────────────────────────────────────── */
console.log('\n===== E. i18n =====')
{
  const heads = {}
  for (const lang of ['vi', 'en']) {
    const { ctx, page } = await newPage('dark', lang)
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.waitForTimeout(2500)
    const data = await page.evaluate(() => ({
      sectionText: [...document.querySelectorAll('.docs-main-column h2, .docs-main-column h3, .docs-main-column p, .docs-main-column figcaption')].map(e => e.textContent.trim()),
      tocText: [...document.querySelectorAll('.toc-item, .toc-title, .share-label')].map(e => e.textContent.trim()),
      chrome: [...document.querySelectorAll('.btn-live-demo, .meta-label, .nav-label')].map(e => e.textContent.trim()),
    }))
    heads[lang] = data
    // Vietnamese place names are proper nouns and stay correct in English prose
    // (same as "Hồ Chí Minh" in an English sentence), so strip them before
    // looking for *untranslated* Vietnamese.
    const PROPER = /(Thạnh Bắc|Tân Biên|Tây Ninh|Hồ Chí Minh|Việt Nam)/g
    const all = [...data.sectionText, ...data.tocText, ...data.chrome].join(' ').replace(PROPER, '')
    const diacritics = (all.match(/[àáảãạăâđêôơưÀÁẢÃẠĂÂĐÊÔƠƯ]/g) || []).length
    console.log(`  ${lang}: ${diacritics} ký tự có dấu (đã loại tên riêng)`)
    if (lang === 'en') check('EN không còn câu tiếng Việt chưa dịch', diacritics === 0, `${diacritics} ký tự`)
    if (lang === 'vi') check('VI đang hiển thị tiếng Việt', diacritics > 50, `${diacritics} ký tự`)
    await ctx.close()
  }
  const changed = JSON.stringify(heads.vi.sectionText) !== JSON.stringify(heads.en.sectionText)
  check('heading đổi theo ngôn ngữ', changed)
  console.log('  EN h2 đầu:', heads.en.sectionText[0])
  console.log('  VI h2 đầu:', heads.vi.sectionText[0])
  console.log('  EN chrome:', JSON.stringify(heads.en.chrome))
}

console.log(`\n${failures === 0 ? '=== TẤT CẢ ĐỀU PASS ===' : `=== ${failures} MỤC FAIL ===`}`)
await browser.close()
process.exit(failures === 0 ? 0 : 1)
