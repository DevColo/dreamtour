import fosey from '@/assets/fosey.jpg';
import memorial from '@/assets/memorial.jpg';
import kalisimbi from '@/assets/vlcano.jpeg';
import canopy from '@/assets/canopy.jpg';
import nyungwe from '@/assets/nyungwe.jpeg';
import waterfall from '@/assets/waterfall.jpeg';
import colobus from '@/assets/nyungwe2.jpg';
import kim from '@/assets/kim.jpeg';
import akagera from '@/assets/akagera grp.jpeg';
import picnic from '@/assets/picnic.jpeg';
import kigaliToVolcanoes from '@/assets/kigali-vlcno.jpeg';
import boatTour from '@/assets/boat-tour.jpg';
import gift from '@/assets/gifts.jpg';

export interface Tour {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  category: 'wildlife-safaris' | 'primate-tracking' | 'cultural-tours' | 'multi-day-tours';
  description: string;
  bannerImage: string;
  galleryImages: string[];
  highlights: string[];
  included: string[];
  excluded?: string[];
  customization?: string[];
  whySpecial?: string;
  itinerary: { day: number; title: string; description: string; image?: string }[];
}

export const tours: Tour[] = [
  {
    slug: 'lake-kivu-karongi-experience',
    title: '1 DAY LAKE KIVU – KARONGI EXPERIENCE',
    destination: 'Rwanda',
    duration: '1 Day',
    groupSize: '2-8 People',
    difficulty: 'Easy',
    category: 'cultural-tours',
    
    description: `Escape the city and immerse yourself in the tranquil beauty of Lake Kivu with this 1-day Karongi tour. Perfect for travelers looking for relaxation, scenic landscapes, and a touch of Rwanda's rich history, this trip combines picturesque lakeside views with cultural stories and natural wonders. Explore Rwanda's rolling hills, discover the famous Ndaba Rock & Waterfall, and hear the emotional story of the Nyange Students, a symbol of courage and unity during the 1994 genocide against the Tutsi. End your day soaking in the peaceful atmosphere along one of Africa's most scenic lakes.`,
    bannerImage: 'https://images.unsplash.com/photo-1706977570024-fefa419c48c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFrZSUyMGtpdnV8ZW58MHx8MHx8fDA%3D',
    galleryImages: [
      'https://images.unsplash.com/photo-1589715718565-223fdf9b7cd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZSUyMGtpdnV8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1514547085879-968fe519da2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1689081147062-bb6b73f2208a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
    ],
    highlights: [
      'Scenic drive through Rwanda\'s rolling hills',
      'Visit to Ndaba Rock & Waterfall',
      'Inspiring story of the Nyange Students',
      'Relaxation along Lake Kivu shores',
      'Lakeside lunch with stunning views',
      'Cultural insights into Rwanda\'s history'
    ],
    included: [
      'Professional driver-guide',
      'Comfortable 4x4 vehicle',
      'Stop at Ndaba Rock & waterfall',
      'Karongi (Lake Kivu) experience',
      'Lakeside lunch',
      'Drinking water & soft drinks',
      'Pick-up and drop-off from Kigali',
      'All applicable taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Alcoholic drinks',
      'Tips',
      'Personal shopping'
    ],
    customization: [
      'Lake Kivu boat ride',
      'Coffee plantation tour',
      'Extra relaxation or sightseeing time'
    ],
    whySpecial: 'The 1 Day Lake Kivu – Karongi Experience is ideal for travelers seeking a peaceful escape that combines natural beauty with meaningful cultural stories. It offers breathtaking views of Lake Kivu, insight into Rwanda\'s history and resilience, and opportunities for relaxation, photography, and lakeside exploration.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali → Scenic Drive → Ndaba Rock → Lake Kivu → Return to Kigali', 
        description: 'Start your day with a comfortable pickup from Kigali and a scenic drive toward Karongi. Along the way, your guide shares fascinating insights into Rwanda\'s culture, people, and landscapes. Stop at Ndaba Rock, where a short walk leads to the waterfall and hear the inspiring story of the Nyange Students. Continue to Karongi for a lakeside lunch and time to unwind along the shores of Lake Kivu. After this rejuvenating experience, return to Kigali for drop-off.', 
        image: 'https://plus.unsplash.com/premium_photo-1700955139809-95060da0fcab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww' 
      }
    ],
  },

   {
    slug: '2-days-chimpanzee-trekking-nyungwe',
    title: '2 DAYS CHIMPANZEE TREKKING SAFARI',
    destination: 'Nyungwe National Park, Rwanda',
    duration: '2 Days / 1 Night',
    groupSize: '2-6 People',
    difficulty: 'Moderate',    category: 'primate-tracking',    description: 'This 2 Days Chimpanzee Trekking Safari introduces you to the heart of Nyungwe National Park, one of Africa\'s oldest surviving rainforests and Rwanda\'s top destination for primate encounters. Known for its thriving chimpanzee communities, lush green canopy, rare bird species, and refreshing highland climate.',
    bannerImage: 'https://media.istockphoto.com/id/2202935435/photo/adult-chimpanzee-pan-troglodytes-eats-fruit-in-the-tropical-rainforest-of-kibale-national.jpg?s=612x612&w=0&k=20&c=eljj8U1E3JeoZONkk_BzdTq4gijeUe03fD8aI6Ot4i4=',
    galleryImages: [
      'https://media.istockphoto.com/id/2148166953/photo/mother-and-baby-chimpanzees-pan-troglodytes-in-the-tree-canopy-of-kibale-national-park.jpg?s=612x612&w=0&k=20&c=pUl0GJiyg5CtxYgI4w6mwqAxHbKM_MX_ZRt-RlzpSQI=',
      'https://media.istockphoto.com/id/1658360984/photo/a-wild-chimp-sitting-under-streaming-light-in-kibale-national-park-uganda.jpg?s=612x612&w=0&k=20&c=bYlA7QO05EsWc9KlF06_oL55bcYgW7_lrnrJH011cVA=',
      'https://media.istockphoto.com/id/2214959244/photo/adult-chimpanzee-pan-troglodytes-eats-fruit-in-the-tropical-rainforest-of-kibale-national.jpg?s=612x612&w=0&k=20&c=vgLLmbENf2hJKajazwewawpqWvQXMBC7OZhxJPgHmZQ=',
    ],
    highlights: [
      'Chimpanzee trekking in ancient rainforest',
      'Guided forest exploration',
      'Scenic drive through tea plantations',
      'Optional Nyungwe Canopy Walk',
      'Panoramic viewpoints photography',
      'Immersion in Rwanda\'s highland climate'
    ],
    included: [
      'Professional safari & trekking guide',
      'Comfortable 4x4 safari vehicle',
      'Chimpanzee trekking permit',
      '1 night accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast & Lunch)',
      'Drinking water & soft drinks',
      'All park entrance fees',
      'Pick-up and drop-off in Kigali',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Optional Canopy Walk fee',
      'Tips for guide & lodge staff',
      'Personal expenses'
    ],
    customization: [
      'Add extra days',
      'Nyungwe Canopy Walk experience',
      'Tea plantation visits',
      'Additional forest hikes',
      'Customize according to travel schedule'
    ],
    whySpecial: 'Experience one of Africa\'s oldest rainforests with thriving chimpanzee communities. This short yet rewarding safari offers an unforgettable jungle experience with moments of pure nature immersion.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Pickup → Scenic Drive → Nyungwe National Park', 
        description: 'Begin with pickup from your Kigali hotel. Enjoy a scenic drive through Rwanda\'s rolling hills, passing villages, cultural landmarks like the King\'s Palace Museum, and tea plantations. Arrive at Nyungwe National Park for lunch, then check into your lodge for a relaxing evening in the forest atmosphere.', 
        image: 'https://media.istockphoto.com/id/484103233/photo/chimpanzee-sitting-on-a-branch-in-the-kibale-forest.jpg?s=612x612&w=0&k=20&c=vVXqD01kXMv87d37LmkEHAtxuzXuYT1DpRy6CthVz0o=' 
      },
      { 
        day: 2, 
        title: 'Chimpanzee Trekking → Forest Experience → Return to Kigali', 
        description: 'Wake early for chimpanzee trekking starting at 5:00 AM. After briefing by park rangers, trek through misty forest trails to locate chimpanzees. Spend an hour observing their natural behavior. Enjoy relaxation at scenic viewpoints or tea plantations. Optional Canopy Walk available. Return to Kigali with drop-off at hotel or airport.', 
        image: 'https://media.istockphoto.com/id/1268974761/photo/portrait-of-a-male-chimpanzee-sitting-in-a-tree-in-kibale-forest-national-park-in-uganda.jpg?s=612x612&w=0&k=20&c=UgKr3tC_CdeCnTZWjTxhgRXs5itk5AGRLlW_w7yHbdM=' 
      }
    ],
  },

  // New: 2 DAYS AKAGERA BIG FIVE SAFARI
  {
    slug: '2-days-akagera-big-five-safari',
    title: '2 DAYS AKAGERA NATIONAL PARK BIG FIVE SAFARI',
    destination: 'Akagera National Park, Rwanda',
    duration: '2 Days / 1 Night',
    groupSize: '2-6 People',
    difficulty: 'Easy',    category: 'wildlife-safaris',    description: 'The 2 Days Akagera National Park Safari is one of Rwanda\'s most rewarding short wildlife adventures, ideal for travelers who want to experience the Big Five without long travel days. Akagera is Rwanda\'s only savannah reserve and a remarkable conservation success story.',
    bannerImage: 'https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=1920&h=800&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1761638138630-ac09f54ab23a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpb24lMjBmcm9tJTIwYWZyaWNhfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1664793484534-497c51a08efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1667504248323-9e1f83d9af92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D',
,
    ],
    highlights: [
      'Big Five wildlife viewing',
      'Sunset boat safari on Lake Ihema',
      'Full-day game drive',
      'Kigali city orientation',
      'Conservation success story experience',
      'Picnic lunch in the park'
    ],
    included: [
      'Professional English-speaking safari guide',
      'Comfortable 4x4 safari vehicle',
      'Akagera National Park entrance fees',
      'Game drives on both days',
      'Sunset boat safari on Lake Ihema',
      '1 night mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast & Picnic Lunch)',
      'Soft drinks and bottled water',
      'Kigali hotel/airport pick-up & drop-off',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips and gratuities',
      'Personal expenses',
      'Optional activities not mentioned'
    ],
    customization: [
      'Customize according to travel dates',
      'Accommodation preferences',
      'Budget adjustments',
      'Special interests focus',
      'Add extra activities'
    ],
    whySpecial: 'Experience Rwanda\'s only savannah reserve and witness one of Africa\'s most remarkable conservation success stories. Once nearly depleted, Akagera now thrives with lions, elephants, rhinos, leopards, and buffaloes.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali City Tour → Drive to Akagera → Afternoon Game Viewing → Boat Safari', 
        description: 'Begin with hotel pickup in Kigali and a short city tour showcasing Rwanda\'s transformation. Drive to Akagera National Park, enjoying scenic countryside views. Enter the park for an afternoon game drive spotting giraffes, elephants, and buffaloes. Conclude with a peaceful sunset boat safari on Lake Ihema with hippos and crocodiles.', 
        image: 'https://media.istockphoto.com/id/2227032327/photo/hippo-yawning-okavango-delta-botswana.jpg?s=612x612&w=0&k=20&c=72do5ZgLPpreZ1hWGb8LhP0VxJoBRwHUijceH-bm-oM=',
      },
      { 
        day: 2, 
        title: 'Sunrise Safari → Full-Day Game Drive → Picnic Lunch → Return to Kigali', 
        description: 'After early breakfast, embark on a full-day game drive through Akagera\'s northern plains for optimal Big Five sightings. Morning hours offer predator viewing opportunities. Explore savannahs, lakes, and wooded areas with photography stops. Enjoy picnic lunch in the park before returning to Kigali for evening drop-off.', 
        image: 'https://images.unsplash.com/photo-1665070385510-2536c85280fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D' 
      }
    ],
  },

  // New: 3 DAYS GORILLA TREKKING SAFARI
  {
    slug: '3-days-gorilla-trekking-volcanoes',
    title: '3 DAYS GORILLA TREKKING SAFARI',
    destination: 'Volcanoes National Park, Rwanda',
    duration: '3 Days / 2 Nights',
    groupSize: '2-8 People',
    difficulty: 'Challenging',
    category: 'primate-tracking',
    description: 'Embark on a 3 Days Gorilla Trekking Safari exploring the legendary Virunga Mountains and Rwanda\'s renowned Volcanoes National Park. This safari combines wildlife, culture, history, and conservation into one immersive experience, featuring endangered mountain gorillas and Dian Fossey\'s conservation legacy.',
    bannerImage: 'https://media.istockphoto.com/id/700325788/photo/rwanda-tribute-to-dian-fossey.webp?a=1&b=1&s=612x612&w=0&k=20&c=9JKuzNVKUbX98XXFsAO5yLnxI6WxNBRPkek-hKffbRc=',
    galleryImages: [
      'https://images.unsplash.com/photo-1676102818778-7dedb5cdad46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      'https://plus.unsplash.com/premium_photo-1686232984838-7a98edf2e337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
      
    ],
    highlights: [
      'Mountain gorilla trekking experience',
      'Visit Kigali Genocide Memorial',
      'Gorilla Guardian Village cultural experience',
      'Dian Fossey / Ellen DeGeneres Campus tour',
      'Local Rwandan cuisine tasting',
      'Handmade souvenir shopping'
    ],
    included: [
      'Professional knowledgeable safari guide',
      'Comfortable 4x4 safari vehicle with fuel',
      'Gorilla trekking permit',
      'Kigali City Tour',
      'Visit to Kigali Genocide Memorial',
      'Visit to Dian Fossey / Ellen DeGeneres Campus',
      'Gorilla Guardian Village experience',
      '2 nights mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast & Lunch)',
      'Drinking water & soft drinks in vehicle',
      'Park entrance fees',
      'Hotel pick-up & drop-off',
      'All government taxes'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips for guides & lodge staff',
      'Personal expenses',
      'Optional activities not listed'
    ],
    customization: [
      'Tailor to your schedule',
      'Lodge preference customization',
      'Special interests focus',
      'Add extra activities',
      'Personalized experience'
    ],
    whySpecial: 'This three-day safari offers a rare chance to connect deeply with Rwanda\'s wildlife, conservation history, and culture. From walking the paths of Dian Fossey to witnessing mountain gorillas in their natural habitat, the tour combines emotional impact, adventure, and cultural insight.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Highlights → Genocide Memorial → Transfer to Volcanoes National Park', 
        description: 'Begin with hotel pickup in Kigali for a city tour showcasing Rwanda\'s clean streets and modern architecture. Visit the Kigali Genocide Memorial for a reflective educational experience. After lunch, drive through scenic hills to the Virunga Mountains. Check into your lodge near Volcanoes National Park for dinner and overnight.', 
        image: memorial 
      },
      { 
        day: 2, 
        title: 'Gorilla Trekking → Local Lunch → Gorilla Guardian Village', 
        description: 'Wake early for briefing at park headquarters before gorilla trekking. Trek through bamboo forests and mist-covered slopes to encounter a mountain gorilla family. Spend an unforgettable hour observing their behavior. Enjoy local Rwandan lunch, then visit Gorilla Guardian Village for cultural performances and community engagement. Return to lodge for overnight.', 
        image: 'https://images.unsplash.com/photo-1761204853161-f51581bc2f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8' 
      },
      { 
        day: 3, 
        title: 'Dian Fossey Campus → Souvenir Shopping → Return to Kigali', 
        description: 'After breakfast, visit the Dian Fossey - Ellen DeGeneres Campus conservation center to learn about gorilla protection and research. Shop for handmade souvenirs and crafts in Musanze or Kigali, supporting local artisans. Drive back to Kigali for hotel or airport drop-off, concluding your memorable gorilla journey.', 
        image: fosey 
      }
    ],
  },

  // New: 3 DAYS LAKE KIVU KARONGI TOUR
  {
    slug: '3-days-lake-kivu-karongi-tour',
    title: '3 DAYS LAKE KIVU KARONGI TOUR',
    destination: 'Lake Kivu, Rwanda',
    duration: '3 Days / 2 Nights',
    groupSize: '2-6 People',
    difficulty: 'Easy',    category: 'cultural-tours',    description: 'The 3 Days Lake Kivu - Karongi Tour is a peaceful escape designed for travelers who want to slow down and experience Rwanda\'s most scenic lakeside destination. This journey blends breathtaking landscapes, meaningful cultural history, and calming nature moments in Karongi (formerly Kibuye).',
    bannerImage: 'https://images.unsplash.com/photo-1514547085879-968fe519da2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
    galleryImages: [
      'https://images.unsplash.com/photo-1647849975193-bf78bd1cbf4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2UlMjBraXZ1fGVufDB8fDB8fHww',
      'https://media.istockphoto.com/id/919551038/photo/lake-kivu.webp?a=1&b=1&s=612x612&w=0&k=20&c=xqkyG1IgT5eQ_lVNOMIQJRiwa94lDVCpb242JT2GvYA=',
      'https://media.istockphoto.com/id/1777085470/photo/lake-kivu.webp?a=1&b=1&s=612x612&w=0&k=20&c=-i64i6xQ4DojbS5JYHGOp2lWcrzgXmUPwrY6beu4D0k=',
      
    ],
    highlights: [
      'Lake Kivu island boat safari',
      'Ndaba Rock & Waterfall visit',
      'Nyange Students story experience',
      'Stunning lakeside sunsets',
      'Leisure time for swimming/kayaking',
      'Local craft shopping'
    ],
    included: [
      'Professional English-speaking driver-guide',
      'Comfortable 4x4 safari vehicle',
      'Ndaba Rock & Waterfall visit',
      'Lake Kivu island boat ride',
      '2 nights mid-range accommodation',
      'Meals: Day 1 (Lunch & Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast & Lunch)',
      'Drinking water and soft drinks',
      'Pick-up and drop-off in Kigali',
      'Government taxes'
    ],
    excluded: [
      'International flights',
      'Travel insurance',
      'Alcoholic beverages',
      'Tips and gratuities',
      'Optional activities',
      'Personal expenses'
    ],
    customization: [
      'Additional island visits',
      'Coffee experiences',
      'Cultural encounters',
      'Adventure activities',
      'Extra nights at Lake Kivu resorts'
    ],
    whySpecial: 'This journey offers more than just relaxation—it creates a meaningful connection to Rwanda\'s landscapes and stories. From the emotional Nyange narrative to the calm waters of Lake Kivu and unforgettable sunsets, this tour leaves travelers refreshed, inspired, and deeply connected to Rwanda\'s natural beauty.',
    itinerary: [
      { 
        day: 1, 
        title: 'Kigali Pickup → Ndaba Rock & Waterfall → Scenic Drive to Karongi', 
        description: 'Morning pickup in Kigali with scenic drive through rolling hills and tea plantations. Stop at Ndaba Rock for guided walk to waterfall and hear the powerful story of Nyange Students. Continue to Karongi for lakeside relaxation and stunning Lake Kivu sunset. Dinner and overnight at lakeside lodge.', 
        image: 'https://images.unsplash.com/photo-1706977570024-fefa419c48c8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
      },
      { 
        day: 2, 
        title: 'Lake Kivu Boat Safari → Island Exploration → Leisure Time', 
        description: 'After breakfast, enjoy calm morning boat ride on Lake Kivu, exploring nearby islands and learning about local fishing life. Return to lodge for lunch. Afternoon at leisure with optional activities: swimming, kayaking, lakeside walks, or simply relaxing. Dinner and overnight in Karongi.', 
        image: 'https://images.unsplash.com/photo-1720798376172-315db0750330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8' 
      },
      { 
        day: 3, 
        title: 'Lakeside Morning → Scenic Viewpoints → Return to Kigali', 
        description: 'Wake to fresh lake air with leisurely breakfast and lake views. Visit scenic viewpoints for final photos and reflection. Shop at local craft shops for handmade souvenirs supporting local artisans. Begin relaxed drive back to Kigali, arriving afternoon to conclude your refreshing Lake Kivu experience.', 
        image: 'https://plus.unsplash.com/premium_photo-1720054284481-6bb20440708f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' 
      }
    ],
  },
 // New: 7 DAYS RWANDA CLASSIC ADVENTURE
  {
    slug: 'rwanda-classic-adventure',
    title: '7 DAYS RWANDA CLASSIC ADVENTURE',
    destination: 'Rwanda',
    duration: '7 Days / 6 Nights',
    groupSize: '2-8 People',
    difficulty: 'Moderate',
    category: 'multi-day-tours',
    description: 'The 7 Days Rwanda Classic Adventure is Dream Destination Tours and Travel\'s top recommended safari, specially crafted for travelers eager to experience Rwanda\'s stunning landscapes, extraordinary wildlife, and rich cultural heritage. From the misty rainforests of Nyungwe National Park to the majestic Volcanoes National Park, and the serene shores of Lake Kivu to the vibrant streets of Kigali, this safari showcases Rwanda\'s diversity in one seamless journey. Trek chimpanzees, stroll along the famous Nyungwe Canopy Walk, enjoy lakeside tranquility, encounter mountain gorillas, meet playful golden monkeys, and explore the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund.',
    bannerImage: 'https://images.unsplash.com/photo-1651860282296-47055c68580e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fHww',
    galleryImages: [
      'https://images.unsplash.com/photo-1598605170898-853b9ae903fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cndhbmRhfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1651860282296-47055c68580e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cndhbmRhfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1631774991422-ccc98283d33f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cndhbmRhfGVufDB8fDB8fHww',
      
    ],
    highlights: [
      'Chimpanzee trekking in Nyungwe Forest',
      'Nyungwe Canopy Walk experience',
      'Relaxation at Lake Kivu',
      'Mountain gorilla trekking',
      'Golden monkey encounter',
      'Ellen DeGeneres Campus visit',
      'Kigali city tour'
    ],
    included: [
      'Expert Dream Destination Tours and Travel safari guide',
      'Comfortable 4x4 safari vehicle',
      'Chimpanzee trekking permit',
      'Gorilla trekking permit',
      'Golden monkey permit',
      'Nyungwe Canopy Walk',
      'One night at Lake Kivu',
      '6 nights accommodation',
      'All meals (Breakfast, Lunch & Dinner)',
      'Drinking water & soft drinks',
      'All park fees & taxes',
      'Airport pick-up & drop-off'
    ],
    excluded: [
      'International flights',
      'Personal travel insurance',
      'Alcoholic beverages',
      'Tips',
      'Optional activities',
      'Personal expenses'
    ],
    whySpecial: 'Experience Rwanda\'s most engaging blend of primates, volcanoes, lakes, rainforest, culture, and conservation. Each day offers a new highlight, from thrilling wildlife encounters to scenic landscapes, creating a truly unforgettable and emotional safari journey. This is Rwanda\'s #1 recommended adventure primate safari.',
    itinerary: [
      { 
        day: 1, 
        title: 'Arrival in Kigali → City Tour → Overnight', 
        description: 'Upon arrival, your Dream Destination Tours and Travel guide welcomes you at Kigali International Airport. Begin your journey with a Kigali City Tour, exploring Rwanda\'s clean streets, modern architecture, and cultural landmarks. Learn fascinating insights about Rwanda\'s transformation and local life.', 
        image: 'https://media.istockphoto.com/id/1148675617/photo/kigali-city-centre-skyline-and-surrounding-areas-lit-up-at-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=D2CrRjp8242XRTAOh92UuXFBQnUaH-qD9Hucjf9WXDY=' 
      },
      { 
        day: 2, 
        title: 'Kigali → Transfer to Nyungwe Forest', 
        description: 'Travel through rolling hills, lush tea plantations, and scenic countryside as you head to Nyungwe National Park, Africa\'s ancient rainforest gem. Your guide will share knowledge on Rwanda\'s biodiversity, conservation efforts, and local communities.', 
        image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cndhbmRhfGVufDB8fDB8fHww' 
      },
      { 
        day: 3, 
        title: 'Chimpanzee Trekking → Canopy Walk', 
        description: 'Early morning, trek into the dense Nyungwe Forest to encounter chimpanzees in their natural habitat. Later, enjoy the Nyungwe Canopy Walk for breathtaking panoramic views of the rainforest and distant hills. Capture stunning photos while learning about the forest\'s unique ecosystem.', 
        image: 'https://media.istockphoto.com/id/1658360984/photo/a-wild-chimp-sitting-under-streaming-light-in-kibale-national-park-uganda.jpg?s=612x612&w=0&k=20&c=bYlA7QO05EsWc9KlF06_oL55bcYgW7_lrnrJH011cVA=' 
      },
      { 
        day: 4, 
        title: 'Nyungwe → Drive to Lake Kivu → Sunset Relaxation', 
        description: 'Leave the forest behind for a scenic drive to Lake Kivu, one of Rwanda\'s most serene lakes. Enjoy a relaxing afternoon by the water, perfect for photography, lakeside walks, and observing local fisherman villages. Take in stunning sunset views.', 
        image: 'https://media.istockphoto.com/id/1295606238/photo/sunset-in-the-sea.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qofr6pdxZxXTfJKcGx7CM_DNjPYPqF_kWUWDhYu2C2M=' 
      },
      { 
        day: 5, 
        title: 'Lake Kivu → Transfer to Volcanoes National Park', 
        description: 'Start your day with peaceful lakeside moments and optional morning strolls. Then travel north to Volcanoes National Park, home of Rwanda\'s iconic mountain gorillas. Learn about the volcanic landscapes and rich biodiversity en route.', 
        image: kalisimbi 
      },
      { 
        day: 6, 
        title: 'Gorilla Trekking → Ellen DeGeneres Campus Visit', 
        description: 'Embark on your Gorilla Trekking experience, venturing into the Virunga Mountains to spend a magical hour with a gorilla family. After the trek, visit the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund to discover her groundbreaking conservation work.', 
        image: 'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' 
      },
      { 
        day: 7, 
        title: 'Golden Monkey Trek → Return to Kigali → Departure', 
        description: 'Begin the day with an energetic Golden Monkey Trek in the bamboo forests. Afterward, drive back to Kigali for shopping at local markets for handmade crafts, Rwandan coffee, and souvenirs. Your safari concludes with airport drop-off or hotel transfer.', 
        image: 'https://images.unsplash.com/photo-1722293111697-33c566a58b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww' 
      }
    ],
  },

  // 1 DAY AKAGERA NATIONAL PARK TOUR
{
  slug: '1-day-akagera-big-five-safari',
  title: '1 DAY AKAGERA NATIONAL PARK BIG FIVE SAFARI',
  destination: 'Akagera National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-6 People',
  difficulty: 'Easy',  
  category: 'wildlife-safaris',
  description: 'This 1 Day Akagera National Park Safari from Kigali is a perfect choice for travelers who want to experience Rwanda\'s Big Five in a single, carefully planned day. Akagera National Park is Rwanda\'s only savannah reserve, famous for its wide plains, lakes, rolling hills, and one of Africa\'s most successful wildlife restoration stories.',
  bannerImage: 'https://media.istockphoto.com/id/1128748845/photo/group-of-african-elephants-in-the-wild.webp?a=1&b=1&s=612x612&w=0&k=20&c=dIsLyKJxl_xtn9F6DNG-mRLXXgq5zVOJN1K2pf8oqK4=',
  galleryImages: [
    'https://images.unsplash.com/photo-1551357246-9a602bac321e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlcGhhbnRzJTIwaW4lMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1600337983409-b8efd8282945?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJpZyUyMGZpdmUlMjBhbmltYWxzfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/2171706193/photo/close-up-of-female-leopard-sitting-in-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=FBAGA2F7aHPmMg_Y8Qd74dRQaO_3drM-MDZGPXlMNuA=',
    
  ],
  highlights: [
    'Big Five wildlife experience in one day',
    'Scenic drive through Rwanda\'s countryside',
    'Extensive game drive in diverse habitats',
    'Picnic lunch inside the national park',
    'Visit to Akagera\'s northern plains',
    'Learn about Rwanda\'s conservation success'
  ],
  included: [
    'Professional English-speaking safari guide',
    'Well-maintained 4x4 safari vehicle',
    'Akagera National Park entrance fees',
    'Full-day guided game drive',
    'Picnic lunch inside the park',
    'Bottled drinking water and soft drinks',
    'Hotel or airport pick-up and drop-off in Kigali',
    'All applicable government taxes'
  ],
  excluded: [
    'International and domestic flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips and gratuities',
    'Optional activities not mentioned',
    'Personal expenses'
  ],
  customization: [
    'Early sunrise departure',
    'Boat safari on Lake Ihema',
    'Extended game viewing in northern sector',
    'Personalized itinerary adjustments'
  ],
  whySpecial: 'This day tour delivers a complete safari experience in just one day, combining wildlife sightings, breathtaking scenery, and meaningful storytelling. Guests leave with a deeper appreciation of Rwanda\'s conservation success, memorable encounters with wildlife, and a sense of calm from spending time in one of East Africa\'s most peaceful national parks.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Akagera National Park Safari', 
      description: 'Early morning pickup from Kigali hotel. Travel east through green hills and rural villages to Akagera National Park. Enjoy rewarding game drive through woodlands, savannah, wetlands, and lakeshores. Learn about animal behavior and conservation. Stop for picnic lunch at scenic location inside park. Continue to northern plains for extensive wildlife viewing and photography. Return to Kigali in late afternoon for hotel or airport drop-off.', 
      image: 'https://plus.unsplash.com/premium_photo-1661810398337-1fddd20130c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lyYWZmZSUyMGluJTIwYWZyaWNhfGVufDB8fDB8fHww' 
    }
  ],
},

