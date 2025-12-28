import { useParams, Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getTourBySlug } from '@/data/tours';
import { ArrowRight, ArrowLeft, Clock, Users, Mountain, MapPin, Check, Calendar, Phone } from 'lucide-react';

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
      
      {/* Large Banner Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={tour.bannerImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        {/* Banner Content */}
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
                {tour.destination}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-4">
                {tour.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                {tour.description}
              </p>
              
              {/* Quick Info Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-foreground text-sm">{tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                  <Users className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-foreground text-sm">{tour.groupSize}</span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                  <Mountain className="w-4 h-4 text-secondary" />
                  <span className="font-medium text-foreground text-sm">{tour.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="lg:col-span-2 space-y-16">
              {/* Tour Gallery */}
              {tour.galleryImages && tour.galleryImages.length > 0 && (
                <div>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Tour <span className="text-secondary">Gallery</span>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tour.galleryImages.map((image, index) => (
                      <div key={index} className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img
                          src={image}
                          alt={`${tour.title} - Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Day-by-Day Itinerary */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  Day-by-Day <span className="text-secondary">Itinerary</span>
                </h2>
                <div className="space-y-6">
                  {tour.itinerary.map((day, index) => (
                    <div
                      key={day.day}
                      className="group relative bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className={`flex flex-col ${day.image ? 'lg:flex-row' : ''}`}>
                        {/* Day Image */}
                        {day.image && (
                          <div className="lg:w-2/5 aspect-video lg:aspect-auto relative overflow-hidden">
                            <img
                              src={day.image}
                              alt={`Day ${day.day}: ${day.title}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4">
                              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                                Day {day.day}
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {/* Day Content */}
                        <div className={`${day.image ? 'lg:w-3/5' : 'w-full'} p-6 lg:p-8 flex flex-col justify-center`}>
                          {!day.image && (
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-md mb-4">
                              Day {day.day}
                            </div>
                          )}
                          <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                            Day {day.day}: {day.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                      
                      {/* Connector Line */}
                      {index < tour.itinerary.length - 1 && (
                        <div className="hidden lg:block absolute -bottom-3 left-10 w-0.5 h-6 bg-border z-10" />
                      )}
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
              <div className="sticky top-32 space-y-6">
                {/* Pricing Card */}
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-lg">
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

                {/* Quick Contact Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-center">
                  <Phone className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                  <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-2">
                    Need Help Planning?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Our safari experts are here to help customize your trip.
                  </p>
                  <Link to="/contact">
                    <Button variant="hero" size="sm" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
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
