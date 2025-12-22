import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Expertise = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-brand">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop"
                alt="African Safari Experience"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
              Our Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Crafting Unforgettable
              <span className="block text-primary">African Adventures</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Dream Destination Tours & Travel, we specialize in creating bespoke safari experiences 
              that showcase the very best of East Africa. Our deep knowledge of Uganda, Rwanda, Kenya, 
              and Tanzania allows us to craft journeys that go beyond the ordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From intimate gorilla encounters in the misty mountains to witnessing the thundering 
              wildebeest migration across the Serengeti, every itinerary is thoughtfully designed 
              to create memories that last a lifetime.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/about/our-story">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
