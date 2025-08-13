import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: { slug: string };
};

export default async function UserSiteLayout({ children, params }: Props) {
    const supabase = createClient();

    const { data: site } = await supabase
        .from('sites')
        .select(`*, user:users(username)`)
        .eq('site_slug', params.slug)
        .single();

    if (!site) {
        notFound();
    }

    const navItems = [
        { name: 'Home', href: `/${site.site_slug}` },
        { name: 'Music', href: `/${site.site_slug}/music` },
        { name: 'Events', href: `/${site.site_slug}/events` },
        { name: 'Gallery', href: `/${site.site_slug}/gallery` },
        { name: 'Contact', href: `/${site.site_slug}/contact` },
    ];

    return (
        <div className="bg-background text-white min-h-screen">
            <header className="bg-gray-800 p-4 sticky top-0 z-10 border-b border-gray-700">
                <nav className="container mx-auto flex justify-between items-center">
                    <Link href={`/${site.site_slug}`} className="text-xl font-bold">{site.user.username}</Link>
                    <div className="space-x-4">
                        {navItems.map(item => (
                            <Link key={item.name} href={item.href} className="text-text-secondary hover:text-white">{item.name}</Link>
                        ))}
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="text-center p-8 border-t border-gray-800">
                <p>&copy; {new Date().getFullYear()} {site.user.username}</p>
            </footer>
        </div>
    );
}
