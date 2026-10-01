const fs = require('fs');
const path = require('path');
const { chromium, devices } = require('playwright');

const outputDir = path.join(__dirname, '../public/image/projects/renew-ticfactory');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  
  // Desktop context
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await desktopContext.newPage();

  const pagesToCapture = [
    { url: 'http://localhost:3005/', filename: 'hero-home.png', wait: 3000 },
    { url: 'http://localhost:3005/factory', filename: 'factory-tech.png', wait: 3000 },
    { url: 'http://localhost:3005/oem-odm', filename: 'oem-odm-services.png', wait: 3000 },
    { url: 'http://localhost:3005/products', filename: 'products-catalog.png', wait: 3000 },
    { url: 'http://localhost:3005/quality-export', filename: 'quality-export.png', wait: 3000 },
  ];

  for (const item of pagesToCapture) {
    console.log(`Navigating to ${item.url}...`);
    await page.goto(item.url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(item.wait);
    const dest = path.join(outputDir, item.filename);
    await page.screenshot({ path: dest, fullPage: false });
    console.log(`Saved screenshot to ${dest}`);
  }

  // Mobile context
  console.log('Capturing mobile view...');
  const mobileContext = await browser.newContext({
    ...devices['iPhone 14 Pro Max'],
    deviceScaleFactor: 2
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3005/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(3000);
  const mobileDest = path.join(outputDir, 'home-mobile.png');
  await mobilePage.screenshot({ path: mobileDest, fullPage: false });
  console.log(`Saved mobile screenshot to ${mobileDest}`);

  await browser.close();
  console.log('Finished capturing all screenshots!');
})();
