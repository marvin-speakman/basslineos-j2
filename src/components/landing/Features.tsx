// A simple placeholder for an icon
const IconPlaceholder = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const featureData = [
  {
    title: 'Upload Mixes',
    description: 'Upload your latest mixes and tracks directly to your site. No third-party hosting needed for Pro users.',
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Manage Media',
    description: 'A central library for all your images, videos, and music. Organized and easy to access.',
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Booking System',
    description: 'Manage your gig calendar, take booking requests, and keep your schedule organized.',
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
  },
   {
    title: 'Customizable Themes',
    description: 'Choose from a variety of themes and customize them to match your brand. Full control for Studio users.',
    icon: <IconPlaceholder className="w-8 h-8 text-primary" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">All The Tools You Need</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-text-secondary">
            From music hosting to event management, we've got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <div key={index} className="bg-secondary p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
