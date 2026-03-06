export type PropertyPurpose = 'buy' | 'rent';

export type PropertyType =
  | 'flat' | 'apartment' | 'house' | 'bungalow' | 'villa' | 'penthouse'
  | 'office' | 'shop' | 'showroom' | 'business-center'
  | 'factory' | 'shed' | 'warehouse' | 'godown'
  | 'hotel' | 'resort';

export type PropertyCategory = 'residential' | 'commercial' | 'industrial' | 'hospitality';

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  type: PropertyType;
  category: PropertyCategory;
  purpose: PropertyPurpose;
  priceLabel: string;
  priceSortValue: number; // in lakhs
  area: number; // sq ft
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  status: 'available' | 'sold' | 'rented';
  postedDate: string;
}

export const properties: Property[] = [
  {
    id: 'SP001',
    title: '3 BHK Twin Bungalow',
    location: 'Sambhaji Chowk',
    city: 'Nashik',
    type: 'bungalow',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹75 Lakh',
    priceSortValue: 75,
    area: 2000,
    bedrooms: 3,
    bathrooms: 3,
    description:
      'Beautifully designed 3 BHK twin bungalow situated in the heart of Nashik. Features spacious rooms, modern kitchen, ample parking, and a private garden. Ideal for families seeking comfort and convenience.',
    features: ['Private Garden', 'Ample Parking', 'Modular Kitchen', 'Security', 'Power Backup', 'Vastu Compliant'],
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-02-10',
  },
  {
    id: 'SP002',
    title: '3 BHK Penthouse',
    location: 'College Road',
    city: 'Nashik',
    type: 'penthouse',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹1.75 Cr',
    priceSortValue: 175,
    area: 2200,
    bedrooms: 3,
    bathrooms: 4,
    description:
      'Luxurious 3 BHK penthouse on College Road offering panoramic views of Nashik city. Premium specifications with Italian marble flooring, designer bathrooms, and a private terrace perfect for entertaining.',
    features: ['Private Terrace', 'City View', 'Italian Marble', 'Smart Home', 'Club Membership', 'Covered Parking'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-02-12',
  },
  {
    id: 'SP003',
    title: 'Premium Office Space',
    location: 'Gangapur Road',
    city: 'Nashik',
    type: 'office',
    category: 'commercial',
    purpose: 'rent',
    priceLabel: '₹1.35 Lakh/mo',
    priceSortValue: 1.35,
    area: 1600,
    description:
      'Well-appointed office space on Nashik\'s prime commercial corridor, Gangapur Road. Features open floor plan, dedicated server room, conference facilities, and excellent visibility. Ideal for corporates and mid-size businesses.',
    features: ['Open Floor Plan', 'Conference Room', 'High-Speed Internet', 'Generator Backup', 'Central AC', 'Visitor Parking'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-02-01',
  },
  {
    id: 'SP004',
    title: 'Commercial Shop',
    location: 'Mumbai Naka',
    city: 'Nashik',
    type: 'shop',
    category: 'commercial',
    purpose: 'rent',
    priceLabel: '₹20,000/mo',
    priceSortValue: 0.2,
    area: 670,
    description:
      'Prime commercial shop at Mumbai Naka, one of Nashik\'s busiest intersections. Excellent footfall, high street visibility, and easy access from all parts of the city. Suitable for retail, banking, or service-based businesses.',
    features: ['High Footfall', 'Glass Facade', 'Street Level', '3-Phase Power', 'Storage Room', 'Signage Allowed'],
    images: [
      'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-01-28',
  },
  {
    id: 'SP005',
    title: 'Industrial Factory',
    location: 'Vilholi MIDC',
    city: 'Nashik',
    type: 'factory',
    category: 'industrial',
    purpose: 'rent',
    priceLabel: '₹14.45 Lakh/mo',
    priceSortValue: 14.45,
    area: 100000,
    description:
      'Large-scale industrial factory in Vilholi MIDC, Nashik\'s premier industrial zone. Equipped with heavy power load, dock levelers, high-clearance ceiling, and excellent road connectivity to NH highway. Ideal for manufacturing and distribution.',
    features: ['Heavy Power Load', 'Dock Levelers', '8m Ceiling Height', 'Road Frontage', '3-Phase Power', 'Water Supply'],
    images: [
      'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-01-20',
  },
  {
    id: 'SP006',
    title: '32 Room Resort',
    location: 'Nashik-Saputara Highway',
    city: 'Nashik',
    type: 'resort',
    category: 'hospitality',
    purpose: 'buy',
    priceLabel: '₹16.5 Cr',
    priceSortValue: 1650,
    area: 20000,
    description:
      'Magnificent 32-room resort property along the scenic Nashik-Saputara Highway. Set amidst lush greenery with a swimming pool, conference hall, restaurant, and ample open spaces. Perfect for resort operators or hospitality investors.',
    features: ['32 Rooms', 'Swimming Pool', 'Conference Hall', 'Restaurant', 'Parking for 100+', 'Scenic Location'],
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
    ],
    featured: true,
    status: 'available',
    postedDate: '2026-01-15',
  },
  {
    id: 'SP007',
    title: '2 BHK Flat',
    location: 'Gangapur Road',
    city: 'Nashik',
    type: 'flat',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹45 Lakh',
    priceSortValue: 45,
    area: 950,
    bedrooms: 2,
    bathrooms: 2,
    description:
      'Well-designed 2 BHK flat in a reputed society on Gangapur Road. Located close to schools, hospitals, and shopping centers. The flat comes with a modern kitchen, tiled bathrooms, and a covered parking space.',
    features: ['Society Amenities', 'Children\'s Play Area', 'CCTV Security', 'Covered Parking', 'Lift', 'Garden View'],
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-02-14',
  },
  {
    id: 'SP008',
    title: '1 BHK Apartment',
    location: 'Nashik Road',
    city: 'Nashik',
    type: 'apartment',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹18 Lakh',
    priceSortValue: 18,
    area: 550,
    bedrooms: 1,
    bathrooms: 1,
    description:
      'Affordable and compact 1 BHK apartment near Nashik Road railway station. Ideal for first-time buyers or investors. High rental demand from working professionals. Building has 24-hour water supply and security.',
    features: ['24hr Water', 'Security Guard', 'Near Station', 'Bus Connectivity', 'Lift', 'Ready to Move'],
    images: [
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-02-18',
  },
  {
    id: 'SP009',
    title: '4 BHK Luxury Villa',
    location: 'College Road',
    city: 'Nashik',
    type: 'villa',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹2.8 Cr',
    priceSortValue: 280,
    area: 3500,
    bedrooms: 4,
    bathrooms: 5,
    description:
      'Exquisite 4 BHK luxury villa in a prestigious gated community on College Road. Features a private pool, home theatre, designer interiors, and a beautifully landscaped garden. A rare premium offering in Nashik.',
    features: ['Private Pool', 'Home Theatre', 'Landscaped Garden', 'Gated Community', 'Smart Home', '3-Car Garage'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-01-30',
  },
  {
    id: 'SP010',
    title: 'Commercial Showroom',
    location: 'Nashik Road',
    city: 'Nashik',
    type: 'showroom',
    category: 'commercial',
    purpose: 'rent',
    priceLabel: '₹35,000/mo',
    priceSortValue: 0.35,
    area: 1200,
    description:
      'Spacious showroom on Nashik Road main highway with excellent road frontage and visibility. Glass facade with double-height ceiling, ideal for automobile showrooms, electronics, or lifestyle retail brands.',
    features: ['Double Height Ceiling', 'Glass Facade', 'Highway Frontage', '3-Phase Power', 'Washroom', 'Parking Space'],
    images: [
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-02-05',
  },
  {
    id: 'SP011',
    title: 'Industrial Warehouse',
    location: 'Satpur MIDC',
    city: 'Nashik',
    type: 'warehouse',
    category: 'industrial',
    purpose: 'rent',
    priceLabel: '₹3.5 Lakh/mo',
    priceSortValue: 3.5,
    area: 25000,
    description:
      'Modern industrial warehouse in Satpur MIDC with high-clearance ceiling, multiple loading bays, and 24/7 security. Ideal for logistics, e-commerce warehousing, or manufacturing storage. Prime MIDC location with excellent connectivity.',
    features: ['High Clearance', 'Multiple Loading Bays', '24/7 Security', 'LED Lighting', 'Office Cabin', 'Fire Safety System'],
    images: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      'https://images.unsplash.com/photo-1565953522043-baea26b83b7e?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-02-08',
  },
  {
    id: 'SP012',
    title: '3 BHK Flat',
    location: 'Trimbak Road',
    city: 'Nashik',
    type: 'flat',
    category: 'residential',
    purpose: 'buy',
    priceLabel: '₹55 Lakh',
    priceSortValue: 55,
    area: 1400,
    bedrooms: 3,
    bathrooms: 2,
    description:
      'Spacious 3 BHK flat on Trimbak Road in a well-maintained society with modern amenities. Located near Trimbakeshwar temple road, offering peaceful surroundings with great connectivity to the city center.',
    features: ['Serene Location', 'Swimming Pool', 'Gym', 'Club House', 'Vastu Compliant', '2 Parking'],
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
    featured: false,
    status: 'available',
    postedDate: '2026-02-20',
  },
];

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.featured);
}

export function filterProperties(filters: {
  purpose?: PropertyPurpose;
  category?: PropertyCategory;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  type?: PropertyType;
}): Property[] {
  return properties.filter((p) => {
    if (filters.purpose && p.purpose !== filters.purpose) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.city && p.city.toLowerCase() !== filters.city.toLowerCase()) return false;
    if (filters.minPrice && p.priceSortValue < filters.minPrice) return false;
    if (filters.maxPrice && p.priceSortValue > filters.maxPrice) return false;
    if (filters.bedrooms && p.bedrooms !== filters.bedrooms) return false;
    if (filters.type && p.type !== filters.type) return false;
    return true;
  });
}
