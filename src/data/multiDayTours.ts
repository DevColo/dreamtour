import { CategoryData } from '@/pages/services/CategoryPage';

export const multiDayToursData: CategoryData = {
  slug: 'multi-day-tours',
  title: 'Multi-Day Tours',
  bannerImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
  overviewTitle: 'Extended Safari Adventures',
  overviewDescription: 'Comprehensive safari packages from 3 to 21 days, covering multiple destinations and experiences. Explore Rwanda and East Africa at your own pace.',
  experienceTitle: 'Our Multi-Day Tour Experience',
  experienceDescription: 'Embark on comprehensive East African adventures that showcase the region\'s full diversity over extended journeys. Our multi-day tours range from 3 to 21 days, combining Rwanda\'s highlights with neighboring countries\' treasures. Trek with gorillas and chimpanzees, explore savannah wildlife in Akagera, relax at Lake Kivu, and discover cultural landmarks across the EAC. These carefully paced itineraries allow for deeper immersion, meaningful wildlife encounters, and authentic cultural connections. We handle all logistics including accommodations, meals, permits, and expert guiding, ensuring seamless travel across borders and ecosystems. Perfect for travelers who want the complete East African experience with time to truly connect with each destination.',
  itineraries: [
    {
      id: '2-day-akagera',
      title: '2 DAYS AKAGERA BIG FIVE SAFARI',
      days: 2,
      description: 'Short wildlife adventure featuring sunset boat safari, full-day game drives, and Big Five viewing in Rwanda\'s only savannah park.',
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&h=600&fit=crop',
      highlights: ['Big Five viewing', 'Boat safari', 'Full-day game drive'],
    },
    {
      id: '2-day-chimp',
      title: '2 DAYS CHIMPANZEE TREKKING',
      days: 2,
      description: 'Overnight primate adventure in Nyungwe National Park with chimpanzee trekking and optional Canopy Walk experience.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop',
      highlights: ['Chimpanzee trekking', 'Rainforest immersion', 'Tea plantations'],
    },
    {
      id: '3-day-gorilla',
      title: '3 DAYS GORILLA TREKKING SAFARI',
      days: 3,
      description: 'Ultimate gorilla experience with Kigali city tour, Genocide Memorial visit, cultural village, and Dian Fossey Campus.',
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
      highlights: ['Gorilla trekking', 'Cultural experiences', 'Conservation insights'],
    },
    {
      id: '3-day-lake-kivu',
      title: '3 DAYS LAKE KIVU KARONGI TOUR',
      days: 3,
      description: 'Extended lakeside relaxation with boat safaris, island exploration, Ndaba Rock visit, and local cultural experiences.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      highlights: ['Island boat safari', 'Ndaba Rock visit', 'Lakeside relaxation'],
    },
    {
      id: '7-day-classic',
      title: '7 DAYS RWANDA CLASSIC ADVENTURE',
      days: 7,
      description: 'Our top recommended safari combining Nyungwe, Lake Kivu, and Volcanoes with chimpanzees, gorillas, golden monkeys, and canopy walks.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      highlights: ['Complete Rwanda experience', 'All major attractions', 'Expert guiding'],
    },
  ],
};
