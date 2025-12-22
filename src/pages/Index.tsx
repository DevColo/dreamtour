import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Destinations } from '@/components/Destinations';
import { Expertise } from '@/components/Expertise';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { JourneyCTA } from '@/components/JourneyCTA';
import { TeamHelp } from '@/components/TeamHelp';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Expertise />
      <WhyChooseUs />
      <JourneyCTA />
      <TeamHelp />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
