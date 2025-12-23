import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: 'Message Sent!',
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@dreamsdestinations.com',
      href: 'mailto:info@dreamsdestinations.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+250 780 714 871',
      href: 'tel:+250780714871',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+250 780 714 871',
      href: 'https://wa.me/250780714871',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Kigali, Rwanda',
      href: null,
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon-Fri: 8am - 6pm CAT',
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <PageHero
        tagline="Get In Touch"
        title="Contact Us"
        subtitle="Ready to start planning your dream African adventure? Our travel experts are here to help you create an unforgettable journey."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop"
      />

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                  Let's Plan Your <span className="text-secondary">Journey</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our team of travel experts is here to help you create the perfect itinerary. 
                  Whether you have questions or are ready to book, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div 
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg">
                <div className="mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                    Send an Inquiry
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground">
                        Full Name <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-background border-border/80 rounded-xl h-12 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground">
                        Email Address <span className="text-destructive">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-background border-border/80 rounded-xl h-12 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="bg-background border-border/80 rounded-xl h-12 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="destination" className="block text-sm font-medium text-foreground">
                        Interested Destination
                      </label>
                      <Input
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="e.g., Rwanda, Uganda"
                        className="bg-background border-border/80 rounded-xl h-12 focus:border-secondary focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Your Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your dream safari adventure..."
                      rows={5}
                      className="bg-background border-border/80 rounded-xl resize-none focus:border-secondary focus:ring-secondary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gold"
                    size="xl"
                    className="w-full rounded-xl h-14 text-base font-semibold shadow-gold hover:shadow-lg transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
