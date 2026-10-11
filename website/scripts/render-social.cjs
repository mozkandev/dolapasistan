// Optional asset utility. Requires Playwright and its Chromium browser.
// Start npm run dev first. PLAYWRIGHT_MODULE can point to an existing installation.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const path = require('node:path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
    await page.goto(`${process.env.WEBSITE_URL || 'http://127.0.0.1:5180'}/scripts/social-cover.html`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const output = path.resolve(__dirname, '../public/images/social-cover.png');
    await page.screenshot({ path: output });
    console.log(`Created ${output}`);
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