// 1 DAY GORILLA TREKKING TOUR
{
  slug: '1-day-gorilla-trekking-from-kigali',
  title: '1 DAY GORILLA TREKKING TOUR FROM KIGALI',
  destination: 'Volcanoes National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-8 People',
  difficulty: 'Challenging',  category: 'primate-tracking',  description: 'The 1 Day Gorilla Trekking Tour from Kigali with Dream Destination Tours & Travel is designed for travelers who want Rwanda\'s most iconic wildlife experience in just a single day. Departing early from Kigali, this tour takes you to the legendary Virunga Mountains, home to endangered mountain gorillas, and introduces you to Rwanda\'s inspiring conservation story pioneered by Dr. Dian Fossey.',
  bannerImage: 'https://images.unsplash.com/photo-1669559512630-b17c3e8e22b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  galleryImages: [
    'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1686232984838-7a98edf2e337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1761204853161-f51581bc2f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
    
  ],
  highlights: [
    'Mountain gorilla trekking in one day',
    'Visit Volcanoes National Park',
    'Learn about Dr. Dian Fossey\'s conservation work',
    'Traditional Rwandan lunch',
    'Optional Ellen DeGeneres Campus visit',
    'Early morning scenic drive'
  ],
  included: [
    'Professional gorilla trekking guide and rangers',
    'Comfortable 4x4 safari vehicle',
    'Gorilla trekking permit',
    'Round-trip transport from Kigali',
    'Lunch at a local restaurant',
    'Drinking water & soft drinks',
    'Park entrance fees',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips for guides & lodge staff',
    'Personal expenses'
  ],
  customization: [
    'Flexible pick-up times',
    'Lunch preferences',
    'Optional cultural stops',
    'Additional village visits',
    'Ellen DeGeneres Campus visit'
  ],
  whySpecial: 'This short but impactful tour offers a rare opportunity to connect deeply with Rwanda\'s wildlife and conservation legacy. Meeting mountain gorillas in their natural home is a moving, inspirational experience that leaves a lasting impression of Rwanda\'s commitment to protecting its natural heritage.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Gorilla Trekking Adventure', 
      description: 'Early morning pickup at 4:30 AM from Kigali hotel. Comfortable drive through scenic countryside while guide shares conservation story of Dr. Dian Fossey. Arrive at Volcanoes National Park Headquarters for check-in and briefing. Hike through bamboo forests and misty slopes with park rangers to encounter mountain gorilla family. Spend magical hour observing gorillas in natural habitat. Enjoy traditional Rwandan lunch at local restaurant. Optional visit to Ellen DeGeneres Campus or Gorilla Guardian Cultural Village. Return to Kigali for afternoon or evening drop-off at hotel.', 
      image: 'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' 
    }
  ],
},

