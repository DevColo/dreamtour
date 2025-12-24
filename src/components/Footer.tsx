import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const footerLinks = {
  destinations: [
    { label: 'Uganda', href: '/destinations/uganda' },
    { label: 'Rwanda', href: '/destinations/rwanda' },
    { label: 'Kenya', href: '/destinations/kenya' },
    { label: 'Tanzania', href: '/destinations/tanzania' },
  ],
  company: [
    { label: 'Our Story', href: '/about/our-story' },
    { label: 'Meet the Team', href: '/about/meet-the-team' },
    { label: 'Itineraries', href: '/itineraries' },
    { label: 'Blog', href: '/blog' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'X' },
  { icon: MessageCircle, href: 'https://wa.me/250780714871', label: 'WhatsApp' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Dream Destination Tours & Travel" 
                className="h-20 w-auto object-contain bg-white rounded-lg p-2"
              />
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-sm">
              Creating unforgettable African safari experiences since 2009. We specialize in crafting 
              bespoke journeys to Uganda, Rwanda, Kenya, and Tanzania.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@dreamdestination.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@dreamdestination.com</span>
              </a>
              <a
                href="tel:+256700000000"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+256 700 000 000</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@dreamdestination.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@dreamdestination.com</span>
              </a>
              <a
                href="tel:+256700000000"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>+256 700 000 000</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dream Destination Tours & Travel. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
