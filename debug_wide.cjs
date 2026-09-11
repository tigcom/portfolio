const { chromium, devices } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext(devices['iPhone 12']);
  const page = await context.newPage();
  
  await page.goto('http://localhost:5173/#/contact');
  await page.waitForTimeout(2000);
  
  const wideElements = await page.evaluate(() => {
    const w = 390;
    const elements = document.querySelectorAll('*');
    const result = [];
    for (let i = 0; i < elements.length; i++) {
      const rect = elements[i].getBoundingClientRect();
      if (rect.right > w && elements[i].tagName !== 'SCRIPT' && elements[i].tagName !== 'STYLE' && elements[i].tagName !== 'HTML' && elements[i].tagName !== 'BODY') {
        let text = elements[i].innerText ? elements[i].innerText.slice(0, 30) : '';
        result.push({ tag: elements[i].tagName, class: elements[i].className, right: rect.right, width: rect.width, text });
      }
    }
    return result;
  });
  
  console.log(wideElements.map(e => `${e.tag}.${e.class}: right=${e.right} width=${e.width} text="${e.text.replace(/\n/g, ' ')}"`).join('\n'));
  await browser.close();
})();
