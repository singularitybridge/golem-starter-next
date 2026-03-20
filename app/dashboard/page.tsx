import {
  Layers,
  Settings,
  Users,
  BarChart3,
  FileText,
  Bell,
} from 'lucide-react';

const APP_NAME = 'My App';

const cards = [
  {
    title: 'Analytics',
    description: 'Track user activity, growth metrics, and engagement trends.',
    icon: BarChart3,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    title: 'Users',
    description: 'Manage user accounts, roles, and permissions.',
    icon: Users,
    color: 'text-violet-500',
    bg: 'bg-violet-50',
  },
  {
    title: 'Content',
    description: 'Create and manage your application content and media.',
    icon: FileText,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Integrations',
    description: 'Connect with third-party services and APIs.',
    icon: Layers,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    title: 'Notifications',
    description: 'Configure alerts, emails, and push notifications.',
    icon: Bell,
    color: 'text-rose-500',
    bg: 'bg-rose-50',
  },
  {
    title: 'Settings',
    description: 'Customize your app preferences and configuration.',
    icon: Settings,
    color: 'text-stone-500',
    bg: 'bg-stone-100',
  },
];

export default function DashboardPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-text">
          Welcome to {APP_NAME}
        </h1>
        <p className="mt-1 text-sm text-text-muted">
          Here is an overview of what you can build. Start editing the dashboard to make it yours.
        </p>
      </div>

      {/* Stats row */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Total Users" value="--" change="Ready to connect" />
        <StatCard label="Active Sessions" value="--" change="Set up analytics" />
        <StatCard label="API Calls" value="--" change="Add your endpoints" />
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/20 hover:shadow-md"
            >
              <div className={`mb-3 inline-flex rounded-lg ${card.bg} p-2.5`}>
                <Icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-text">{card.title}</h3>
              <p className="text-xs leading-relaxed text-text-muted">{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  change,
}: {
  label: string;
  value: string;
  change: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wider text-text-dim">{label}</p>
      <p className="mt-1 text-2xl font-bold text-text">{value}</p>
      <p className="mt-1 text-xs text-text-muted">{change}</p>
    </div>
  );
}
