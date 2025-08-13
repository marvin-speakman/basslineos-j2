import Link from 'next/link';
import { ReactNode } from 'react';

type DashboardLayoutProps = {
  children: ReactNode;
};

const navItems = [
    { name: 'Overview', href: '/dashboard' },
    { name: 'Site Content', href: '/dashboard/content' },
    { name: 'Media', href: '/dashboard/media' },
    { name: 'Analytics', href: '/dashboard/analytics' },
    { name: 'Theme', href: '/dashboard/theme' },
    { name: 'Socials', href: '/dashboard/socials' },
    { name: 'Calendar', href: '/dashboard/calendar' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 bg-secondary p-6 flex flex-col">
        <div className="mb-8">
            <Link href="/" className="text-2xl font-bold text-white">
              Baseline OS
            </Link>
        </div>
        <nav className="flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-text-secondary rounded-lg hover:bg-primary-light hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto">
            {/* Sign out button will go here */}
        </div>
      </aside>
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
}
