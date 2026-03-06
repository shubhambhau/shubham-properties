import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Award, Users, Heart, ShieldCheck, ArrowRight, Phone, Mail } from 'lucide-react';

const values = [
  { icon: ShieldCheck, title: 'Transparency', description: 'No hidden charges or surprises — complete honesty at every step of your property journey.' },
  { icon: Award, title: 'Excellence', description: 'We hold ourselves to the highest standards in every property transaction and client interaction.' },
  { icon: Users, title: 'Client First', description: 'Your goals and timeline guide everything we do. Your success is our success.' },
  { icon: Heart, title: 'Integrity', description: '15+ years of trust built with clients, builders, and the Nashik community.' },
];

const milestones = [
  { year: '2008', title: 'Founded', description: 'Shubham Properties established in Nashik with a focus on residential property consulting.' },
  { year: '2012', title: 'Commercial Expansion', description: 'Expanded into commercial and industrial property services across Nashik district.' },
  { year: '2016', title: 'Construction Services', description: 'Launched construction and architectural services for residential clients.' },
  { year: '2020', title: 'Digital Growth', description: 'Launched online property portal serving clients across Maharashtra.' },
  { year: '2024', title: 'Today', description: '2500+ properties transacted, 1200+ happy clients, 100+ active listings across 6 cities.' },
];

const teamMembers = [
  {
    name: 'Sanjay Sonar',
    role: 'Founder & Managing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    description: 'With 15+ years of experience in Nashik real estate, Sanjay has built a reputation for honest advice and exceptional client service.',
  },
  {
    name: 'Priya Sonar',
    role: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80',
    description: 'Priya oversees client relations and ensures every transaction is executed smoothly and efficiently.',
  },
  {
    name: 'Rahul Deshmukh',
    role: 'Senior Property Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    description: 'Rahul specialises in commercial and industrial properties with deep networks across Nashik MIDC and industrial corridors.',
  },
];

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#1e3a8a] pt-32 pb-16 px-5 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mb-5">
            Nashik's Most Trusted<br />Real Estate Consultancy
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            For over 15 years, Shubham Properties has been helping families, businesses, and investors find, buy, sell, and rent properties across Nashik and Maharashtra.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl mb-5">Built on Trust, Driven by Results</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded in 2008 by Sanjay Sonar, Shubham Properties started as a small residential brokerage in Nashik with a simple mission — to make property buying and selling transparent, fair, and stress-free.
              </p>
              <p>
                Today, we are one of Nashik's leading real estate consultancies with a team of 100+ experts, serving clients in 6+ cities across Maharashtra. We specialize in residential, commercial, industrial, and hospitality properties.
              </p>
              <p>
                Our office is located at B/Wing, Office No. 416, Thakkers M Square, Gangapur Road, Nashik — right at the heart of the city's real estate hub.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/properties" className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-[#1d4ed8] hover:text-[#1d4ed8] font-semibold px-6 py-3.5 rounded-xl transition-colors">
                Browse Properties
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Shubham Properties Office Nashik"
              className="rounded-2xl w-full aspect-square object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#1e3a8a] text-white rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-heading font-bold text-orange-400">15+</div>
              <div className="text-sm text-white/80">Years in Nashik</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-slate-50 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '2500+', label: 'Properties Transacted' },
            { value: '1200+', label: 'Happy Clients' },
            { value: '100+', label: 'Expert Agents' },
            { value: '6+', label: 'Cities Covered' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl font-heading font-bold text-[#1e3a8a] mb-1">{s.value}</div>
              <div className="text-slate-500 text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-[#1d4ed8]" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#172554] px-5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl">Milestones</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5">
                <div className="shrink-0 w-16 text-right">
                  <span className="font-heading font-bold text-orange-400 text-sm">{m.year}</span>
                </div>
                <div className="mt-1 w-0.5 bg-white/20 relative">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-orange-400" />
                </div>
                <div className="pb-6">
                  <h3 className="font-heading font-semibold text-white mb-1">{m.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-orange-600 text-xs font-semibold uppercase tracking-widest mb-2">Meet The Team</p>
            <h2 className="font-heading font-bold text-slate-900 text-3xl sm:text-4xl">Our Leadership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <img src={m.image} alt={m.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-blue-100" />
                <h3 className="font-heading font-semibold text-slate-900 text-lg">{m.name}</h3>
                <p className="text-[#1d4ed8] text-sm font-medium mb-3">{m.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 bg-orange-50 border-t border-orange-100 px-5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between">
          <div>
            <h3 className="font-heading font-bold text-slate-900 text-2xl mb-1">Visit Our Office in Nashik</h3>
            <div className="flex items-start gap-2 text-slate-600 text-sm">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              B/Wing, Office No. 416, Thakkers M Square, Gangapur Road, Nashik - 422 005
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:+919689708425" className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
              <Phone className="w-4 h-4" />
              +91 96897 08425
            </a>
            <a href="mailto:contact@propertyinnashik.in" className="flex items-center gap-2 border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm">
              <Mail className="w-4 h-4" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

