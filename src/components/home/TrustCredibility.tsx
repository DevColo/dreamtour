import { Award, Shield, BadgeCheck, FileCheck, Building2, Handshake } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'Licensed Tour Operator',
    description: 'Officially registered with Rwanda Development Board',
  },
  {
    icon: BadgeCheck,
    title: 'IATA Certified',
    description: 'International Air Transport Association member',
  },
  {
    icon: FileCheck,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for all travelers',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in tourism',
  },
];

const partnerHotels = [
  {
    name: 'Serena Hotels',
    logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop',
  },
  {
    name: 'Marriott Hotels',
    logo: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&h=100&fit=crop',
  },
  {
    name: 'Radisson Blu',
    logo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=100&fit=crop',
  },
  {
    name: 'Kigali Marriott',
    logo: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=200&h=100&fit=crop',
  },
  {
    name: 'Safari Lodges',
    logo: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=200&h=100&fit=crop',
  },
  {
    name: 'Eco Resorts',
    logo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&h=100&fit=crop',
  },
];

export const TrustCredibility = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Trust & Credibility
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Journey in <span className="text-primary">Safe Hands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner with world-class hotels and hold official certifications 
            to ensure your African adventure is safe, comfortable, and unforgettable.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-muted rounded-xl p-6 text-center hover:shadow-brand transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Partner Hotels Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-accent" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              Our Trusted Partners
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partnerHotels.map((hotel) => (
              <div
                key={hotel.name}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center justify-center hover:bg-primary-foreground/20 transition-colors duration-300 group"
              >
                <div className="w-full h-16 rounded-lg overflow-hidden mb-3">
                  <img
                    src={hotel.logo}
                    alt={hotel.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <p className="text-primary-foreground/80 text-xs text-center font-medium">
                  {hotel.name}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/70 mt-8 text-sm">
            We work with premium accommodations across East Africa to ensure your comfort
          </p>
        </div>
      </div>
    </section>
  );
};
