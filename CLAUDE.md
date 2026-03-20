# My App

A new app built with Golem.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript (strict mode)
- **Managed by**: Golem Agent

## Development
```bash
npm run dev    # Start dev server (hot reload)
npm run build  # Production build
npm run start  # Start production server
```

## Project Structure
```
app/
├── layout.tsx          # Root layout
├── page.tsx            # Home page
├── globals.css         # Tailwind theme + base styles
└── api/
    └── config/route.ts # Golem dashboard integration endpoint
components/             # React components
public/
└── logo.svg            # App logo
```

## Golem Integration
- `/api/config` returns app metadata for the Golem dashboard sidebar
- The Golem agent has full access to this project's files and can run commands
- Use `npm run dev` for development — changes are picked up by hot reload
