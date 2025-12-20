import { Button } from '@/components/ui/button';
import { Plane, ArrowRight } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-secondary rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
            <Plane className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Ready for your next adventure?</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Your Adventure
            <span className="block text-gradient-ocean">Begins Here</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's craft the journey of a lifetime. Whether it's a family vacation, a romantic escape, or a solo
            exploration, Dreams Destinations offers an experience that goes beyond the ordinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" className="group">
              Send Inquiry
              <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              View All Destinations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
