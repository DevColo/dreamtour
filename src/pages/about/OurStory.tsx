import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2009', title: 'The Beginning', description: 'Dreams Destinations was founded with a passion for creating extraordinary travel experiences.' },
  { year: '2012', title: 'First 1000 Travelers', description: 'We celebrated our first milestone of helping 1000 travelers explore the world.' },
  { year: '2016', title: 'Global Expansion', description: 'Expanded our destinations to include Europe, Asia, and the Middle East.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched our enhanced online booking platform for seamless travel planning.' },
  { year: '2024', title: '15 Years Strong', description: 'Celebrating 15 years of unforgettable journeys and countless memories created.' },
];

const values = [
  { icon: Heart, title: 'Passion', description: 'We are driven by our love for travel and creating meaningful experiences.' },
  { icon: Globe, title: 'Sustainability', description: 'Committed to responsible tourism that benefits local communities.' },
  { icon: Award, title: 'Excellence', description: 'We maintain the highest standards in every aspect of our service.' },
  { icon: Users, title: 'Community', description: 'Building lasting relationships with travelers and local partners.' },
];

const OurStory = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">About Us</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Our Story
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            From a small dream to a global travel company, discover the journey that made us who we are today.
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Where It All <span className="text-gradient-ocean">Began</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Dreams Destinations Tours & Travel was born from a simple belief: that travel has the power to transform lives. 
                Founded in 2009, our journey began with a small team of passionate travelers who wanted to share the world's 
                most extraordinary destinations with others.
              </p>
              <p>
                What started as organizing small group tours has grown into a comprehensive travel company, offering bespoke 
                journeys to over 50 destinations worldwide. Our team has expanded, but our core mission remains unchanged — 
                to create unforgettable experiences that go beyond the ordinary.
              </p>
              <p>
                Today, we pride ourselves on our personalized approach, expert local knowledge, and commitment to sustainable 
                tourism. Every journey we craft is designed to immerse travelers in the authentic culture, breathtaking 
                landscapes, and warm hospitality of each destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
            Our <span className="text-gradient-ocean">Journey</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-ocean flex items-center justify-center text-primary-foreground font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-full bg-border mt-4" />}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground text-center mb-16">
            Our <span className="text-gradient-ocean">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6 rounded-2xl bg-muted hover:bg-gradient-ocean group transition-all duration-500">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary/20 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <value.icon className="w-8 h-8 text-secondary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/80 text-sm transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have trusted us with their dream vacations.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
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
