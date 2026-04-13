# Portfolio

Personal portfolio website of Artem Diatlenko, built with React 19, TypeScript, Vite, and Tailwind CSS 4.

## Tech Stack

- React + TypeScript
- Vite
- React Router
- Tailwind CSS 4

## Features

- Responsive portfolio layout (Home, About, Projects, Contact)
- Reusable UI components for header, hero, and footer
- EN/PL language switch with persisted preference
- Smooth route-change scroll behavior with reduced-motion fallback

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` - start development server
- `npm run build` - production build
- `npm run preview` - preview production build
- `npm run lint` - run ESLint

## Deployment

- Default output directory: `dist`
- Required Node.js version: `20+`
- SPA fallback is prepared for static hosting:
  - `npm run build` also creates `dist/404.html` for hosts that use a 404 fallback
  - `vercel.json` and `netlify.toml` include rewrites to `index.html`
- If you deploy under a subpath, set `VITE_BASE_PATH` before build

```bash
VITE_BASE_PATH=/portfolio/ npm run build
```

The router uses the same base path automatically.

## Notes

- Project runs as a client-side React SPA.
- Contact and project links point to real external profiles/repositories.
