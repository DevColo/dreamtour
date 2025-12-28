export interface Tour {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  price: string;
  description: string;
  bannerImage: string;
  galleryImages: string[];
  highlights: string[];
  included: string[];
  itinerary: { day: number; title: string; description: string; image?: string }[];
}

export const tours: Tour[] = [
  {
    slug: 'gorilla-trekking-uganda',
    title: '5-Day Gorilla Trekking Adventure',
    destination: 'Uganda',
    duration: '5 Days / 4 Nights',
    groupSize: '2-8 People',
    difficulty: 'Moderate',
    price: 'From $3,500',
    description: 'Experience the thrill of coming face-to-face with endangered mountain gorillas in the misty forests of Bwindi. This intimate journey combines gorilla trekking with cultural encounters.',
    bannerImage: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop',
    ],
    highlights: ['2 Gorilla Trekking Permits', 'Bwindi Impenetrable Forest', 'Batwa Cultural Experience', 'Lake Bunyonyi Visit'],
    included: ['Airport Transfers', 'All Accommodations', 'All Meals', 'Gorilla Permits', 'Expert Guide', '4x4 Safari Vehicle'],
    itinerary: [
      { day: 1, title: 'Arrival in Entebbe', description: 'Meet and greet at Entebbe Airport, transfer to your hotel for overnight stay.', image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' },
      { day: 2, title: 'Transfer to Bwindi', description: 'Scenic drive to Bwindi Impenetrable Forest with stops at the Equator crossing.', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&h=400&fit=crop' },
      { day: 3, title: 'First Gorilla Trek', description: 'Early morning briefing followed by your first gorilla trekking experience.', image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' },
      { day: 4, title: 'Second Gorilla Trek', description: 'Another magical encounter with mountain gorillas, afternoon Batwa community visit.', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' },
      { day: 5, title: 'Departure', description: 'Transfer back to Entebbe for your departure flight.' },
    ],
  },
  {
    slug: 'kenya-safari-classic',
    title: '7-Day Classic Kenya Safari',
    destination: 'Kenya',
    duration: '7 Days / 6 Nights',
    groupSize: '2-6 People',
    difficulty: 'Easy',
    price: 'From $4,200',
    description: 'Experience the best of Kenya on this classic safari through Masai Mara, Lake Nakuru, and Amboseli. Witness the Big Five and iconic African landscapes.',
    bannerImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
    ],
    highlights: ['Masai Mara Game Reserve', 'Lake Nakuru Rhinos', 'Amboseli Elephants', 'Maasai Village Visit', 'Hot Air Balloon Option'],
    included: ['Airport Transfers', 'All Accommodations', 'All Meals on Safari', 'Park Fees', 'Expert Guide', 'Game Drives'],
    itinerary: [
      { day: 1, title: 'Nairobi Arrival', description: 'Airport pickup and overnight at Nairobi hotel with welcome dinner.', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop' },
      { day: 2, title: 'Lake Nakuru', description: 'Drive to Lake Nakuru National Park for rhino tracking and flamingo viewing.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop' },
      { day: 3, title: 'Masai Mara', description: 'Continue to the world-famous Masai Mara with afternoon game drive.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop' },
      { day: 4, title: 'Full Day Masai Mara', description: 'Full day exploring the Mara with optional balloon safari at dawn.', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop' },
      { day: 5, title: 'Masai Mara', description: 'Morning game drive and Maasai village cultural visit.', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop' },
      { day: 6, title: 'Amboseli', description: 'Drive to Amboseli National Park with views of Mount Kilimanjaro.', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop' },
      { day: 7, title: 'Departure', description: 'Morning game drive, then transfer to Nairobi for departure.' },
    ],
  },
  {
    slug: 'tanzania-serengeti-migration',
    title: '8-Day Serengeti Migration Safari',
    destination: 'Tanzania',
    duration: '8 Days / 7 Nights',
    groupSize: '2-6 People',
    difficulty: 'Easy',
    price: 'From $5,800',
    description: 'Witness the greatest wildlife spectacle on Earth - the Great Migration. This journey takes you through the Serengeti, Ngorongoro Crater, and beyond.',
    bannerImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop',
    ],
    highlights: ['Great Migration', 'Ngorongoro Crater', 'Serengeti National Park', 'Tarangire Elephants', 'Maasai Culture'],
    included: ['Airport Transfers', 'Luxury Lodges & Camps', 'All Meals', 'Park Fees', 'Expert Guide', 'Flying Doctors Coverage'],
    itinerary: [
      { day: 1, title: 'Arusha Arrival', description: 'Welcome to Tanzania! Transfer to your lodge in Arusha.', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop' },
      { day: 2, title: 'Tarangire', description: 'Drive to Tarangire for elephant herds and baobab forests.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop' },
      { day: 3, title: 'Serengeti', description: 'Enter the endless plains of the Serengeti with game viewing.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop' },
      { day: 4, title: 'Serengeti', description: 'Full day following the migration herds with expert guide.', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop' },
      { day: 5, title: 'Serengeti', description: 'More Serengeti exploration, optional balloon safari available.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop' },
      { day: 6, title: 'Ngorongoro', description: 'Drive to Ngorongoro with stops for game viewing.', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop' },
      { day: 7, title: 'Ngorongoro Crater', description: 'Descend into the crater for Big Five game viewing.', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' },
      { day: 8, title: 'Departure', description: 'Transfer to Arusha for departure or Zanzibar extension.' },
    ],
  },
  {
    slug: 'rwanda-gorilla-golden-monkey',
    title: '4-Day Rwanda Primate Safari',
    destination: 'Rwanda',
    duration: '4 Days / 3 Nights',
    groupSize: '2-6 People',
    difficulty: 'Moderate',
    price: 'From $4,500',
    description: 'A focused primate experience in Rwanda featuring both mountain gorillas and the playful golden monkeys in the Virunga volcanoes.',
    bannerImage: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&h=600&fit=crop',
    ],
    highlights: ['Gorilla Trekking', 'Golden Monkey Tracking', 'Volcanoes National Park', 'Kigali City Tour'],
    included: ['Airport Transfers', 'Luxury Accommodations', 'All Meals', 'Gorilla Permit', 'Golden Monkey Permit', 'Expert Guide'],
    itinerary: [
      { day: 1, title: 'Kigali Arrival', description: 'Arrive in Kigali, city tour including Genocide Memorial, drive to Volcanoes.', image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' },
      { day: 2, title: 'Gorilla Trekking', description: 'The highlight - trek into the forest to meet mountain gorillas.', image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' },
      { day: 3, title: 'Golden Monkeys', description: 'Morning golden monkey tracking, afternoon at leisure or optional hike.', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' },
      { day: 4, title: 'Departure', description: 'Transfer back to Kigali for your departure flight.' },
    ],
  },
  {
    slug: 'east-africa-grand-safari',
    title: '14-Day Grand East Africa Safari',
    destination: 'Uganda, Kenya, Tanzania',
    duration: '14 Days / 13 Nights',
    groupSize: '2-8 People',
    difficulty: 'Moderate',
    price: 'From $12,500',
    description: 'The ultimate East African adventure combining gorilla trekking in Uganda, the Masai Mara, Serengeti, and Zanzibar beaches.',
    bannerImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=800&h=600&fit=crop',
    ],
    highlights: ['Gorilla Trekking', 'Masai Mara', 'Serengeti Migration', 'Ngorongoro Crater', 'Zanzibar Beach'],
    included: ['All Flights Between Countries', 'Luxury Accommodations', 'All Meals', 'All Permits & Fees', 'Expert Guides', 'Private Transfers'],
    itinerary: [
      { day: 1, title: 'Entebbe Arrival', description: 'Welcome to Uganda, overnight in Entebbe.', image: 'https://images.unsplash.com/photo-1596005554384-d293674c91d7?w=600&h=400&fit=crop' },
      { day: 2, title: 'Bwindi', description: 'Fly to Bwindi Impenetrable Forest.', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=600&h=400&fit=crop' },
      { day: 3, title: 'Gorilla Trekking', description: 'Trek to see mountain gorillas.', image: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef?w=600&h=400&fit=crop' },
      { day: 4, title: 'To Kenya', description: 'Fly to Nairobi, continue to Masai Mara.', image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600&h=400&fit=crop' },
      { day: 5, title: 'Masai Mara', description: 'Full day game drives in the Mara.', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&h=400&fit=crop' },
      { day: 6, title: 'Masai Mara', description: 'Optional balloon safari, more game drives.', image: 'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?w=600&h=400&fit=crop' },
      { day: 7, title: 'To Tanzania', description: 'Cross to Serengeti via the Mara River.', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop' },
      { day: 8, title: 'Serengeti', description: 'Follow the migration herds.', image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&h=400&fit=crop' },
      { day: 9, title: 'Serengeti', description: 'Continue exploring the Serengeti.' },
      { day: 10, title: 'Ngorongoro', description: 'Transfer to Ngorongoro highlands.', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&h=400&fit=crop' },
      { day: 11, title: 'Crater Safari', description: 'Full day in Ngorongoro Crater.', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop' },
      { day: 12, title: 'Zanzibar', description: 'Fly to Zanzibar for beach relaxation.', image: 'https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=600&h=400&fit=crop' },
      { day: 13, title: 'Zanzibar', description: 'Free day on the beach or Stone Town tour.' },
      { day: 14, title: 'Departure', description: 'Transfer to Zanzibar airport for departure.' },
    ],
  },
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};
