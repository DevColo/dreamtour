import { CategoryData } from '@/pages/services/CategoryPage';

export const culturalToursData: CategoryData = {
  slug: 'cultural-tours',
  title: 'Cultural Tours',
  bannerImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920&h=1080&fit=crop',
  overviewTitle: 'Authentic Cultural Experiences',
  overviewDescription: 'Immerse yourself in local traditions, village visits, and authentic African cultural experiences. Discover Rwanda\'s rich heritage and vibrant communities.',
  experienceTitle: 'Our Cultural Tour Experience',
  experienceDescription: 'Connect deeply with Rwanda\'s people and heritage through our thoughtfully curated cultural tours. Visit the Kigali Genocide Memorial to understand Rwanda\'s journey of reconciliation and transformation. Explore traditional villages, meet local artisans, and experience vibrant cultural performances at Gorilla Guardian Village. Discover the legacy of Rwanda\'s ancient kingdom at the Nyanza King\'s Palace Museum and witness the inspiring Nyange Students\' story at Ndaba Rock. Our cultural tours go beyond sightseeing to create meaningful connections with communities, supporting local economies while offering authentic insights into Rwandan life, resilience, and creativity. Each experience is designed with respect, sensitivity, and a commitment to responsible tourism.',
  itineraries: [
    {
      id: '1-day-lake-kivu',
      title: '1 DAY LAKE KIVU KARONGI EXPERIENCE',
      days: 1,
      description: 'Discover Lake Kivu\'s tranquil beauty combined with cultural stories. Visit Ndaba Rock & Waterfall and hear the inspiring Nyange Students story.',
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
      highlights: ['Ndaba Rock visit', 'Nyange Students story', 'Lake Kivu relaxation'],
    },
    {
      id: '3-day-lake-kivu',
      title: '3 DAYS LAKE KIVU KARONGI TOUR',
      days: 3,
      description: 'A peaceful lakeside escape blending landscapes with meaningful cultural history. Boat safari, island exploration, and local craft shopping.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      highlights: ['Lake Kivu boat safari', 'Cultural stories', 'Local artisan crafts'],
    },
    {
      id: '1-day-nyungwe',
      title: '1 DAY NYUNGWE PARK EXPERIENCE',
      days: 1,
      description: 'Visit Nyanza King\'s Palace Museum and experience Nyungwe\'s Canopy Walk. A perfect blend of culture, nature, and adventure.',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&h=600&fit=crop',
      highlights: ['King\'s Palace Museum', 'Nyungwe Canopy Walk', 'Cultural insights'],
    },
    {
      id: '3-day-gorilla-cultural',
      title: '3 DAYS GORILLA TREKKING SAFARI',
      days: 3,
      description: 'Combine gorilla trekking with cultural immersion at Gorilla Guardian Village and visits to the Kigali Genocide Memorial.',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
      highlights: ['Genocide Memorial', 'Gorilla Guardian Village', 'Local cuisine tasting'],
    },
  ],
};
