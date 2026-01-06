import { useState, useEffect, useCallback, useRef } from 'react';
import { Award, Shield, BadgeCheck, FileCheck, Building2, Handshake } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'Licensed Tour Operator',
    description: 'Officially registered with Rwanda Development Board',
  },
  {
    icon: BadgeCheck,
    title: 'IATA Certified',
    description: 'International Air Transport Association member',
  },
  {
    icon: FileCheck,
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for all travelers',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in tourism',
  },
];

const partnerHotels = [
  {
    name: 'Kigali Serena Hotels',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABSlBMVEX///8AAAD8/Pzy8vL39/f8//9cXFz29vbs7OzLy8vp6enPz89OTk6Ojo7w8PB+fn7c3NxGRkaqqqrCwsK5ubmbm5uhoaF3d3fh4eETExNXV1dpaWn1//++vr4uLi5vb289PT2xsbGHh4f8//ozMzOTk5MgICB8fHwnJycdHR1KSkrzYRQ4ODgUFBT/+vPvWwD/4tPwlGPpiVXpYAD68+n6++72vZ/yWAD/6+DsainnaBvpXxf+//T/XhrxYSj5ro3znHvok2nkm2/5vpv21r7939fucjXyhFbwrI/0XRz5yKPneD7zdkjwkmvwfk7wl1/vyK/pdzD95MvhZCXsx5zzaTnhgkfql3v5zsD7q5H3t574oXT13Lr45Nfii17/8d7sfVjqroH6poDywa31wJnceD/6lmTx08b4g0Px37jcbCj4p2n0ikX+UwpNxHToAAAQ2UlEQVR4nO2c+VviyNbHU0XCvkQ2EaIgcUFLA0LYUiy2IhhQG3Hs62g7Tmsvc+dO//+/vicJQZ2Zd1p7+rlO+tbnsSUhlUp9q06dcyqJzXEMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8H430QQOBlPt0xeuD3fHoxlGUsSxuY2/g4VAoJkDJ05gMZwfmcaBVmd1Lq7x6/29va6+z31e1IoyIBysL/Tp4SQig6/SHNwOFY5zH0XtoqNWXe9N+roRKNUb4NISgnVmztDRZCUl27eN0CQ5MblqAjiOp2jwc7O8fHxSRMkws/rniy9dPP+Plho9coVout01B2WVFXxKI1Gqfa6CUNKml3V6WYqwSQc90mHkPJYxS3Tk2LDlyrXh33SJPTqBsb4pVv5N8CypOw3qV4/rakKhliBeUVVQLUgtJSLK6pV9PJEwC/dzL8DlmtnHVIs3wigqzrp3u6UB4Pjw3EDc5Kk/nDe1upvJi/dyL8F7o3Ad/6rAYOmXOweUVKpkGKlor05PFBkCb990yb6XvWlW/nVCC3h+sNnqu/dCBj3XmuGu6kQYgRESk4PG0ILT0Ya7ey3ZOxIhwOGKL/TK/qxKgnKDyMQRvvl2+7lj7uDc0PlzkTglIt+m5z1BGc6G0GRelqbnpQkoXXYoZp28mNJlQXIvW96/zrXSP2oJ2P5kmr1V6ozFcpVXNa1zliWucuzit65msBshPjIgc1W3x53SOXDDWSrO5p+NnZo9iYfaIS89sjcwVml3qypkiIpjetSQ5UlST54Rdp0R+HkXpMW95yZvAlytwJDKEnKQCf0UhZwdbh70u+f/NQFwxVuQGKxK0vyXpGMei/d2K9DHVEygJlXg1S7q8hy45CSerFeJPSoBkn3Tbmu9yeC8LZJyL7hmByH/Ik2610Zqzs6hZCPb17VqU7OOpDCaZ3DloQ/QTa+D9//XCQ7iiMzm0uQ0pOEXr9d2Zex8q7T1kdXtfEQnAw5G7awskPJsYKr3SLtXzvR1eBdnYzAW17qpF+SuN5Zmxz1qhAl1VpHI4MbQRjTyvkEy+Nih/ac6E3lMiXlKq7utrUB+NHDtkaHWJBgbVF9B6uKMafcnGudHzjuoNghQ9mBChtlWBwpShWm4W0L35xo9dct3JrcHUhy+KTdvOXlmwHR38Ghc03fd2LippY/6zs8CK0Xu5CB9pv6e06Y9OtlFfN7FfMDvGkXUpwjTT90okI8POucjoXWXR8mHeZvafG3hjQZ1GlNkO867VGJw91KcUeVHKuQE4ZaW7uQhYv+59cTSfmxou8cCAeDunanSOPT+slbCde0+nFDPXKolWJO6I305vsWNx5V3pQE9d1Z8bgkXJeLTfAr41F91JPlu7PiVWlE6D52YMhXP3mEcbPeHGKQCEt5kEiLOw2hMYAkFST260fgdGoaHfRJs4YdGPLVn7pVeTgi/Zoij/uVMkjsUnrcEEonxijKYKC:\Users\Divine\Documents\My Web Sites\DDestinations\blue-dream-journeys\public\favico.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',
  },
  {
    name: 'Paramount Hotel Kigai',
    logo: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&h=100&fit=crop',
  },
  {
    name: 'Radisson Blu',
    logo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=100&fit=crop',
  },
  {
    name: 'Kigali Marriott',
    logo: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=200&h=100&fit=crop',
  },
  {
    name: 'Four Point By Sheraton Kigali',
    logo: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=200&h=100&fit=crop',
  },
  {
    name: 'One and Only',
    logo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&h=100&fit=crop',
  },
  {
    name: 'Mountain Gorilla View Lodge',
    logo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&h=100&fit=crop',
  },
   {
    name: 'Sabyinyo Lodge',
    logo: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=200&h=100&fit=crop',
  },
  {
    name: 'Akagera Game Lodge',
    logo: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=200&h=100&fit=crop',
  },
   {
    name: 'Ruzizi Tented Loddge',
    logo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=100&fit=crop',
  },
  {
    name: 'Akagera Rhino Lodge',
    logo: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=200&h=100&fit=crop',
  },
  {
    name: 'Nyungwe Top View Hotel',
    logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop',
  },
  {
    name: 'Khen Baraham Guest House',
    logo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&h=100&fit=crop',
  },
];

export const TrustCredibility = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Trust & Credibility
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Journey in <span className="text-primary">Safe Hands</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner with world-class hotels and hold official certifications 
            to ensure your African adventure is safe, comfortable, and unforgettable.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-muted rounded-xl p-6 text-center hover:shadow-brand transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{cert.title}</h3>
              <p className="text-muted-foreground text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

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
