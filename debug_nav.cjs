const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/contact');
  await page.waitForTimeout(2000);
  
  const nav = await page.$('.mobile-bottom-nav');
  console.log('Nav found:', !!nav);
  if (nav) {
    const display = await nav.evaluate(el => window.getComputedStyle(el).display);
    console.log('Display:', display);
    const zIndex = await nav.evaluate(el => window.getComputedStyle(el).zIndex);
    console.log('z-index:', zIndex);
    const rect = await nav.boundingBox();
    console.log('Bounding box:', rect);
  }
  
  await browser.close();
})();
