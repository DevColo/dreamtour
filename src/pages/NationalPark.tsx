import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { getParkBySlug } from '@/data/parks';
import { ArrowRight, ArrowLeft, MapPin, Check, Camera, Compass } from 'lucide-react';

const NationalPark = () => {
  const { parkSlug } = useParams<{ parkSlug: string }>();
  const park = getParkBySlug(parkSlug || '');

  if (!park) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Park Not Found</h1>
          <p className="text-muted-foreground mb-8">The national park you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="brand">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline={park.country}
        title={park.name}
        subtitle={park.description}
        backgroundImage="https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop"
      >
        <p className="text-accent text-xl italic font-heading mt-4">
          "{park.tagline}"
        </p>
      </PageHero>

      {/* Highlights Pills */}
      <section className="py-12 bg-muted border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {park.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border/50 shadow-sm">
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-foreground font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife & Activities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Wildlife */}
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Camera className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Wildlife</h2>
              </div>
              <div className="space-y-3">
                {park.wildlife.map((animal) => (
                  <div key={animal} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                    <span className="text-foreground font-medium">{animal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Compass className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Activities</h2>
              </div>
              <div className="space-y-3">
                {park.activities.map((activity) => (
                  <div key={activity} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span className="text-foreground font-medium">{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Plan Your Visit to {park.name}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let us create a customized itinerary featuring {park.name} and other incredible destinations in {park.country}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/itineraries">
              <Button variant="gold" size="xl" className="shadow-gold">
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
