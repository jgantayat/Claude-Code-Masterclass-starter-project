# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run test      # Run all Vitest tests (watch mode)
npx vitest run    # Run tests once (CI mode)
npx vitest run tests/components/Navbar.test.tsx  # Run a single test file
```

## Architecture

This is a **Next.js App Router** project using route groups to separate public and authenticated areas:

- `app/(public)/` — Unauthenticated pages (landing, login, signup). The root `/` page is a splash page intended only to redirect users: logged in → `/heists`, not logged in → `/login`. No redirect logic is implemented yet.
- `app/(dashboard)/` — Authenticated pages behind a shared layout that includes the Navbar. All heist management routes live here (`/heists`, `/heists/create`, `/heists/[id]`).

**Components** live in `components/<ComponentName>/` with an `index.ts` barrel export and optional `.module.css` for scoped styles.

**Tests** mirror the `components/` structure under `tests/components/`. Vitest is configured with jsdom and React Testing Library — use `screen` queries and role-based assertions as shown in the existing Navbar test.

## Styling

Tailwind CSS v4 is used throughout. Custom theme tokens are defined in `app/globals.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `primary` | `#C27AFF` | Purple accent |
| `secondary` | `#FB64B6` | Pink accent |
| `dark` | `#030712` | Page background |
| `light` / `lighter` | `#0A101D` / `#101828` | Card/surface backgrounds |
| `body` | `#99A1AF` | Default text |
| `heading` | `white` | Heading text |
| `success` / `error` | `#05DF72` / `#FF6467` | Status colors |

Shared layout utilities (`.page-content`, `.center-content`, `.form-title`) are defined in `globals.css` — prefer these over ad-hoc equivalents.
