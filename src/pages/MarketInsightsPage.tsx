import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, BarChart3, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blog';

const priceGrowthData = [
  { month: 'Jan', growth: 3.2 },
  { month: 'Feb', growth: 3.5 },
  { month: 'Mar', growth: 4.1 },
  { month: 'Apr', growth: 4.4 },
  { month: 'May', growth: 4.8 },
  { month: 'Jun', growth: 5.2 },
  { month: 'Jul', growth: 5.6 },
  { month: 'Aug', growth: 6.0 },
  { month: 'Sep', growth: 6.4 },
  { month: 'Oct', growth: 6.8 },
  { month: 'Nov', growth: 7.1 },
  { month: 'Dec', growth: 7.5 },
];

const rentalYieldData = [
  { area: 'Gangapur Rd', yield: 4.8 },
  { area: 'College Rd', yield: 4.5 },
  { area: 'Cidco', yield: 5.2 },
  { area: 'Satpur MIDC', yield: 6.1 },
  { area: 'Nashik Rd', yield: 4.2 },
  { area: 'Mumbai Naka', yield: 5.5 },
];

const marketStats = [
  { label: 'Avg. Property Price (Residential)', value: '₹65 Lakh', change: '+8.2%' },
  { label: 'Avg. Rental Yield', value: '4.5%', change: '+0.3%' },
  { label: 'New Registrations (2025)', value: '12,400+', change: '+11%' },
  { label: 'Active Listings', value: '3,200+', change: '+14%' },
];

export function MarketInsightsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">Knowledge Hub</p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mb-4">Market Insights</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Nashik real estate trends, investment analysis, and expert guidance to help you make informed property decisions.
          </p>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-12 bg-slate-50 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {marketStats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-white rounded-2xl border border-slate-200 p-5">
                <p className="text-slate-500 text-xs font-medium mb-2">{s.label}</p>
                <div className="font-heading font-bold text-slate-900 text-2xl mb-1">{s.value}</div>
                <span className="text-green-600 text-xs font-semibold">{s.change} YoY</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Charts */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Price Growth Chart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#1d4ed8]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-slate-900">Property Price Growth 2025</h3>
                <p className="text-slate-500 text-xs">Year-on-year % growth in Nashik residential prices</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={priceGrowthData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f4ff" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v ?? ''}%`, 'Growth']} contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
                <Area type="monotone" dataKey="growth" stroke="#1d4ed8" strokeWidth={2.5} fill="url(#colorGrowth)" dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Rental Yield Chart */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-slate-900">Rental Yield by Locality</h3>
                <p className="text-slate-500 text-xs">Average annual rental yield (%) in key Nashik areas</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={rentalYieldData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f4ff" vertical={false} />
                <XAxis dataKey="area" tick={{ fontSize: 10, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v) => [`${v ?? ''}%`, 'Yield']} contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
                <Bar dataKey="yield" fill="#f97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-slate-50 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Expert Articles</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Latest Insights</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={`/market-insights/${post.slug}`} className="block group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-full">
                  {post.image && (
                    <div className="aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold text-orange-600 uppercase tracking-wide">{post.category}</span>
                    <h3 className="font-heading font-semibold text-slate-900 text-lg mt-2 mb-2 line-clamp-2 group-hover:text-[#1d4ed8] transition-colors">{post.title}</h3>
                    <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#172554] px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-white text-3xl mb-4">Want Personalised Market Advice?</h2>
          <p className="text-white/70 mb-8">Talk to our experts for a free consultation on market trends and investment opportunities in Nashik.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
            Book Free Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

