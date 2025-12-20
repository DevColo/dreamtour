import { ArrowRight } from 'lucide-react';
import greeceImage from '@/assets/destination-greece.jpg';
import maldivesImage from '@/assets/destination-maldives.jpg';
import baliImage from '@/assets/destination-bali.jpg';
import dubaiImage from '@/assets/destination-dubai.jpg';

const destinations = [
  {
    name: 'Greece',
    description: 'Explore ancient ruins and stunning Mediterranean coastlines on an unforgettable Aegean adventure.',
    image: greeceImage,
  },
  {
    name: 'Maldives',
    description: 'Experience luxury overwater villas and pristine turquoise waters in this tropical paradise.',
    image: maldivesImage,
  },
  {
    name: 'Bali',
    description: 'Discover lush rice terraces, sacred temples, and rich cultural heritage in Indonesia.',
    image: baliImage,
  },
  {
    name: 'Dubai',
    description: 'Marvel at architectural wonders and experience world-class luxury in this modern oasis.',
    image: dubaiImage,
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
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-2xl shadow-ocean cursor-pointer h-[400px]"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
