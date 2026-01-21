import { Shield, MapPin, Users, Heart, Clock, Award, Star, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Professional & Knowledgeable Safari Guides',
    description: 'Our skilled guides offer deep expertise in Rwanda and East Africa\'s wildlife, culture, and landscapes, providing reliable leadership and enriching safari experiences.',
    image: 'https://media.istockphoto.com/id/1459013777/photo/two-friends-taking-pictures-in-nature.webp?a=1&b=1&s=612x612&w=0&k=20&c=AOz6T1Z4d8qSIhw3e3AN-C6CbJvRJ5xTpuCdc9OAyfA=',
  },
  {
    icon: Heart,
    title: 'Budget-Friendly & Quality Safaris',
    description: 'We offer top-quality tours at affordable rates with honest, transparent pricing making unforgettable safaris accessible to every traveler.',
    image: 'https://images.unsplash.com/photo-1607526163467-d7c344a83f7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRvdXJzfGVufDB8fDB8fHww',
  },
  {
    icon: MapPin,
    title: 'Custom Safari Experiences with Dream Destination Tours & Travel',
    description: 'From Rwanda gorilla safaris to East Africa multi-day wildlife adventures, we craft tailor-made trips that suit your pace, interests, and dream safari experience.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    icon: Shield,
    title: 'Trusted & Licensed Safari & Tour Operator',
    description: 'We are a fully licensed and insured tour operator, ensuring safe, secure, and worry-free safari experiences across Rwanda, Uganda, Kenya, and Tanzania.',
    image: 'https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FmZXR5fGVufDB8fDB8fHww',
  },
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '450+', label: 'Happy Tourists' },
  { value: '40+', label: 'Safaris & Tours' },
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
            Your Trusted <span className="text-primary">East Africa Safari Partner</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Top-Rated Safari Operator in Rwanda & East Africa
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mt-4">
            We offer expertly designed safari packages, trusted local guides, and exceptional customer care ensuring safe, smooth, and unforgettable wildlife and travel experiences across Rwanda, Uganda, Kenya, and Tanzania.
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
