export interface Developer {
  id: string;
  name: string;
  logo: string;
  slug?: string;
}

// Sample developer data - use placeholder logos (replace with real logos when available)
export const developers: Developer[] = [
  { id: '1', name: 'Emaar Properties', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=80&fit=crop', slug: 'emaar' },
  { id: '2', name: 'DAMAC Properties', logo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=120&h=80&fit=crop', slug: 'damac' },
  { id: '3', name: 'Nakheel', logo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=120&h=80&fit=crop', slug: 'nakheel' },
  { id: '4', name: 'Meraas', logo: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=120&h=80&fit=crop', slug: 'meraas' },
  { id: '5', name: 'Sobha Realty', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=80&fit=crop', slug: 'sobha' },
  { id: '6', name: 'Meydan', logo: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=120&h=80&fit=crop', slug: 'meydan' },
  { id: '7', name: 'Azizi Developments', logo: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=120&h=80&fit=crop', slug: 'azizi' },
  { id: '8', name: 'Ellington Properties', logo: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&h=80&fit=crop', slug: 'ellington' },
];

// Logos for marquee - can duplicate for infinite scroll effect
export const marqueeLogos = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=160&h=80&fit=crop',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=160&h=80&fit=crop',
];
