import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { MapPin, Users, Heart, Briefcase, Star, X } from 'lucide-react';

const benefits = [
  { icon: MapPin, title: 'Prime Location', description: 'Office in Dubai Marina with easy access and stunning views.' },
  { icon: Users, title: 'Small Team, Big Impact', description: 'Work with experienced professionals in a collaborative environment.' },
  { icon: Heart, title: 'Growth & Development', description: 'We invest in our people with training and clear career paths.' },
];

const positions = [
  { title: 'Senior Property Consultant', location: 'Dubai Marina', type: 'Full-time' },
  { title: 'Off-Plan Sales Specialist', location: 'Dubai', type: 'Full-time' },
  { title: 'Marketing Coordinator', location: 'Dubai Marina', type: 'Full-time' },
];

function ApplyModal({ job, onClose }: { job: (typeof positions)[0]; onClose: () => void }) {
  const inputClass = 'w-full px-4 py-3 bg-white border border-black/[0.08] rounded-xl text-foreground font-body focus:border-[#D1B275] focus:ring-2 focus:ring-[#D1B275]/20 focus:outline-none transition-colors';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto p-6 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 min-h-full" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl p-8 my-8 shrink-0"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1 text-foreground-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="font-heading text-xl font-semibold text-[#0E1B38] mb-2">Apply for {job.title}</h3>
        <p className="text-foreground-muted font-body text-sm mb-6">{job.location} • {job.type}</p>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-body text-foreground-muted mb-2">Name</label>
            <input type="text" className={inputClass} placeholder="Your name" required />
          </div>
          <div>
            <label className="block text-sm font-body text-foreground-muted mb-2">Email</label>
            <input type="email" className={inputClass} placeholder="your@email.com" required />
          </div>
          <div>
            <label className="block text-sm font-body text-foreground-muted mb-2">Phone</label>
            <input type="tel" className={inputClass} placeholder="+971" />
          </div>
          <div>
            <label className="block text-sm font-body text-foreground-muted mb-2">Resume (PDF, DOC, DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className={`${inputClass} file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-body file:text-sm file:bg-[#D1B275]/20 file:text-[#AA8951] hover:file:bg-[#D1B275]/30 file:cursor-pointer`}
            />
          </div>
          <div>
            <label className="block text-sm font-body text-foreground-muted mb-2">Cover letter / Message</label>
            <textarea rows={4} className={`${inputClass} resize-none`} placeholder="Tell us about yourself..." />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-body font-semibold text-[#0E1B38] transition-all hover:opacity-95"
            style={{ background: 'linear-gradient(135deg, #EBD39D 0%, #D1B275 50%, #AA8951 100%)' }}
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export function CareersPage() {
  const [applyJob, setApplyJob] = useState<typeof positions[0] | null>(null);
  return (
    <>
      {/* Hero Section — Video with navy overlay */}
      <section className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 md:hidden bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80)` }}
            aria-hidden
          />
          <video
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-city-street-traffic-and-burj-khalifa-in-background-20116-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, rgba(14, 27, 56, 0.72) 0%, rgba(14, 27, 56, 0.78) 50%, rgba(14, 27, 56, 0.85) 100%)',
          }}
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(235,211,157,0.06),transparent)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 px-5 max-w-4xl mx-auto"
        >
          <p className="text-[#EBD39D] font-body text-xs uppercase tracking-[0.25em] mb-6 font-medium">Careers</p>
          <h1 className="font-heading text-display font-semibold text-white mb-6">Join Our Team</h1>
          <p className="text-white/85 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed mb-10">
            We are always looking for talented individuals who share our commitment to excellence in luxury real estate.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 w-24 mx-auto rounded-full origin-center mb-10"
            style={{ background: 'linear-gradient(90deg, #EBD39D, #D1B275, #AA8951)' }}
          />
          <Button to="/contact" variant="primary" size="lg">Get in Touch</Button>
        </motion.div>
      </section>

      {/* Centered White Card — Why Join Windsor */}
      <section className="py-24 bg-page">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-2xl bg-white shadow-xl p-8 lg:p-12"
          >
            <h2 className="font-heading text-section font-semibold text-[#0E1B38] text-center mb-10">Why Join Windsor</h2>
            <p className="text-foreground-muted font-body text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              A culture built on integrity, client focus, and continuous improvement. We offer a supportive environment where your contributions matter.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 text-[#AA8951]"
                    style={{ backgroundColor: 'rgba(209, 179, 117, 0.15)' }}
                  >
                    <b.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-[#0E1B38] mb-2">{b.title}</h3>
                  <p className="text-foreground-muted font-body text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#AA8951] font-body text-xs uppercase tracking-[0.2em] mb-4 font-medium">Opportunities</p>
            <h2 className="font-heading text-section font-semibold text-[#0E1B38]">Open Positions</h2>
          </motion.div>
          <div className="space-y-4">
            {positions.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl bg-white border-l-4 border-[#D1B275]/60 shadow-card hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-semibold text-[#0E1B38] mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted font-body">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-[#AA8951]" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#AA8951]" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={() => setApplyJob(job)}
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-page">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="rounded-2xl bg-white shadow-lg p-10 lg:p-12 border border-black/[0.06]">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#D1B275] text-[#D1B275]" />
                ))}
              </div>
              <blockquote className="font-heading text-xl text-[#0E1B38] text-center mb-6">
                &ldquo;Joining Windsor was the best career move I&apos;ve made. The team culture and growth opportunities are outstanding.&rdquo;
              </blockquote>
              <p className="text-foreground-muted font-body text-sm text-center mb-8">— Team Member</p>
              <div className="flex justify-center">
                <Button to="/contact" variant="outline" size="md">Join Us</Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Final Dark CTA Section */}
      <section className="py-28" style={{ backgroundColor: '#152847' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-5"
        >
          <h2 className="font-heading text-section sm:text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white max-w-3xl mx-auto mb-6">
            Ready to Grow With Us?
          </h2>
          <p className="text-white/80 font-body text-lg max-w-xl mx-auto mb-10">
            Send us your profile and we will be in touch to discuss opportunities.
          </p>
          <Button to="/contact" variant="primary" size="lg">Contact Us</Button>
        </motion.div>
      </section>

      <AnimatePresence>
        {applyJob && (
          <ApplyModal key={applyJob.title} job={applyJob} onClose={() => setApplyJob(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
