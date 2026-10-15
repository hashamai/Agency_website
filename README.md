# Agency_website

Marketing site for **Leadfactory**, an AI growth and automation agency for home-service businesses (HVAC, plumbing, electrical and similar trades). It pitches ads, CRM setup, AI workflows and voice agents, and drives visitors to book a call or request a free AI audit.

Built with React 18 and Vite 5. It's a single page with no backend.

## Run it locally

Requires Node.js 18 or newer.

```bash
cd leadfactory
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to leadfactory/dist
npm run preview    # serves the build at http://localhost:4173
```

`dist/` is static, so it can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

## Project layout

```
leadfactory/
├── index.html            # entry page; turns on scroll reveals when motion is allowed
├── public/favicon.svg
└── src/
    ├── main.jsx          # React entry
    ├── App.jsx           # page section order
    ├── content.js        # all copy, prices, links and FAQ data
    ├── useReveal.js      # scroll-in animation hook (IntersectionObserver)
    ├── styles.css        # all styling
    └── components/       # one file per page section
```

The page sections are Nav, Hero, Marquee, Problems, Services, Different, Method, Audit, Offers, Hvac, Expect, Close, Faq and Footer.

## Editing content

All text lives in [`leadfactory/src/content.js`](leadfactory/src/content.js), so you can change copy, pricing or links without touching components. Before launch:

- Set `BOOKING_URL` to the real booking link (for example, a Cal.com page). It currently points to `#book`.
- The hero activity feed and the revenue-leak audit figures are illustrative examples, not client data.
