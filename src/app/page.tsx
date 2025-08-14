import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';

// I will omit the Testimonials and Featured DJs sections for now to keep this PR focused.
// They can be added in a subsequent step.

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        {/* Testimonials section would go here */}
      </main>
      <Footer />
    </div>
  );
}
