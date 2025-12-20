export interface Destination {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  parks: { name: string; slug: string; description: string }[];
  bestTime: string;
  currency: string;
  language: string;
}

export const destinations: Destination[] = [
  {
    slug: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa',
    description: "Discover Uganda's breathtaking landscapes and wildlife on an unforgettable safari adventure. From the misty mountains home to endangered mountain gorillas to the vast savannas teeming with wildlife, Uganda offers an unparalleled African experience.",
    highlights: [
      'Mountain Gorilla Trekking',
      'Chimpanzee Tracking',
      'Big Five Safaris',
      'Nile River Adventures',
      'Cultural Encounters',
    ],
    parks: [
      { name: 'Bwindi Impenetrable Forest', slug: 'bwindi-impenetrable-forest', description: 'Home to half the world\'s mountain gorillas' },
      { name: 'Queen Elizabeth National Park', slug: 'queen-elizabeth', description: 'Famous for tree-climbing lions and diverse ecosystems' },
      { name: 'Murchison Falls', slug: 'murchison-falls', description: 'The world\'s most powerful waterfall' },
      { name: 'Kibale Forest', slug: 'kibale-forest', description: 'The primate capital of the world' },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Ugandan Shilling (UGX)',
    language: 'English, Swahili',
  },
  {
    slug: 'rwanda',
    name: 'Rwanda',
    tagline: 'Land of a Thousand Hills',
    description: 'Embark on a unique adventure and discover the magic of Rwanda\'s wildlife and culture. This remarkable country offers intimate gorilla encounters, stunning volcanic landscapes, and a rich cultural heritage that will leave you transformed.',
    highlights: [
      'Gorilla Trekking',
      'Golden Monkey Tracking',
      'Volcanoes National Park',
      'Lake Kivu Relaxation',
      'Kigali City Tours',
    ],
    parks: [
      { name: 'Volcanoes National Park', slug: 'volcanoes-national-park', description: 'Iconic home of mountain gorillas' },
      { name: 'Akagera National Park', slug: 'akagera-national-park', description: 'Rwanda\'s only Big Five destination' },
      { name: 'Nyungwe Forest', slug: 'nyungwe-forest', description: 'Ancient rainforest with chimpanzees and canopy walks' },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Rwandan Franc (RWF)',
    language: 'Kinyarwanda, English, French',
  },
  {
    slug: 'kenya',
    name: 'Kenya',
    tagline: 'Magical Kenya',
    description: 'Best of Kenya - See hundreds of places you can visit in East Africa\'s most popular tourist destination. From the iconic Masai Mara to pristine beaches, Kenya offers the ultimate African safari experience combined with rich cultural encounters.',
    highlights: [
      'Great Migration',
      'Big Five Safaris',
      'Maasai Cultural Experiences',
      'Beach Holidays',
      'Hot Air Balloon Safaris',
    ],
    parks: [
      { name: 'Masai Mara', slug: 'masai-mara', description: 'World-famous for the Great Migration' },
      { name: 'Amboseli National Park', slug: 'amboseli', description: 'Stunning views of Mount Kilimanjaro' },
      { name: 'Tsavo National Park', slug: 'tsavo', description: 'One of the largest wildlife sanctuaries' },
      { name: 'Lake Nakuru', slug: 'lake-nakuru', description: 'Famous for flamingos and rhinos' },
    ],
    bestTime: 'July to October, January to February',
    currency: 'Kenyan Shilling (KES)',
    language: 'English, Swahili',
  },
  {
    slug: 'tanzania',
    name: 'Tanzania',
    tagline: 'The Soul of Africa',
    description: 'Experience Tanzania with our tailor-made private guided safaris. Home to the Serengeti, Mount Kilimanjaro, and the spice island of Zanzibar, Tanzania offers an extraordinary blend of wildlife, adventure, and relaxation.',
    highlights: [
      'Serengeti Migration',
      'Ngorongoro Crater',
      'Mount Kilimanjaro',
      'Zanzibar Beaches',
      'Chimpanzee Trekking',
    ],
    parks: [
      { name: 'Serengeti National Park', slug: 'serengeti', description: 'Endless plains and the Great Migration' },
      { name: 'Ngorongoro Crater', slug: 'ngorongoro-crater', description: 'World\'s largest intact volcanic caldera' },
      { name: 'Tarangire National Park', slug: 'tarangire', description: 'Famous for elephant herds and baobabs' },
      { name: 'Lake Manyara', slug: 'lake-manyara', description: 'Tree-climbing lions and flamingos' },
    ],
    bestTime: 'June to October, December to March',
    currency: 'Tanzanian Shilling (TZS)',
    language: 'Swahili, English',
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};
