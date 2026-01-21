import { useState, useEffect, useCallback, useRef } from 'react';
import { Handshake, X, Download } from 'lucide-react';
import rdbLicense from '@/assets/Dream TOL.jpg';
import rttaMembership from '@/assets/DDTT RTTA membership (1).jpg';
import serenaLogo from '@/assets/serena.png';
import radissonLogo from '@/assets/radisson.png';
import marriotLogo from '@/assets/marriot.png';
import FourPointsLogo from '@/assets/4 points.png';
import oneAndonlyLogo from '@/assets/one&only.png';
import akageraGLLogo from '@/assets/akageraGL.png';
import kenLogo from '@/assets/ken.jpg';

const certificates = [
  {
    image: rdbLicense,
    title: 'RDB Tourism Operating License',
  },
  {
    image: rttaMembership,
    title: 'RTTA Membership Certificate',
  },
];

const partnerHotels = [
  {
    name: 'Kigali Serena Hotels',
   logo: serenaLogo,
},
  
  {
    name: 'Radisson Blu',
    logo: radissonLogo,
  },
  {
    name: 'Kigali Marriott',
    logo: marriotLogo,
  },
  {
    name: 'Four Point By Sheraton Kigali',
    logo: FourPointsLogo,
  },
  {
    name: 'One and Only',
    logo: oneAndonlyLogo,
  },
  
  
  {
    name: 'Akagera Game Lodge',
    logo: akageraGLLogo,
  },
   
 
  {
    name: 'Khen Baraham Guest House',
    logo: kenLogo,
  },
];

export const TrustCredibility = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<{ image: string; title: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(() => {
    if (containerRef.current && !isPaused) {
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
  }, [isPaused]);

  useEffect(() => {
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [scroll]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleDownload = (image: string, title: string) => {
    const link = document.createElement('a');
    link.href = image;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Trust & Credibility
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Journey in <span className="text-primary">Safe Hands with Dream Destination Tours and Travel</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Travel with confidence with Dream Destination Tours and Travel, fully licensed and partnered with world-class accommodations, offering safe, seamless, and unforgettable safari experiences across Rwanda, Uganda, Kenya, and Tanzania.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-20">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCertificate(cert)}
              className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/20 flex items-center justify-center p-4 relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 text-center bg-card">
                <h3 className="font-heading font-medium text-foreground text-sm">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        {selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {selectedCertificate.title}
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownload(selectedCertificate.image, selectedCertificate.title)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
              <div className="p-4 max-h-[80vh] overflow-auto">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}

        {/* Partner Hotels Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-accent" />
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              Our Trusted Partners
            </h3>
          </div>
          
          <div 
            ref={containerRef}
            className="flex gap-6 overflow-x-hidden pb-4"
            style={{ scrollBehavior: 'auto' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...partnerHotels, ...partnerHotels].map((hotel, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-muted/50 to-muted/30 px-3 py-1.5 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="bg-background p-6 flex items-center justify-center min-h-[140px]">
                  <img
                    src={hotel.logo}
                    alt={hotel.name}
                    className="w-full h-20 object-cover rounded group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/70 mt-8 text-sm">
            We work with premium accommodations across East Africa to ensure your comfort
          </p>
        </div>
      </div>
    </section>
  );
};
