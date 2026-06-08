# TigerLeads Site

TigerLeads AI Landing Page — a static site built with Framer, deployed via Vercel.

## Repository Structure

```
tigerleads-site/
├── dist/                  ← all build output (served by Vercel)
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
├── vercel.json            ← Vercel config (outputDirectory: dist)
├── .gitignore
└── README.md              ← this file
```

## Deployment

This site is deployed on [Vercel](https://vercel.com). Vercel is configured (via `vercel.json`) to serve the `dist/` directory as the output.

## Tech Stack

- **Framework**: Framer (exported as static HTML/JS)
- **Hosting**: Vercel
- **Languages**: JavaScript, HTML
