import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const team = [
  {
    name: 'David Mitchell',
    role: 'Founder & CEO',
    bio: 'With over 20 years in the travel industry, David founded Dreams Destinations to share his passion for extraordinary journeys.',
    avatar: 'DM',
    imageId: '1560250097-0b93528c311a',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    bio: 'Sarah ensures every trip runs smoothly, bringing 15 years of logistics expertise to create seamless travel experiences.',
    avatar: 'SC',
    imageId: '1573496359142-b8d87734a5a2',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Travel Consultant',
    bio: "Having visited over 60 countries, Marcus crafts personalized itineraries that match each traveler's unique preferences.",
    avatar: 'MJ',
    imageId: '1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Destination Specialist - Europe',
    bio: 'Born in Spain and raised across Europe, Elena brings authentic local knowledge to every European adventure.',
    avatar: 'ER',
    imageId: '1580489944761-15a19d654956',
  },
  {
    name: 'James Okonkwo',
    role: 'Destination Specialist - Africa',
    bio: 'A native of Kenya, James has guided hundreds of safaris and knows every hidden gem across East Africa.',
    avatar: 'JO',
    imageId: '1506794778202-cad84cf45f1d',
  },
  {
    name: 'Priya Sharma',
    role: 'Destination Specialist - Asia',
    bio: "From the temples of Bali to the streets of Tokyo, Priya's expertise covers all of Asia's diverse destinations.",
    avatar: 'PS',
    imageId: '1598550874175-4d0ef436c909',
  },
];

const MeetTheTeam = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">Our Team</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Meet The Experts
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our passionate team of travel experts is dedicated to making your dream vacation a reality.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div 
                key={member.name} 
                className="group relative overflow-hidden rounded-2xl h-[450px] cursor-pointer shadow-ocean"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-gradient-ocean"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-${member.imageId}?w=600&h=800&fit=crop&crop=face)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Avatar fallback overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0 transition-opacity">
                  <div className="w-32 h-32 rounded-full bg-gradient-ocean/80 flex items-center justify-center text-primary-foreground text-4xl font-bold backdrop-blur-sm">
                    {member.avatar}
                  </div>
                </div>
                
                {/* Content - always visible name/role at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ease-out">
                  {/* Name and Role - always visible */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-gold font-medium text-sm uppercase tracking-wider mb-3">{member.role}</p>
                  
                  {/* Bio and socials - slide up on hover */}
                  <div className="overflow-hidden">
                    <div className="transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      <p className="text-white/90 text-sm leading-relaxed mb-4">{member.bio}</p>
                      <div className="flex items-center gap-3">
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm">
                          <Linkedin className="w-4 h-4 text-white" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm">
                          <Mail className="w-4 h-4 text-white" />
                        </button>
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
            Join Our <span className="text-gradient-ocean">Team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about travel? We're always looking for talented individuals to join our growing team.
          </p>
          <Link to="/contact">
            <Button variant="brand" size="lg">
              View Open Positions
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default MeetTheTeam;
