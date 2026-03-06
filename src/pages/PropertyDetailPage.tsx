import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, BedDouble, Bath, Maximize2, Phone, Mail,
  ChevronLeft, ChevronRight, CheckCircle2, ArrowLeft,
} from 'lucide-react';
import { getPropertyById } from '../data/properties';

export function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = id ? getPropertyById(id) : undefined;
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-5">
        <h2 className="font-heading font-bold text-slate-900 text-2xl mb-3">Property Not Found</h2>
        <p className="text-slate-500 mb-6">This listing may have been removed or the link is incorrect.</p>
        <Link to="/properties" className="bg-[#1d4ed8] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1e40af] transition-colors">
          Browse All Properties
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-600 hover:text-[#1d4ed8] text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="relative rounded-2xl overflow-hidden mb-2 aspect-video">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((i) => (i - 1 + property.images.length) % property.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-slate-700" />
                  </button>
                  <button
                    onClick={() => setActiveImage((i) => (i + 1) % property.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-slate-700" />
                  </button>
                  <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full">
                    {activeImage + 1} / {property.images.length}
                  </div>
                </>
              )}
            </div>

            {property.images.length > 1 && (
              <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
                {property.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? 'border-[#1d4ed8]' : 'border-transparent'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Title & Badges */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${property.purpose === 'buy' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                  For {property.purpose === 'buy' ? 'Sale' : 'Rent'}
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 capitalize">
                  {property.category}
                </span>
                {property.featured && (
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">Featured</span>
                )}
              </div>
              <h1 className="font-heading font-bold text-slate-900 text-2xl sm:text-3xl mb-2">{property.title}</h1>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                {property.location}, {property.city}, Maharashtra
              </div>
              <div className="text-3xl font-heading font-bold text-[#1e3a8a]">{property.priceLabel}</div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-5 border-t border-slate-100">
                <div className="text-center">
                  <Maximize2 className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                  <div className="font-semibold text-slate-900">{property.area.toLocaleString()}</div>
                  <div className="text-slate-500 text-xs">sq ft</div>
                </div>
                {property.bedrooms && (
                  <div className="text-center">
                    <BedDouble className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <div className="font-semibold text-slate-900">{property.bedrooms}</div>
                    <div className="text-slate-500 text-xs">Bedrooms</div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="text-center">
                    <Bath className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <div className="font-semibold text-slate-900">{property.bathrooms}</div>
                    <div className="text-slate-500 text-xs">Bathrooms</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="w-5 h-5 mx-auto mb-1 text-slate-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-slate-900 capitalize">{property.status}</div>
                  <div className="text-slate-500 text-xs">Status</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-6">
              <h2 className="font-heading font-semibold text-slate-900 text-xl mb-3">About This Property</h2>
              <p className="text-slate-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            {property.features && property.features.length > 0 && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h2 className="font-heading font-semibold text-slate-900 text-xl mb-4">Amenities & Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.features.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column — Enquiry Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-heading font-semibold text-slate-900 text-lg mb-1">Enquire About This Property</h3>
                <p className="text-slate-500 text-sm mb-5">Our expert will get back to you within 2 hours.</p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h4 className="font-heading font-semibold text-slate-900 mb-1">Enquiry Sent!</h4>
                    <p className="text-slate-500 text-sm">We'll call you back shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="I'm interested in this property..."
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold py-3.5 rounded-xl transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-5 border-t border-slate-100 space-y-3">
                  <a href="tel:+919689708425" className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#1d4ed8] transition-colors">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#1d4ed8]" />
                    </div>
                    +91 96897 08425
                  </a>
                  <a href="mailto:contact@propertyinnashik.in" className="flex items-center gap-3 text-sm text-slate-700 hover:text-[#1d4ed8] transition-colors">
                    <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#1d4ed8]" />
                    </div>
                    contact@propertyinnashik.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
