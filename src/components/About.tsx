import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Camera, Shield } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Customized Itineraries',
    description:
      'We craft personalized journeys that reflect your interests, whether seeking adventure, relaxation, or cultural immersion.',
  },
  {
    icon: Users,
    title: 'Expert-Led Adventures',
    description:
      'Our experienced guides provide deep knowledge and insights, enhancing your understanding of every destination.',
  },
  {
    icon: Camera,
    title: 'Photography Services',
    description:
      'Professional photographers capture your moments, so you can fully immerse yourself in the experience.',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description:
      'Licensed travel operator with 24/7 support and partnerships with leading emergency services.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              Your Adventure,
              <span className="block text-gradient-ocean">Our Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Dreams Destinations Tours & Travel, we don't just offer tours – we create unforgettable experiences
              that capture the very essence of each destination. Our bespoke journeys are meticulously designed
              to immerse you in vibrant cultures, awe-inspiring landscapes, and extraordinary adventures.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether it's the thrill of exploring ancient ruins, the serenity of tropical beaches, or the
              richness of local encounters, every detail is tailored to meet your unique desires and needs.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/about/our-story">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-muted hover:bg-gradient-ocean transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
