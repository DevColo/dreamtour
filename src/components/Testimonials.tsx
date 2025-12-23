import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    country: 'United States',
    rating: 5,
    text: "Our gorilla trekking experience in Uganda was absolutely life-changing! The Dream Destinations team handled every detail perfectly.",
    avatar: 'SM',
  },
  {
    name: 'James & Emily Chen',
    country: 'United Kingdom',
    rating: 5,
    text: "The Great Migration safari in Kenya exceeded all expectations. Our guide's knowledge was incredible!",
    avatar: 'JE',
  },
  {
    name: 'Michael Thompson',
    country: 'Australia',
    rating: 5,
    text: "I've been on many safaris, but the Tanzania expedition with Dream Destinations stands apart. Truly premium!",
    avatar: 'MT',
  },
  {
    name: 'Lisa Anderson',
    country: 'Canada',
    rating: 5,
    text: "From start to finish, our Rwanda trip was flawless. The team's attention to detail made us feel like VIPs.",
    avatar: 'LA',
  },
  {
    name: 'Hans Mueller',
    country: 'Germany',
    rating: 5,
    text: "Exceptional service and unforgettable wildlife encounters. Dream Destinations truly understands African adventures.",
    avatar: 'HM',
  },
  {
    name: 'Priya Sharma',
    country: 'India',
    rating: 5,
    text: "Our family trip to the Masai Mara was perfectly organized. The children loved every moment!",
    avatar: 'PS',
  },
  {
    name: 'Sophie Laurent',
    country: 'France',
    rating: 5,
    text: "An unforgettable journey through the Serengeti. Professional service and breathtaking experiences!",
    avatar: 'SL',
  },
  {
    name: 'David Nakamura',
    country: 'Japan',
    rating: 5,
    text: "The attention to detail was remarkable. Every aspect of our safari was carefully planned and executed.",
    avatar: 'DN',
  },
];

export const Testimonials = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      setScrollPosition((prev) => {
        const newPos = prev + 1;
        if (newPos >= maxScroll) {
          return 0;
        }
        return newPos;
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [scroll]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  return (
    <section id="testimonials" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Testimonials Carousel */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Double the testimonials for seamless loop */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/40 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-primary-foreground text-sm leading-relaxed mb-6 italic line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-primary-foreground font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-primary-foreground/60 text-xs">
                    {testimonial.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};