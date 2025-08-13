import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

// This is now the "Home" page of the multi-page site.
export default async function UserSiteHomePage({ params }: Props) {
  const supabase = createClient();

  const { data: site, error } = await supabase
    .from('sites')
    .select(`*, user:users(username)`)
    .eq('site_slug', params.slug)
    .single();

  if (error || !site) {
    notFound();
  }

  return (
    <>
      <div className="h-96 bg-gray-800 flex items-center justify-center text-center" style={{ backgroundImage: `url(${site.header_image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div>
            <h1 className="text-5xl font-bold">{site.user.username}</h1>
            <p className="text-xl text-text-secondary mt-2">Welcome to my page</p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <section id="bio" className="my-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="prose dark:prose-invert mx-auto" dangerouslySetInnerHTML={{ __html: site.bio || 'No bio provided yet.' }} />
        </section>

         <section id="next-events" className="my-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Next 3 Upcoming Events</h2>
           {/* Placeholder for events */}
           <p className="text-text-secondary text-center">Event schedule coming soon.</p>
        </section>
      </div>
    </>
  );
}
