const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/contact');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'contact-mobile.png', fullPage: false });
  
  await page.goto('http://localhost:5173/#/about');
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'about-mobile.png', fullPage: false });
  
  await browser.close();
})();
