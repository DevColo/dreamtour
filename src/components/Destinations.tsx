import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: 'Uganda',
    slug: 'uganda',
    description: 'Encounter majestic mountain gorillas and experience the Pearl of Africa.',
    image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=1000&fit=crop',
  },
  {
    name: 'Rwanda',
    slug: 'rwanda',
    description: 'Discover the land of a thousand hills with incredible wildlife and culture.',
    image: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=800&h=1000&fit=crop',
  },
  {
    name: 'Kenya',
    slug: 'kenya',
    description: 'Witness the great migration and explore iconic African savannahs.',
    image: 'https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&h=1000&fit=crop',
  },
  {
    name: 'Tanzania',
    slug: 'tanzania',
    description: 'From Serengeti plains to Zanzibar beaches, an unforgettable African journey.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=1000&fit=crop',
  },
];

export const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Our Destinations
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Explore Dream <span className="text-gradient-ocean">Destinations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From tropical paradises to ancient wonders, we offer carefully curated journeys to the world's most breathtaking locations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Link
              to={`/destinations/${destination.slug}`}
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl shadow-ocean cursor-pointer h-[400px] block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/95 via-ocean-deep/40 to-transparent transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-2 transform transition-transform duration-300 group-hover:-translate-y-2">
                  {destination.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 text-gold text-sm font-medium uppercase tracking-wider opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
