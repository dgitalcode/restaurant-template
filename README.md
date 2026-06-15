# Lumière — Premium Restaurant Website Template

> A luxury fine dining website template built with HTML5, CSS3, and Vanilla JavaScript. Designed for restaurant owners worldwide.

**Brand:** D-GITALCODE  
**Version:** 1.0.0  
**Copyright:** © 2026 D-GITALCODE  
**Repository:** [github.com/dgitalcode/restaurant-template](https://github.com/dgitalcode/restaurant-template)

---

## Overview

Lumière is a single-restaurant commercial website template inspired by Michelin-star establishments, Nobu, Zuma, and high-end steakhouse design. It communicates luxury, appetite, trust, freshness, quality, elegance, hospitality, and professionalism.

This is **not** a directory, delivery platform, reservation marketplace, multi-restaurant system, or SaaS product. It is one premium website template designed to be sold to individual restaurant owners.

---

## Features

- **12 Complete Sections** — Hero, About, Signature Dishes, Full Menu, Chef Showcase, Gallery, Reservations, Testimonials, Awards, Location, Newsletter, Footer
- **Mobile-First Design** — Responsive 12-column grid with premium spacing
- **Luxury Aesthetics** — Playfair Display + Inter typography, gold accent palette
- **Smooth Animations** — Reveal effects, parallax, hover states, image zoom
- **Gallery Lightbox** — Masonry layout with keyboard navigation
- **Reservation Form** — Client-side validation with accessible UI
- **SEO Optimized** — Semantic HTML, Open Graph, Twitter Cards, JSON-LD schema
- **Accessibility** — WCAG compliant, skip links, ARIA labels, reduced motion support
- **Performance** — Lazy loading, optimized CSS, Lighthouse 95+ target
- **Zero Dependencies** — No frameworks, no build step required

---

## Quick Start

### 1. Clone or Download

```bash
git clone https://github.com/dgitalcode/restaurant-template.git
cd restaurant-template
```

### 2. Serve Locally

ES modules require a local server. Choose one:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8080
```

Open `http://localhost:8080` in your browser.

### 3. Customize

Edit content in `index.html` (search for `<!-- EDIT:` comments) or use the centralized `js/config.js` as a reference guide.

---

## Customization Guide

### Replace Restaurant Branding

| Element | Location |
|---------|----------|
| Restaurant name | `index.html` — header logo, footer, `<title>` |
| Logo | Replace text logo or add `<img>` in `.header__logo` |
| Hero headline | `#hero` section |
| Meta tags | `<head>` — description, OG tags |

### Replace Images

All images live in `assets/images/`. Replace these files with your own (keep filenames or update paths in HTML):

| File | Usage |
|------|-------|
| `hero.jpg` | Fullscreen hero background |
| `about.jpg` | About section |
| `chef.jpg` | Chef showcase |
| `dish-wagyu.jpg` | Signature dish card |
| `dish-scallops.jpg` | Signature dish card |
| `dish-duck.jpg` | Signature dish card |
| `dish-dessert.jpg` | Signature dish card |
| `gallery-01.jpg` – `gallery-08.jpg` | Gallery masonry |
| `favicon.svg` | Browser tab icon |

**Recommended image sizes:**
- Hero: 1920×1080px (landscape)
- About/Chef: 800×1000px (portrait)
- Dishes: 600×450px (4:3)
- Gallery: 600×400–500px (mixed)

### Update Menu Items

Edit menu items in the `#menu` section of `index.html`, or reference `js/config.js` for the full data structure.

### Update Contact & Hours

Search for `<!-- EDIT: Contact Details -->` and `<!-- EDIT: Opening Hours -->` in `index.html`.

### Update Social Links

Edit links in the footer `.social-links` section.

### Update Google Maps

Replace the iframe `src` in the `#contact` section with your restaurant's embed URL from Google Maps.

### Color Customization

Edit CSS variables in `css/variables.css`:

```css
:root {
  --color-primary: #111111;
  --color-secondary: #C8A45D;
  --color-background: #F8F5F0;
  --color-text: #1F2937;
  --color-accent: #B45309;
}
```

---

## Project Structure

```
restaurant-template/
├── index.html              # Main HTML page
├── css/
│   ├── main.css            # Entry point (imports all CSS)
│   ├── variables.css       # Design tokens
│   ├── reset.css           # CSS reset & base
│   ├── layout.css          # Grid & section layout
│   ├── components.css      # UI components
│   └── animations.css      # Motion & transitions
├── js/
│   ├── main.js             # Application entry
│   ├── config.js           # Site configuration reference
│   ├── navigation.js       # Header & mobile nav
│   ├── gallery.js          # Gallery lightbox
│   ├── form.js             # Form validation & menu tabs
│   └── animations.js       # Scroll reveal & parallax
├── assets/
│   └── images/             # All template images
├── screenshots/            # Marketing screenshots
├── docs/                   # Additional documentation
├── README.md
├── LICENSE
├── CHANGELOG.md
├── RELEASE_NOTES.md
├── PROJECT_SHOWCASE.md
├── FINAL_REPORT.md
└── robots.txt
```

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Performance Tips

1. Compress images to WebP format for production (update paths accordingly)
2. Enable gzip/brotli compression on your web server
3. Set cache headers for static assets
4. Use a CDN for font delivery (already configured via Google Fonts)

---

## Deployment

Upload all files to any static hosting provider:

- **Netlify** — Drag & drop the folder
- **Vercel** — Connect GitHub repo
- **GitHub Pages** — Enable in repository settings
- **Traditional hosting** — Upload via FTP to public_html

No build step required.

---

## Support

For issues, feature requests, or licensing inquiries:

- **GitHub Issues:** [github.com/dgitalcode/restaurant-template/issues](https://github.com/dgitalcode/restaurant-template/issues)
- **Website:** D-GITALCODE

---

## License

MIT License — see [LICENSE](LICENSE) for details.

Commercial redistribution of source files requires written permission from D-GITALCODE.

---

**Built with precision by [D-GITALCODE](https://github.com/dgitalcode)**
