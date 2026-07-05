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

The website code uses local public asset URLs only, backed by uploaded Infa Brands assets stored in `public/assets/...`:

- `/assets/products/infa-products-source-01.jpg`
- `/assets/products/infa-products-source-02.jpg`
- `/assets/reference/page1.png`
- `/assets/reference/thumbnail.png`

No Google Drive links are referenced in the website code.

The uploaded product/source files are included under `public/assets/products/`. The uploaded CDR preview reference images are included under `public/assets/reference/`.

Individual product card images are cropped from the uploaded catalogue sheet and stored under:

- `public/assets/products/crops/product-01.jpg`
- `public/assets/products/crops/product-02.jpg`
- `public/assets/products/crops/product-03.jpg`
- `public/assets/products/crops/product-04.jpg`
- `public/assets/products/crops/product-05.jpg`
- `public/assets/products/crops/product-06.jpg`
- `public/assets/products/crops/product-07.jpg`
- `public/assets/products/crops/product-08.jpg`

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

- Official separate logo PNG/SVG is still pending. Current wordmark is temporary.
- The header currently uses a polished text-based `Infa Brands` wordmark. Replace it with the final official logo PNG/SVG when the client provides it.
- Final official logo PNG/SVG and individual product packshots can replace the current uploaded composite source images when client provides production-ready files.
- Product names and descriptions are intentionally safe and generic until official client-approved product information is available.
- The contact form is static for demo purposes and should be connected to a WordPress form handler in production.
