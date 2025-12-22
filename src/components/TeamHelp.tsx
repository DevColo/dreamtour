import { Compass, Calendar, Headphones, FileText, Map, Camera } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Custom Itinerary Planning',
    description: 'Tailored travel plans designed around your interests, timeline, and budget.',
  },
  {
    icon: Calendar,
    title: 'Booking & Reservations',
    description: 'Hassle-free booking for accommodations, flights, and all tour activities.',
  },
  {
    icon: Map,
    title: 'Expert Guided Tours',
    description: 'Knowledgeable local guides who bring destinations to life with stories and insights.',
  },
  {
    icon: FileText,
    title: 'Visa & Documentation',
    description: 'Assistance with visa applications, travel permits, and all necessary paperwork.',
  },
  {
    icon: Headphones,
    title: '24/7 Travel Support',
    description: 'Round-the-clock assistance before, during, and after your journey.',
  },
  {
    icon: Camera,
    title: 'Photography Services',
    description: 'Professional photography options to capture your unforgettable moments.',
  },
];

export const TeamHelp = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            What Our Team <span className="text-primary">Will Help With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From the moment you inquire to the day you return home, our dedicated team 
            is here to ensure every aspect of your journey is seamless and memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex gap-4 p-6 rounded-xl bg-muted hover:bg-primary/5 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
