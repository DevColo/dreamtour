import { FileText, Syringe, Briefcase, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const requirements = [
  {
    icon: FileText,
    title: 'Visa Requirements',
    items: [
      'Most nationalities can obtain visa on arrival or e-visa',
      'East Africa Tourist Visa covers Kenya, Rwanda & Uganda',
      'Valid passport with 6+ months validity required',
      'Check your country\'s specific requirements before travel',
    ],
    highlight: 'E-Visa available for most countries',
  },
  {
    icon: Syringe,
    title: 'Health & Vaccinations',
    items: [
      'Yellow fever vaccination certificate required',
      'Malaria prophylaxis strongly recommended',
      'COVID-19 requirements may apply (check current rules)',
      'Travel health insurance is mandatory',
    ],
    highlight: 'Consult your doctor 4-6 weeks before travel',
  },
  {
    icon: Briefcase,
    title: 'What to Pack',
    items: [
      'Neutral-colored clothing for safaris',
      'Sturdy hiking boots for gorilla trekking',
      'Sunscreen, hat, and insect repellent',
      'Binoculars and camera with zoom lens',
    ],
    highlight: 'Packing list provided upon booking',
  },
];

const tips = [
  'Book gorilla permits 3-6 months in advance',
  'Best wildlife viewing: June-October (dry season)',
  'USD cash widely accepted; cards in major cities',
  'Respect local customs and wildlife guidelines',
];

export const TravelRequirements = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Before You Travel
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Essential <span className="text-primary">Travel Information</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know before embarking on your African adventure. 
            We'll guide you through every step of your preparation.
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {requirements.map((req) => (
            <div
              key={req.title}
              className="bg-muted rounded-2xl p-8 hover:shadow-brand transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <req.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {req.title}
              </h3>
              
              <ul className="space-y-3 mb-6">
                {req.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                <Info className="w-4 h-4 text-accent shrink-0" />
                <p className="text-sm text-foreground font-medium">{req.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips Banner */}
        <div className="bg-secondary rounded-2xl p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-secondary-foreground" />
            <h3 className="text-xl font-heading font-bold text-secondary-foreground">
              Quick Travel Tips
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-secondary-foreground/10 rounded-lg p-4"
              >
                <span className="w-8 h-8 rounded-full bg-secondary-foreground/20 flex items-center justify-center text-secondary-foreground font-bold text-sm shrink-0">
                  {index + 1}
                </span>
                <p className="text-secondary-foreground/90 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
