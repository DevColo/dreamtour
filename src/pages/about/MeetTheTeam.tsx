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
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Operations',
    bio: 'Sarah ensures every trip runs smoothly, bringing 15 years of logistics expertise to create seamless travel experiences.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Travel Consultant',
    bio: "Having visited over 60 countries, Marcus crafts personalized itineraries that match each traveler's unique preferences.",
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Destination Specialist - Europe',
    bio: 'Born in Spain and raised across Europe, Elena brings authentic local knowledge to every European adventure.',
    avatar: 'ER',
  },
  {
    name: 'James Okonkwo',
    role: 'Destination Specialist - Africa',
    bio: 'A native of Kenya, James has guided hundreds of safaris and knows every hidden gem across East Africa.',
    avatar: 'JO',
  },
  {
    name: 'Priya Sharma',
    role: 'Destination Specialist - Asia',
    bio: "From the temples of Bali to the streets of Tokyo, Priya's expertise covers all of Asia's diverse destinations.",
    avatar: 'PS',
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
              <div key={member.name} className="group bg-muted rounded-2xl p-8 hover:shadow-ocean transition-all duration-300">
                <div className="w-24 h-24 rounded-full bg-gradient-ocean flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-6">
                  {member.avatar}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-secondary font-medium text-sm uppercase tracking-wider mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{member.bio}</p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="w-10 h-10 rounded-full bg-card hover:bg-secondary flex items-center justify-center transition-colors">
                      <Linkedin className="w-4 h-4 text-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-card hover:bg-secondary flex items-center justify-center transition-colors">
                      <Mail className="w-4 h-4 text-foreground" />
                    </button>
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
            <Button variant="ocean" size="lg">
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
