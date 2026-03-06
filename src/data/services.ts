export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  category: 'real-estate' | 'consulting' | 'development';
  image?: string;
  processSteps: { title: string; description: string }[];
  whyChoose: string[];
}

export const servicesData: ServiceItem[] = [
  // Real Estate Services
  {
    slug: 'property-buying',
    title: 'Property Buying Assistance',
    shortDescription: 'Expert guidance to help you find and purchase the perfect property in Nashik.',
    description: 'Our experienced team guides you through the entire property buying process — from shortlisting the right property to registration and possession. We help you make informed investment decisions with transparent pricing and complete legal support.',
    icon: 'Home',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    processSteps: [
      { title: 'Requirement Analysis', description: 'We understand your budget, location preference, and property requirements.' },
      { title: 'Property Shortlisting', description: 'We curate the best matching properties from verified listings.' },
      { title: 'Site Visits', description: 'We arrange property visits and help you evaluate each option.' },
      { title: 'Negotiation', description: 'We negotiate the best price and terms on your behalf.' },
      { title: 'Documentation & Registration', description: 'Legal checks, agreement, and registration support.' },
    ],
    whyChoose: ['Access to exclusive off-market listings', 'Transparent pricing, no hidden charges', 'Legal due-diligence support', 'Dedicated relationship manager'],
  },
  {
    slug: 'property-selling',
    title: 'Property Selling Assistance',
    shortDescription: 'Get the best price for your property with our expert marketing and negotiation.',
    description: 'Selling a property requires the right strategy, pricing, and buyer reach. Shubham Properties provides end-to-end selling assistance — from property valuation to final registration — ensuring you get maximum returns.',
    icon: 'TrendingUp',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    processSteps: [
      { title: 'Property Valuation', description: 'We assess your property\'s market value based on current trends.' },
      { title: 'Marketing', description: 'Digital listings, social media, and network outreach to find serious buyers.' },
      { title: 'Buyer Screening', description: 'We screen and qualify potential buyers to save your time.' },
      { title: 'Negotiation', description: 'We negotiate to secure the best possible price for you.' },
      { title: 'Closure & Registration', description: 'Full support for documentation and property registration.' },
    ],
    whyChoose: ['Maximum visibility for your property', 'Pre-qualified buyer network', 'Fair market valuation', 'Smooth transaction handling'],
  },
  {
    slug: 'property-rental',
    title: 'Property Rental Services',
    shortDescription: 'Find reliable tenants or the perfect rental property with our professional services.',
    description: 'Whether you are a landlord looking for quality tenants or a tenant searching for the ideal home or commercial space, Shubham Properties offers comprehensive rental services for residential and commercial properties across Nashik.',
    icon: 'Key',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    processSteps: [
      { title: 'Requirement Brief', description: 'Define your rental budget, location, and space requirements.' },
      { title: 'Property Search', description: 'We match you with suitable rental listings from our database.' },
      { title: 'Site Visits', description: 'Scheduled property visits with the landlord or agent.' },
      { title: 'Rent Agreement', description: 'Legally drafted rent agreement and documentation support.' },
      { title: 'Key Handover', description: 'Smooth possession with inventory check and handover.' },
    ],
    whyChoose: ['Wide database of rental properties', 'Landlord & tenant representation', 'Legal rent agreement drafting', 'Swift tenant placement'],
  },
  {
    slug: 'investment-consulting',
    title: 'Real Estate Investment Consulting',
    shortDescription: 'Identify and leverage profitable real estate investment opportunities in Nashik.',
    description: 'Real estate is one of the most reliable investment vehicles. Our investment consulting service helps you identify high-yield properties, assess ROI, and build a profitable real estate portfolio in Nashik and surrounding cities.',
    icon: 'BarChart2',
    category: 'real-estate',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80',
    processSteps: [
      { title: 'Investment Goals', description: 'We understand your investment horizon and return expectations.' },
      { title: 'Market Analysis', description: 'Data-driven analysis of Nashik real estate market trends.' },
      { title: 'Opportunity Identification', description: 'Shortlisting properties with strong capital appreciation or rental yield.' },
      { title: 'Risk Assessment', description: 'Legal and financial due diligence of the investment.' },
      { title: 'Portfolio Building', description: 'Long-term portfolio strategy and follow-up advisory.' },
    ],
    whyChoose: ['Local market expertise', 'High-yield property identification', 'Data-driven analysis', 'Portfolio diversification strategy'],
  },
  // Consulting Services
  {
    slug: 'vastu-consultation',
    title: 'Vastu Consultation',
    shortDescription: 'Expert Vastu consultation to ensure positive energy and harmony in your property.',
    description: 'Vastu Shastra plays a vital role in many property decisions across India. Our Vastu consultation service helps you evaluate and select properties that are Vastu-compliant, ensuring positive energy, health, and prosperity for your family or business.',
    icon: 'Compass',
    category: 'consulting',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    processSteps: [
      { title: 'Property Assessment', description: 'Detailed Vastu analysis of the property layout and direction.' },
      { title: 'Vastu Report', description: 'Comprehensive report highlighting areas of concern and strengths.' },
      { title: 'Recommendations', description: 'Practical Vastu remedies and modifications suggested.' },
      { title: 'Follow-Up', description: 'Post-occupancy Vastu check and support.' },
    ],
    whyChoose: ['Expert Vastu consultation', 'Practical & affordable remedies', 'Pre-purchase Vastu analysis', 'Both residential & commercial'],
  },
  {
    slug: 'legal-advisory',
    title: 'Property Legal Advisory',
    shortDescription: 'Protect your property investment with expert legal due-diligence and advisory.',
    description: 'Property transactions involve complex legal documentation. Our legal advisory service ensures title verification, agreement drafting, RERA compliance checks, and complete legal due diligence — protecting your investment at every step.',
    icon: 'Scale',
    category: 'consulting',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    processSteps: [
      { title: 'Title Verification', description: 'Check ownership records and title history of the property.' },
      { title: 'RERA Compliance', description: 'Verify project RERA registration and compliance status.' },
      { title: 'Agreement Review', description: 'Review and draft sale agreements and rent agreements.' },
      { title: 'Registration', description: 'Assist with stamp duty calculation and property registration.' },
    ],
    whyChoose: ['Experienced legal panel', 'RERA compliance expertise', 'Complete title verification', 'Transparent legal fees'],
  },
  {
    slug: 'loan-consultancy',
    title: 'Property Loan Consultancy',
    shortDescription: 'Get the best home loan deals with our expert loan consultancy and bank tie-ups.',
    description: 'Securing the right home loan at the best interest rate can save lakhs over the loan tenure. Our loan consultancy connects you with multiple banks and NBFCs to compare rates, process applications, and get approvals faster.',
    icon: 'CreditCard',
    category: 'consulting',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    processSteps: [
      { title: 'Eligibility Check', description: 'Assess your loan eligibility based on income and credit profile.' },
      { title: 'Bank Comparison', description: 'Compare home loan rates from multiple banks and NBFCs.' },
      { title: 'Application Filing', description: 'Assist with loan application and document submission.' },
      { title: 'Approval & Disbursal', description: 'Follow up with banks for timely approval and disbursement.' },
    ],
    whyChoose: ['Tie-ups with 15+ banks', 'Lowest interest rate guidance', 'Fast approval process', 'No hidden charges'],
  },
  // Development Services
  {
    slug: 'construction-services',
    title: 'Construction Services',
    shortDescription: 'End-to-end construction management for residential and commercial projects.',
    description: 'From site preparation to final handover, Shubham Properties offers professional construction management services. We coordinate with trusted contractors, engineers, and suppliers to ensure your project is completed on time and within budget.',
    icon: 'HardHat',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1590857407773-b62e1a3e1b4a?w=800&q=80',
    processSteps: [
      { title: 'Site Analysis', description: 'Soil testing, site survey, and feasibility assessment.' },
      { title: 'Planning & Design', description: 'Architectural and structural planning with approvals.' },
      { title: 'Construction Phase', description: 'Quality-monitored construction with regular site inspections.' },
      { title: 'Quality Checks', description: 'Structural and finish quality inspection at each stage.' },
      { title: 'Handover', description: 'Final completion check and possession with warranties.' },
    ],
    whyChoose: ['Experienced civil engineers', 'Quality materials at best prices', 'On-time project delivery', 'Transparent cost estimates'],
  },
  {
    slug: 'architectural-services',
    title: 'Architectural Services',
    shortDescription: 'Creative and functional architectural designs for your dream property.',
    description: 'Good architecture adds lasting value to your property. Our empaneled architects provide innovative, functional designs for residential homes, commercial spaces, and industrial complexes — with complete plan drawing and approval support.',
    icon: 'PenTool',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    processSteps: [
      { title: 'Brief & Concept', description: 'Understanding your vision and creating concept sketches.' },
      { title: 'Design Development', description: 'Detailed floor plans, elevations, and 3D renderings.' },
      { title: 'Plan Approval', description: 'Submission and follow-up for municipal plan approvals.' },
      { title: 'Working Drawings', description: 'Detailed working drawings for construction.' },
      { title: 'Site Supervision', description: 'Architect visits during construction for quality control.' },
    ],
    whyChoose: ['Creative & functional designs', 'Plan approval expertise', '3D visualization', 'Vastu-integrated designs'],
  },
  {
    slug: 'interior-decoration',
    title: 'Interior Decoration Services',
    shortDescription: 'Transform your space with our professional interior design and decoration services.',
    description: 'A beautifully designed interior enhances livability and property value. Our interior decoration services cover everything from space planning and material selection to furniture sourcing and turnkey delivery for homes, offices, and commercial spaces.',
    icon: 'Layers',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    processSteps: [
      { title: 'Design Consultation', description: 'Understanding your style preferences and budget.' },
      { title: 'Concept Presentation', description: 'Mood boards, material samples, and 3D interior renderings.' },
      { title: 'Material Procurement', description: 'Sourcing quality materials at competitive prices.' },
      { title: 'Execution', description: 'Supervised interior work by skilled craftsmen.' },
      { title: 'Styling & Handover', description: 'Final decoration, styling, and property handover.' },
    ],
    whyChoose: ['Turnkey interior solutions', 'Transparent pricing', 'Premium material sourcing', 'Timely completion'],
  },
];


export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceItem['category']): ServiceItem[] {
  return servicesData.filter((s) => s.category === category);
}