// 1 DAY NYUNGWE NATIONAL PARK TOUR
{
  slug: '1-day-nyungwe-national-park-tour',
  title: '1 DAY NYUNGWE NATIONAL PARK TOUR EXPERIENCE',
  destination: 'Nyungwe National Park, Rwanda',
  duration: '1 Day',
  groupSize: '2-6 People',
  difficulty: 'Moderate',  category: 'cultural-tours',  description: 'The 1 Day Nyungwe National Park Tour with Dream Destination Tours & Travel is a perfect blend of culture, nature, and adventure, designed for travelers who want to experience Rwanda\'s highlights in a single rewarding day. Ideal as a Kigali day trip, this journey takes you through Rwanda\'s southern landscapes to the iconic Nyanza King\'s Palace Museum and deep into Nyungwe National Park, one of Africa\'s oldest and most biologically rich rainforests.',
  bannerImage: nyungwe,
  galleryImages: [
    waterfall,
    canopy,
    colobus
  ],
  highlights: [
    'Visit Nyanza King\'s Palace Museum',
    'Nyungwe Canopy Walk experience',
    'Nyungwe Zipline (longest in East Africa)',
    'Scenic drive through tea plantations',
    'Lunch at forest lodge',
    'Cultural and historical insights'
  ],
  included: [
    'Professional experienced tour guide',
    'Comfortable 4x4 safari vehicle with fuel',
    'Visit to Nyanza King\'s Palace Museum',
    'Nyungwe National Park entrance fees',
    'Lunch',
    'Drinking water and soft drinks',
    'Kigali hotel pick-up and drop-off',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Optional canopy walk if added separately',
    'Alcoholic beverages',
    'Tips for guides and museum staff',
    'Personal expenses'
  ],
  customization: [
    'Tea plantation visits',
    'Extended cultural encounters',
    'Additional stops based on interests',
    'Schedule adjustments',
    'Customized itinerary'
  ],
  whySpecial: 'This day tour offers a rare opportunity to connect with Rwanda\'s royal history, ancient rainforest ecosystems, and adventure attractions in a single journey. It is ideal for travelers with limited time who still want meaningful experiences, stunning scenery, and deeper cultural understanding.',
  itinerary: [
    { 
      day: 1, 
      title: 'Full Day Nyungwe Cultural & Adventure Tour', 
      description: 'Early morning pickup from Kigali hotel. Scenic drive south through rolling hills and tea plantations. Stop at Nyanza King\'s Palace Museum to explore royal residence and learn about Rwanda\'s monarchy and traditional culture. Continue to Nyungwe National Park. Enjoy lunch at forest lodge surrounded by nature. Experience Nyungwe Canopy Walk - suspended bridge with panoramic forest views. Enjoy Nyungwe Zipline (2km across valleys and treetops). Begin return drive to Kigali, arriving in evening with lasting memories.', 
      image: kim
    }
  ],
},
 // 4 DAYS VOLCANOES NATIONAL PARK SAFARI
{
  slug: '4-days-volcanoes-gorillas-golden-monkeys-lake-kivu',
  title: '4 DAYS VOLCANOES NATIONAL PARK SAFARI',
  destination: 'Volcanoes National Park & Lake Kivu, Rwanda',
  duration: '4 Days / 3 Nights',
  groupSize: '2-8 People',
  difficulty: 'Challenging',
  category: 'multi-day-tours',
  description: 'This 4 Days Volcanoes National Park Safari is a carefully designed Rwanda experience that brings together three of the country\'s most celebrated highlights: mountain gorilla trekking, golden monkey tracking, and relaxation at the scenic shores of Lake Kivu. Journey through the iconic Virunga Mountains, encounter rare primates found nowhere else on Earth, and unwind beside one of Africa\'s most peaceful freshwater lakes.',
  bannerImage: 'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  galleryImages: [
    'https://images.unsplash.com/photo-1663924665428-e5b35266f7cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    'https://plus.unsplash.com/premium_photo-1686232984838-7a98edf2e337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1761204853161-f51581bc2f28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
    
  ],
  highlights: [
    'Mountain gorilla trekking adventure',
    'Golden monkey tracking experience',
    'Lake Kivu lakeside relaxation',
    'Kigali city highlights tour',
    'Scenic drive through Virunga Mountains',
    'Optional Lake Kivu boat ride'
  ],
  included: [
    'Professional experienced safari guide',
    'Comfortable 4x4 safari vehicle',
    'Gorilla trekking permit',
    'Golden monkey trekking permit',
    'Kigali City Tour',
    '3 nights mid-range accommodation',
    'Meals: Day 1 (Dinner), Day 2 (Breakfast, Lunch & Dinner), Day 3 (Breakfast, Lunch & Dinner), Day 4 (Breakfast)',
    'Bottled drinking water and soft drinks in vehicle',
    'All park entrance fees',
    'Pick-up and drop-off services',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Optional Lake Kivu activities',
    'Tips for guide and hotel staff',
    'Personal expenses'
  ],
  customization: [
    'Preferred accommodation style',
    'Travel dates adjustments',
    'Additional activities',
    'Customized itinerary'
  ],
  whySpecial: 'This journey offers a rare combination of Rwanda\'s most iconic wildlife encounters and peaceful lakeside relaxation. From meeting mountain gorillas and golden monkeys in their natural habitat to unwinding along Lake Kivu\'s tranquil shores, this safari delivers rich experiences, emotional moments, and lifelong memories.',
  itinerary: [
    { 
      day: 1, 
      title: 'Kigali Arrival → City Highlights → Scenic Drive to Volcanoes National Park', 
      description: 'Begin with pickup in Kigali for a relaxed city tour showcasing Rwanda\'s clean capital. Visit panoramic viewpoints and cultural sites. Drive north through rolling hills to Volcanoes National Park. Check into your lodge, enjoy dinner, and prepare for upcoming primate adventures.', 
      image: 'https://media.istockphoto.com/id/1254047479/photo/modern-kigali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bM9D7b_Xe7YLMy__eBXP627kk-fvtsuy5LlG87VmI3s=' 
    },
    { 
      day: 2, 
      title: 'Mountain Gorilla Trekking Adventure → Lodge Relaxation', 
      description: 'After early breakfast, transfer to park headquarters for gorilla trekking briefing. Trek through bamboo forests and volcanic slopes with expert trackers to find a habituated mountain gorilla family. Spend an emotional hour observing their behavior. Enjoy local lunch, then relax at your lodge with peaceful surroundings.', 
      image: 'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' 
    },
    { 
      day: 3, 
      title: 'Golden Monkey Trekking → Transfer to Lake Kivu', 
      description: 'Start with golden monkey trekking - watch these colorful, energetic primates leap through forest zones. After trekking, depart Volcanoes National Park and drive west to Lake Kivu. Enjoy dramatic landscapes, coffee plantations, and rural communities. Arrive for lakeside relaxation and stunning sunset views.', 
      image: 'https://images.unsplash.com/photo-1722293128789-d0155fa8e9ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww' 
    },
    { 
      day: 4, 
      title: 'Lake Kivu Leisure → Optional Boat Ride → Return to Kigali', 
      description: 'Wake to calm lake views for a peaceful morning. Optional activities: relax at hotel, swim, or take boat ride to explore islands and fishing villages. Begin scenic drive back to Kigali with stops as needed. Drop-off at hotel or Kigali International Airport.', 
      image: 'https://images.unsplash.com/photo-1626096687242-bbb8cb1ca031?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFrZSUyMGtpdnV8ZW58MHx8MHx8fDA%3D' 
    }
  ],
},

