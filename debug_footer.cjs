const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/about');
  await page.waitForTimeout(2000);
  
  const footerInfo = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    if (!footer) return 'No footer found in DOM';
    const rect = footer.getBoundingClientRect();
    const style = window.getComputedStyle(footer);
    return {
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      rect: rect,
      htmlHeight: document.documentElement.scrollHeight,
      bodyHeight: document.body.scrollHeight,
      appHeight: document.querySelector('.app-wrapper') ? document.querySelector('.app-wrapper').scrollHeight : null
    };
  });
  console.log('Footer:', footerInfo);
  
  await browser.close();
})();
