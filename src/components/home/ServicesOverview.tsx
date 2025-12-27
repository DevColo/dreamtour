import { Link } from 'react-router-dom';
import { ArrowRight, Compass, TreePine, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Compass,
    title: 'Wildlife Safaris',
    subtitle: 'East Africa (EAC)',
    description: 'Witness the Big Five and the Great Migration across Kenya, Tanzania, Uganda, and Rwanda.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop',
    link: '/itineraries',
  },
  {
    icon: TreePine,
    title: 'Primate Tracking',
    subtitle: 'Rwanda & Uganda',
    description: 'Get up close with mountain gorillas and chimpanzees in their natural rainforest habitats.',
    image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop',
    link: '/destinations/rwanda',
  },
  {
    icon: Users,
    title: 'Cultural Tours',
    subtitle: 'Community Experiences',
    description: 'Immerse yourself in local traditions, village visits, and authentic African cultural experiences.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop',
    link: '/itineraries',
  },
  {
    icon: Calendar,
    title: 'Multi-Day Tours',
    subtitle: 'Extended Adventures',
    description: 'Comprehensive safari packages from 3 to 21 days, covering multiple destinations and experiences.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop',
    link: '/itineraries',
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Unforgettable <span className="text-primary">African Adventures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From thrilling wildlife safaris to intimate primate encounters, 
            discover the diverse experiences we offer across East Africa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-brand hover:shadow-lg transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                
                <p className="text-accent text-sm font-medium mb-1">{service.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-md">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all duration-300">
                  <span>Explore More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
            <Link to="/itineraries">
              View All Tours
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
