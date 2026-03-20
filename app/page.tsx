'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

const APP_NAME = 'My App';
const APP_DESCRIPTION = 'A new app built with Golem';
const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function AuthAwareLanding() {
  if (hasClerk) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { useAuth } = require('@clerk/nextjs') as typeof import('@clerk/nextjs');
    const { isSignedIn, isLoaded } = useAuth();

    if (!isLoaded) {
      return (
        <div className="flex min-h-dvh items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      );
    }

    if (isSignedIn) {
      if (typeof window !== 'undefined') {
        window.location.href = '/dashboard';
      }
      return null;
    }
  }

  return <LandingPage />;
}

function LandingPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* Hero */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-accent/5" />
              <Image
                src="/logo.svg"
                alt={APP_NAME}
                width={80}
                height={80}
                className="relative h-20 w-20"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-text sm:text-6xl">
            {APP_NAME}
          </h1>
          <p className="mx-auto mb-10 max-w-md text-lg leading-relaxed text-text-muted">
            {APP_DESCRIPTION}
          </p>

          {/* CTA */}
          {hasClerk ? (
            <Link
              href="/sign-in"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* Feature pills */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-3">
          <FeaturePill icon={<Zap className="h-3.5 w-3.5" />} label="Lightning Fast" />
          <FeaturePill icon={<Shield className="h-3.5 w-3.5" />} label="Secure by Default" />
          <FeaturePill icon={<Sparkles className="h-3.5 w-3.5" />} label="AI-Powered" />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <p className="text-xs text-text-dim">
            Built with{' '}
            <span className="font-medium text-text-muted">Golem</span>
          </p>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs text-text-dim">All systems operational</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-text-muted shadow-sm">
      <span className="text-accent">{icon}</span>
      {label}
    </div>
  );
}

export default function Home() {
  return <AuthAwareLanding />;
}
