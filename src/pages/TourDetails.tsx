import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { getTourBySlug } from '@/data/tours';
import { ArrowRight, ArrowLeft, Clock, Users, Mountain, MapPin, Check, Calendar } from 'lucide-react';

const TourDetails = () => {
  const { tourSlug } = useParams<{ tourSlug: string }>();
  const tour = getTourBySlug(tourSlug || '');

  if (!tour) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist.</p>
          <Link to="/itineraries">
            <Button variant="brand">
              <ArrowLeft className="w-4 h-4 mr-2" />
              View All Itineraries
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
        tagline={tour.destination}
        title={tour.title}
        subtitle={tour.description}
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop"
      >
        {/* Quick Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-primary-foreground">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-medium">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="w-5 h-5 text-accent" />
            <span className="font-medium">{tour.groupSize}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Mountain className="w-5 h-5 text-accent" />
            <span className="font-medium">{tour.difficulty}</span>
          </div>
        </div>
      </PageHero>

      {/* Back Link */}
      <div className="bg-muted border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/itineraries"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Tours
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Tour <span className="text-secondary">Highlights</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {tour.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
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
                  Day-by-Day <span className="text-secondary">Itinerary</span>
                </h2>
                <div className="space-y-4">
                  {tour.itinerary.map((day, index) => (
                    <div key={day.day} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50">
                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shrink-0 shadow-md">
                          {day.day}
                        </div>
                        {index < tour.itinerary.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-3" />
                        )}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                          {day.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  What's <span className="text-secondary">Included</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 bg-card border border-border/50 rounded-2xl p-6">
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
              <div className="sticky top-32 bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
                <div className="text-center mb-6 pb-6 border-b border-border/50">
                  <p className="text-muted-foreground text-sm mb-1">Starting from</p>
                  <p className="text-accent font-heading text-4xl font-bold">{tour.price}</p>
                  <p className="text-muted-foreground text-sm">per person</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mountain className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-medium">{tour.difficulty} difficulty</span>
                  </div>
                </div>

                <Link to="/contact" className="block">
                  <Button variant="gold" size="xl" className="w-full shadow-gold">
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
            Explore More <span className="text-secondary">Itineraries</span>
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
