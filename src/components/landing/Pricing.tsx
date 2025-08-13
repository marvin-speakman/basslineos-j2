import Link from 'next/link';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

const pricingData = [
  {
    name: 'Starter',
    price: '$9',
    description: 'For DJs getting started.',
    features: [
      'Single Page Website',
      'Bio & Social Links',
      'Mixcloud & Instagram Embeds',
      'Event Calendar',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'For professional DJs.',
    features: [
      'All Starter Features',
      'Multi-Page Website',
      'Music & Video Manager (10 file limit)',
      'Image Gallery',
      'Basic Analytics',
    ],
    isPopular: true,
  },
  {
    name: 'Studio',
    price: '$39',
    description: 'For power users and labels.',
    features: [
      'All Pro Features',
      'Unlimited File Uploads',
      'E-commerce Store',
      'Advanced Analytics',
      'Drag & Drop Page Builder',
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Choose Your Plan</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-text-secondary">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background rounded-lg p-8 border ${
                plan.isPopular ? 'border-primary shadow-2xl' : 'border-gray-700'
              } flex flex-col`}
            >
              {plan.isPopular && (
                <div className="text-center mb-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <p className="text-text-secondary text-center mb-6">{plan.description}</p>
              <p className="text-5xl font-extrabold text-white text-center mb-6">
                {plan.price}<span className="text-lg font-medium text-text-secondary">/mo</span>
              </p>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup" className={`w-full text-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${plan.isPopular ? 'bg-primary hover:bg-primary-light' : 'bg-gray-700 hover:bg-gray-600'}`}>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
