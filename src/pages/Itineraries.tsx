import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { tours } from '@/data/tours';
import { ArrowRight, Clock, Users, Mountain, MapPin } from 'lucide-react';

const Itineraries = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Our Tours</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Curated Itineraries
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Discover our carefully crafted journeys designed to showcase the best of each destination. 
            Every itinerary can be customized to match your preferences.
          </p>
        </div>
      </section>

      {/* Tours List */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-8 max-w-5xl mx-auto">
            {tours.map((tour) => (
              <div
                key={tour.slug}
                className="group bg-muted rounded-2xl overflow-hidden hover:shadow-ocean transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Tour Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{tour.destination}</span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{tour.description}</p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-foreground">
                          <Clock className="w-4 h-4 text-secondary" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <Users className="w-4 h-4 text-secondary" />
                          <span>{tour.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground">
                          <Mountain className="w-4 h-4 text-secondary" />
                          <span>{tour.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="lg:text-right">
                      <p className="text-gold font-heading text-2xl font-bold mb-4">{tour.price}</p>
                      <Link to={`/tour/${tour.slug}`}>
                        <Button variant="brand" size="lg" className="group/btn">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 4).map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-card text-sm text-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Don't See Your <span className="text-gradient-ocean">Perfect Trip</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We specialize in creating custom itineraries tailored to your interests, budget, and schedule. 
            Let us design your dream journey from scratch.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Request Custom Itinerary <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Itineraries;
