const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/contact');
  await page.waitForTimeout(2000);
  
  const transformNode = await page.evaluate(() => {
    let el = document.querySelector('.mobile-bottom-nav');
    while (el = el.parentElement) {
      const style = window.getComputedStyle(el);
      if (style.transform !== 'none' || style.filter !== 'none' || style.perspective !== 'none' || style.willChange === 'transform') {
        return el.tagName + '#' + el.id + '.' + el.className;
      }
    }
    return null;
  });
  
  console.log('Transformed parent:', transformNode);
  await browser.close();
})();
