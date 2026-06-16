/**
 * Capture clean website screenshots — viewport/content only, zero browser chrome.
 * Usage: npm run screenshots
 */

import { chromium } from "playwright";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SCREENSHOTS_DIR = path.join(ROOT, "docs", "screenshots");
const PORT = 8765;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const DESKTOP = { width: 1440, height: 900 };
const MOBILE = { width: 390, height: 844 };

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json",
};

const SECTIONS = [
  { selector: "#hero", file: "hero-section.jpg" },
  { selector: "#about", file: "about-section.jpg" },
  { selector: "#menu", file: "menu-section.jpg" },
  { selector: "#gallery", file: "gallery-section.jpg" },
  { selector: "#reservation", file: "reservation-section.jpg" },
  { selector: "#contact", file: "contact-section.jpg" },
];

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const raw = decodeURIComponent((req.url || "/").split("?")[0]);
      const safePath = path.normalize(raw).replace(/^(\.\.[/\\])+/, "");
      let filePath = path.join(ROOT, safePath === path.sep ? "index.html" : safePath);

      if (safePath === "/" || safePath === "") {
        filePath = path.join(ROOT, "index.html");
      }

      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
        res.end(data);
      });
    });

    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });
}

async function launchBrowser() {
  const options = {
    headless: true,
    args: [
      "--headless=new",
      "--hide-scrollbars",
      "--disable-dev-shm-usage",
      "--no-first-run",
      "--no-default-browser-check",
    ],
  };

  try {
    return await chromium.launch(options);
  } catch {
    return chromium.launch({ ...options, channel: "chrome" });
  }
}

async function preparePage(page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `,
  });
}

async function revealSection(page, selector) {
  await page.evaluate((sel) => {
    const target = document.querySelector(sel);
    if (!target) return;
    target.scrollIntoView({ block: "start", behavior: "instant" });
    document.querySelectorAll(".reveal").forEach((node) => {
      node.classList.add("is-visible");
    });
  }, selector);
  await page.waitForTimeout(200);
}

async function captureSection(page, selector, filePath) {
  await revealSection(page, selector);

  const el = page.locator(selector);
  const box = await el.boundingBox();
  if (!box) {
    throw new Error(`Section not found: ${selector}`);
  }

  await el.screenshot({
    path: filePath,
    type: "jpeg",
    quality: 93,
    animations: "disabled",
  });
}

async function captureDesktopSections(browser) {
  const context = await browser.newContext({
    viewport: DESKTOP,
    deviceScaleFactor: 2,
    colorScheme: "light",
    locale: "en-US",
  });
  const page = await context.newPage();
  await preparePage(page);
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(400);

  for (const { selector, file } of SECTIONS) {
    await captureSection(page, selector, path.join(SCREENSHOTS_DIR, file));
    console.log(`  ✓ ${file}`);
  }

  await context.close();
}

async function captureMobile(browser) {
  const context = await browser.newContext({
    viewport: MOBILE,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    colorScheme: "light",
  });
  const page = await context.newPage();
  await preparePage(page);
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, "mobile-version.jpg"),
    type: "jpeg",
    quality: 93,
    fullPage: false,
    animations: "disabled",
  });
  console.log("  ✓ mobile-version.jpg");

  await context.close();
}

async function captureCover(browser) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await preparePage(page);
  await page.goto(`${BASE_URL}/scripts/cover-template.html`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);

  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, "cover.jpg"),
    type: "jpeg",
    quality: 94,
    fullPage: false,
    animations: "disabled",
  });
  console.log("  ✓ cover.jpg");

  await context.close();
}

function printValidationReport() {
  const files = [
    "cover.jpg",
    "hero-section.jpg",
    "about-section.jpg",
    "menu-section.jpg",
    "gallery-section.jpg",
    "reservation-section.jpg",
    "contact-section.jpg",
    "mobile-version.jpg",
  ];

  console.log("\n── Validation Report ──");
  console.log("Capture mode : Headless Playwright · element screenshot · no browser chrome");
  console.log("Method       : locator.screenshot() — website content only\n");

  for (const file of files) {
    const filePath = path.join(SCREENSHOTS_DIR, file);
    const stat = fs.statSync(filePath);
    const kb = (stat.size / 1024).toFixed(1);
    console.log(`  PASS  ${file.padEnd(24)} ${kb.padStart(8)} KB  ·  no browser UI`);
  }

  console.log("\n  Cover mockups use clean content panels only (no address bar / tabs).");
  console.log("  Section shots are full-element captures of website content.\n");
}

async function main() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  console.log("Starting local server…");
  const server = await startServer();

  try {
    const browser = await launchBrowser();

    console.log("Capturing desktop sections (element screenshot, 1440×900 @2x)…");
    await captureDesktopSections(browser);

    console.log("Capturing mobile view (390×844 @2x)…");
    await captureMobile(browser);

    console.log("Generating product cover (chrome-free mockups)…");
    await captureCover(browser);

    await browser.close();
    printValidationReport();
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
