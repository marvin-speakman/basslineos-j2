import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {/* Background Image - I'll use a placeholder color for now */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary opacity-90">
         {/* In a real scenario, we'd use an <Image> component with the hero background */}
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Build Your DJ Website with Ease
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-8">
          The ultimate platform for DJs to showcase their mixes, manage content, and handle bookings. All in one place.
        </p>
        <Link href="/signup" className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </section>
  );
}
