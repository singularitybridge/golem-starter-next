import { clerkMiddleware } from '@clerk/nextjs/server';

// Only active when NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set.
// Without Clerk keys, Next.js skips this middleware (no-op export).
export default process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  ? clerkMiddleware()
  : undefined;

export const config = {
  matcher: [
    // Skip static files and Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
