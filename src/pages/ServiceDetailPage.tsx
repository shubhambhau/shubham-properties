import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServiceBySlug } from '../data/services';
import { Check, ArrowRight, Phone, ArrowLeft } from 'lucide-react';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-5">
        <h2 className="font-heading font-bold text-slate-900 text-2xl mb-3">Service Not Found</h2>
        <Link to="/services" className="text-[#1d4ed8] hover:underline font-medium">← Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#1e3a8a] pt-32 pb-14 px-5 overflow-hidden">
        {service.image && (
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        )}
        <div className="relative max-w-4xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-4 capitalize">
            {service.category.replace('-', ' ')}
          </span>
          <h1 className="font-heading font-bold text-white text-3xl sm:text-5xl mb-5">{service.title}</h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed">{service.shortDescription}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-2xl mb-4">About This Service</h2>
              <p className="text-slate-600 leading-relaxed text-lg">{service.description}</p>
            </div>

            {/* Process Steps */}
            {service.processSteps && service.processSteps.length > 0 && (
              <div>
                <h2 className="font-heading font-bold text-slate-900 text-2xl mb-6">How It Works</h2>
                <div className="space-y-4">
                  {service.processSteps.map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 font-heading font-bold text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Why Choose Us */}
            {service.whyChoose && service.whyChoose.length > 0 && (
              <div className="bg-[#172554] rounded-2xl p-8">
                <h2 className="font-heading font-bold text-white text-2xl mb-6">Why Choose Shubham Properties?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.whyChoose.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-orange-400" />
                      </div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Quick Contact */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-slate-900 text-lg mb-2">Get Free Consultation</h3>
                <p className="text-slate-600 text-sm mb-5">Our experts are ready to help you with your property needs.</p>
                <a
                  href="tel:+919689708425"
                  className="flex items-center justify-center gap-2 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold py-3 rounded-xl transition-colors w-full mb-3"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-[#1d4ed8] text-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white font-semibold py-3 rounded-xl transition-colors w-full"
                >
                  Send Enquiry <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Other Services */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-4">Other Services</h3>
                <div className="space-y-2.5">
                  <Link to="/services/property-buying" className="block text-sm text-slate-600 hover:text-[#1d4ed8] transition-colors py-1 border-b border-slate-100 last:border-0">
                    Property Buying Assistance →
                  </Link>
                  <Link to="/services/property-selling" className="block text-sm text-slate-600 hover:text-[#1d4ed8] transition-colors py-1 border-b border-slate-100 last:border-0">
                    Property Selling Assistance →
                  </Link>
                  <Link to="/services/property-rental" className="block text-sm text-slate-600 hover:text-[#1d4ed8] transition-colors py-1 border-b border-slate-100 last:border-0">
                    Property Rental Services →
                  </Link>
                  <Link to="/services/vastu-consultation" className="block text-sm text-slate-600 hover:text-[#1d4ed8] transition-colors py-1 border-b border-slate-100 last:border-0">
                    Vastu Consultation →
                  </Link>
                  <Link to="/services/loan-consultancy" className="block text-sm text-slate-600 hover:text-[#1d4ed8] transition-colors py-1 border-b border-slate-100 last:border-0">
                    Loan Consultancy →
                  </Link>
                  <Link to="/services" className="block text-sm font-semibold text-[#1d4ed8] hover:text-[#1e40af] transition-colors pt-2">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

