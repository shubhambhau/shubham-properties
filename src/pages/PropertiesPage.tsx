import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, MapPin, X } from 'lucide-react';
import { properties, filterProperties } from '../data/properties';
import type { PropertyCategory, PropertyPurpose } from '../data/properties';

const cities = ['Nashik', 'Pune', 'Mumbai', 'Navi Mumbai', 'Thane', 'Jalgaon'];

const bedroomOptions = [
  { label: 'Any', value: 0 },
  { label: '1 BHK', value: 1 },
  { label: '2 BHK', value: 2 },
  { label: '3 BHK', value: 3 },
  { label: '4+ BHK', value: 4 },
];

export function PropertiesPage() {
  const [purpose, setPurpose] = useState<PropertyPurpose | ''>('');
  const [category, setCategory] = useState<PropertyCategory | ''>('');
  const [city, setCity] = useState('');
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [_showFilters, _setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;

  const filtered = useMemo(() => {
    return filterProperties({
      purpose: purpose || undefined,
      category: category || undefined,
      city: city || undefined,
      bedrooms: minBedrooms || undefined,
    });
  }, [purpose, category, city, minBedrooms]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const clearFilters = () => {
    setPurpose('');
    setCategory('');
    setCity('');
    setMinBedrooms(0);
    setPage(1);
  };

  const activeFiltersCount = [purpose, category, city, minBedrooms > 0].filter(Boolean).length;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-[#1e3a8a] pt-28 pb-12 px-5">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">Browse Listings</p>
          <h1 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-2">All Properties</h1>
          <p className="text-white/65">{properties.length} properties available across Nashik & Maharashtra</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-8 shadow-sm">
          <div className="flex flex-wrap gap-3 items-end">
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Purpose</label>
              <select
                value={purpose}
                onChange={(e) => { setPurpose(e.target.value as PropertyPurpose | ''); setPage(1); }}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">Buy or Rent</option>
                <option value="buy">For Sale</option>
                <option value="rent">For Rent</option>
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => { setCategory(e.target.value as PropertyCategory | ''); setPage(1); }}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">All Categories</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="hospitality">Hospitality</option>
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">City</label>
              <select
                value={city}
                onChange={(e) => { setCity(e.target.value); setPage(1); }}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="">All Cities</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex-1 min-w-[140px]">
              <label className="block text-xs font-semibold text-slate-500 mb-1.5">Bedrooms</label>
              <select
                value={minBedrooms}
                onChange={(e) => { setMinBedrooms(Number(e.target.value)); setPage(1); }}
                className="w-full px-3 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {bedroomOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-sm text-red-600 hover:text-red-800 font-medium px-3 py-2.5 rounded-xl border border-red-200 hover:bg-red-50 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear ({activeFiltersCount})
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-slate-600 text-sm">
            Showing <span className="font-semibold text-slate-900">{filtered.length}</span> properties
          </p>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <div className="text-center py-24">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-heading font-semibold text-slate-700 text-xl mb-2">No properties found</h3>
            <p className="text-slate-500 mb-5">Try adjusting your filters to see more results.</p>
            <button onClick={clearFilters} className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={`/properties/${p.id}`}
                  className="block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${p.purpose === 'buy' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'}`}>
                        For {p.purpose === 'buy' ? 'Sale' : 'Rent'}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-700 capitalize">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-slate-900 text-lg mb-1 line-clamp-1">{p.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-3">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      {p.location}, {p.city}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#1e3a8a] font-heading font-bold text-xl">{p.priceLabel}</span>
                      <span className="text-slate-500 text-sm">{p.area.toLocaleString()} sq ft</span>
                    </div>
                    {p.bedrooms && (
                      <p className="text-slate-500 text-sm">{p.bedrooms} BHK{p.bathrooms ? ` · ${p.bathrooms} Bath` : ''}</p>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${page === n ? 'bg-[#1d4ed8] text-white' : 'border border-slate-200 text-slate-700 hover:bg-slate-100'}`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
