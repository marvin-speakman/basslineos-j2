export default function AdminDashboardPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-white mb-8">Master Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-white text-lg">Total Users</h3>
          <p className="text-3xl font-bold text-primary-light mt-2">123</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-white text-lg">Active Subscriptions</h3>
          <p className="text-3xl font-bold text-primary-light mt-2">98</p>
        </div>
        <div className="bg-secondary p-6 rounded-lg">
          <h3 className="font-bold text-white text-lg">Total Revenue</h3>
          <p className="text-3xl font-bold text-primary-light mt-2">$1,234.56</p>
        </div>
      </div>
      <div className="mt-8 bg-secondary p-6 rounded-lg">
        <h3 className="font-bold text-white mb-4">Recent Signups</h3>
        <p className="text-text-secondary">[List of recent users will go here]</p>
      </div>
    </div>
  );
}
