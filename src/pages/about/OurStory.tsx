import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2009', title: 'The Beginning', description: 'Dream Destinations was founded with a passion for creating extraordinary African travel experiences.' },
  { year: '2012', title: 'First 1000 Travelers', description: 'We celebrated our first milestone of helping 1000 travelers explore the beauty of East Africa.' },
  { year: '2016', title: 'Regional Expansion', description: 'Expanded our destinations to include Uganda, Tanzania, and the Democratic Republic of Congo.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched our enhanced online booking platform for seamless travel planning worldwide.' },
  { year: '2024', title: '15 Years Strong', description: 'Celebrating 15 years of unforgettable journeys and thousands of memories created across Africa.' },
];

const values = [
  { icon: Heart, title: 'Passion', description: 'We are driven by our love for African wildlife and creating meaningful experiences.' },
  { icon: Globe, title: 'Sustainability', description: 'Committed to responsible tourism that benefits local communities and conservation.' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in every aspect of our safari services.' },
  { icon: Users, title: 'Community', description: 'Building lasting relationships with travelers and local partners across East Africa.' },
];

const OurStory = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="About Us"
        title="Our Story"
        subtitle="From a small dream to a leading African safari company, discover the journey that made us who we are today."
        backgroundImage="https://images.unsplash.com/photo-1534177616064-ef1fc0464ad9?w=1920&h=1080&fit=crop"
      />

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Where It All <span className="text-secondary">Began</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Dream Destinations Tours & Travel was born from a simple belief: that travel has the power to transform lives. 
                Founded in 2009 in the heart of Kigali, Rwanda, our journey began with a small team of passionate travelers who wanted to share Africa's 
                most extraordinary destinations with the world.
              </p>
              <p>
                What started as organizing small group safaris has grown into a comprehensive travel company, offering bespoke 
                journeys to experience the majestic gorillas of Rwanda, the vast savannas of Tanzania, and the diverse landscapes of Uganda. 
                Our team has expanded, but our core mission remains unchanged — to create unforgettable experiences that go beyond the ordinary.
              </p>
              <p>
                Today, we pride ourselves on our personalized approach, expert local knowledge, and commitment to sustainable 
                tourism. Every journey we craft is designed to immerse travelers in the authentic culture, breathtaking 
                landscapes, and warm hospitality of East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
            Our <span className="text-secondary">Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 md:gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-4" />}
                </div>
                <div className="flex-1 pb-8 pt-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
            Our <span className="text-secondary">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div 
                key={value.title} 
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-secondary/30 group transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary/10 group-hover:bg-secondary flex items-center justify-center mb-5 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-secondary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of travelers who have trusted us with their dream African adventures.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl" className="shadow-gold">
              Contact Us <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurStory;
