# TigerLeads.AI — Landing Page

The marketing landing page for [TigerLeads.AI](https://tigerleads.ai), a contractor lead generation platform by Alliance Data Solutions, LLC.

## Overview

TigerLeads connects contractors and suppliers with verified, high-intent job opportunities across all 50 states. This repository contains the static landing page that serves as the public-facing marketing site for the platform.

The web application itself lives separately at [app.tigerleads.ai](https://app.tigerleads.ai) and is not part of this repository.

## Tech Stack

- **Origin:** Exported from [Framer](https://framer.com) using FramerExporter (static HTML/CSS/JS export)
- **Hosting:** [Netlify](https://www.netlify.com) (free tier)
- **CDN/SSL:** Netlify Edge + Let's Encrypt (auto-provisioned)
- **Domain Registrar:** GoDaddy
- **Cookie Consent:** [Osano](https://www.osano.com)
- **Analytics:** Google Tag Manager (GTM-TCFNLKBC)
- **Payments Integration:** Stripe (via the app)

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, features, pricing, FAQ, testimonials |
| `/about-us` | About Us page |
| `/contact-us` | Contact Us page |
| `/20-data-points` | Lead Playbook |
| `/how-credits-work` | How the credit system works |
| `/how-we-source-our-data` | Data sourcing methodology |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |

## Project Structure

```
├── index.html                  # Homepage
├── about-us/index.html         # About Us
├── contact-us/index.html       # Contact Us
├── 20-data-points/index.html   # Lead Playbook
├── how-credits-work/index.html # How Credits Work
├── how-we-source-our-data/     # Data Sourcing
├── privacy-policy/index.html   # Privacy Policy
├── terms-of-service/index.html # Terms of Service
├── images/                     # All site images (local, no CDN deps)
├── fonts/                      # Self-hosted web fonts (woff2)
├── assets/                     # Search index, CMS data, font binaries
├── *.mjs                       # Framer runtime bundles (React, Motion, etc.)
├── _headers                    # Netlify MIME type headers
├── _redirects                  # Netlify redirect rules
├── vercel.json                 # Vercel config (backup, not active)
├── framer-cdn-map.json         # Local asset path mapping
└── HOSTING.md                  # Export hosting notes from FramerExporter
```

## Deployment

This site auto-deploys to Netlify on every push to `main`.

**Live URLs:**
- Production: [https://tigerleads.ai](https://tigerleads.ai)
- Netlify preview: [https://stellar-salamander-19ad3e.netlify.app](https://stellar-salamander-19ad3e.netlify.app)

**To deploy a change:**

```bash
# Make your edits to the HTML/CSS/JS files
git add .
git commit -m "Description of changes"
git push origin main
# Netlify auto-deploys in ~30 seconds
```

## DNS Configuration

Domain is registered on GoDaddy. Only the root domain and `www` point to Netlify. All other subdomains are independent.

| Record | Host | Value | Purpose |
|---|---|---|---|
| A | @ | 75.2.60.5 | Root domain → Netlify |
| CNAME | www | stellar-salamander-19ad3e.netlify.app | www redirect → Netlify |
| CNAME | app | ghs.googlehosted.com | App (separate hosting) |
| CNAME | api | ghs.googlehosted.com | API (separate hosting) |
| CNAME | pay | paylinks.commerce.godaddy.com | Payment links |

**Do not modify** the `app`, `api`, or `pay` DNS records. They are independent of this landing page.

## Local Development

To preview the site locally:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then open `http://localhost:8000` (or `:3000` for serve).

Note: The site must be served over HTTP — opening `index.html` directly via `file://` will break ES modules, Framer runtime, and Lottie animations.

## Important Notes

- **All assets are local.** No external dependencies on `framerusercontent.com` or Framer CDN. Images, fonts, and JS bundles are fully self-contained in this repo.
- **Osano cookie consent** is configured for the `tigerleads.ai` domain. It may not function correctly on preview URLs or localhost.
- **The Framer runtime** (React, Motion, etc.) is included as pre-built `.mjs` bundles. These are not meant to be edited directly. For content changes, edit the HTML files.
- **Config files for multiple hosts** are included: `_headers` and `_redirects` for Netlify, `vercel.json` for Vercel (not currently active). This allows easy migration between hosting providers if needed.

## Contact

- **Company:** Alliance Data Solutions, LLC.
- **Address:** 712 N Pine Ave, Ste #B, Green Cove Springs, FL 32043
- **Phone:** (855) 478-4290
- **Support:** support@tigerleads.ai

## License

Proprietary — © 2026 Alliance Data Solutions, LLC. All rights reserved.
