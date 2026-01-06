import { CategoryData } from '@/pages/services/CategoryPage';

export const primateTrackingData: CategoryData = {
  slug: 'primate-tracking',
  title: 'Primate Tracking',
  bannerImage: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1920&h=1080&fit=crop',
  overviewTitle: 'Primate Tracking in Rwanda & Uganda',
  overviewDescription: 'Get up close with mountain gorillas and chimpanzees in their natural rainforest habitats. Experience unforgettable encounters with Africa\'s most iconic primates.',
  experienceTitle: 'Our Primate Tracking Experience',
  experienceDescription: 'Discover the magic of primate encounters in Rwanda and Uganda\'s pristine rainforests. Trek through misty mountain slopes to meet endangered mountain gorillas in Volcanoes National Park, or venture into Nyungwe\'s ancient forests to observe chimpanzees and golden monkeys. Our expert guides ensure safe, respectful wildlife encounters while sharing insights into conservation efforts pioneered by Dr. Dian Fossey. We handle all permits, provide experienced trackers, and ensure comfortable transport and accommodations. Whether you\'re seeking the thrill of gorilla trekking or the playful energy of chimpanzees, we create meaningful primate experiences that support conservation and local communities across the region.',
  itineraries: [
    {
      id: '1-day-gorilla',
      title: '1 DAY GORILLA TREKKING FROM KIGALI',
      days: 1,
      description: 'Rwanda\'s most iconic wildlife experience in a single day. Early departure to Volcanoes National Park for an unforgettable encounter with mountain gorillas.',
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
      highlights: ['Mountain gorilla trekking', 'Volcanoes National Park', 'Traditional Rwandan lunch'],
    },
    {
      id: '3-day-gorilla',
      title: '3 DAYS GORILLA TREKKING SAFARI',
      days: 3,
      description: 'Explore the Virunga Mountains with gorilla trekking, cultural experiences at Gorilla Guardian Village, and a visit to the Dian Fossey Campus.',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
      highlights: ['Gorilla trekking', 'Cultural village visit', 'Dian Fossey Campus'],
    },
    {
      id: '2-day-chimp',
      title: '2 DAYS CHIMPANZEE TREKKING SAFARI',
      days: 2,
      description: 'Trek through Nyungwe National Park, one of Africa\'s oldest rainforests, to encounter thriving chimpanzee communities in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop',
      highlights: ['Chimpanzee trekking', 'Ancient rainforest', 'Optional Canopy Walk'],
    },
    {
      id: '7-day-classic',
      title: '7 DAYS RWANDA CLASSIC ADVENTURE',
      days: 7,
      description: 'Complete primate experience combining chimpanzee and gorilla trekking with golden monkey encounters and the Nyungwe Canopy Walk.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      highlights: ['Gorillas & chimpanzees', 'Golden monkeys', 'Canopy Walk'],
    },
  ],
};
