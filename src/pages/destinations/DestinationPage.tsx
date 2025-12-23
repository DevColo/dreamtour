import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { getDestinationBySlug } from '@/data/destinations';
import { ArrowRight, ArrowLeft, Calendar, Coins, Languages, MapPin, Check } from 'lucide-react';

const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');

  if (!destination) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">The destination you're looking for doesn't exist.</p>
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
        tagline="Explore"
        title={destination.name}
        subtitle={destination.description}
        backgroundImage="https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=1920&h=1080&fit=crop"
      >
        <p className="text-accent text-xl italic font-heading mt-4">
          "{destination.tagline}"
        </p>
      </PageHero>

      {/* Quick Facts */}
      <section className="py-12 bg-muted border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                <p className="font-semibold text-foreground">{destination.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Coins className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Currency</p>
                <p className="font-semibold text-foreground">{destination.currency}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Languages className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Language</p>
                <p className="font-semibold text-foreground">{destination.language}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Destination <span className="text-secondary">Highlights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {destination.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border/50 hover:shadow-md hover:border-secondary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 text-secondary" />
                </div>
                <span className="font-medium text-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* National Parks */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-4">
            National Parks & <span className="text-secondary">Reserves</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
            Explore the protected areas that make {destination.name} a world-class safari destination.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destination.parks.map((park) => (
              <Link
                key={park.slug}
                to={`/national-park/${park.slug}`}
                className="group p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-secondary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center shrink-0 transition-colors duration-300">
                    <MapPin className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-secondary transition-colors mb-2">
                      {park.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {park.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 shrink-0 mt-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let us craft your perfect {destination.name} adventure with our expert local guides.
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

export default DestinationPage;
