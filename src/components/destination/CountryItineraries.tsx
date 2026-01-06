import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountryItinerary } from '@/data/countryData';

interface CountryItinerariesProps {
  itineraries: CountryItinerary[];
  countryName: string;
}

export const CountryItineraries = ({ itineraries, countryName }: CountryItinerariesProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Sample Itineraries
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {countryName} <span className="text-primary">Safari Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted itineraries designed to showcase the best of {countryName}.
            Each can be customized to match your preferences.
          </p>
        </div>

        {/* Itineraries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={itinerary.image}
                  alt={itinerary.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {itinerary.days} Days
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2 uppercase">
                  {itinerary.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {itinerary.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {itinerary.highlights.slice(0, 3).map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/itineraries">
            <Button variant="gold" size="lg" className="shadow-gold">
              View All Itineraries
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
