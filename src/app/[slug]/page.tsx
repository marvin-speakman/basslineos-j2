import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function UserSitePage({ params }: Props) {
  const supabase = createClient();

  // Fetch the site data from the 'sites' table using the slug
  const { data: site, error } = await supabase
    .from('sites')
    .select(`
      *,
      user:users (
        username
      )
    `)
    .eq('site_slug', params.slug)
    .single();

  if (error || !site) {
    notFound();
  }

  return (
    <div className="bg-background text-white min-h-screen">
      {/* The user's public site content will be rendered here */}
      <header className="h-96 bg-gray-800 flex items-center justify-center" style={{ backgroundImage: `url(${site.header_image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-5xl font-bold">{site.user.username}'s Site</h1>
      </header>
      <main className="container mx-auto p-8">
        <section id="bio" className="my-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-text-secondary">{site.bio || 'No bio provided yet.'}</p>
        </section>

        <section id="mixcloud" className="my-16">
            <h2 className="text-3xl font-bold mb-4">Latest Mixes</h2>
            {site.mixcloud_url ? (
                <iframe
                    width="100%"
                    height="400"
                    src={`https://www.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(site.mixcloud_url)}&hide_cover=1&light=0`}
                    frameBorder="0"
                ></iframe>
            ) : (
                <p className="text-text-secondary">Mixcloud profile not linked yet.</p>
            )}
        </section>

        {/* Instagram and other sections will go here */}
      </main>
      <footer className="text-center p-8 border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} {site.user.username}</p>
      </footer>
    </div>
  );
}
