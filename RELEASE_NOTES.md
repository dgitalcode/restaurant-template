# Release Notes — v1.0.0

**Product:** Lumière — Premium Restaurant Website Template  
**Release Date:** June 15, 2026  
**Brand:** D-GITALCODE  

---

## 🎉 Initial Release

We are proud to announce the first commercial release of the Lumière Restaurant Template — a premium, single-restaurant website designed for fine dining establishments worldwide.

---

## What's Included

### Website (12 Sections)

1. **Hero** — Fullscreen cinematic food photography with reservation and menu CTAs
2. **About** — Restaurant story, founding details, and philosophy pillars
3. **Signature Dishes** — Four featured menu items with premium card design
4. **Full Menu** — Tabbed menu with Starters, Main Courses, Desserts, and Drinks
5. **Chef Showcase** — Executive chef introduction with awards
6. **Gallery** — Eight-image masonry gallery with lightbox
7. **Reservations** — Booking form, opening hours, and contact information
8. **Testimonials** — Three guest review cards
9. **Awards** — Five recognition badges
10. **Location** — Address, map embed, and directions CTA
11. **Newsletter** — Email subscription capture
12. **Footer** — Brand info, navigation, social links, legal links

### Assets

- 15 high-quality food and restaurant images
- SVG favicon with brand initial
- Optimized for web delivery

### Documentation

- README.md with full customization guide
- PROJECT_SHOWCASE.md for portfolio presentation
- CHANGELOG.md for version tracking
- FINAL_REPORT.md with technical audit
- Commercial LICENSE

---

## Technical Specifications

| Spec | Detail |
|------|--------|
| HTML | HTML5 semantic |
| CSS | CSS3, mobile-first, 5 modular files |
| JavaScript | ES6 modules, 6 files, zero dependencies |
| Fonts | Playfair Display + Inter (Google Fonts) |
| Grid | 12-column responsive |
| Target Lighthouse | 95+ |
| Accessibility | WCAG 2.1 AA target |
| Browser Support | Chrome 90+, Firefox 88+, Safari 14+, Edge 90+ |

---

## Getting Started

```bash
git clone https://github.com/dgitalcode/restaurant-template.git
cd restaurant-template
python -m http.server 8080
```

Open `http://localhost:8080` and begin customizing.

---

## Customization Quick Reference

1. Search `<!-- EDIT:` in `index.html` for all customizable content blocks
2. Replace images in `assets/images/`
3. Update colors in `css/variables.css`
4. Reference `js/config.js` for complete data structure

---

## Known Limitations

- Reservation and newsletter forms use client-side validation only — connect to your backend or form service (Formspree, Netlify Forms, etc.) for production use
- Google Maps embed uses a placeholder location — replace with your restaurant's coordinates
- ES modules require a local web server (file:// protocol is not supported)

---

## Upgrade Path

Future versions will include:
- Additional color theme variants
- Dark mode toggle
- PDF menu download section
- Multi-language support structure

---

**Thank you for choosing D-GITALCODE.**

For support: [github.com/dgitalcode/restaurant-template/issues](https://github.com/dgitalcode/restaurant-template/issues)

Copyright © 2026 D-GITALCODE
