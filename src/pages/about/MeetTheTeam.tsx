import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'Samuel IMANIRAVUGA',
    role: 'Founder & CEO',
    bio: 'With over 20 years in the travel industry, David founded Dream Destinations to share his passion for African wildlife and culture.',
    avatar: 'SI',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60',
  },
  {
    name: 'Joel NIYIGABA',
    role: 'Professional Wildlife Safari Tour Guide',
    bio: 'Joel ensures every safari runs smoothly, bringing 15 years of logistics expertise to create seamless travel experiences.',
    avatar: 'JN',
    image: 'https://images.unsplash.com/photo-1614890085618-0e1054da74f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'TUMUSIFU Theogene',
    role: 'Head of Operations',
    bio: 'Theogene ensures every safari runs smoothly, bringing 15 years of logistics expertise to create seamless travel experiences.',
    avatar: 'TT',
    image: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D',
  },
  {
    name: 'DUSABEYEZU Jeremy',
    role: 'Professional Tourist Driver Guide',
    bio: 'Jeremy specializes Professional Tourist Driver Guide, connecting travelers with local communities and different Destinations  across East Africa.',
    avatar: 'DJ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60',
  },
];

const MeetTheTeam = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="Our Team"
        title="Meet The Experts"
        subtitle="Our passionate team of travel experts is dedicated to making your dream African safari a reality."
        backgroundImage="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=1920&h=1080&fit=crop"
      />

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="group relative overflow-hidden rounded-2xl h-[480px] cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary to-secondary"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ease-out">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-sm uppercase tracking-wider mb-3">{member.role}</p>
                  
                  {/* Bio and socials - slide up on hover */}
                  <div className="overflow-hidden">
                    <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-white/90 text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex items-center gap-3">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Join Our <span className="text-secondary">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            If you're passionate about Rwanda tourism, wildlife conservation, and East Africa travel, we'd love to have you on our team.
          </p>
          <Link to="/contact">
            <Button variant="brand" size="lg">
              View Open Positions <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MeetTheTeam;
