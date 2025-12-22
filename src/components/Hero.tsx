import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    alt: 'African Safari Lions',
  },
  {
    url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
    alt: 'Gorilla in Uganda',
  },
  {
    url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=1080&fit=crop',
    alt: 'Serengeti Landscape',
  },
  {
    url: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop',
    alt: 'African Elephants',
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image.url})` }}
          aria-hidden={index !== currentSlide}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      ))}

      {/* Carousel Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-primary-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/30 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-accent' : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <p className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-up opacity-0 delay-100 font-medium">
            Premium African Safaris
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 delay-200">
            Your African
            <span className="block text-accent">Adventure Awaits</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-300 font-light leading-relaxed">
            Experience the magic of Africa with our expertly crafted safari adventures. 
            From gorilla trekking to the great migration, we create unforgettable journeys.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-400">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/itineraries">Explore Destinations</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-20">
        <a
          href="#destinations"
          className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
