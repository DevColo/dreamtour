import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Destinations } from '@/components/Destinations';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUsEnhanced } from '@/components/home/WhyChooseUsEnhanced';
import { TrustCredibility } from '@/components/home/TrustCredibility';
import { TravelRequirements } from '@/components/home/TravelRequirements';
import { JourneyCTA } from '@/components/JourneyCTA';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';
import { PersistentCTA } from '@/components/PersistentCTA';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <ServicesOverview />
      <WhyChooseUsEnhanced />
      <TrustCredibility />
      <TravelRequirements />
      <JourneyCTA />
      <Testimonials />
      <Footer />
      <PersistentCTA />
    </main>
  );
};

export default Index;
