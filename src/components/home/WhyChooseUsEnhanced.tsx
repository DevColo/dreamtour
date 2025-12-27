import { Shield, MapPin, Users, Heart, Clock, Award, Star, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Professional Guides',
    description: 'Expert local guides with deep knowledge of wildlife, culture, and terrain.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop',
  },
  {
    icon: MapPin,
    title: 'Tailor-Made Itineraries',
    description: 'Custom trips designed around your interests, pace, and travel style.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=300&fit=crop',
  },
  {
    icon: Heart,
    title: 'Affordable Packages',
    description: 'Premium experiences at competitive rates with transparent pricing.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&h=300&fit=crop',
  },
  {
    icon: Shield,
    title: 'Safe & Certified',
    description: 'Fully licensed tour operator with comprehensive insurance coverage.',
    image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=400&h=300&fit=crop',
  },
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Travelers' },
  { value: '100+', label: 'Safari Tours' },
  { value: '4.9', label: 'Average Rating', icon: Star },
];

export const WhyChooseUsEnhanced = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Trusted <span className="text-primary">Safari Partner</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're committed to providing exceptional travel experiences with professionalism, 
            expertise, and genuine care for every traveler.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="bg-primary rounded-2xl p-8 mb-16 shadow-brand">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
                    {stat.value}
                  </span>
                  {stat.icon && <stat.icon className="w-6 h-6 text-accent fill-accent" />}
                </div>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Image */}
                <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
                </div>
                
                {/* Content */}
                <div className="sm:w-3/5 p-6 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-secondary text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Guaranteed Quality</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
