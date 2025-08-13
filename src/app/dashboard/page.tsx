import { supabase } from '@/lib/supabase';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  // This is a server component, so we can check for the user session here.
  // However, middleware is the preferred approach for protecting routes.
  // This is a simple check for now.
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
      <p className="text-text-secondary">This is a protected page.</p>
      <p className="mt-4">Your email: {session.user.email}</p>
    </div>
  );
}
