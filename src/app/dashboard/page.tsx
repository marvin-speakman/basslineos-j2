import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">Dashboard Overview</h1>
      <p className="text-text-secondary mb-8">
        Welcome back, {user.email}. Here's a quick look at your site.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary p-6 rounded-lg">
            <h3 className="font-bold text-white text-lg">Site Status</h3>
            <p className="text-green-400">Live</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
            <h3 className="font-bold text-white text-lg">Subscription</h3>
            <p className="text-text-secondary">Starter Plan</p>
        </div>
         <div className="bg-secondary p-6 rounded-lg">
            <h3 className="font-bold text-white text-lg">Next Event</h3>
            <p className="text-text-secondary">Not configured</p>
        </div>
      </div>
    </div>
  );
}
