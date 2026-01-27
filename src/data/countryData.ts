import canopy from '@/assets/canopy.jpg';
import boat from '@/assets/boat safaris.jpg';
import Drive from '@/assets/game drive.jpeg';
import Culture from '@/assets/culture2.jpeg';
import Kalisimbi from '@/assets/kalisimbi.jpg';
import budget from '@/assets/budget.jpeg';
import akagera from '@/assets/akagera.jpeg';
import nyungwe from '@/assets/nyungwe.jpeg';
import Chimpanzee from '@/assets/chimpanzee.jpeg';
import colobus from '@/assets/nyungwe2.jpg';
import giswati1 from '@/assets/gishwati1.jpg';
import gishwati2 from '@/assets/gishwati2.jpg';
import gishwati3 from '@/assets/gishwati3.jpg';
import Murchison from '@/assets/murchinson.jpg';
import culture3 from '@/assets/culture3.jpeg';
import mgahinga from '@/assets/mgahinga.jpeg';




// Country-specific data for destination pages

export interface CountryItinerary {
  id: string;
  title: string;
  days: number;
  description: string;
  image: string;
  highlights: string[];
}

export interface CountryActivity {
  id: string;
  title: string;
  description: string;
  image: string;
  howOffered: string;
}

export interface CountryPark {
  id: string;
  name: string;
  slug: string;
  description: string;
  images: string[];
}

export interface CarRental {
  id: string;
  name: string;
  image: string;
  description: string;
  capacity: string;
}

export interface CountryData {
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  overview: {
    title: string;
    description: string;
    experience: string;
    images: string[];
  };
  itineraries: CountryItinerary[];
  activityHighlight: string;
  activities: CountryActivity[];
  parksHighlight: string;
  parks: CountryPark[];
  carRentalHighlight: string;
  cars: CarRental[];
  bestTime: string;
  currency: string;
  language: string;
}

