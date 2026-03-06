import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

const inquiryTypes = ['Property Buying', 'Property Selling', 'Rental', 'Investment', 'Construction / Renovation', 'Other'];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', inquiryType: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a8a] pt-32 pb-14 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Have a property question? Our team is ready to help. Call, email, or visit our Nashik office.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="font-heading font-bold text-slate-900 text-2xl mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Office Address</p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      B/Wing, Office No. 416,<br />
                      Thakkers M Square, Gangapur Road,<br />
                      Nashik - 422 005, Maharashtra
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone Numbers</p>
                    <a href="tel:+912534512263" className="block text-slate-600 text-sm hover:text-[#1d4ed8] transition-colors">+91 0253 4512263</a>
                    <a href="tel:+919689708425" className="block text-slate-600 text-sm hover:text-[#1d4ed8] transition-colors">+91 96897 08425</a>
                    <a href="tel:+919422267161" className="block text-slate-600 text-sm hover:text-[#1d4ed8] transition-colors">+91 94222 67161</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <a href="mailto:contact@propertyinnashik.in" className="text-slate-600 text-sm hover:text-[#1d4ed8] transition-colors">
                      contact@propertyinnashik.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#1d4ed8]" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Office Hours</p>
                    <p className="text-slate-600 text-sm">Mon – Sat: 9:00 AM – 7:00 PM</p>
                    <p className="text-slate-600 text-sm">Sunday: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9607742398!2d73.7730!3d20.0065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba09db1d515%3A0x58c06be445e68a09!2sGangapur%20Rd%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubham Properties Location"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h2 className="font-heading font-bold text-slate-900 text-2xl mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm mb-7">We'll get back to you within 2 business hours.</p>

              {submitted ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-slate-900 text-xl mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rajesh Sharma"
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Inquiry Type</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your property requirements..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

