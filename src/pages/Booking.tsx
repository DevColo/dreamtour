import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageHero } from '@/components/PageHero';
import { PersistentCTA } from '@/components/PersistentCTA';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Phone, Upload, CheckCircle } from 'lucide-react';

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Booking Submitted!',
      description: 'We will confirm your booking within 24 hours.',
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setFileName('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        title="Book Your Safari"
        subtitle="Complete your booking and start your African adventure"
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&q=80"
      />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Payment Instructions */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8 mb-10">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-secondary" />
                Payment Instructions
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-3">Bank Transfer</h3>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><strong>Bank:</strong> Dream Destinations Bank</p>
                    <p><strong>Account Name:</strong> Dream Destination Tours Ltd</p>
                    <p><strong>Account Number:</strong> 1234567890</p>
                    <p><strong>Swift Code:</strong> DRMDUGKA</p>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <h3 className="font-semibold text-foreground">Mobile Money</h3>
                  </div>
                  <div className="space-y-2 text-muted-foreground text-sm">
                    <p><strong>Phone Number:</strong> 0789999999</p>
                    <p><strong>Name:</strong> Dream Destination Tours</p>
                    <p className="text-xs mt-3 italic">Please include your booking reference in the payment description.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Complete Your Booking
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-medium">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="John Doe"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Destination */}
                  <div className="space-y-2">
                    <Label htmlFor="destination" className="text-foreground font-medium">
                      Destination <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="destination"
                      name="destination"
                      placeholder="e.g., Uganda Gorilla Trek"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Travel Dates */}
                  <div className="space-y-2">
                    <Label htmlFor="travelDates" className="text-foreground font-medium">
                      Travel Dates <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="travelDates"
                      name="travelDates"
                      placeholder="e.g., March 15-22, 2025"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Number of Travelers */}
                  <div className="space-y-2">
                    <Label htmlFor="travelers" className="text-foreground font-medium">
                      Number of Travelers <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="travelers"
                      name="travelers"
                      type="number"
                      min="1"
                      placeholder="2"
                      required
                      className="bg-background border-border rounded-xl h-12 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <Label htmlFor="specialRequests" className="text-foreground font-medium">
                    Special Requests
                  </Label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                    rows={4}
                    className="bg-background border-border rounded-xl resize-none focus:ring-2 focus:ring-secondary/20"
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="paymentProof" className="text-foreground font-medium">
                    Proof of Payment <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <input
                      id="paymentProof"
                      name="paymentProof"
                      type="file"
                      accept="image/*,.pdf"
                      required
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="bg-background border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-secondary/50 transition-colors">
                      {fileName ? (
                        <div className="flex items-center justify-center gap-2 text-secondary">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">{fileName}</span>
                        </div>
                      ) : (
                        <div className="text-muted-foreground">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-secondary/60" />
                          <p className="font-medium">Click to upload payment proof</p>
                          <p className="text-sm mt-1">PNG, JPG or PDF (max 10MB)</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Booking'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <PersistentCTA />
    </div>
  );
};

export default Booking;
