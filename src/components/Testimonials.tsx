import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    rating: 5,
    text: "An absolutely incredible experience! The team at Dreams Destinations planned every detail perfectly. From the luxurious accommodations to the knowledgeable guides, everything exceeded our expectations. We can't wait to book our next adventure with them!",
    avatar: 'SM',
  },
  {
    name: 'James & Emily Chen',
    location: 'London, UK',
    rating: 5,
    text: "Our honeymoon in the Maldives was nothing short of magical. The personalized service and attention to detail made us feel like royalty. The photography service was a wonderful bonus - we now have professional photos of our special trip!",
    avatar: 'JE',
  },
  {
    name: 'Michael Thompson',
    location: 'Sydney, Australia',
    rating: 5,
    text: "I've traveled with many tour companies, but Dreams Destinations stands out for their genuine care and expertise. The Greek island-hopping tour was perfectly organized, and our guide's knowledge of history and culture was outstanding.",
    avatar: 'MT',
  },
  {
    name: 'Lisa Anderson',
    location: 'Toronto, Canada',
    rating: 5,
    text: "The Bali retreat was life-changing! From the serene temple visits to the breathtaking rice terraces, every moment was carefully curated. The team's flexibility to accommodate our requests made the trip truly personalized.",
    avatar: 'LA',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-ocean relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1 bg-gold/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-gold fill-gold" />
              <span className="text-primary-foreground font-semibold">5.0</span>
              <span className="text-primary-foreground/70 text-sm ml-1">Based on 200+ reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-gold/30" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute right-6 bottom-6 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-gold' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
