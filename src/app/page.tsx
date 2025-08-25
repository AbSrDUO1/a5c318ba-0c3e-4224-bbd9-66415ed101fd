"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import Bento from '@/components/bento/Bento';
import RegularFAQ from '@/components/sections/layouts/faq/RegularFAQ';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-white py-18">
        <SimpleHero
          title="Welcome to Our SaaS"
          description="Your solution for managing projects efficiently."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </section>

      <section id="about-us" className="bg-F9FBFF py-18">
        <ContentTextbox
          title={<h2 className="font-poppins text-3xl">About Us</h2>}
          description={<p className="text-sm">We are a dedicated team focused on providing the best project management solution.</p>}>
          <div className="flex flex-col gap-4">
            <Bento items={[
              { title: 'Reliable', description: 'Our service is reliable and efficient.' },
              { title: 'User-Friendly', description: 'Designed for all users, regardless of skill level.' },
              { title: '24/7 Support', description: 'Support is available around the clock.' }
            ]} className="flex" />
          </div>
        </ContentTextbox>
      </section>

      <section id="features" className="bg-gradient-to-b from-white to-F6F9FF py-18">
        <Bento items={[
          { title: 'Feature One', description: 'Benefit of the first feature', icon: <img src="/images/logo.svg" alt="Feature One Icon" /> },
          { title: 'Feature Two', description: 'Benefit of the second feature', icon: <img src="/images/logo.svg" alt="Feature Two Icon" /> },
          { title: 'Feature Three', description: 'Benefit of the third feature', icon: <img src="/images/logo.svg" alt="Feature Three Icon" /> }
        ]} className="flex" />
      </section>

      <section id="terms" className="bg-white py-18">
        <ContentTextbox
          title={<h3 className="font-poppins text-xl">Terms and Conditions</h3>}
          description={<p className="text-sm">Click here to read our full terms and conditions.</p>}>
        </ContentTextbox>
      </section>

      <section id="policy" className="bg-white py-18">
        <ContentTextbox
          title={<h3 className="font-poppins text-xl">Privacy Policy</h3>}
          description={<p className="text-sm">We value your privacy. Read our privacy policy.</p>}>
        </ContentTextbox>
      </section>

      <section id="cta" className="bg-white py-18">
        <ContentTextbox
          title={<h3 className="font-poppins text-xl">Ready to get started?</h3>}
          description={<p className="text-sm">Join us and start managing your projects more effectively!</p>}>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Your Email" className="border rounded p-2" required />
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Sign Up</button>
          </form>
        </ContentTextbox>
      </section>
    </SiteThemeProvider>
  );
}
