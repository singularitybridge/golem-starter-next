# My App

A new app built with Golem.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (via `@tailwindcss/postcss`)
- **Auth**: Clerk (optional — works without keys)
- **Icons**: Lucide React
- **Font**: Inter (via next/font/google)
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
├── layout.tsx              # Root layout (Inter font, conditional Clerk)
├── page.tsx                # Landing page / auth gate
├── globals.css             # Tailwind 4 theme
├── dashboard/
│   ├── layout.tsx          # Dashboard nav (logo, links, UserButton)
│   └── page.tsx            # Dashboard home (placeholder cards)
├── sign-in/[[...sign-in]]/page.tsx
├── sign-up/[[...sign-up]]/page.tsx
└── api/
    └── config/route.ts     # Golem dashboard integration endpoint
components/                 # React components (add yours here)
middleware.ts               # Clerk route protection (auto-disabled without keys)
public/
└── logo.svg                # App logo (replace with your own)
```

## Authentication
Clerk is **optional**. Without `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` set:
- Middleware is a no-op (all routes public)
- ClerkProvider is not rendered
- Landing page shows without auth gate
- Dashboard is accessible directly

With Clerk keys set:
- `/dashboard` routes are protected
- Landing page redirects signed-in users to `/dashboard`
- Sign-in/sign-up pages render Clerk components

## Golem Integration
- `/api/config` returns app metadata for the Golem dashboard sidebar
- The Golem agent has full access to this project's files and can run commands
- Use `npm run dev` for development — changes are picked up by hot reload

## Customization
- Replace `'My App'` with your app name in page and layout files
- Replace `'A new app built with Golem'` with your description
- Replace `public/logo.svg` with your logo
- Edit `app/globals.css` to customize the color theme
- Add new pages under `app/` and components under `components/`
