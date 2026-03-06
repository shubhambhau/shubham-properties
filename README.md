# Windsor Real Estate

A modern luxury real estate website for Dubai, built with React (Vite), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **React Router DOM** – client-side routing
- **Tailwind CSS 3** – design system (navy, gold gradient)
- **Framer Motion** – scroll and hover animations
- **Lucide React** – icons

## Design

- **Primary background:** Deep Navy `#0E1B38`
- **Gold gradient:** `#EBD39D` → `#D1B275` → `#AA8951` (accent only)
- **Typography:** Playfair Display / Cinzel (headings), Inter (body)

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build (output: `dist/`)
- `npm run preview` – preview production build

## Routes

- `/` – Home
- `/about` – About
- `/services` – Services grid
- `/services/:slug` – Service detail (e.g. buying-selling, off-plan)
- `/services/mortgage-calculator` – EMI calculator (front-end only)
- `/market-insights` – Blog listing
- `/market-insights/:slug` – Single post
- `/communities` – Communities listing
- `/communities/:slug` – Community detail
- `/developer-partners` – Developer partners
- `/contact` – Contact (form UI only, no backend)
- `/careers` – Careers

## Data

- **Services, blog, communities:** static JSON/data in `src/data/`. No external API.
- **Mortgage calculator:** client-side only; no backend.
- **Contact form:** UI only; no submission logic.

## Deployment (Vercel)

- Build command: `npm run build`
- Output directory: `dist`
- No environment variables required for the current setup.
