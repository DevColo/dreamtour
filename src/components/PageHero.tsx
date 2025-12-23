import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  backgroundImage: string;
  children?: ReactNode;
}

export const PageHero = ({ title, subtitle, tagline, backgroundImage, children }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        {tagline && (
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4 font-medium animate-fade-up">
            {tagline}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto animate-fade-up delay-200 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};
