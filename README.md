# Infa Brands Demo

A polished Vite + React website demo for Infa Brands, prepared as a corporate product catalogue and inquiry website for Business Baba client presentation.

The demo includes:

- Home
- About
- Products
- Clickable product detail modal
- Blogs
- Contact
- Static inquiry form
- Responsive desktop and mobile navigation

## Asset Paths Used

The website code uses local public asset URLs only:

- `/assets/products/infa-products-source-01.jpg`
- `/assets/products/infa-products-source-02.jpg`
- `/assets/reference/page1.png`
- `/assets/reference/thumbnail.png`

No Google Drive links are referenced in the website code.

This workspace did not include the official image uploads when the demo was scaffolded, so neutral temporary local visuals were added at the expected paths to keep the preview working. Replace them with the client-provided source images when available.

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Vercel Deployment

Use these settings on Vercel:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

The included `vercel.json` rewrites all routes to `index.html` so direct links such as `/products`, `/blogs`, and `/contact` work correctly.

## Production Notes

- The header currently uses a polished text-based `Infa Brands` wordmark. Replace it with the final official logo PNG/SVG when the client provides it.
- Final official logo PNG/SVG and individual product packshots should replace the current low-quality composite source images when client provides them.
- Product names and descriptions are intentionally safe and generic until official client-approved product information is available.
- The contact form is static for demo purposes and should be connected to a WordPress form handler in production.
