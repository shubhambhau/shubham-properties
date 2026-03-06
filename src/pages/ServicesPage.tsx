import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home, TrendingUp, Key, BarChart2, Compass, FileText,
  Building2, PenTool, Palette, ArrowRight, Calculator,
} from 'lucide-react';
import { getServicesByCategory } from '../data/services';

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, TrendingUp, Key, BarChart2, Compass, FileText, Building2, PenTool, Palette,
};

const categoryInfo = [
  {
    key: 'real-estate' as const,
    label: 'Real Estate Services',
    description: 'Buy, sell, rent and invest in properties with expert guidance.',
    color: 'bg-blue-50 border-blue-200',
    badge: 'bg-blue-100 text-blue-700',
  },
  {
    key: 'consulting' as const,
    label: 'Consulting Services',
    description: 'Legal, financial, and Vastu guidance for smart property decisions.',
    color: 'bg-orange-50 border-orange-200',
    badge: 'bg-orange-100 text-orange-700',
  },
  {
    key: 'development' as const,
    label: 'Development Services',
    description: 'Construction, architecture, and interior design solutions.',
    color: 'bg-slate-50 border-slate-200',
    badge: 'bg-slate-100 text-slate-700',
  },
];

const processSteps = [
  { number: '01', title: 'Free Consultation', description: 'Share your property requirements with our experts.' },
  { number: '02', title: 'Property Matching', description: 'We curate the best options matching your needs and budget.' },
  { number: '03', title: 'Site Visits', description: 'We arrange guided property visits at your convenience.' },
  { number: '04', title: 'Negotiation & Docs', description: 'Best price negotiation and complete paperwork support.' },
  { number: '05', title: 'Registration', description: 'Smooth property registration and possession handover.' },
];

export function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#1e3a8a] pt-32 pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mb-5">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate solutions — buying, selling, renting, consulting, construction and interior design, all from one trusted team in Nashik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Get Free Consultation
            </Link>
            <Link to="/properties" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Browse Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EMI Calculator Highlight */}
      <section className="bg-blue-50 border-b border-blue-100 py-5 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-heading font-semibold text-slate-900">EMI Calculator</p>
              <p className="text-slate-500 text-sm">Calculate your monthly home loan EMI instantly.</p>
            </div>
          </div>
          <Link to="/services/emi-calculator" className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors whitespace-nowrap">
            Try Calculator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Services by Category */}
      {categoryInfo.map((cat, ci) => {
        const services = getServicesByCategory(cat.key);
        return (
          <section key={cat.key} className={`py-16 px-5 ${ci % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${cat.badge}`}>{cat.label}</span>
                <h2 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mb-2">{cat.label}</h2>
                <p className="text-slate-500 max-w-xl">{cat.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, i) => {
                  const Icon = iconComponents[service.icon] || Building2;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        className={`flex flex-col p-6 rounded-2xl border-2 ${cat.color} hover:shadow-md transition-all duration-200 hover:-translate-y-1 group h-full`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-6 h-6 text-[#1d4ed8]" />
                        </div>
                        <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2 group-hover:text-[#1d4ed8] transition-colors">{service.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed flex-1">{service.shortDescription}</p>
                        <div className="flex items-center gap-1.5 text-[#1d4ed8] text-sm font-medium mt-4">
                          Learn More <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Steps */}
      <section className="py-20 bg-[#172554] px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-2">How We Work</p>
            <h2 className="font-heading font-bold text-white text-3xl sm:text-4xl mb-4">Our Simple Process</h2>
            <p className="text-white/65 max-w-xl mx-auto">From your first call to final registration, we handle everything so you can focus on what matters.</p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                  <span className="font-heading font-bold text-orange-400 text-sm">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-slate-900 text-3xl mb-4">Ready to Get Started?</h2>
          <p className="text-slate-500 mb-8">Speak with our experts for a free, no-obligation consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Contact Us Today
            </Link>
            <a href="tel:+919689708425" className="inline-flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 hover:border-[#1d4ed8] hover:text-[#1d4ed8] font-semibold px-8 py-3.5 rounded-xl transition-colors">
              Call +91 96897 08425
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

