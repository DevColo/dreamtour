import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { tours } from '@/data/tours';
import { ArrowRight, Clock, Users, Mountain, MapPin } from 'lucide-react';

const Itineraries = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="Our Tours"
        title="Curated Itineraries"
        subtitle="Discover our carefully crafted journeys designed to showcase the best of East Africa. Every itinerary can be customized to match your preferences."
        backgroundImage="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop"
      />

      {/* Tours List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-5xl mx-auto">
            {tours.map((tour, index) => (
              <div
                key={tour.slug}
                className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg hover:border-secondary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Tour Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                          <MapPin className="w-3.5 h-3.5" />
                          {tour.destination}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {tour.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed">{tour.description}</p>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                            <Clock className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground font-medium">{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                            <Users className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground font-medium">{tour.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                            <Mountain className="w-4 h-4 text-secondary" />
                          </div>
                          <span className="text-foreground font-medium">{tour.difficulty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="lg:text-right lg:min-w-[180px]">
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <p className="text-accent font-heading text-3xl font-bold mb-4">{tour.price}</p>
                      <Link to={`/tour/${tour.slug}`}>
                        <Button variant="brand" size="lg" className="group/btn w-full lg:w-auto">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.slice(0, 4).map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1.5 rounded-full bg-muted text-sm text-foreground font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {tour.highlights.length > 4 && (
                        <span className="px-3 py-1.5 rounded-full bg-secondary/10 text-sm text-secondary font-medium">
                          +{tour.highlights.length - 4} more
                        </span>
                      )}
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
            Don't See Your <span className="text-secondary">Perfect Trip</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            We specialize in creating custom itineraries tailored to your interests, budget, and schedule. 
            Let us design your dream African safari from scratch.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="shadow-gold">
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
