import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, MapPin, Home, Building2, Factory, Hotel,
  ShieldCheck, TrendingUp, Users, PhoneCall, ArrowRight,
  Star, CheckCircle2,
} from 'lucide-react';
import { getFeaturedProperties } from '../data/properties';
import { servicesData } from '../data/services';
import { blogPosts } from '../data/blog';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '2500+', label: 'Properties Sold' },
  { value: '1200+', label: 'Happy Clients' },
  { value: '100+', label: 'Expert Agents' },
];

const whyChoose = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Verified',
    description: 'Every listing is verified by our team. No hidden charges, no surprises — complete transparency throughout your property journey.',
  },
  {
    icon: TrendingUp,
    title: 'Best Investment Advice',
    description: 'Data-driven market insights and local expertise help you identify the most profitable investment opportunities in Nashik.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'From first inquiry to final registration, our dedicated team guides you through every step of the property transaction.',
  },
  {
    icon: PhoneCall,
    title: 'End-to-End Service',
    description: 'We handle everything — site visits, negotiation, legal due-diligence, loan assistance, and property registration.',
  },
];

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Software Engineer, Pune',
    text: 'Shubham Properties helped me find a 3 BHK flat on Gangapur Road within my budget. Sanjay sir was very helpful and transparent throughout the process.',
    rating: 5,
  },
  {
    name: 'Priya Kulkarni',
    role: 'Business Owner, Nashik',
    text: 'Got an excellent office space deal through them. The team was very professional and handled all the documentation efficiently.',
    rating: 5,
  },
  {
    name: 'Amit Patil',
    role: 'Investor, Nashik',
    text: 'I have invested in two commercial properties through Shubham Properties. Their market knowledge is excellent and they always keep my best interests in mind.',
    rating: 5,
  },
];

