# TigerLeads Site

TigerLeads AI Landing Page — a static site built with Framer, deployed via Netlify.

## Repository Structure

```
tigerleads-site/
├── dist/                  ← all build output (served by Netlify)
│   ├── 20-data-points/
│   ├── about-us/
│   ├── assets/
│   ├── contact-us/
│   ├── fonts/
│   ├── how-credits-work/
│   ├── how-we-source-our-data/
│   ├── images/
│   ├── privacy-policy/
│   ├── terms-of-service/
│   ├── index.html
│   ├── _headers
│   ├── _redirects
│   ├── framer-cdn-map.json
│   ├── HOSTING.md
│   └── *.mjs  (hashed JS chunks)
├── netlify.toml           ← Netlify config (publish = "dist")
├── .gitignore
└── README.md              ← this file
```

## Deployment

This site is deployed on [Netlify](https://netlify.com). Netlify is configured (via `netlify.toml`) to serve the `dist/` directory as the publish directory.

## Tech Stack

- **Framework**: Framer (exported as static HTML/JS)
- **Hosting**: Netlify
- **Languages**: JavaScript, HTML
