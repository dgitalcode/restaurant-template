# Customization Guide

Detailed guide for buyers customizing the Lumière Restaurant Template.

## Step-by-Step Customization

### Step 1: Brand Identity

1. Open `index.html`
2. Search for `<!-- EDIT: Restaurant Name -->`
3. Replace "Lumière" with your restaurant name
4. Update `<title>` and meta tags in `<head>`

### Step 2: Images

Replace files in `assets/images/` keeping the same filenames, or update paths in HTML.

### Step 3: Menu

Edit the `#menu` section or copy structure from `js/config.js`.

### Step 4: Contact

Update phone, email, address, and Google Maps embed in `#reservation` and `#contact`.

### Step 5: Social Media

Update href values in footer `.social-links`.

### Step 6: Colors

Edit `css/variables.css` to match your brand palette.

### Step 7: Forms (Production)

Connect forms to your backend:

**Formspree example:**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Netlify Forms:**
Add `netlify` attribute to form tags when deploying to Netlify.

---

Copyright © 2026 D-GITALCODE
