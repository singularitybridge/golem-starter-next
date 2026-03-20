'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard } from 'lucide-react';

const APP_NAME = 'My App';
const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function UserButtonWrapper() {
  if (!hasClerk) return null;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { UserButton } = require('@clerk/nextjs') as typeof import('@clerk/nextjs');
  return <UserButton />;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          {/* Left — Logo + App Name */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-2.5">
              <Image src="/logo.svg" alt={APP_NAME} width={28} height={28} className="h-7 w-7" />
              <span className="text-sm font-semibold text-text">{APP_NAME}</span>
            </Link>
            <nav className="hidden items-center gap-1 sm:flex">
              <Link
                href="/dashboard"
                className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:bg-accent-light hover:text-accent"
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard
              </Link>
            </nav>
          </div>

          {/* Right — User */}
          <div className="flex items-center gap-3">
            <UserButtonWrapper />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        {children}
      </main>
    </div>
  );
}
