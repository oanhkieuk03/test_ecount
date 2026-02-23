const { chromium } = require('@playwright/test');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://login.ecount.com/');
    const inputs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('input, button, a')).map(el => ({
            tagName: el.tagName,
            id: el.id,
            name: el.getAttribute('name'),
            placeholder: el.getAttribute('placeholder'),
            type: el.getAttribute('type'),
            text: el.innerText || el.value,
            role: el.getAttribute('role'),
            ariaLabel: el.getAttribute('aria-label')
        }));
    });
    fs.writeFileSync('elements.json', JSON.stringify(inputs, null, 2));
    console.log('Done');
    await browser.close();
})();