// 5 DAYS BEST OF RWANDA SAFARI
{
  slug: '5-days-best-of-rwanda-safari',
  title: '5 DAYS BEST OF RWANDA SAFARI',
  destination: 'Akagera & Volcanoes National Parks, Rwanda',
  duration: '5 Days / 4 Nights',
  groupSize: '2-8 People',
  difficulty: 'Moderate',
  category: 'multi-day-tours',
  description: 'The 5 Days Best of Rwanda Safari with Dream Destination Tours & Travel is the ultimate introduction to Rwanda, offering a curated loop through the country\'s top highlights. Witness the Big Five in Akagera National Park, trek with endangered mountain gorillas in Volcanoes National Park, and explore Kigali\'s rich culture and history.',
  bannerImage: 'https://plus.unsplash.com/premium_photo-1669740462478-135db9b990ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlcGhhbnRzfGVufDB8fDB8fHww',
  galleryImages: [
    'https://media.istockphoto.com/id/599888852/photo/lion-in-savannah.webp?a=1&b=1&s=612x612&w=0&k=20&c=hniw05s_EpIuWZHNHE06jUza-JrVxioO-Ji6yWILha0=',
    'https://plus.unsplash.com/premium_photo-1686232984838-7a98edf2e337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    akagera,
    
  ],
  highlights: [
    'Big Five wildlife in Akagera',
    'Mountain gorilla trekking',
    'Sunset boat safari on Lake Ihema',
    'Iby\'iwacu Cultural Village visit',
    'Kigali city tour with Genocide Memorial',
    'Picnic lunch in Akagera National Park'
  ],
  included: [
    'Professional safari guide and driver',
    'Comfortable 4x4 safari vehicle with fuel',
    'Gorilla trekking permit',
    'Akagera park fees & boat safari',
    'Iby\'iwacu cultural village visit',
    '4 nights mid-range accommodation',
    'Meals as listed in itinerary',
    'Picnic lunch on Day 2',
    'Drinking water & soft drinks in vehicle',
    'Kigali pick-up & drop-off',
    'All government taxes'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic drinks',
    'Tips for guides & lodge staff',
    'Optional activities not listed',
    'Personal expenses'
  ],
  customization: [
    'Lodge upgrades',
    'Extended stops at Twin Lakes or Nyungwe',
    'Pace of travel adjustments',
    'Additional activities'
  ],
  whySpecial: 'This 5-day loop leaves travelers with vivid memories: tranquil boat rides, open savannah game drives, emotional gorilla encounters, and cultural insights into Rwanda\'s heritage and conservation. Compact yet deeply rewarding, it is the perfect introduction to Rwanda for first-time visitors.',
  itinerary: [
    { 
      day: 1, 
      title: 'Arrival → Transfer to Akagera → Sunset Boat Safari', 
      description: 'Upon arrival at Kigali International Airport or hotel, begin scenic drive east to Akagera National Park. Enjoy rolling hills and local insights. Embark on serene sunset boat safari on Lake Ihema, spotting hippos, crocodiles, and water birds. Overnight at lodge in/near the park.', 
      image: 'data:image/jpeg;base64,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' 
    },
    { 
      day: 2, 
      title: 'Full Day Game Drive → Picnic Lunch → Return to Kigali', 
      description: 'Begin early with full-day game drive across Akagera\'s savannahs and wetlands. Spot zebras, elephants, buffalo, giraffes, with chances for Big Five sightings. Enjoy picnic lunch within the park. Return to Kigali in evening for overnight at your hotel.', 
      image: picnic
    },
    { 
      day: 3, 
      title: 'Kigali → Transfer to Volcanoes NP → Iby\'iwacu Cultural Visit', 
      description: 'After breakfast, travel north to Volcanoes National Park. Enjoy stunning Virunga landscapes. Visit Iby\'iwacu Cultural Village for traditional performances, local crafts, and cultural storytelling showcasing Rwanda\'s heritage. Dinner and overnight at lodge near Volcanoes.', 
      image: kigaliToVolcanoes 
    },
    { 
      day: 4, 
      title: 'Gorilla Trekking → Local Lunch → Lodge Relaxation', 
      description: 'Wake early for briefing at park headquarters before gorilla trek. Walk through bamboo forests and misty slopes to encounter mountain gorilla family up close. Learn about their behavior and conservation. Enjoy local lunch and unwind at lodge with panoramic mountain views.', 
      image: 'https://images.unsplash.com/photo-1614528767034-70de9fe166e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' 
    },
    { 
      day: 5, 
      title: 'Return to Kigali → Kigali City Tour → Shopping & Departure', 
      description: 'Drive back to Kigali with scenic stops. Explore city with guided tour including Genocide Memorial, viewpoints, and craft markets. Learn about Rwanda\'s history and resilience. Finish with souvenir shopping before final drop-off at hotel or airport.', 
      image: memorial 
    }
  ],
},

