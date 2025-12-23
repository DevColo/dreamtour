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
  const [nextSlideIndex, setNextSlideIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setNextSlideIndex((currentSlide + 1) % heroImages.length);
    
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 700);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Slide Animation */}
      <div className="absolute inset-0">
        {/* Next image (slides in from right) */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out ${
            isTransitioning ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backgroundImage: `url(${heroImages[nextSlideIndex].url})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        {/* Current image (slides out to left) */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-in-out ${
            isTransitioning ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ backgroundImage: `url(${heroImages[currentSlide].url})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
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
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-up opacity-0 delay-300 font-light leading-relaxed">
            Experience the magic of Africa with our expertly crafted safari adventures. 
            From gorilla trekking to the great migration, we create unforgettable journeys.
          </p>
        </div>
      </div>
    </section>
  );
};
