import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'About', 
    href: '#',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Meet the Team', href: '/about/meet-the-team' },
    ]
  },
  { 
    label: 'Destinations', 
    href: '#',
    children: [
      { label: 'Uganda', href: '/destinations/uganda' },
      { label: 'Rwanda', href: '/destinations/rwanda' },
      { label: 'Kenya', href: '/destinations/kenya' },
      { label: 'Tanzania', href: '/destinations/tanzania' },
    ]
  },
  { label: 'Itineraries', href: '/itineraries' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-card/98 backdrop-blur-md shadow-brand py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Dream Destination Tours & Travel" 
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-all duration-300 ${
                    isScrolled ? 'text-foreground hover:text-secondary' : 'text-primary-foreground hover:text-accent'
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                    isScrolled ? 'text-foreground hover:text-secondary' : 'text-primary-foreground hover:text-accent'
                  }`}
                >
                  {item.label}
                </Link>
              )}
              
              {item.children && (
                <div
                  className={`absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-lg overflow-hidden transition-all duration-200 z-50 ${
                    openDropdown === item.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button variant={isScrolled ? 'gold' : 'heroFilled'} size="default">
              Send Inquiry
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-foreground' : 'text-primary-foreground'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden z-50 ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full text-foreground text-base font-medium py-3 border-b border-border/50"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all ${openDropdown === item.label ? 'max-h-48' : 'max-h-0'}`}>
                    {item.children.map((child) => (
                      <Link key={child.label} to={child.href} className="block pl-4 py-2 text-muted-foreground hover:text-secondary">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={item.href} className="text-foreground text-base font-medium py-3 border-b border-border/50 block">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="mt-4">
            <Button variant="gold" size="lg" className="w-full">Send Inquiry</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
