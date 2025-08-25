"use client"

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import PricingBento from '@/components/bento/PricingBento';

const mockPricing = [
  { badge: "Basic", price: "$10/mo", features: ["Feature 1", "Feature 2"] },
  { badge: "Pro", price: "$20/mo", features: ["Feature 1", "Feature 2", "Feature 3"] },
  { badge: "Enterprise", price: "$50/mo", features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"] },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-white">
        <SimpleHero 
          title="Welcome to Our SaaS"
          description="The best solution for your needs."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </section>
      <section id="features" className="bg-soft-noise">
        <div className="max-w-6xl mx-auto py-20">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          {/* Feature blocks go here */}
        </div>
      </section>
      <section id="about" className="bg-[#F7F9FF]">
        <MinimalAbout description="We are a company dedicated to providing top-notch SaaS solutions." />
      </section>
      <section id="pricing" className="bg-white">
        <PricingBento 
          items={mockPricing}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        />
      </section>
      <section id="terms" className="bg-white">
        <h2 className="text-2xl font-bold">Terms of Service</h2>
        <p className="mt-2">Summary of terms and accessibility note goes here.</p>
      </section>
      <section id="policy" className="bg-white">
        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <p className="mt-2">Privacy policy summary and link to full policy goes here.</p>
      </section>
      <section id="contact" className="bg-white">
        {/* Inline contact form component */}
        {/* <ContactForm /> */}
      </section>
    </SiteThemeProvider>
  );
}
