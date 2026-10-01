// Re-encode the TIC Factory detail-page captures from PNG to JPEG at identical
// pixel dimensions. The three full-page captures alone were 17.3MB of PNG; the
// route served ~18.9MB of images in total. These are photographic captures, so
// PNG is the wrong codec — JPEG q82/q88 cuts roughly 7-10x with no visible loss
// at the 872px display width. Usage: node scripts/optimize-ticfactory.mjs
import { Jimp } from 'jimp'
import path from 'node:path'

const DIR = 'public/image/projects/renew-ticfactory'

// Text-heavy frames (forms, certificates, science panels) get q88 to avoid
// ringing on small type; photographic captures get q82.
const JOBS = [
  { file: 'ticfactory-full-landing.png', q: 82 },
  { file: 'ticfactory-full-factory.png', q: 82 },
  { file: 'ticfactory-full-oem.png', q: 84 },
  { file: 'fireshot-008.png', q: 84 },
  { file: 'fireshot-013.png', q: 88 },
  { file: 'fireshot-014.png', q: 84 },
  { file: 'fireshot-015.png', q: 84 },
  { file: 'fireshot-017.png', q: 84 },
  { file: 'fireshot-018.png', q: 88 },
  { file: 'fireshot-019.png', q: 88 },
]

const mb = (n) => (n / 1048576).toFixed(2) + 'MB'

let before = 0
let after = 0

for (const job of JOBS) {
  const src = path.join(DIR, job.file)
  const out = path.join(DIR, job.file.replace(/\.png$/i, '.jpg'))
  try {
    // Re-read per file rather than clone(): a 1904x10115 RGBA bitmap is ~77MB,
    // and holding several clones at once is how this script runs out of memory.
    const img = await Jimp.read(src)
    const { width, height } = img.bitmap
    await img.write(out, { quality: job.q })
    const a = (await import('node:fs')).statSync(src).size
    const b = (await import('node:fs')).statSync(out).size
    before += a
    after += b
    console.log(`OK  ${out}  ${width}x${height}  q${job.q}  ${mb(a)} -> ${mb(b)}`)
  } catch (err) {
    console.error(`ERR ${src}: ${err.message}`)
  }
}

console.log(`\ntotal ${mb(before)} -> ${mb(after)}  (${(before / after).toFixed(1)}x smaller)`)
