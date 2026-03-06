export interface Community {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image?: string;
  amenities: string[];
  highlights: string[];
  gallery: string[];
}

export const communitiesData: Community[] = [
  {
    slug: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Iconic island living',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description: 'The Palm Jumeirah is one of Dubai’s most recognizable landmarks. Home to world-class hotels, beaches, and residential towers, it offers a unique blend of privacy and connectivity.',
    amenities: ['Private beach', 'Marina', 'Five-star hotels', 'Fine dining', 'Retail', 'Parks'],
    highlights: ['Freehold ownership', 'High capital appreciation', 'Strong rental demand', 'Golden Visa eligible'],
    gallery: [],
  },
  {
    slug: 'downtown-dubai',
    name: 'Downtown Dubai',
    tagline: 'The heart of the city',
    description: 'Downtown Dubai is the dynamic core of the city, featuring Burj Khalifa, Dubai Mall, and an array of luxury residences and lifestyle offerings.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80',
    amenities: ['Burj Khalifa', 'Dubai Mall', 'Fountain views', 'Metro', 'Restaurants', 'Entertainment'],
    highlights: ['Central location', 'Tourism and rental demand', 'Iconic views', 'Golden Visa eligible'],
    gallery: [],
  },
  {
    slug: 'dubai-marina',
    name: 'Dubai Marina',
    tagline: 'Waterfront lifestyle',
    description: 'Dubai Marina is a vibrant waterfront community with a bustling promenade, yacht club, and a mix of high-rise apartments and penthouses.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    amenities: ['Marina walk', 'Beach access', 'Yacht club', 'Dining', 'Retail', 'Metro'],
    highlights: ['Strong yields', 'Young professional demand', 'Lifestyle appeal', 'Freehold'],
    gallery: [],
  },
  {
    slug: 'dubai-hills-estate',
    name: 'Dubai Hills Estate',
    tagline: 'Green and family-friendly',
    description: 'Dubai Hills Estate offers a balanced lifestyle with golf, parks, schools, and a growing range of villas and apartments.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    amenities: ['Golf course', 'Parks', 'Schools', 'Mall', 'Clinics', 'Cycling tracks'],
    highlights: ['Family-oriented', 'Capital growth', 'Quality developers', 'Community feel'],
    gallery: [],
  },
  {
    slug: 'business-bay',
    name: 'Business Bay',
    tagline: 'Urban and connected',
    description: 'Business Bay is a central business and residential district with a canal, metro access, and a mix of offices and residences.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    amenities: ['Canal', 'Metro', 'Offices', 'Dining', 'Gyms', 'Retail'],
    highlights: ['Rental demand', 'Affordability', 'Central location', 'Investment potential'],
    gallery: [],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communitiesData.find((c) => c.slug === slug);
}
