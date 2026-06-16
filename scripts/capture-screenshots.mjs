/**
 * Capture real screenshots from the Lumière Restaurant Template.
 * Usage: node scripts/capture-screenshots.mjs
 * Requires: npx playwright (installed automatically on first run)
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

async function waitForSection(page, selector) {
  const el = page.locator(selector);
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(900);
  await page.evaluate(() => {
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((node) => {
      node.classList.add("is-visible");
    });
  });
  await page.waitForTimeout(300);
  return el;
}

async function captureSections(page) {
  const sections = [
    { selector: "#hero", file: "hero-section.jpg" },
    { selector: "#about", file: "about-section.jpg" },
    { selector: "#menu", file: "menu-section.jpg" },
    { selector: "#gallery", file: "gallery-section.jpg" },
    { selector: "#reservation", file: "reservation-section.jpg" },
    { selector: "#contact", file: "contact-section.jpg" },
  ];

  for (const { selector, file } of sections) {
    const el = await waitForSection(page, selector);
    await el.screenshot({
      path: path.join(SCREENSHOTS_DIR, file),
      type: "jpeg",
      quality: 92,
    });
    console.log(`  ✓ ${file}`);
  }
}

async function captureMobile(browser) {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);

  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, "mobile-version.jpg"),
    type: "jpeg",
    quality: 92,
  });
  console.log("  ✓ mobile-version.jpg");

  await context.close();
}

async function captureCover(browser) {
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const coverUrl = `${BASE_URL}/scripts/cover-template.html`;
  await page.goto(coverUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  await page.screenshot({
    path: path.join(SCREENSHOTS_DIR, "cover.jpg"),
    type: "jpeg",
    quality: 94,
  });
  console.log("  ✓ cover.jpg");

  await context.close();
}

async function main() {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  console.log("Starting local server…");
  const server = await startServer();

  try {
    const browser = await chromium.launch({
      headless: true,
      channel: "chrome",
    });

    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();

    console.log("Capturing section screenshots…");
    await page.goto(BASE_URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await captureSections(page);
    await context.close();

    console.log("Capturing mobile view…");
    await captureMobile(browser);

    console.log("Generating product cover…");
    await captureCover(browser);

    await browser.close();
    console.log("\nAll screenshots saved to docs/screenshots/");
  } finally {
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
