const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const outputDir = path.join(__dirname, '../public/image/projects/renew-ticfactory');

(async () => {
  console.log('Launching browser with 1920x1080 viewport...');
  const browser = await chromium.launch();
  
  const desktopContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1
  });
  const page = await desktopContext.newPage();

  // 1. Hero Home (1920x1080)
  console.log('Capturing hero-home.png at 1920x1080...');
  await page.goto('http://localhost:3005/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outputDir, 'hero-home.png') });
  console.log('Saved hero-home.png');

  // 2. Factory Tech (1920x1080)
  console.log('Capturing factory-tech.png at 1920x1080...');
  await page.goto('http://localhost:3005/factory', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outputDir, 'factory-tech.png') });
  console.log('Saved factory-tech.png');

  // 3. News Detail (1920x1080)
  console.log('Capturing news-detail.png at 1920x1080...');
  await page.goto('http://localhost:3005/insights/lycopene-sinh-hoc-tac-dung-chong-oxy-hoa', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outputDir, 'news-detail.png') });
  console.log('Saved news-detail.png');

  await browser.close();
  console.log('All remaining 1920x1080 screenshots captured successfully!');
})();
