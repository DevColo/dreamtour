import { Check, Shield, Heart, MapPin, Users, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Certified',
    description: 'Fully licensed tour operator with all necessary certifications and insurance coverage.',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    description: 'Deep knowledge of East African destinations with local guides who know every hidden gem.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every itinerary is customized to match your interests, pace, and travel style.',
  },
  {
    icon: Heart,
    title: 'Sustainable Tourism',
    description: 'We prioritize eco-friendly practices and support local communities.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance throughout your journey for complete peace of mind.',
  },
  {
    icon: Check,
    title: 'Best Value',
    description: 'Transparent pricing with no hidden costs. Premium experiences at competitive rates.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Dream Destination</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're committed to providing exceptional travel experiences with professionalism, 
            expertise, and genuine care for every traveler.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card p-8 rounded-xl shadow-brand hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <reason.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
