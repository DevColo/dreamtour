import { Link } from 'react-router-dom';
import { Calendar, Mail, FileText, MessageCircle } from 'lucide-react';

export const PersistentCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Chat */}
      <a
        href="https://wa.me/250780714871"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
      </a>

      {/* Get a Quote */}
      <Link
        to="/contact?type=quote"
        className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Get a Quote"
      >
        <FileText className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Get Quote</span>
      </Link>

      {/* Contact Us */}
      <Link
        to="/contact"
        className="flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Contact Us"
      >
        <Mail className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Contact</span>
      </Link>

      {/* Book Now */}
      <Link
        to="/booking"
        className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group"
        aria-label="Book Now"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-sm font-medium hidden sm:inline">Book Now</span>
      </Link>
    </div>
  );
};