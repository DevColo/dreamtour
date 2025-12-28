import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { getCountryData } from '@/data/countryData';
import { CountryOverview } from '@/components/destination/CountryOverview';
import { CountryItineraries } from '@/components/destination/CountryItineraries';
import { ActivityHighlights } from '@/components/destination/ActivityHighlights';
import { NationalParks } from '@/components/destination/NationalParks';
import { CarRentalSection } from '@/components/destination/CarRentalSection';
import { ArrowRight, ArrowLeft, Calendar, Coins, Languages } from 'lucide-react';

const DestinationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const country = getCountryData(slug || '');

  if (!country) {
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
        title={country.name}
        subtitle={country.tagline}
        backgroundImage={country.heroImage}
      />

      {/* Quick Facts */}
      <section className="py-12 bg-muted border-b border-border/50" id="quick-facts">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                <p className="font-semibold text-foreground">{country.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Coins className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Currency</p>
                <p className="font-semibold text-foreground">{country.currency}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Languages className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Language</p>
                <p className="font-semibold text-foreground">{country.language}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Country Overview */}
      <div id="overview">
        <CountryOverview data={country.overview} countryName={country.name} />
      </div>

      {/* Section Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border/30" />
      </div>

      {/* Section 2: Sample Itineraries */}
      <div id="itineraries">
        <CountryItineraries itineraries={country.itineraries} countryName={country.name} />
      </div>

      {/* Section Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border/30" />
      </div>

      {/* Section 3: Activity Highlights */}
      <div id="activities">
        <ActivityHighlights activities={country.activities} countryName={country.name} />
      </div>

      {/* Section 4: National Parks (alternating background) */}
      <div id="parks">
        <NationalParks parks={country.parks} countryName={country.name} />
      </div>

      {/* Section 5: Car Rental */}
      <div id="car-rental">
        <CarRentalSection cars={country.cars} countryName={country.name} />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary" id="cta">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Explore {country.name}?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let us craft your perfect {country.name} adventure with our expert local guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/itineraries">
              <Button variant="gold" size="lg" className="shadow-gold">
                View Itineraries <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="lg">
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