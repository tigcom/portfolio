const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/contact');
  await page.waitForTimeout(2000);
  
  const width = await page.evaluate(() => {
    return {
      windowInnerWidth: window.innerWidth,
      documentClientWidth: document.documentElement.clientWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      mobileNavRect: document.querySelector('.mobile-bottom-nav').getBoundingClientRect(),
      chatbotRect: document.querySelector('.chatbot-trigger').getBoundingClientRect()
    }
  });
  
  console.log(width);
  await browser.close();
})();
