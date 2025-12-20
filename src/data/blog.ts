export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ultimate-gorilla-trekking-guide',
    title: 'The Ultimate Guide to Gorilla Trekking in East Africa',
    excerpt: 'Everything you need to know before embarking on a life-changing gorilla trekking adventure in Uganda or Rwanda.',
    content: `
      <p>Gorilla trekking is one of the most extraordinary wildlife experiences on Earth. Coming face-to-face with these gentle giants in their natural habitat is a moment that stays with you forever.</p>
      
      <h2>Where to Go Gorilla Trekking</h2>
      <p>Mountain gorillas can only be found in two locations: the Virunga Mountains (spanning Uganda, Rwanda, and the DRC) and Bwindi Impenetrable Forest in Uganda. Both destinations offer unique experiences.</p>
      
      <h2>Best Time to Visit</h2>
      <p>Gorilla trekking is possible year-round, but the dry seasons (June-September and December-February) offer the best conditions. The trails are less muddy and hiking is more comfortable.</p>
      
      <h2>What to Expect</h2>
      <p>Treks can range from 1-8 hours depending on where the gorillas are located. Once you find them, you'll have one precious hour to observe and photograph these incredible creatures.</p>
      
      <h2>Essential Tips</h2>
      <ul>
        <li>Book permits well in advance (especially for Rwanda)</li>
        <li>Hire a porter – they make the trek much easier</li>
        <li>Bring waterproof gear and sturdy hiking boots</li>
        <li>Maintain a 7-meter distance from the gorillas</li>
      </ul>
    `,
    author: 'James Okonkwo',
    date: 'December 15, 2024',
    category: 'Wildlife',
    readTime: '8 min read',
  },
  {
    slug: 'best-time-visit-serengeti',
    title: 'Best Time to Visit the Serengeti for the Great Migration',
    excerpt: 'Learn when to witness the greatest wildlife spectacle on Earth and how to plan your Serengeti safari.',
    content: `
      <p>The Great Migration is nature's most spectacular show, with over 1.5 million wildebeest and hundreds of thousands of zebras moving through the Serengeti ecosystem.</p>
      
      <h2>Understanding the Migration</h2>
      <p>The migration is a continuous cycle, with animals following the rains in search of fresh grazing. Understanding this pattern is key to timing your visit.</p>
      
      <h2>Month-by-Month Guide</h2>
      <p><strong>January-March:</strong> Calving season in the southern Serengeti. Great for predator action.</p>
      <p><strong>April-May:</strong> Long rains. Fewer tourists but challenging conditions.</p>
      <p><strong>June-July:</strong> Migration moves north. River crossings begin.</p>
      <p><strong>August-October:</strong> Peak Mara River crossings. The most dramatic scenes.</p>
      <p><strong>November-December:</strong> Migration returns south. Short rains begin.</p>
    `,
    author: 'Priya Sharma',
    date: 'December 10, 2024',
    category: 'Safari Tips',
    readTime: '6 min read',
  },
  {
    slug: 'kenya-vs-tanzania-safari',
    title: 'Kenya vs Tanzania: Which Safari Destination is Right for You?',
    excerpt: 'A comprehensive comparison to help you choose between these two incredible East African safari destinations.',
    content: `
      <p>Both Kenya and Tanzania offer world-class safari experiences, but they have distinct characteristics that may make one more suitable for your trip.</p>
      
      <h2>Wildlife & Parks</h2>
      <p>Tanzania is larger with more park land, including the famous Serengeti and Ngorongoro Crater. Kenya's Masai Mara is smaller but densely packed with wildlife.</p>
      
      <h2>Crowds & Tourism</h2>
      <p>Kenya's parks tend to be more accessible and can feel busier. Tanzania offers more remote, exclusive experiences but requires longer drives between parks.</p>
      
      <h2>Budget Considerations</h2>
      <p>Kenya generally offers more budget-friendly options. Tanzania's park fees are higher but the exclusivity may be worth it for some travelers.</p>
      
      <h2>Our Recommendation</h2>
      <p>For first-time safari-goers with limited time, Kenya is excellent. For those seeking a more comprehensive, less crowded experience, Tanzania is ideal.</p>
    `,
    author: 'Elena Rodriguez',
    date: 'December 5, 2024',
    category: 'Destinations',
    readTime: '7 min read',
  },
  {
    slug: 'packing-list-african-safari',
    title: 'The Complete Packing List for Your African Safari',
    excerpt: 'Don\'t leave home without these essential items for your East African adventure.',
    content: `
      <p>Packing for an African safari requires careful planning. Here's our comprehensive guide to ensure you have everything you need.</p>
      
      <h2>Clothing Essentials</h2>
      <ul>
        <li>Neutral-colored, lightweight clothing (khaki, olive, tan)</li>
        <li>Long-sleeved shirts for sun and insect protection</li>
        <li>Warm layers for early morning game drives</li>
        <li>Comfortable walking shoes and sandals</li>
        <li>Wide-brimmed hat and sunglasses</li>
      </ul>
      
      <h2>Photography Gear</h2>
      <ul>
        <li>Camera with good zoom lens (200mm minimum)</li>
        <li>Extra memory cards and batteries</li>
        <li>Dust-proof camera bag</li>
        <li>Binoculars (8x42 or 10x42)</li>
      </ul>
      
      <h2>Health & Safety</h2>
      <ul>
        <li>Prescription medications</li>
        <li>Malaria prophylaxis</li>
        <li>High SPF sunscreen</li>
        <li>Insect repellent with DEET</li>
        <li>First aid kit</li>
      </ul>
    `,
    author: 'Sarah Chen',
    date: 'November 28, 2024',
    category: 'Travel Tips',
    readTime: '5 min read',
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};
