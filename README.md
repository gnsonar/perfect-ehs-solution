# Perfect EHS Solutions — Angular 21 Web App

Angular 21 application for the Perfect EHS Solutions marketing site with modular feature components and API-ready services.

## Prerequisites

- Node.js 20+ (Node 22 recommended)
- npm 10+

## Development server

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## Build

```bash
npm run build
```

## Project structure

```
src/app/
  core/           # API services, interceptors, models, mock data
  shared/         # Reusable UI components (section head, etc.)
  layout/         # Header and footer
  features/       # Feature modules (home, services, trainings, ...)
  pages/          # Page containers (home page)
```

## API integration

Configure the backend base URL in:

- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production)

Expected endpoints:

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/content` | Full site content payload |
| GET | `/api/services` | Services list |
| GET | `/api/trainings/upcoming` | Upcoming trainings |
| GET | `/api/trainings/conducted` | Conducted trainings |
| GET | `/api/trainings/summary` | Summary stats |
| GET | `/api/trainings/programs` | Program highlights |
| GET | `/api/clients` | Client list |
| GET | `/api/testimonials` | Testimonials |
| GET | `/api/showcase/slides` | Hero carousel slides |

When the API is unavailable, the app falls back to mock data in `src/app/core/data/mock-content.data.ts` (controlled by `useMockFallback`).

## Static prototype

The original HTML prototype is preserved in `prototype/`.
