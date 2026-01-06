import { CategoryData } from '@/pages/services/CategoryPage';

export const wildlifeSafarisData: CategoryData = {
  slug: 'wildlife-safaris',
  title: 'Wildlife Safaris',
  bannerImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
  overviewTitle: 'EAC Wildlife Safaris',
  overviewDescription: 'Explore EAC wildlife safaris featuring Akagera National Park, home of the Big Five, plus top parks in Rwanda and East Africa. Expert-guided, safe, and personalized safari experiences.',
  experienceTitle: 'Our Wildlife Safari Experience',
  experienceDescription: 'Experience the best of East Africa\'s wildlife with expertly guided safaris across Rwanda and the region. Our journeys highlight Akagera National Park, Rwanda\'s only savannah park and proud home of the Big Five, offering rewarding game drives, scenic lakes, and rich birdlife. Beyond Akagera, we organize unforgettable wildlife safaris to other iconic East African parks, including Queen Elizabeth National Park, Murchison Falls National Park, and Serengeti-adjacent ecosystems, carefully tailored for curious travelers and first-time safari guests. At Dream Destinations Tours and Travel, we provide professional guiding, comfortable safari vehicles, smooth park coordination, and personalized itineraries, ensuring every guest enjoys safe, meaningful, and well-paced wildlife encounters across the EAC.',
  itineraries: [
    {
      id: '1-day-akagera',
      title: '1 DAY AKAGERA BIG FIVE SAFARI',
      days: 1,
      description: 'Experience Rwanda\'s Big Five in a single carefully planned day. Akagera is Rwanda\'s only savannah reserve, famous for its wide plains and successful wildlife restoration.',
      image: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=800&h=600&fit=crop',
      highlights: ['Big Five wildlife experience', 'Scenic countryside drive', 'Picnic lunch in park'],
    },
    {
      id: '2-days-akagera',
      title: '2 DAYS AKAGERA NATIONAL PARK SAFARI',
      days: 2,
      description: 'One of Rwanda\'s most rewarding short wildlife adventures. Experience the Big Five with sunset boat safari on Lake Ihema and full-day game drives.',
      image: 'https://images.unsplash.com/photo-1550358864-518f202c02ba?w=800&h=600&fit=crop',
      highlights: ['Big Five viewing', 'Sunset boat safari', 'Full-day game drive'],
    },
    {
      id: '7-day-rwanda-classic',
      title: '7 DAYS RWANDA CLASSIC ADVENTURE',
      days: 7,
      description: 'Our top recommended safari combining Rwanda\'s stunning landscapes, extraordinary wildlife, and rich cultural heritage from Nyungwe to Volcanoes National Park.',
      image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
      highlights: ['Chimpanzee trekking', 'Gorilla trekking', 'Lake Kivu relaxation'],
    },
  ],
};
