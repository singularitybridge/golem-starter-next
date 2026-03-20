const APP_NAME = 'My App';
const APP_DESCRIPTION = 'A new app built with Golem';

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center p-8">
      <div className="text-center max-w-md">
        <img src="/logo.svg" alt={APP_NAME} className="w-20 h-20 mx-auto mb-6 opacity-80" />
        <h1 className="text-3xl font-semibold tracking-tight mb-2" style={{ color: 'var(--color-text)' }}>
          {APP_NAME}
        </h1>
        <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
          {APP_DESCRIPTION}
        </p>
        <div className="text-xs" style={{ color: 'var(--color-text-dim)' }}>
          Built with Golem
        </div>
      </div>
    </main>
  );
}