const propertyCategories = [
  { icon: Home, label: 'Residential', value: 'residential', color: 'bg-blue-50 text-blue-700 border-blue-200', desc: 'Flats, Bungalows, Villas' },
  { icon: Building2, label: 'Commercial', value: 'commercial', color: 'bg-orange-50 text-orange-700 border-orange-200', desc: 'Offices, Shops, Showrooms' },
  { icon: Factory, label: 'Industrial', value: 'industrial', color: 'bg-slate-50 text-slate-700 border-slate-200', desc: 'Factory, Warehouse, Godown' },
  { icon: Hotel, label: 'Hospitality', value: 'hospitality', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', desc: 'Hotels, Resorts' },
];

const cities = ['Nashik', 'Pune', 'Mumbai', 'Navi Mumbai', 'Thane', 'Jalgaon'];

function PropertyCard({ property }: { property: ReturnType<typeof getFeaturedProperties>[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${property.purpose === 'buy' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'}`}>
            For {property.purpose === 'buy' ? 'Sale' : 'Rent'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-700 capitalize">
            {property.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading font-semibold text-slate-900 text-lg mb-1 line-clamp-1">{property.title}</h3>
        <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          {property.location}, {property.city}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-primary-800 font-heading font-bold text-xl">{property.priceLabel}</span>
          <span className="text-slate-500 text-sm">{property.area.toLocaleString()} sq ft</span>
        </div>
        {property.bedrooms && (
          <div className="flex items-center gap-3 text-slate-500 text-sm mb-4">
            <span>{property.bedrooms} BHK</span>
            {property.bathrooms && <span>· {property.bathrooms} Bath</span>}
          </div>
        )}
        <Link
          to={`/properties/${property.id}`}
          className="block w-full text-center bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const [searchPurpose, setSearchPurpose] = useState<'buy' | 'rent'>('buy');
  const [searchCity, setSearchCity] = useState('');
  const [searchType, setSearchType] = useState('');

  const featuredProperties = getFeaturedProperties();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchPurpose) params.set('purpose', searchPurpose);
    if (searchCity) params.set('city', searchCity);
    if (searchType) params.set('category', searchType);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 60%, #1d4ed8 100%)' }} />
        <div
          className="absolute inset-0 opacity-15"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#172554]/60" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8">
            <MapPin className="w-4 h-4 text-orange-400" />
            Nashik's Most Trusted Real Estate Consultancy
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading font-bold text-white mb-6 leading-tight" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Find Your Dream
            <span className="block text-orange-400">Property in Nashik</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Buy, sell, or rent residential, commercial, and industrial properties in Nashik with expert guidance from Shubham Properties.
          </motion.p>

          {/* Search Box */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl shadow-2xl p-2 max-w-3xl mx-auto">
            <div className="flex border-b border-slate-100 mb-3 px-2 pt-2">
              {(['buy', 'rent'] as const).map((p) => (
                <button key={p} onClick={() => setSearchPurpose(p)} className={`px-5 py-2 text-sm font-semibold rounded-t-lg transition-colors capitalize ${searchPurpose === p ? 'text-[#1d4ed8] border-b-2 border-[#1d4ed8]' : 'text-slate-500 hover:text-slate-700'}`}>
                  {p === 'buy' ? 'Buy' : 'Rent'}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-2 p-2">
              <select value={searchCity} onChange={(e) => setSearchCity(e.target.value)} className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select City</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="flex-1 px-4 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Property Type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="hospitality">Hospitality</option>
              </select>
              <button onClick={handleSearch} className="flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {['Flats in Nashik', 'Office Space', 'Industrial', 'Bungalows'].map((label) => (
              <Link key={label} to={`/properties?q=${encodeURIComponent(label)}`} className="text-white/70 hover:text-white text-sm transition-colors border border-white/20 hover:border-white/40 px-3 py-1.5 rounded-full">
                {label}
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* PROPERTY CATEGORIES */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Browse By Category</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Property Categories</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {propertyCategories.map((cat, i) => (
              <motion.div key={cat.value} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={`/properties?category=${cat.value}`} className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 ${cat.color} hover:shadow-md transition-all duration-200 hover:-translate-y-1 text-center group`}>
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                    <cat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-base">{cat.label}</div>
                    <div className="text-xs mt-0.5 opacity-70">{cat.desc}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Latest Listings</p>
              <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Featured Properties</h2>
            </div>
            <Link to="/properties" className="flex items-center gap-2 text-[#1d4ed8] hover:text-[#1e40af] font-semibold text-sm transition-colors whitespace-nowrap">
              View All Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.slice(0, 6).map((p) => <PropertyCard key={p.id} property={p} />)}
          </div>
          <div className="text-center mt-10">
            <Link to="/properties" className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors duration-200">
              Browse All Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#172554]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">Why Shubham Properties</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-white/65 max-w-xl mx-auto">15+ years of experience in Nashik real estate ensuring every client gets the best deal.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-white/10 transition-all duration-200">
                <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Comprehensive real estate services from buying to construction — all under one roof.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.slice(0, 6).map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={`/services/${service.slug}`} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Building2 className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-slate-900 text-base mb-1 group-hover:text-[#1d4ed8] transition-colors">{service.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{service.shortDescription}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white font-semibold px-7 py-3 rounded-xl transition-colors duration-200">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Client Reviews</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (<Star key={j} className="w-4 h-4 fill-orange-400 text-orange-400" />))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div>
                  <div className="font-heading font-semibold text-slate-900">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET INSIGHTS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Knowledge Hub</p>
              <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Market Insights</h2>
            </div>
            <Link to="/market-insights" className="flex items-center gap-2 text-[#1d4ed8] hover:text-[#1e40af] font-semibold text-sm transition-colors">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={`/market-insights/${post.slug}`} className="block group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                  {post.image && (
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">{post.category}</span>
                    <h3 className="font-heading font-semibold text-slate-900 text-lg mt-2 mb-2 line-clamp-2 group-hover:text-[#1d4ed8] transition-colors">{post.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <p className="text-slate-400 text-xs mt-3">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 60%, #1d4ed8 100%)' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-5xl mb-5">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-white/75 text-lg mb-8 max-w-xl mx-auto">
              Talk to our experts today. We help you buy, sell, rent, and invest in the best properties in Nashik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/properties" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                Browse Properties <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200">
                Contact Us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              {['Free Consultation', 'No Hidden Charges', 'Legal Support Included', 'Home Loan Assistance'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