export const countryData: Record<string, CountryData> = {
  
  rwanda: {
    slug: 'rwanda',
    name: 'Rwanda',
    tagline: 'Discover Rwanda Tours with Dream Destination Tours and Travel – Expert Guides & Best Value Safaris.',
    heroImage: 'https://media.istockphoto.com/id/2207450608/photo/zebras-at-akagera-national-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ecd_wd2uCiO-v1UhYxEUhfRwO14WC1rltmPhW0uIj5g=',
    overview: {
      title: 'Discover Rwanda Tours with Dream Destination Tours and Travel – Expert Guides & Best Value Safaris.',
      description: 'Discover Rwanda with Dream Destination Tours and Travel, the Land of a Thousand Hills. Rwanda offers breathtaking landscapes, mountain gorillas, rich wildlife, and a safe, welcoming environment for travelers. We provide expertly guided tours in Rwanda, including gorilla trekking, wildlife safaris, cultural experiences, and city tours, all designed to give excellent value for money. Travel with experienced local guides and enjoy unforgettable journeys tailored to your budget and interests.',
      experience: 'Our team has been operating in Rwanda since the country\'s tourism renaissance, with deep roots in local communities and strong partnerships with conservation programs. Dream Destination Tours and Travel delivers authentic, responsible, and meaningful travel experiences that support wildlife protection and community development across Rwanda.',
      images: [
        'https://plus.unsplash.com/premium_photo-1664302882084-f5df9526963a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cndhbmRhfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1549854233-ca0baec6fa74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lyYWZmZXxlbnwwfHwwfHx8MA%3D%3D',
      ],
    },
    itineraries: [
      {
        id: 'rw-1',
        title: '5 Days Rwanda Gorilla Safari',
        days: 5,
        description: 'Trek through the Virunga volcanoes to meet Rwanda\'s famous mountain gorillas.',
        image: 'https://plus.unsplash.com/premium_photo-1685785838718-77489a5fbf74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        highlights: ['Gorilla Trekking', 'Volcanoes NP', 'Kigali City Tour'],
      },
      {
        id: 'rw-2',
        title: '7 Days Rwanda Complete Safari',
        days: 7,
        description: 'Experience gorillas, chimps, and Big Five game drives in one incredible trip.',
        image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D',
        highlights: ['Gorillas', 'Chimpanzees', 'Akagera Safari'],
      },
      {
        id: 'rw-3',
        title: '3 Days Akagera Safari',
        days: 3,
        description: 'Discover Rwanda\'s only Big Five park with diverse savanna landscapes.',
        image: 'https://images.unsplash.com/photo-1594916105020-b28f829993b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlvbnN8ZW58MHx8MHx8fDA%3D',
        highlights: ['Big Five', 'Boat Safari', 'Bird Watching'],
      },
      {
        id: 'rw-4',
        title: '4 Days Nyungwe Forest Experience',
        days: 4,
        description: 'Trek for chimpanzees and walk the famous canopy walkway.',
        image: canopy,
        highlights: ['Chimp Trekking', 'Canopy Walk', 'Tea Plantations'],
      },
      {
        id: 'rw-5',
        title: '6 Days Golden Monkey & Gorilla Trek',
        days: 6,
        description: 'Double primate adventure with golden monkeys and mountain gorillas.',
        image: 'https://images.unsplash.com/photo-1722293111697-33c566a58b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww',
        highlights: ['Gorilla Trek', 'Golden Monkeys', 'Volcano Hike'],
      },
      {
        id: 'rw-6',
        title: '10 Days Rwanda Explorer',
        days: 10,
        description: 'The ultimate Rwanda journey from Kigali to Lake Kivu and beyond.',
        image: boat,
        highlights: ['All Parks', 'Lake Kivu', 'Cultural Immersion'],
      },
    ],
    activityHighlight: 'Explore Rwanda’s most unforgettable experiences with Dream Destination Tours and Travel. From wildlife safaris to cultural encounters, each activity is carefully selected and led by experienced local guides to ensure safety, authenticity, and great value for every traveler.',
    activities: [
      {
        id: 'rw-act-1',
        title: 'Gorilla Trekking',
        description: 'Rwanda Gorilla Trekking in Volcanoes National Park offers one of the world\'s most exclusive and accessible mountain gorilla experiences. Dream Destination Tours and Travel specializes in professionally guided gorilla trekking tours in Rwanda, taking you deep into Volcanoes National Park to visit well-habituated gorilla families in their natural habitat. Led by expert local guides, our gorilla safaris combine conservation, safety, and unforgettable encounters, making Rwanda one of the top destinations in Africa for luxury and value-for-money gorilla trekking experiences.',
        image: 'https://plus.unsplash.com/premium_photo-1686232986531-b26f3ceacf4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        howOffered: 'Gorilla trekking in Rwanda is offered in Volcanoes National Park and can be done in one day from Kigali, with a 2.5-hour drive each way. Trekking starts early in the morning, with hikes lasting 3 to 5 hours depending on gorilla movement. The gorilla permit costs USD 1,500 per person and includes park access, expert ranger guides, and conservation support. There is a 98% chance of seeing mountain gorillas, making this one of Africa\'s most guaranteed wildlife experiences. Dream Destination Tours and Travel accommodates all guests and provides professionally guided, value-for-money gorilla trekking tours in Rwanda.',
      },
      {
        id: 'rw-act-2',
        title: 'Chimpanzee Trekking',
        description: 'Chimpanzee trekking in Nyungwe National Park is one of Rwanda\'s most exciting rainforest experiences. Nyungwe is home to large, well-habituated chimpanzee communities, offering high chances of close encounters in a pristine tropical forest. Treks start early in the morning with experienced guides and usually last 2 to 4 hours. Located in southwest Rwanda, Nyungwe is accessible by road from Kigali and is ideal for nature lovers, primate enthusiasts, and adventure travelers. Dream Destination Tours and Travel offers professionally guided chimpanzee trekking tours in Nyungwe National Park, combining expert guidance, safety, and excellent value for money.',
        image: 'https://plus.unsplash.com/premium_photo-1664302969525-686b6e4d0748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        howOffered: 'Chimpanzee trekking in Nyungwe National Park is offered at USD 250 per person, including park entry fees and professional guiding. The trek starts early at around 5:00 am and requires a minimum of two days due to distance and forest activities, making it ideal for an overnight safari. Trekking lasts 3 to 5 hours, with one full hour spent observing chimpanzees at close range. The experience is available for budget, mid-range, and luxury travelers. Dream Destination Tours and Travel provides well-organized, expert-guided chimpanzee trekking tours in Nyungwe National Park with great value for money.',
      },
      {
        id: 'rw-act-3',
        title: 'Game Drive & Boat Safari In Akagera National Park',
        description: 'Experience Rwanda\'s Big Five and diverse wildlife on expertly guided game drives and unique boat safaris in Akagera National Park, the only savannah park in Africa with stunning lakes and rivers. Just 2–3 hours from Kigali, our tours can be done in one day or as multi-day safaris. See lions, elephants, rhinos, giraffes, zebras, hippos, and rich birdlife while enjoying scenic boat rides on Lake Ihema. Dream Destination Tours and Travel offers safe, value-for-money safari tours, combining wildlife photography, expert local guides, and unforgettable African safari experiences. Perfect for budget, mid-range, and luxury travelers, Akagera game drives and boat safaris are among Rwanda\'s top wildlife adventures.',
        image: Drive,
        howOffered: 'Akagera Game Drive & Boat Safari is offered as a 4–7 hour tour from Kigali, available in one day. Dream Destination Tours and Travel organizes everything with expert local guides, including wildlife spotting, boat rides on Lake Ihema, park entry, and safe, value-for-money safari experiences. Perfect for budget, mid-range, and luxury travelers seeking Rwanda\'s Big Five and unique savannah adventures.',
      },
      {
        id: 'rw-act-4',
        title: 'Cultural Tours & Community Experiences in Rwanda',
        description: 'Discover Rwanda\'s vibrant culture and heritage with Dream Destination Tours and Travel. Explore traditional villages, witness captivating Rwandan dance and music, and learn inspiring stories of reconciliation and resilience. Our cultural tours provide authentic experiences that connect travelers with local communities and Rwanda\'s history.',
        image: Culture,
        howOffered: 'We organize fully guided cultural tours including visits to Iby\'Iwacu Cultural Village, Kigali Genocide Memorial, and other community tourism projects. Tours are tailored for all travelers—budget, mid-range, or luxury—offering immersive, safe, and value-for-money experiences in Rwanda.',
      },
      {
        id: 'rw-act-5',
        title: 'Golden Monkey Tracking in Volcanoes National Park – Rwanda',
        description: 'Experience the rare and playful golden monkeys in Volcanoes National Park with Dream Destination Tours and Travel. This guided trek takes you through lush bamboo forests, lasting 2–4 hours, with expert local guides ensuring safe and unforgettable wildlife encounters. Perfect for nature lovers and wildlife photographers, our golden monkey tours in Rwanda combine eco-tourism, conservation support, and value-for-money safari experiences, making it a must-do activity on your Volcanoes National Park adventure.',
        image: 'https://images.unsplash.com/photo-1722293123301-64ec15086ff4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
        howOffered: 'just a short drive from Kigali. Treks start early and last up to 4 hours, giving you the best chance to see these rare primates in their natural bamboo forest habitat. Fully organized by our expert guides, the tour is safe, affordable, and designed for unforgettable wildlife experiences, combining Rwanda eco-tourism, conservation support, and great value for money.',
      },
    ],
    parksHighlight: 'Explore Rwanda’s stunning national parks with Dream Destination Tours and Travel, home to Africa’s most iconic wildlife and breathtaking landscapes. From the misty mountains of Volcanoes National Park and rare mountain gorillas, to the lush rainforests of Nyungwe National Park with chimpanzees, and the savannah plains of Akagera National Park for Big Five safaris and boat cruises, Rwanda’s protected areas offer unforgettable wildlife adventures.',
    parks: [
      {
        id: 'rw-park-1',
        name: 'Volcanoes National Park',
        slug: 'volcanoes-national-park',
        description: 'Volcanoes National Park, home to endangered mountain gorillas and playful golden monkeys, is one of Rwanda\'s top safari destinations. Trek through lush forests on gorilla trekking or golden monkey tracking adventures, hike the majestic Virunga volcanoes, and explore cultural sites like the Dian Fossey Gorilla Museum. Dream Destination Tours and Travel offers fully guided, safe, and value-for-money tours, making Volcanoes National Park a must-visit for wildlife lovers, adventure travelers, and nature enthusiasts in Rwanda.',
        images: [
          'https://plus.unsplash.com/premium_photo-1664302882084-f5df9526963a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cndhbmRhfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1722293111697-33c566a58b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww',
          Kalisimbi,
        ],
      },
      {
        id: 'rw-park-2',
        name: 'Akagera National Park',
        slug: 'akagera-national-park',
        description: 'Akagera National Park, Rwanda\'s only Big Five safari destination, features stunning landscapes from papyrus swamps to rolling savannah hills. See lions, elephants, rhinos, giraffes, zebras, and diverse birdlife on guided game drives and boat safaris. Reintroduced wildlife highlights Rwanda\'s remarkable conservation success. Tours can be done in one day from Kigali, fully organized by Dream Destination Tours and Travel for safe, value-for-money Rwanda safari experiences.',
        images: [
          'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emVicmFzfGVufDB8fDB8fHww',
          akagera,
          budget,
        ],
      },
      {
        id: 'rw-park-3',
        name: 'Nyungwe Forest National Park',
        slug: 'nyungwe-forest',
        description: 'Nyungwe Forest National Park, one of Africa\'s oldest rainforests, is home to 13 primate species including chimpanzees and colobus monkeys. Enjoy chimpanzee trekking, scenic hiking trails, and the famous canopy walkway 50 meters above the forest floor. Dream Destination Tours and Travel offers fully guided, safe, and value-for-money Rwanda wildlife and rainforest tours, perfect for nature lovers and adventure travelers.',
        images: [
          nyungwe,
          colobus,
          Chimpanzee,
        ],
      },
      {
        id: 'rw-park-4',
        name: 'Gishwati-Mukura National Park',
        slug: 'gishwati-mukura',
        description: 'Gishwati-Mukura National Park, Rwanda\'s newest national park, protects lush forest fragments home to chimpanzees and rare golden monkeys. Explore guided wildlife trekking, scenic forest hikes, and immersive eco-tourism experiences. Dream Destination Tours and Travel offers fully organized, safe, and value-for-money tours, perfect for nature lovers and adventure travelers in Rwanda.',
        images: [
          giswati1,
          gishwati2,
          gishwati3,
        ],
      },
    ],
    carRentalHighlight: 'Dream Destination Tours and Travel offers reliable and affordable car rental services in Rwanda, perfect for tourists, business travelers, and adventure seekers. Choose from a wide range of vehicles, including 4x4s, for self-drive adventures or chauffeur-driven tours. Explore Rwanda’s top destinations Kigali City, Volcanoes National Park, Akagera National Park, Nyungwe Forest, and Lake Kivu—with comfort, safety, and flexibility. Our car rental services are fully insured, professionally maintained, and include competitive rates, making it easy to plan your Rwanda safari, city tour, or multi-day trip. Whether you want budget, mid-range, or luxury rental options, we ensure a seamless travel experience, giving you freedom to explore Rwanda at your own pace.',
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Dream Destination Tours and Travel offers reliable and affordable car rental services in Rwanda, perfect for tourists, business travelers, and adventure seekers. Choose from a wide range of vehicles, including 4x4s, for self-drive adventures or chauffeur-driven tours. Explore Rwanda\'s top destinations Kigali City, Volcanoes National Park, Akagera National Park, Nyungwe Forest, and Lake Kivu—with comfort, safety, and flexibility. Our car rental services are fully insured, professionally maintained, and include competitive rates, making it easy to plan your Rwanda safari, city tour, or multi-day trip. Whether you want budget, mid-range, or luxury rental options, we ensure a seamless travel experience, giving you freedom to explore Rwanda at your own pace.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Rwandan Franc (RWF)',
    language: 'Kinyarwanda, English, French',
  },

  uganda: {
    slug: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa with Dream Destination Tours',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Uganda - The Pearl of Africa',
      description: 'Uganda, the true Pearl of Africa, is one of the most breathtaking safari and adventure destinations in East Africa. From the mist-covered forests of Bwindi Impenetrable National Park and the legendary mountain gorilla trekking experiences, to the wide open savannas of Queen Elizabeth National Park and Murchison Falls National Park, Uganda offers an unforgettable blend of wildlife, nature, and culture. Explore the Source of the Nile in Jinja, cruise along the Nile River, relax by the crystal-clear waters of Lake Bunyonyi, and experience rich biodiversity across Uganda’s rainforests, lakes, waterfalls, and wildlife reserves. This is a destination where luxury safaris, budget tours, cultural experiences, and adventure travel meet in one country.',
      experience: 'With over 15 years of experience operating in Uganda, Dream Destination is a trusted Uganda tour operator delivering high-quality, safe, and authentic travel experiences. Our professional local guides are experts in Uganda’s wildlife, geography, culture, and conservation, ensuring every journey is meaningful, safe, and unforgettable.',
      images: [
        Murchison,
        'https://plus.unsplash.com/premium_photo-1661824777832-e3ea0ca1fe70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11cmNoaXNvbiUyMGZhbGxzfGVufDB8fDB8fHww',
      ],
    },
    itineraries: [
      {
        id: 'ug-1',
        title: '5 Days Uganda Gorilla Safari',
        days: 5,
        description: 'Trek through Bwindi Impenetrable Forest to encounter mountain gorillas in their natural habitat.',
        image: 'https://images.unsplash.com/photo-1711198585500-dd1171e66e9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YndpbmRpfGVufDB8fDB8fHww',
        highlights: ['Gorilla Trekking', 'Bwindi Forest', 'Lake Bunyonyi'],
      },
      {
        id: 'ug-2',
        title: '7 Days Uganda Wildlife Adventure',
        days: 7,
        description: 'Experience the best of Uganda\'s wildlife from Queen Elizabeth to Murchison Falls.',
        image: 'https://images.unsplash.com/photo-1420537659459-1e231ca42aa1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlZW4lMjBlbGl6YWJldGglMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
        highlights: ['Big Five Safari', 'Boat Cruises', 'Tree-climbing Lions'],
      },
      {
        id: 'ug-3',
        title: '3 Days Murchison Falls Safari',
        days: 3,
        description: 'Witness the world\'s most powerful waterfall and spot diverse wildlife.',
        image: 'https://images.unsplash.com/photo-1671360788724-100050645e10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11cmNoaXNvbiUyMGZhbGxzfGVufDB8fDB8fHww',
        highlights: ['Murchison Falls', 'Game Drives', 'Nile Boat Safari'],
      },
      {
        id: 'ug-4',
        title: '4 Days Chimpanzee Trekking',
        days: 4,
        description: 'Track chimpanzees in Kibale Forest, the primate capital of the world.',
        image: 'https://images.unsplash.com/photo-1725429183391-dc761bdbb4b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2liYWxlfGVufDB8fDB8fHww',
        highlights: ['Chimp Trekking', 'Kibale Forest', 'Bigodi Wetland'],
      },
      {
        id: 'ug-5',
        title: '10 Days Complete Uganda Safari',
        days: 10,
        description: 'The ultimate Uganda experience covering gorillas, chimps, and savanna wildlife.',
        image: 'https://media.istockphoto.com/id/617594678/photo/african-elephant-taking-a-stroll-in-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=9q-BRrZ8YWQo2TeXW7BQ9uhSYprHd99J4DDjLVMUyMg=',
        highlights: ['Gorillas', 'Chimpanzees', 'Big Five', 'Cultural Tours'],
      },
      {
        id: 'ug-6',
        title: '6 Days Queen Elizabeth Safari',
        days: 6,
        description: 'Explore one of Africa\'s most diverse parks with tree-climbing lions and hippos.',
        image: 'https://images.unsplash.com/photo-1575414914265-ebc9aa2637f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVmZmFsb3xlbnwwfHwwfHx8MA%3D%3D',
        highlights: ['Kazinga Channel', 'Ishasha Lions', 'Crater Lakes'],
      },
    ],
    activityHighlight: 'Discover unforgettable Uganda travel experiences with Dream Destination Tours and Travel. From gorilla trekking in Bwindi and chimpanzee tracking in Kibale, to game drives in Queen Elizabeth and Murchison Falls, Nile boat cruises in Jinja, and authentic cultural tours across Uganda, every activity is led by professional local guides for safety, authenticity, and great value. We offer luxury and budget Uganda tours, custom safari packages, and private guided experiences designed to give you the best of Uganda – The Pearl of Africa.',
    activities: [
      {
        id: 'ug-act-1',
        title: 'Gorilla Trekking',
        description: 'Experience a once-in-a-lifetime mountain gorilla trekking safari in Uganda with Dream Destination Tours and Travel. Trek through the misty forests of Bwindi Impenetrable National Park for an intimate, unforgettable encounter with one of the world’s most endangered species — home to over half of the world’s remaining mountain gorillas.',
        image: 'https://plus.unsplash.com/premium_photo-1686232986531-b26f3ceacf4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
        howOffered: 'Daily guided treks with certified Uganda Wildlife Authority guides. Gorilla permits must be booked 3–6 months in advance. Encounters are limited to 1 hour per gorilla family for conservation and safety. Best access route: via Kigali International Airport (Rwanda), with a scenic cross-border drive to Bwindi — the fastest and most convenient route for travelers.',
      },
      {
        id: 'ug-act-2',
        title: 'Chimpanzee Tracking',
        description: 'Embark on an exciting chimpanzee tracking safari in Kibale Forest National Park, home to over 1,500 wild chimpanzees. Walk through ancient rainforests and observe these fascinating primates in their natural habitat for an unforgettable wildlife experience.',
        image: 'https://images.unsplash.com/photo-1725429183391-dc761bdbb4b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2liYWxlfGVufDB8fDB8fHww',
        howOffered: 'Morning and afternoon treks are available, with optional habituation experiences offering up to 4-hour close encounters for a truly immersive adventure.',
      },
      {
        id: 'ug-act-3',
        title: 'Game Drives',
        description: 'Experience thrilling Uganda safari game drives across the vast savannas of Queen Elizabeth National Park and Kidepo Valley National Park, searching for lions, elephants, buffaloes, leopards, and hundreds of bird species in their natural habitat.',
        image: Drive,
        howOffered: 'Morning and evening drives in custom 4x4 safari vehicles with pop-up roofs for optimal wildlife viewing, led by experienced local guides for a safe and unforgettable safari adventure.',
      },
      {
        id: 'ug-act-4',
        title: 'Cultural Visits',
        description: 'Connect with local communities, visit traditional villages, and learn about Uganda\'s rich cultural heritage.',
        image: culture3,
        howOffered: 'Half-day and full-day cultural immersion experiences with local guides and community members.',
      },
      {
        id: 'ug-act-5',
        title: 'Boat Safaris',
        description: 'Experience unforgettable Uganda boat safaris on the Kazinga Channel in Queen Elizabeth National Park, the mighty Nile River in Murchison Falls National Park, and Lake Victoria. Glide through tranquil waters while spotting hippos, crocodiles, elephants, buffaloes, birds, and other wildlife in their natural habitat — a perfect combination of relaxation and adventure.',
        image: boat,
        howOffered: 'Daily scheduled boat safaris with expert local guides. Private charter boats are also available for exclusive and personalized wildlife viewing experiences. Ideal for wildlife photography, family tours, and luxury Uganda safari packages.',
      },
    ],    parksHighlight: 'Explore Uganda’s world-class national parks and wildlife reserves, from Bwindi Impenetrable and Kibale Forest to Queen Elizabeth, Murchison Falls, Kidepo Valley, and Lake Mburo. Enjoy gorilla trekking, chimpanzee tracking, Big Five safaris, boat cruises, and cultural tours in protected landscapes that make Uganda a top safari and adventure destination.',    
    parks: [
      {
        id: 'ug-park-1',
        name: 'Bwindi Impenetrable Forest - Uganda',
        slug: 'bwindi-impenetrable-forest',
        description: 'Explore Bwindi Impenetrable Forest National Park, a UNESCO World Heritage Site and home to over half of the world’s endangered mountain gorillas. Trek through this ancient rainforest with Dream Destination Tours and Travel for an authentic Uganda gorilla trekking safari. Experience wildlife safaris, birdwatching, nature walks, and eco-tourism adventures in one of the most biologically diverse regions in East Africa.',
        images: [
          'https://images.unsplash.com/photo-1653645800971-b46f2322da3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YndpbmRpfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1673308328828-1fbd12d31a7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YndpbmRpfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1551357141-1800c80f8997?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YndpbmRpfGVufDB8fDB8fHww',
        ],
      },
     
      {
        id: 'ug-park-2',
        name: 'Queen Elizabeth National Park - Uganda',
        slug: 'queen-elizabeth',
        description: 'Discover Queen Elizabeth National Park, Uganda’s most visited safari destination, famous for tree-climbing lions, Big Five game drives, and the wildlife-rich Kazinga Channel connecting Lake Edward and Lake George. Explore Uganda wildlife safaris, birdwatching tours, boat cruises, and guided nature adventures with Dream Destination Tours and Travel, offering luxury, budget, and private safari packages.',
        images: [
          'https://plus.unsplash.com/premium_photo-1661860529833-ce240a1632be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMGNsaW1iaW5nJTIwbGlvbnN8ZW58MHx8MHx8fDA%3D',
          'https://media.istockphoto.com/id/96892160/photo/water-safari.webp?a=1&b=1&s=612x612&w=0&k=20&c=peO-OQsgEzYv_DAmlYemcvAX2RvaU35YKnyiAzQh_20=',
          'https://media.istockphoto.com/id/537467143/photo/elefantenbulle.webp?a=1&b=1&s=612x612&w=0&k=20&c=rHQ7H35DQCE21jFYxCb6CRl_tv_dg9OfODPb5abH2Y8=',
        ],
      },
      {
        id: 'ug-park-3',
        name: 'Murchison Falls National Park - Uganda',
        slug: 'murchison-falls',
        description: 'Experience Murchison Falls National Park, Uganda’s largest and most iconic park, where the mighty Nile River plunges through a narrow gorge to form the world’s most powerful waterfall. Enjoy Uganda wildlife safaris, Big Five game drives, Nile boat cruises, birdwatching, and guided nature adventures with Dream Destination Tours and Travel, offering luxury, budget, and private safari packages.',
        images: [
          'https://images.unsplash.com/photo-1672590273072-6a92fa9e7f30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVyY2hpc29uJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D',
          Murchison,
          'https://images.unsplash.com/photo-1603696861627-db79cf52fecb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWZyaWNhbiUyMGJ1ZmZhbG98ZW58MHx8MHx8fDA%3D',
        ],
      },
      {
        id: 'ug-park-4',
        name: 'Kibale Forest National Park - Uganda',
        slug: 'kibale-forest',
        description: 'Explore Kibale Forest National Park, known as the “Primate Capital of the World”, home to 13 primate species, including over 1,500 wild chimpanzees. Enjoy chimpanzee tracking, guided forest walks, wildlife safaris, and birdwatching tours with Dream Destination Tours and Travel, offering luxury, budget, and private Uganda safari packages.',
        images: [
          'https://media.istockphoto.com/id/1138888875/photo/kibale-forest-national-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=idgH7fkIUiT0WRugcz6uoDY7Uyoblr--jb-Qd2fy5Tg=',
          'https://images.unsplash.com/photo-1742328336691-c885d9e46df5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2liYWxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww',
          'https://images.unsplash.com/photo-1742328114637-37b85813a5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2liYWxlJTIwbmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8fHww',
        ],
      },
       {
        id: 'ug-park-5',
        name: 'Mgahinga Gorilla National Park – Uganda: Virunga Mountains',
        slug: 'mgahinga-gorilla-national-park',
        description: 'Nestled in the southwestern Virunga Mountains, Mgahinga Gorilla National Park is Uganda’s smallest but most scenic park, home to endangered mountain gorillas, rare golden monkeys, and stunning volcanic landscapes. Trek through misty forests, hike Mount Muhabura, Gahinga, and Sabyinyo, and experience intimate wildlife encounters. Accessible via Kigali International Airport or Kisoro Airstrip, the park offers gorilla trekking, primate tracking, volcano hikes, birdwatching, and eco-tourism adventures.',
        images: [
          'https://plus.unsplash.com/premium_photo-1685785838718-77489a5fbf74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
          'https://images.unsplash.com/photo-1722293111697-33c566a58b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww',
          mgahinga,
        ],
      },
    ],    carRentalHighlight: 'Explore Uganda’s national parks and safari destinations at your own pace with Dream Destination Tours and Travel. Choose from our fleet of 4x4 safari vehicles, including Toyota Land Cruisers, Prados, and SUVs, perfect for gorilla trekking, game drives, and wildlife adventures. Optional professional driver guides available for a safe and unforgettable Uganda self-drive or guided safari experience.',    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to September, December to February',
    currency: 'Ugandan Shilling (UGX)',
    language: 'English, Luganda, Swahili',
  },
  
  kenya: {
    slug: 'kenya',
    name: 'Kenya',
    tagline: 'Discover Kenya – Magical Kenya',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Kenya - Magical Kenya',
      description: 'Experience Kenya safaris with Dream Destination Tours and Travel, the birthplace of the African safari. Explore the iconic Masai Mara, the snow-capped Mount Kenya, and Kenya’s diverse landscapes. Witness the Great Migration, enjoy Big Five game drives, meet the Maasai people, and relax on pristine Kenyan beaches.',
      experience: 'With over 10 years guiding travelers in Kenya, our expert team provides exclusive access to private conservancies, professional Maasai guides, and authentic cultural safari experiences. Enjoy luxury, budget, and private Kenya safari packages tailored to your adventure.',
      images: [
        'https://plus.unsplash.com/premium_photo-1664304362237-8040f0ecac98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWluZ298ZW58MHx8MHx8fDA%3D',
      ],
    },
    itineraries: [
      {
        id: 'ke-1',
        title: '5 Days Masai Mara Safari',
        days: 5,
        description: 'Experience the world-famous Masai Mara and witness incredible wildlife.',
        image: 'https://images.unsplash.com/photo-1724581777107-c132d05753a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBtYXJhJTIwc2FmYXJpfGVufDB8fDB8fHww',
        highlights: ['Big Five', 'Great Migration', 'Maasai Culture'],
      },
      {
        id: 'ke-2',
        title: '7 Days Kenya Wildlife Circuit',
        days: 7,
        description: 'From Amboseli to Masai Mara - Kenya\'s best parks in one journey.',
        image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D',
        highlights: ['Amboseli', 'Lake Nakuru', 'Masai Mara'],
      },
      {
        id: 'ke-3',
        title: '3 Days Amboseli Safari',
        days: 3,
        description: 'See elephants against the backdrop of Mount Kilimanjaro.',
        image: 'https://images.unsplash.com/photo-1663848990481-8e0da3374a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1ib3NlbGklMjBuYXRpb25hbCUyMHBhcmt8ZW58MHx8MHx8fDA%3D',
        highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Bird Watching'],
      },
      {
        id: 'ke-4',
        title: '10 Days Kenya & Tanzania Combined',
        days: 10,
        description: 'The ultimate East African safari combining two iconic destinations.',
        image: 'https://plus.unsplash.com/premium_photo-1664301884786-dfde9ba4fb70?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        highlights: ['Serengeti', 'Masai Mara', 'Ngorongoro'],
      },
      {
        id: 'ke-5',
        title: '8 Days Safari & Beach',
        days: 8,
        description: 'Combine bush adventures with relaxation on Kenya\'s beautiful coast.',
        image: 'https://images.unsplash.com/photo-1669335358428-4e9cf47859df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBpbiUyMGtlbnlhfGVufDB8fDB8fHww',
        highlights: ['Masai Mara', 'Diani Beach', 'Mombasa'],
      },
      {
        id: 'ke-6',
        title: '4 Days Lake Nakuru & Hell\'s Gate',
        days: 4,
        description: 'Flamingos, rhinos, and dramatic volcanic landscapes.',
        image: 'https://media.istockphoto.com/id/603153650/photo/lake-nakuru-in-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=gzPI9VR5r2DFnCYM2tO9fiRdbjrc23mCWd1Ch-I9CLI=',
        highlights: ['Flamingos', 'Rhinos', 'Cycling Safari'],
      },
    ],
    activityHighlight: 'Experience Kenya’s top safari adventures with Dream Destination Tours and Travel. From Big Five game drives in Masai Mara, elephant spotting in Amboseli, and boat safaris on Lake Naivasha, to cultural Maasai village experiences and mountain treks on Mount Kenya, every activity is carefully curated and led by experienced local guides for safety, authenticity, and unforgettable value.',
    activities: [
      {
        id: 'ke-act-1',
        title: 'Big Five Safari - Kenya',
        description: 'Experience the thrill of Big Five safaris in Kenya, tracking lions, elephants, buffaloes, leopards, and rhinos across iconic parks like Masai Mara, Amboseli, and Nairobi National Park.',
        image: 'https://images.unsplash.com/photo-1535082427395-4a20c7c7af88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmhpbm9jZXJvcyUyMGluJTIwa2VueWF8ZW58MHx8MHx8fDA%3D',
        howOffered: 'Guided game drives in custom 4x4 safari vehicles with pop-up roofs. Choose morning, afternoon, or full-day safari options for maximum wildlife viewing and photography.',
      },
      {
        id: 'ke-act-2',
        title: 'Great Migration - Kenya',
        description: 'Experience the Great Migration in Masai Mara, one of the most spectacular wildlife events in the world. Every year, millions of wildebeest, zebras, and gazelles move across the Serengeti plains into Kenya’s Masai Mara National Reserve, creating breathtaking river crossings, predator-prey encounters, and unforgettable safari moments. This bucket-list Kenya safari offers wildlife enthusiasts, photographers, and adventure travelers a front-row view of nature at its rawest and most dramatic',
        image: 'https://plus.unsplash.com/premium_photo-1661857016948-deee6041af68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFdpbGRiZWVzdCUyME1pZ3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
        howOffered: 'July to October in Masai Mara National Reserve, Kenya. Strategic positioning for Mara River crossings, open savanna plains, and key predator zones',
      },
      {
        id: 'ke-act-3',
        title: 'Hot Air Balloon Safari - Kenya',
        description: 'Soar over the Masai Mara National Reserve at dawn on a Kenya hot air balloon safari, and enjoy breathtaking aerial views of wildlife, savanna landscapes, and the Great Migration. Spot lions, elephants, giraffes, zebras, and wildebeest from above as the sun rises over one of Africa’s most iconic safari destinations. This luxury Kenya safari experience is perfect for wildlife enthusiasts, photographers, honeymooners, and adventure travelers seeking a unique perspective on the African wilderness.',
        image: 'https://images.unsplash.com/photo-1517503462743-f87ba95a8cae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWlyJTIwYmFsbG9vbiUyMGluJTIwa2VueWF8ZW58MHx8MHx8fDA%3D',
        howOffered: 'Early morning flights timed for sunrise wildlife viewing, Champagne bush breakfast upon landing for a memorable safari celebration, Booking essential due to limited flights and seasonal demand and Optional private or group tours with Dream Destination Tours and Travel',
      },
      {
        id: 'ke-act-4',
        title: 'Maasai Cultural Experience - Kenya',
        description: 'Immerse yourself in the rich heritage of the Maasai people with Dream Destination Tours and Travel. Visit traditional Maasai villages in Kenya’s safari regions, learn about their unique customs, lifestyle, and traditions, and participate in authentic cultural activities such as traditional dances, beadwork, craft making, and storytelling. This experience offers travelers a deep insight into Maasai culture while complementing your Kenya safari adventure.',
        image: 'https://images.unsplash.com/photo-1704495511133-0cb58501606a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBjdWx0dXJlfGVufDB8fDB8fHww',
        howOffered: '•	Guided village visits with knowledgeable local Maasai guides, Hands-on cultural activities including dancing, beadwork, and crafts, Storytelling and cultural demonstrations for an authentic experience and Can be combined with Big Five safaris, Great Migration tours, and Masai Mara game drives',
      },
      {
        id: 'ke-act-5',
        title: 'Beach Holidays - Kenya',
        description: 'Unwind on Kenya’s pristine Indian Ocean beaches with Dream Destination Tours and Travel. Relax on white sand beaches, swim in crystal-clear waters, and enjoy sun-drenched coastal escapes in top destinations like Diani, Watamu, and Lamu. Perfect for family holidays, romantic getaways, and luxury beach vacations, these coastal experiences complement your Kenya safari adventures.',
        image: 'https://media.istockphoto.com/id/157696633/photo/african-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=RxZTIywe3tCs5XlVdHAItQXwpWFxRifktgfjkOtUl-c=',
        howOffered: 'Luxury and boutique beach resorts along Kenya’s coast, Water sports, including snorkeling, diving, and jet-skiing, Dhow cruises and sunset sailing tours, Combine with safari packages for a complete Kenya adventure experience',
      },
    ],    parksHighlight: 'Explore Kenya’s world-class national parks and wildlife reserves, from the iconic Masai Mara and Amboseli National Park to Nairobi National Park, Lake Naivasha, Mount Kenya, and Tsavo National Parks. Enjoy Big Five safaris, Great Migration tours, hot air balloon rides, wildlife photography, and guided nature adventures with Dream Destination Tours and Travel, your trusted Kenya safari operator',   parks: [
  {
    id: 'ke-park-1',
    name: 'Masai Mara National Reserve - Kenya',
    slug: 'masai-mara',
    description: 'Discover Masai Mara National Reserve, Kenya’s most iconic safari destination and part of the greater Serengeti ecosystem. Famous for the Great Migration, exceptional Big Five sightings, and predator-rich savannas, it is a must-visit for wildlife safaris, luxury and budget tours, and wildlife photography adventures.',
    images: [
      'https://images.unsplash.com/photo-1724581777107-c132d05753a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBtYXJhJTIwc2FmYXJpfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1704495511133-0cb58501606a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFzYWklMjBjdWx0dXJlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1704495821313-0903987d7f97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWklMjBjdWx0dXJlfGVufDB8fDB8fHww',
    ],
  },
  {
    id: 'ke-park-2',
    name: 'Amboseli National Park - Kenya',
    slug: 'amboseli',
    description: 'Explore Amboseli National Park, renowned for its large elephant herds, Big Five safaris, and breathtaking views of Mount Kilimanjaro. Perfect for wildlife photography, guided safari tours, and family or luxury Kenya safari experiences, Amboseli offers unforgettable savanna and wildlife adventures.',
    images: [
       'https://media.istockphoto.com/id/620379788/photo/african-elephant-and-the-ngorongoro-savanna-in-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=lQhJxlIg6Ko0DLZAO9We38vfCiC7gBYVEehHNSfkFGY=',
      'https://images.unsplash.com/photo-1690831414032-afcc4d48cd59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEFtYm9zZWxpJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
     
      'https://media.istockphoto.com/id/1046958338/photo/wild-african-zebras-in-the-serengeti-national-park-wild-life-of-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=tXeHNBSd117i3W5D9XRO3ILGpa7GK4SvOtkycVvs1UI=',
    ],
  },
  {
    id: 'ke-park-3',
    name: 'Tsavo National Park - Kenya',
    slug: 'tsavo',
    description: 'Discover Tsavo National Park, one of the world’s largest wildlife sanctuaries, divided into Tsavo East and Tsavo West. Famous for its red elephants, vast savannas, and diverse wildlife including the Big Five, Tsavo is ideal for Kenya safari adventures, guided game drives, and wildlife photography tours.',
    images: [
      'https://images.unsplash.com/photo-1537976856963-b1166f2bb739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHNhdm8lMjBOYXRpb25hbCUyMFBhcmt8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1644325509085-532b0a7d0fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRzYXZvJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1623654693452-cff27a3ec63b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFRzYXZvJTIwTmF0aW9uYWwlMjBQYXJrfGVufDB8fDB8fHww',
    ],
  },
  {
    id: 'ke-park-4',
    name: 'Lake Nakuru National Park - Kenya',
    slug: 'lake-nakuru',
    description: 'Explore Lake Nakuru National Park, a world-famous rhino sanctuary and one of Kenya’s most scenic parks. Renowned for flamingos, diverse birdlife, and Big Five safaris, it’s ideal for wildlife photography, guided game drives, and Kenya safari adventures with Dream Destination Tours and Travel.',
    images: [
      'https://media.istockphoto.com/id/603153650/photo/lake-nakuru-in-kenya.webp?a=1&b=1&s=612x612&w=0&k=20&c=gzPI9VR5r2DFnCYM2tO9fiRdbjrc23mCWd1Ch-I9CLI=',
      'https://images.unsplash.com/photo-1706394212063-1017e86d5d4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxha2UlMjBuYWt1cnV8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1661846340419-89bf27138124?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFrZSUyMG5ha3VydXxlbnwwfHwwfHx8MA%3D%3D',
    ],
  },
],
    carRentalHighlight: 'Explore Kenya at your own pace with Dream Destination Tours and Travel’s reliable fleet of 4x4 safari vehicles, SUVs, and Toyota Land Cruisers. Perfect for self-drive safaris or guided tours, all vehicles come with optional professional driver guides for safe, flexible, and unforgettable Kenya safari adventures.',
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'July to October, January to February',
    currency: 'Kenyan Shilling (KES)',
    language: 'English, Swahili',
  },
  tanzania: {
    slug: 'tanzania',
    name: 'Tanzania',
    tagline: 'The Heart of African Safaris',
    heroImage: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1920&h=1080&fit=crop',
    overview: {
      title: 'Discover Tanzania – The Heart of African Safaris',
      description: 'Experience the ultimate Tanzania safari adventure with Dream Destination Tours and Travel. From the iconic Serengeti National Park and Ngorongoro Crater to the majestic Mount Kilimanjaro and pristine Zanzibar beaches, Tanzania is a land of incredible wildlife, breathtaking landscapes, and authentic cultural experiences. Witness the Great Migration, track the Big Five, and explore the rich Maasai culture, all while enjoying luxury, private, or budget safari packages tailored to your preferences.',
      experience: 'With decades of expert local knowledge, our guides provide exclusive access to private safari camps, remote wildlife areas, and hidden cultural experiences. From Serengeti game drives to Zanzibar beach adventures, we create tailored luxury, budget, and private safari itineraries for unforgettable Tanzania adventures.',
      images: [
        'https://plus.unsplash.com/premium_photo-1661911629189-5ec861273e71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1600637468460-1fa84e8eddea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRBTlpBTklBfGVufDB8fDB8fHww',
      ],
    },
    itineraries: [
      {
        id: 'tz-1',
        title: '5 Days Serengeti Safari',
        days: 5,
        description: 'Experience the legendary Serengeti and its incredible wildlife.',
        image: 'https://media.istockphoto.com/id/2210786696/photo/thundering-herds-of-wildebeests-surge-across-the-mara-river-serengeti-national-park-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=bIbE6YiWWxuZbb4gBYNXI-LNrtUeilfgm2M4XRfIu6s=',
        highlights: ['Great Migration', 'Big Five', 'Ngorongoro Crater'],
      },
      {
        id: 'tz-2',
        title: '7 Days Northern Circuit Safari',
        days: 7,
        description: 'Tanzania\'s classic northern circuit covering all major parks.',
        image: 'https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tm9ydGhlcm4lMjBDaXJjdWl0JTIwU2FmYXJpJTIwVEFOWkFOSUF8ZW58MHx8MHx8fDA%3D',
        highlights: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Lake Manyara'],
      },
      {
        id: 'tz-3',
        title: '3 Days Ngorongoro Crater',
        days: 3,
        description: 'Explore the world\'s largest intact volcanic caldera.',
        image: 'https://plus.unsplash.com/premium_photo-1664304474148-2a1c02c75b13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmdvcm9uZ29ybyUyMGNyYXRlcnxlbnwwfHwwfHx8MA%3D%3D',
        highlights: ['Crater Safari', 'Big Five', 'Maasai Village'],
      },
      {
        id: 'tz-4',
        title: '8 Days Safari & Zanzibar',
        days: 8,
        description: 'Combine bush safari with tropical island paradise.',
        image: 'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WmFuemliYXIlMjBCRUFDSHxlbnwwfHwwfHx8MA%3D%3D',
        highlights: ['Serengeti', 'Zanzibar Beaches', 'Stone Town'],
      },
      {
        id: 'tz-5',
        title: '6 Days Kilimanjaro Trek',
        days: 6,
        description: 'Climb Africa\'s highest peak via the Marangu route.',
        image: 'https://plus.unsplash.com/premium_photo-1694475446825-765b8f0af326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lsaW1hbmphcm8lMjBUcmVrfGVufDB8fDB8fHww',
        highlights: ['Summit Attempt', 'Marangu Route', 'Glaciers'],
      },
      {
        id: 'tz-6',
        title: '4 Days Tarangire & Lake Manyara',
        days: 4,
        description: 'Giant elephant herds and tree-climbing lions.',
        image: 'https://media.istockphoto.com/id/525980262/photo/hippos-at-lake-manyara-national-park-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=SfaTnj-h9at_leGHah7Qrn_i3q-xDk000i-JZM9EABA=',
        highlights: ['Elephant Herds', 'Baobab Trees', 'Flamingos'],
      },
    ],
    activityHighlight: 'Experience Tanzania’s top safari and adventure experiences with Dream Destination Tours and Travel. From Big Five game drives in the Serengeti, elephant spotting in Tarangire, and wildlife photography in Ngorongoro Crater, to Mount Kilimanjaro trekking, Zanzibar beach adventures, and Maasai cultural encounters, every activity is carefully curated and led by expert local guides for authentic, safe, and unforgettable Tanzania safari experiences.',
    activities: [
     
  {
    id: 'tz-act-1',
    title: 'Serengeti Safari',
    description: 'Discover the endless plains of Serengeti National Park, home to Africa’s greatest concentration of wildlife. Experience Big Five safaris, predator sightings, and the Great Migration on multi-day Tanzania safari adventures.',
    image: 'https://plus.unsplash.com/premium_photo-1661857016948-deee6041af68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5nZXRpJTIwU2FmYXJpfGVufDB8fDB8fHww',
    howOffered: 'Luxury tented camps and mobile camps that follow the migration. Guided multi-day game drives with expert local safari guides. Options for private or group safaris tailored to your preference.',
  },
  {
    id: 'tz-act-2',
    title: 'Ngorongoro Crater',
    description: 'Explore the world’s largest intact volcanic caldera, the UNESCO World Heritage Site Ngorongoro Crater. Discover dense wildlife populations, Big Five safaris, flamingos, and breathtaking crater landscapes on a full-day Tanzania safari adventure.',
    image: 'https://media.istockphoto.com/id/1196998582/photo/safari-vehicles-in-between-large-herds-of-animals-ngorongoro-crater-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=NxPZtigfAGjF_Ld3Qm04Md_hEBiCrdwXzdYi1P5OJLY=',
    howOffered: 'Full-day guided crater tours with expert safari guides. Early morning entry for optimal wildlife viewing and photography. Options for private or group safari experiences.',
  },
  {
    id: 'tz-act-3',
    title: 'Kilimanjaro Climbing',
    description: 'Conquer Africa’s highest peak, Mount Kilimanjaro (5,895 meters), with Dream Destination Tours and Travel. Choose from multiple trekking routes suited for beginners, experienced climbers, and adventure seekers, and enjoy breathtaking landscapes, alpine forests, and panoramic summit views.',
    image: 'https://plus.unsplash.com/premium_photo-1694475446825-765b8f0af326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S2lsaW1hbmphcm8lMjBUcmVrfGVufDB8fDB8fHww',
    howOffered: '5–9 day guided treks with experienced mountain guides. All climbing equipment provided for safety and comfort. Options for private or group Kilimanjaro expeditions.',
  },
  {
    id: 'tz-act-4',
    title: 'Zanzibar Beach Holiday',
    description: 'Unwind on pristine white-sand beaches and turquoise waters of Zanzibar, Tanzania’s tropical paradise. Explore historic Stone Town, vibrant spice plantations, and coral reefs, or enjoy snorkeling, dhow cruises, and luxury beach resorts for a perfect relaxing or romantic getaway after your Tanzania safari adventure.',
    image: 'https://plus.unsplash.com/premium_photo-1691675469394-f843e044e340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8emFuemliYXIlMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D',
    howOffered: 'Luxury and boutique beach resorts with ocean views. Dhow cruises, snorkeling, and diving adventures. Cultural tours of Stone Town and spice plantations. Combine with Tanzania safari packages for a full adventure experience.',
  },


     
    ],
    parksHighlight: 'Explore Tanzania’s world-class national parks and wildlife reserves, from the Serengeti plains and Ngorongoro Crater to Tarangire, Lake Manyara, and Kilimanjaro regions. Witness Big Five safaris, the Great Migration, wildlife photography, and unique cultural encounters with Dream Destination Tours and Travel, your trusted Tanzania safari operator.',
    parks: [
      {
        id: 'tz-park-1',
        name: 'Serengeti National Park',
        slug: 'serengeti',
        description: 'The most famous safari destination on Earth. The endless plains host the annual Great Migration of over 2 million wildebeest and zebras.',
        images: [
          'https://images.unsplash.com/photo-1630315956721-b1cd928bd0d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVvcGFyZCUyMGluJTIwYWZyaWNhfGVufDB8fDB8fHww',
          'https://plus.unsplash.com/premium_photo-1661911629189-5ec861273e71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
          'https://images.unsplash.com/photo-1575414914265-ebc9aa2637f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVmZmFsb3xlbnwwfHwwfHx8MA%3D%3D',
        ],
      },
      {
        id: 'tz-park-2',
        name: 'Ngorongoro Conservation Area',
        slug: 'ngorongoro-crater',
        description: 'The world\'s largest intact volcanic caldera, home to the densest concentration of wildlife in Africa. A UNESCO World Heritage Site.',
        images: [
          'https://media.istockphoto.com/id/2241357681/photo/african-elephants-traversing-lush-savannah-in-ngorongoro-crater-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=bd7GFVJJXURQbol6FfmGQz_EPvoZdjMtx9NvvAOLhEM=',
          'https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxhbWluZ298ZW58MHx8MHx8fDA%3D',
          'https://media.istockphoto.com/id/184396361/photo/safari-cars-in-middle-of-wildebeests-ngorongoro-crater.webp?a=1&b=1&s=612x612&w=0&k=20&c=G6E09eFPhK7MBfEwC0ickwSlwQZBXNIeaMIm47fZKS0=',
        ],
      },
      {
        id: 'tz-park-3',
        name: 'Tarangire National Park',
        slug: 'tarangire',
        description: 'Famous for its massive elephant herds and iconic baobab trees. The Tarangire River draws wildlife from across the region during dry season.',
        images: [
          'https://images.unsplash.com/photo-1707410436710-24ec1fead1db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRhcmFuZ2lyZSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D',
          'https://images.unsplash.com/photo-1616608949943-ad9761c561e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFvYiUyMHRyZWV8ZW58MHx8MHx8fDA%3D',
          'https://media.istockphoto.com/id/2180698113/photo/woman-looking-at-elephant-through-sun-roof.webp?a=1&b=1&s=612x612&w=0&k=20&c=h1EWi5TTAJkQqsu2to1mgh1LXy8XnJifhR165hB9FEI=',
        ],
      },
      {
        id: 'tz-park-4',
        name: 'Lake Manyara National Park',
        slug: 'lake-manyara',
        description: 'A compact but diverse park famous for tree-climbing lions and vast flocks of flamingos. The alkaline lake forms a stunning backdrop.',
        images: [
          'https://media.istockphoto.com/id/1224066657/photo/flying-flamingo-over-the-lake-manyara.webp?a=1&b=1&s=612x612&w=0&k=20&c=t0Sc7OfcJGE6xWKOeBtZyC0ePLdjdSYtWyuHnTLhFhA=',
          'https://media.istockphoto.com/id/2219111159/photo/royal-siesta-in-the-canopy-serengeti-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=6KsQX_VH2XRSq60Mbl195ym2suxKrvXvqsMySBE7-2g=',
          'https://media.istockphoto.com/id/525980262/photo/hippos-at-lake-manyara-national-park-tanzania.webp?a=1&b=1&s=612x612&w=0&k=20&c=SfaTnj-h9at_leGHah7Qrn_i3q-xDk000i-JZM9EABA=',
        ],
      },
    ],
    carRentalHighlight: 'Explore Tanzania at your own pace with Dream Destination Tours and Travel’s reliable fleet of 4x4 safari vehicles, SUVs, and Toyota Land Cruisers. Perfect for self-drive safaris or guided wildlife tours, all vehicles come with optional professional driver guides to ensure safe, flexible, and unforgettable Tanzania safari adventures.',
    cars: [
      {
        id: 'car-1',
        name: 'Toyota Land Cruiser',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=400&fit=crop',
        description: 'Premium 4x4 safari vehicle with pop-up roof for game viewing.',
        capacity: '6-7 passengers',
      },
      {
        id: 'car-2',
        name: 'Toyota Safari Van',
        image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
        description: 'Comfortable van ideal for road transfers and city tours.',
        capacity: '7-8 passengers',
      },
      {
        id: 'car-3',
        name: 'Land Rover Defender',
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&h=400&fit=crop',
        description: 'Classic safari vehicle perfect for rough terrain adventures.',
        capacity: '4-5 passengers',
      },
      {
        id: 'car-4',
        name: 'Toyota RAV4',
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop',
        description: 'Compact SUV great for self-drive adventures.',
        capacity: '4 passengers',
      },
      {
        id: 'car-5',
        name: 'Toyota Coaster Bus',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop',
        description: 'Ideal for larger groups and extended tours.',
        capacity: '25 passengers',
      },
    ],
    bestTime: 'June to October, December to March',
    currency: 'Tanzanian Shilling (TZS)',
    language: 'Swahili, English',
  },
};

export const getCountryData = (slug: string): CountryData | undefined => {
  return countryData[slug];
};
