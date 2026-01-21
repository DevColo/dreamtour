import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Globe, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  { year: '2009', title: 'The Beginning of a Trusted Rwanda Tour Operator', description: 'Dream Destinations Tours & Travel was born in Kigali with a mission to share the true beauty of Rwanda and East Africa through world-class safaris, gorilla trekking adventures, and culturally immersive travel experiences. Our foundation was built on passion, professionalism, and deep local expertise.' },
  { year: '2012', title: 'First 100 East Africa Safari Travelers', description: 'Within three years, more than 100 travelers trusted us to guide their Rwanda wildlife safaris, cultural tours, community tourism visits, and gorilla trekking adventures. This milestone marked our rise as a top-rated and reliable African safari company.' },
  { year: '2016', title: 'Expanding Across East Africa', description: 'We grew beyond Rwanda, offering unforgettable journeys in Uganda, Tanzania, and the Democratic Republic of Congo. From Serengeti safaris to chimpanzee trekking and volcano adventures, we became a complete East Africa travel specialist.' },
  { year: '2020', title: 'Digital Transformation for Global Travelers', description: 'We upgraded our online booking platform, making it easier for guests worldwide to plan Rwanda gorilla trekking tours, tailor-made East Africa safaris, and wildlife holiday packages. This innovation strengthened our position as a modern and traveler-friendly African tour operator.' },
  { year: '2024', title: '15 Years of Exceptional Rwanda & East Africa Safari Experiences', description: 'We celebrated 15 powerful years of travel excellence—thousands of journeys crafted, communities supported, and unforgettable wildlife encounters delivered. Our commitment to sustainable tourism, expert guiding, and showcasing the peace and beauty of Rwanda grew stronger than ever.' },
  { year: '2025', title: 'The Year of Excellence & Global Recognition', description: 'In 2025, Dream Destinations continued to shine as one of the most trusted safari companies in East Africa. We expanded partnerships with conservation programs, enhanced our cultural and community-based tourism experiences, and refined our gorilla trekking and wildlife safari packages to meet global travel trends. More travelers from around the world discovered Rwanda’s beauty through us.' },
  { year: '2026', title: 'A Year of Outstanding Adventures & Unmatched Safari Experiences',
     description: `2026 marks a new chapter.
Dream Destinations Tours & Travel proudly steps into the year as a leading Rwanda safari company ready to welcome travelers from every corner of the world.

We are prepared to deliver:\n
• World-class Wildlife Safaris in Rwanda, Uganda & Tanzania\n
• Unforgettable Mountain Gorilla Trekking Adventures\n
• Tailor-Made East Africa Safari Holidays\n
• Community, Cultural & Educational Tourism Experiences\n
• Luxury, Private & Group Safari Packages

This year is our call to travelers everywhere:
Your African adventure is waiting. Rwanda is safe, peaceful, breathtaking—and we are ready to guide you.

From the rolling hills of Rwanda to the mighty Serengeti and the forests of Uganda, 2026 stands as a year of growth, excellence, and unforgettable travel memories.`
},
];

const values = [
  { icon: Heart, title: 'Passion for Africa', description: 'Sharing the beauty of Rwanda and East Africa through authentic, life-changing safari experiences.' },
  { icon: Globe, title: 'Sustainable Travel', description: 'Promoting responsible tourism that supports local communities, protects wildlife, and preserves natural habitats.' },
  { icon: Award, title: 'Excellence in Safaris', description: 'Delivering world-class service, expert guiding, and seamless gorilla trekking and wildlife safari experiences.' },
  { icon: Users, title: 'Community Impact', description: 'Empowering local communities and building meaningful connections between travelers and East Africa’s cultures.' },
];

const OurStory = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="About Us"
        title="Our Story"
        subtitle="What began as a passion for exploring Rwanda has grown into a leading safari company creating unforgettable African journeys."
        backgroundImage="https://images.unsplash.com/photo-1534177616064-ef1fc0464ad9?w=1920&h=1080&fit=crop"
      />

      {/* Story Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Where Our <span className="text-secondary">Journey Began</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Dream Destinations Tours & Travel was founded in 2009 with one clear mission: to show the world the true beauty of Rwanda and East Africa. From the heart of Kigali—now one of Africa's safest, cleanest, and most inspiring cities—our story began with a team of passionate guides who believed that travel could heal, connect, and transform lives.
              </p>
              <p>
                Born in a country that rose from hardship to become a global symbol of peace, unity, and progress, our company grew from that same spirit. We wanted travelers not only to see Africa's wonders but to experience the warmth, resilience, and rich culture of the Rwandan people.
              </p>
              <p>
                What started with small group safaris soon expanded into a leading East Africa travel company specializing in life-changing adventures:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Gorilla trekking in Rwanda's Volcanoes National Park</li>
                <li>Wildlife safaris across Akagera, Serengeti, and Queen Elizabeth National Park</li>
                <li>Community-based tourism experiences with local tribes and cultural groups</li>
                <li>Tailor-made luxury journeys across Rwanda, Uganda, Kenya & Tanzania</li>
              </ul>
              <p>
                Our growth has been built on one foundation—people.
              </p>
              <p>
                Our team of expert local guides, community partners, and travel specialists bring deep knowledge, genuine hospitality, and a passion for sharing the true spirit of East Africa. Every itinerary is crafted with care, sustainability, and respect for nature and local communities.
              </p>
              <p>
                Today, Dream Destinations Tours & Travel stands as a trusted Rwanda tour operator known for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personalized safari planning</li>
                <li>Ethical and community-supportive tourism</li>
                <li>Safe, seamless travel experiences</li>
                <li>Top-rated gorilla trekking and wildlife safari packages</li>
                <li>Deep local expertise and storytelling</li>
                <li>A commitment to responsible, eco-friendly travel</li>
              </ul>
              <p>
                From Rwanda's peaceful hills to the endless plains of Tanzania and the lush forests of Uganda—our goal remains the same: to create unforgettable journeys that go beyond sightseeing and connect travelers to the soul of Africa.
              </p>
              <p className="font-semibold text-foreground">
                Your dream adventure begins here. Let us bring the heart of East Africa to life, one journey at a time.
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
            Our Core <span className="text-secondary">Values</span>
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
            Searching for a Trusted Tour Operator in Rwanda?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Begin your Rwanda safari or gorilla trekking journey with one of East Africa's most trusted tour operators—travel with confidence.
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
