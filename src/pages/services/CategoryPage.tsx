import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CountryItinerary } from '@/data/countryData';

export interface CategoryData {
  slug: string;
  title: string;
  bannerImage: string;
  overviewTitle: string;
  overviewDescription: string;
  experienceTitle: string;
  experienceDescription: string;
  itineraries: CountryItinerary[];
}

interface CategoryPageProps {
  data: CategoryData;
}

const CategoryPage = ({ data }: CategoryPageProps) => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="Our Services"
        title={data.title}
        subtitle={data.overviewDescription}
        backgroundImage={data.bannerImage}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
                Our Expertise
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {data.overviewTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {data.overviewDescription}
              </p>
              <div className="p-6 bg-muted rounded-xl border-l-4 border-secondary">
                <h3 className="font-heading font-semibold text-foreground mb-2">{data.experienceTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {data.experienceDescription}
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-brand">
              <img
                src={data.bannerImage}
                alt={data.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="border-t border-border/30" />
      </div>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
              Available Tours
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {data.title} <span className="text-primary">Itineraries</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully crafted itineraries designed to showcase the best experiences.
              Each can be customized to match your preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {itinerary.days} Days
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2 uppercase">
                    {itinerary.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {itinerary.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {itinerary.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-end pt-4 border-t border-border/50">
                    <Button variant="brand" size="sm">
                      View Itinerary
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/itineraries">
              <Button variant="gold" size="lg" className="shadow-gold">
                View All Itineraries
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Let us craft your perfect {data.title.toLowerCase()} experience with our expert local guides.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/itineraries">
              <Button variant="gold" size="lg" className="shadow-gold">
                View Itineraries <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Send Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CategoryPage;
