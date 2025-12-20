import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getDestinationBySlug } from '@/data/destinations';
import { ArrowRight, Calendar, Coins, Languages, MapPin, Check } from 'lucide-react';

const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const destination = getDestinationBySlug(slug || '');

  if (!destination) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Destination Not Found</h1>
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
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Explore</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-4">
            {destination.name}
          </h1>
          <p className="text-primary-foreground/90 text-xl italic font-heading mb-6">
            {destination.tagline}
          </p>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            {destination.description}
          </p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
              <Calendar className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                <p className="font-medium text-foreground">{destination.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
              <Coins className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Currency</p>
                <p className="font-medium text-foreground">{destination.currency}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-muted">
              <Languages className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Language</p>
                <p className="font-medium text-foreground">{destination.language}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-12">
            Destination <span className="text-gradient-ocean">Highlights</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {destination.highlights.map((highlight) => (
              <div key={highlight} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-secondary" />
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
            National Parks & <span className="text-gradient-ocean">Reserves</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore the protected areas that make {destination.name} a world-class safari destination.
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {destination.parks.map((park) => (
              <Link
                key={park.slug}
                to={`/national-park/${park.slug}`}
                className="group p-6 rounded-2xl bg-card hover:bg-gradient-ocean transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 group-hover:bg-primary-foreground/20 flex items-center justify-center shrink-0 transition-colors">
                    <MapPin className="w-6 h-6 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary-foreground transition-colors mb-2">
                      {park.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm transition-colors">
                      {park.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let us craft your perfect {destination.name} adventure with our expert local guides.
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

export default DestinationPage;
