import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getParkBySlug } from '@/data/parks';
import { ArrowRight, MapPin, Check, Camera, Compass } from 'lucide-react';

const NationalPark = () => {
  const { parkSlug } = useParams<{ parkSlug: string }>();
  const park = getParkBySlug(parkSlug || '');

  if (!park) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Park Not Found</h1>
          <Link to="/" className="text-secondary hover:underline mt-4 inline-block">
            Return Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gold mb-4">
            <MapPin className="w-4 h-4" />
            <span className="uppercase tracking-[0.3em] text-sm font-medium">{park.country}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            {park.name}
          </h1>
          <p className="text-primary-foreground/90 text-xl italic font-heading mb-6">
            {park.tagline}
          </p>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            {park.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {park.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife & Activities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Wildlife */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Camera className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Wildlife</h2>
              </div>
              <div className="space-y-3">
                {park.wildlife.map((animal) => (
                  <div key={animal} className="flex items-center gap-3 p-3 rounded-xl bg-card">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-foreground">{animal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Activities</h2>
              </div>
              <div className="space-y-3">
                {park.activities.map((activity) => (
                  <div key={activity} className="flex items-center gap-3 p-3 rounded-xl bg-card">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-foreground">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Plan Your Visit to {park.name}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let us create a customized itinerary featuring {park.name} and other incredible destinations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/itineraries">
              <Button variant="gold" size="xl">
                View Itineraries <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Send Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NationalPark;
