const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outputDir = path.join(__dirname, '../public/image/projects/renew-ticfactory');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await desktopContext.newPage();

  // 1. Tháp hồ sơ 3D (on /quality-export)
  console.log('Capturing Tháp hồ sơ 3D...');
  await page.goto('http://localhost:3005/quality-export', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const thapHoSo = page.locator('text=03 — THÁP HỒ SƠ 3D');
  if (await thapHoSo.count() > 0) {
    await thapHoSo.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2500);
    // Move up slightly if needed
    await page.evaluate(() => window.scrollBy(0, -100));
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: path.join(outputDir, 'thap-ho-so-3d.png') });
  console.log('Captured thap-ho-so-3d.png');

  // 2. Yêu Cầu Báo Giá Nguyên Liệu & Gia Công OEM / ODM (on /oem-odm)
  console.log('Capturing Quote Form...');
  await page.goto('http://localhost:3005/oem-odm', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const quoteTitle = page.locator('text=Yêu Cầu Báo Giá Nguyên Liệu');
  if (await quoteTitle.count() > 0) {
    await quoteTitle.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    await page.evaluate(() => window.scrollBy(0, -80));
    await page.waitForTimeout(500);
  }
  await page.screenshot({ path: path.join(outputDir, 'quote-request-oem.png') });
  console.log('Captured quote-request-oem.png');

  // 3. News Detail Page (/insights/lycopene-sinh-hoc-tac-dung-chong-oxy-hoa)
  console.log('Capturing News Detail...');
  await page.goto('http://localhost:3005/insights/lycopene-sinh-hoc-tac-dung-chong-oxy-hoa', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outputDir, 'news-detail.png') });
  console.log('Captured news-detail.png');

  // 4. Footer Section
  console.log('Capturing Footer...');
  await page.goto('http://localhost:3005/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(outputDir, 'footer-section.png') });
  console.log('Captured footer-section.png');

  // Delete old home-mobile.png if it exists
  const oldMobile = path.join(outputDir, 'home-mobile.png');
  if (fs.existsSync(oldMobile)) {
    fs.unlinkSync(oldMobile);
    console.log('Deleted old home-mobile.png');
  }

  // Delete obsolete images from previous run if any
  ['oem-odm-services.png', 'products-catalog.png', 'quality-export.png'].forEach(oldImg => {
    const p = path.join(outputDir, oldImg);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`Removed old ${oldImg}`);
    }
  });

  await browser.close();
  console.log('Done capturing all requested screenshots!');
})();