// 10 DAYS PRIME RWANDA SAFARI
{
  slug: '10-days-prime-rwanda-safari',
  title: '10 DAYS PRIME RWANDA SAFARI',
  destination: 'Rwanda (Akagera, Nyungwe, Lake Kivu, Volcanoes)',
  duration: '10 Days / 9 Nights',
  groupSize: '2-8 People',
  difficulty: 'Moderate',
  category: 'multi-day-tours',
  description: 'The 10 Days Prime Rwanda Safari with Dream Destination Tours & Travel is the ultimate Rwanda experience, designed for travelers who want to explore the country\'s wildlife, primates, lakes, and culture in a seamless loop. From Kigali to Akagera, Nyungwe, Lake Kivu, and Volcanoes Mountains, this itinerary showcases Rwanda\'s most iconic destinations.',
  bannerImage: 'https://plus.unsplash.com/premium_photo-1664302715906-196b48e1567b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpb24lMjBpbiUyMGFmcmljYXxlbnwwfHwwfHx8MA%3D%3D',
  galleryImages: [
    'https://images.unsplash.com/photo-1673624522244-8de0d50b8492?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1663935373988-c3fbf964f2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z29yaWxsYSUyMHRyZWtraW5nfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHplYnJhfGVufDB8fDB8fHww',
    
  ],
  highlights: [
    'Big Five game drive in Akagera',
    'Chimpanzee trekking in Nyungwe',
    'Mountain gorilla trekking',
    'Golden monkey tracking',
    'Nyungwe Canopy Walk',
    'Lake Kivu boat experience',
    'Twin Lakes visit',
    'Kigali city tour',
    'Sunset boat safari on Lake Ihema'
  ],
  included: [
    'Expert friendly safari guide (full tour)',
    'Comfortable 4x4 safari vehicle with fuel',
    'Gorilla trekking permit',
    'Golden monkey trekking permit',
    'Chimpanzee trekking permit',
    'Kigali City Tour',
    'Nyungwe Canopy Walk',
    'Akagera safari & boat experience',
    'Lake Kivu boat experience',
    '9 nights mid-range accommodation',
    'Meals: Breakfast, Lunch & Dinner as per itinerary',
    'Drinking water & soft drinks',
    'All park fees & government taxes',
    'Airport pick-up & drop-off'
  ],
  excluded: [
    'International flights',
    'Personal travel insurance',
    'Alcoholic beverages',
    'Tips for guides & lodge staff',
    'Optional activities not listed',
    'Personal expenses'
  ],
  customization: [
    'Travel dates adjustments',
    'Preferred hotel upgrades',
    'Extra activities',
    'Extended stops',
    'Special interests focus'
  ],
  whySpecial: 'This is Rwanda\'s most comprehensive safari, offering wildlife, primates, lakes, culture, and landscapes in a seamless loop. Each day provides a new highlight, from Big Five sightings and chimpanzees to mountain gorillas and serene lakes. Travelers leave with a deep understanding of Rwanda\'s beauty, people, and conservation efforts.',
  itinerary: [
    { 
      day: 1, 
      title: 'Arrival → Kigali City Tour → Dinner & Overnight', 
      description: 'Upon arrival at Kigali International Airport, your guide welcomes you for a Kigali City Tour exploring clean streets, landmarks, viewpoints, and cultural highlights. After lunch, check into hotel for relaxing dinner. Perfect introduction to Rwanda\'s capital.', 
      image: 'https://media.istockphoto.com/id/1254047479/photo/modern-kigali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bM9D7b_Xe7YLMy__eBXP627kk-fvtsuy5LlG87VmI3s=' 
    },
    { 
      day: 2, 
      title: 'Kigali → Akagera NP → Short Game Drive → Sunset Boat Safari', 
      description: 'Travel east to Akagera National Park, Rwanda\'s only savannah reserve. Enjoy introductory game drive spotting wildlife with picnic lunch. Experience serene sunset boat cruise on Lake Ihema with hippos, birds, and picturesque landscapes. Overnight at lodge in/near park.', 
      image: 'https://images.unsplash.com/photo-1665069671745-3b67372facbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWthZ2VyYSUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      day: 3, 
      title: 'Full-Day Big Five Game Drive → Return to Kigali', 
      description: 'Start early for full-day game drive in Akagera\'s northern plains. Guide highlights key wildlife, conservation efforts, and scenic viewpoints. Enjoy picnic lunch within park before returning to Kigali in evening for dinner and overnight.', 
      image: 'https://images.unsplash.com/photo-1465471765877-2e7a264830d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJoaW5vY2Vyb3N8ZW58MHx8MHx8fDA%3D' 
    },
    { 
      day: 4, 
      title: 'Kigali → Nyungwe National Park → Dinner & Overnight', 
      description: 'Drive southwest through rolling hills and tea plantations to Nyungwe National Park, known for rich biodiversity and ancient rainforest. Stop for lunch en route before arriving at lodge. Dinner and overnight among lush forest surroundings.', 
      image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Tnl1bmd3ZXxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      day: 5, 
      title: 'Chimpanzee Trekking → Canopy Walk → Overnight in Nyungwe', 
      description: 'After early briefing, embark on Chimpanzee Trekking through Nyungwe\'s misty rainforest. Observe intelligent primates in natural habitat. After lunch at lodge, walk Nyungwe Canopy Walk for panoramic views of forest canopy. Dinner and overnight at lodge.', 
      image: 'https://media.istockphoto.com/id/2148166953/photo/mother-and-baby-chimpanzees-pan-troglodytes-in-the-tree-canopy-of-kibale-national-park.jpg?s=612x612&w=0&k=20&c=pUl0GJiyg5CtxYgI4w6mwqAxHbKM_MX_ZRt-RlzpSQI=' 
    },
    { 
      day: 6, 
      title: 'Nyungwe → Lake Kivu (Karongi) → Lakeside Relaxation', 
      description: 'Drive from rainforest to tranquil shores of Lake Kivu. Check into lakeside hotel and enjoy calm afternoon soaking in scenic views. Lunch at hotel or nearby restaurant. Spend evening relaxing by lake as sun sets. Dinner and overnight stay.', 
      image: 'https://images.unsplash.com/photo-1514547085879-968fe519da2c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      day: 7, 
      title: 'Lake Kivu Boat Experience → Transfer to Volcanoes NP', 
      description: 'Start morning with optional boat ride on Lake Kivu, exploring islands and fishing villages. Drive north to Volcanoes National Park, home to mountain gorillas. Check into lodge, enjoy lunch, and prepare for gorilla adventure. Dinner and overnight near Volcanoes.', 
      image: boatTour
    },
    { 
      day: 8, 
      title: 'Gorilla Trekking → Relaxation → Dinner & Overnight', 
      description: 'Begin with early gorilla trekking briefing before hiking through bamboo forests and volcano slopes. Spend magical hour with mountain gorilla family, witnessing behavior up close. Return to lodge for lunch and relaxation with stunning mountain scenery. Dinner and overnight.', 
      image: 'https://plus.unsplash.com/premium_photo-1686232984838-7a98edf2e337?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8' 
    },
    { 
      day: 9, 
      title: 'Golden Monkey Trekking → Twin Lakes Visit → Overnight', 
      description: 'Morning Golden Monkey Trekking - lively, playful primate encounter in Volcanoes NP. Later visit Twin Lakes Burera & Ruhondo for breathtaking views and photo opportunities. Immerse in local culture and landscapes before returning to lodge for dinner and overnight.', 
      image: 'https://images.unsplash.com/photo-1722293111697-33c566a58b2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZGVuJTIwbW9ua2V5fGVufDB8fDB8fHww' 
    },
    { 
      day: 10, 
      title: 'Volcanoes NP → Kigali → Shopping for Local Gifts → Departure', 
      description: 'Drive back to Kigali with scenic stops. Visit local markets and craft shops for souvenirs, art, baskets, and coffee. End your Prime Rwanda Safari with hotel drop-off or airport transfer, leaving with lasting memories of Rwanda\'s wildlife, culture, and natural beauty.', 
      image: gift 
    }
  ],
}]

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find((t) => t.slug === slug);
};