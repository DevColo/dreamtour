import { Link } from 'react-router-dom';
import { ArrowRight, Compass, TreePine, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Palace from '@/assets/culture.jpg';

const services = [
  {
    icon: Compass,
    title: 'Wildlife Safaris',
    subtitle: 'East Africa (EAC)',
    description: 'Rwanda Big Five Safaris & East Africa Great Migration Tours. Journey through Rwanda\'s top wildlife parks and chase the Great Migration across Kenya and Tanzania for an unforgettable African adventure.',
    image: 'https://images.unsplash.com/photo-1611262084470-0e8686d7be78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGVsZXBoYW50fGVufDB8fDB8fHww',
    link: '/services/wildlife-safaris',
  },
  {
    icon: TreePine,
    title: 'Primate Tracking',
    subtitle: 'Rwanda & Uganda',
    description: 'Rwanda & Uganda Gorilla and Chimpanzee Tracking Tours. Explore pristine rainforests and experience East Africa\'s most sought-after primate adventures with top-rated gorilla trekking and chimpanzee tracking in Rwanda and Uganda..',
    image: 'https://images.unsplash.com/photo-1722293094576-424bd9b4aef9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29yaWxsYSUyMHJ3YW5kYXxlbnwwfHwwfHx8MA%3D%3D',
    link: '/services/primate-tracking',
  },
  {
    icon: Users,
    title: 'Cultural Tours',
    subtitle: 'Community Experiences',
    description: 'East Africa Community & Cultural Tours — Rwanda, Uganda, Maasai Kenya & Tanzania Discover real African traditions through village visits, Maasai cultural encounters, storytelling, and sustainable community-based tourism experiences.',
    image: Palace,
    link: '/services/cultural-tours',
  },
  {
    icon: Calendar,
    title: 'Multi-Day Tours',
    subtitle: 'Extended Adventures',
    description: 'Top-Rated Multi-Day Safari Packages in Rwanda & East Africa. From 3-day escapes to 21-day expeditions, explore East Africa’s top destinations with customized long-safari itineraries across Rwanda, Uganda, Kenya, and Tanzania for the ultimate wildlife and cultural journey.',
    image: 'https://images.unsplash.com/photo-1706977570024-fefa419c48c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZSUyMGtpdnUlMjByd2FuZGF8ZW58MHx8MHx8fDA%3D',
    link: '/services/multi-day-tours',
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
            East Africa Safari Experts, <span className="text-primary">Rwanda Gorilla Trekking & Big Five Tours</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover unforgettable African adventures across Rwanda, Uganda, Kenya, and Tanzania featuring gorilla trekking, wildlife safaris, cultural tours, and tailor-made travel experiences.
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
