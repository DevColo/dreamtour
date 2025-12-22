import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United States',
    rating: 5,
    text: "Our gorilla trekking experience in Uganda was absolutely life-changing! The Dream Destinations team handled every detail perfectly, from permits to guides. Seeing the mountain gorillas up close was a dream come true.",
    avatar: 'SM',
  },
  {
    name: 'James & Emily Chen',
    country: 'United Kingdom',
    rating: 5,
    text: "The Great Migration safari in Kenya exceeded all expectations. Our guide's knowledge was incredible, and the lodges were luxurious. This was our honeymoon, and Dream Destinations made it unforgettable!",
    avatar: 'JE',
  },
  {
    name: 'Michael Thompson',
    country: 'Australia',
    rating: 5,
    text: "I've been on many safaris, but the Tanzania expedition with Dream Destinations stands apart. The Serengeti at sunrise, the Ngorongoro Crater—every moment was magical. Truly a premium experience.",
    avatar: 'MT',
  },
  {
    name: 'Lisa Anderson',
    country: 'Canada',
    rating: 5,
    text: "From start to finish, our Rwanda trip was flawless. The team's attention to detail and genuine care made us feel like VIPs. The golden monkey trek was an unexpected highlight!",
    avatar: 'LA',
  },
  {
    name: 'Hans Mueller',
    country: 'Germany',
    rating: 5,
    text: "Exceptional service and unforgettable wildlife encounters. The Queen Elizabeth National Park boat safari was spectacular. Dream Destinations truly understands what makes an African adventure special.",
    avatar: 'HM',
  },
  {
    name: 'Priya Sharma',
    country: 'India',
    rating: 5,
    text: "Our family trip to the Masai Mara was perfectly organized. The children loved every moment, and the cultural visit to a Maasai village was educational and respectful. Highly recommend!",
    avatar: 'PS',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            What Our Travelers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1 bg-accent/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="text-primary-foreground font-semibold">5.0</span>
              <span className="text-primary-foreground/70 text-sm ml-1">Exceptional Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/30" />

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    {testimonials[currentIndex].country}
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
                  index === currentIndex ? 'w-8 bg-accent' : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
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
