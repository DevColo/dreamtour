import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-ocean py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-primary-foreground/20 backdrop-blur-sm'
            }`}
          >
            <Plane
              className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'
              }`}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading text-xl font-bold leading-tight transition-colors ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}
            >
              Dreams Destinations
            </span>
            <span
              className={`text-xs tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/80'
              }`}
            >
              Tours & Travel
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:opacity-100 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? 'text-foreground/80 hover:text-primary after:bg-primary'
                  : 'text-primary-foreground/80 hover:text-primary-foreground after:bg-primary-foreground'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button variant={isScrolled ? 'gold' : 'heroFilled'} size="default">
            Send Inquiry
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-primary text-base font-medium tracking-wide uppercase transition-colors py-2 border-b border-border/50"
            >
              {item.label}
            </a>
          ))}
          <Button variant="gold" size="lg" className="mt-4">
            Send Inquiry
          </Button>
        </nav>
      </div>
    </header>
  );
};
