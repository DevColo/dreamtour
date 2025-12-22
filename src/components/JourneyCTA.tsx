import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const JourneyCTA = () => {
  return (
    <section className="py-24 bg-gradient-brand relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Start Your Adventure
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
            Your Journey Adventure
            <span className="block">Begins Here</span>
          </h2>

          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ready to explore the wonders of Africa? Let us help you plan the perfect safari adventure. 
            From gorilla trekking in the misty mountains to the endless plains of the Serengeti, 
            your dream journey awaits.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" className="group" asChild>
              <Link to="/contact">
                Send Inquiry
                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/itineraries">View All Itineraries</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
