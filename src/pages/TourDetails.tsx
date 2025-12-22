import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getTourBySlug } from '@/data/tours';
import { ArrowRight, Clock, Users, Mountain, MapPin, Check, Calendar } from 'lucide-react';

const TourDetails = () => {
  const { tourSlug } = useParams<{ tourSlug: string }>();
  const tour = getTourBySlug(tourSlug || '');

  if (!tour) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground">Tour Not Found</h1>
          <Link to="/itineraries" className="text-secondary hover:underline mt-4 inline-block">
            View All Itineraries
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-gold text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <span className="uppercase tracking-[0.2em]">{tour.destination}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              {tour.title}
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8">
              {tour.description}
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gold" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-gold" />
                <span>{tour.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Tour <span className="text-gradient-ocean">Highlights</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 p-4 rounded-xl bg-muted">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Day-by-Day <span className="text-gradient-ocean">Itinerary</span>
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, index) => (
                    <div key={day.day} className="flex gap-4 p-6 rounded-xl bg-muted">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-ocean flex items-center justify-center text-primary-foreground font-bold shrink-0">
                          {day.day}
                        </div>
                        {index < tour.itinerary.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-2">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                          {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  What's <span className="text-gradient-ocean">Included</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {tour.included.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-muted rounded-2xl p-8 shadow-ocean">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground text-sm mb-1">Starting from</p>
                  <p className="text-gold font-heading text-4xl font-bold">{tour.price}</p>
                  <p className="text-muted-foreground text-sm">per person</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-secondary" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Mountain className="w-5 h-5 text-secondary" />
                    <span>{tour.difficulty} difficulty</span>
                  </div>
                </div>

                <Link to="/contact" className="block">
                  <Button variant="gold" size="xl" className="w-full">
                    Book This Tour
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  No payment required to inquire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tours */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-8">
            Explore More <span className="text-gradient-ocean">Itineraries</span>
          </h2>
          <Link to="/itineraries">
            <Button variant="brand" size="lg">
              View All Tours <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TourDetails;
