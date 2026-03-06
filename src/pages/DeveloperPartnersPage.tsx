import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { developers, marqueeLogos } from '../data/developers';
import { Building2, FileCheck, Handshake } from 'lucide-react';

const benefits = [
  { icon: Building2, title: 'Developer Access', description: 'Direct relationships with leading Dubai developers for priority inventory and competitive terms.' },
  { icon: FileCheck, title: 'Structured Deals', description: 'Clear agreements, transparent pricing, and support through marketing and sales cycles.' },
  { icon: Handshake, title: 'Long-Term Partnership', description: 'We align our success with yours through consistent volume and quality of buyers.' },
];

export function DeveloperPartnersPage() {
  const [marqueePaused, setMarqueePaused] = useState(false);

  return (
    <>
      {/* Hero Section — Video with navy overlay */}
      <section className="relative py-28 flex flex-col items-center justify-center text-center overflow-hidden">
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
              src="https://assets.mixkit.co/videos/preview/mixkit-roads-with-traffic-in-dubais-night-28601-large.mp4"
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
          <p className="text-[#EBD39D] font-body text-xs uppercase tracking-[0.25em] mb-6 font-medium">Partners</p>
          <h1 className="font-heading text-display font-semibold text-white mb-6">Developer Partners</h1>
          <p className="text-white/85 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed mb-10">
            We work with top developers to bring exclusive projects and off-plan opportunities to our clients.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 w-24 mx-auto rounded-full origin-center"
            style={{ background: 'linear-gradient(90deg, #EBD39D, #D1B275, #AA8951)' }}
          />
        </motion.div>
      </section>

      {/* Animated Logo Marquee — 2-column cards, slider, pause on hover, grayscale → color */}
      <section className="py-20 overflow-hidden bg-page">
        <style>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marqueeScroll 45s linear infinite;
          }
          .marquee-track.paused {
            animation-play-state: paused;
          }
        `}</style>
        <div
          className="relative flex w-full"
          onMouseEnter={() => setMarqueePaused(true)}
          onMouseLeave={() => setMarqueePaused(false)}
        >
          {/* Soft gradient fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #f8f6f2 0%, transparent 100%)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #f8f6f2 0%, transparent 100%)' }}
          />
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Row 1 */}
            <div className={`flex gap-6 sm:gap-8 shrink-0 marquee-track ${marqueePaused ? 'paused' : ''}`}>
              {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                <motion.div
                  key={`r1-${i}`}
                  className="flex-shrink-0 w-[180px] sm:w-[220px] h-[120px] sm:h-[140px] rounded-xl overflow-hidden bg-paper border border-black/[0.06] shadow-card flex items-center justify-center p-5 group cursor-default"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={logo} alt="" className="w-full h-full object-contain transition-all duration-300" />
                </motion.div>
              ))}
            </div>
            {/* Row 2 */}
            <div className={`flex gap-6 sm:gap-8 shrink-0 marquee-track ${marqueePaused ? 'paused' : ''}`}>
              {[...marqueeLogos, ...marqueeLogos].map((logo, i) => (
                <motion.div
                  key={`r2-${i}`}
                  className="flex-shrink-0 w-[180px] sm:w-[220px] h-[120px] sm:h-[140px] rounded-xl overflow-hidden bg-paper border border-black/[0.06] shadow-card flex items-center justify-center p-5 group cursor-default"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={logo} alt="" className="w-full h-full object-contain transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Developer Grid Section — 4/2/1 columns, autoplay card animation */}
      <section className="py-24 bg-cream">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[#AA8951] font-body text-xs uppercase tracking-[0.2em] mb-4 font-medium">Our Network</p>
            <h2 className="font-heading text-section font-semibold text-[#0E1B38]">Developer Partners</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {developers.map((dev, i) => (
              <motion.div
                key={dev.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{
                  boxShadow: [
                    '0 2px 16px -4px rgba(0,0,0,0.08)',
                    '0 12px 28px -8px rgba(209, 179, 117, 0.15)',
                    '0 2px 16px -4px rgba(0,0,0,0.08)',
                  ],
                }}
                transition={{
                  opacity: { duration: 0.5, delay: i * 0.06 },
                  y: { duration: 0.5, delay: i * 0.06 },
                  boxShadow: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  },
                }}
                whileHover={{
                  borderColor: 'rgba(209, 179, 117, 0.5)',
                  scale: 1.02,
                  transition: { duration: 0.25 },
                }}
                className="group rounded-2xl bg-paper border-2 border-transparent p-8 shadow-card transition-all duration-300"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-sand/50 mb-6 flex items-center justify-center">
                  <img
                    src={dev.logo}
                    alt={dev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#0E1B38] mb-4 text-center">{dev.name}</h3>
                <Link
                  to="/services"
                  className="block w-full text-center py-2.5 rounded-xl text-sm font-body font-medium border border-[#D1B275]/50 text-[#AA8951] hover:bg-[#D1B275]/10 hover:border-[#D1B275] transition-all duration-300"
                >
                  View Projects
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partnership Benefits — Split layout */}
      <section className="py-24 bg-page">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#AA8951] font-body text-xs uppercase tracking-[0.2em] mb-4 font-medium">Why Partner</p>
              <h2 className="font-heading text-section font-semibold text-[#0E1B38] mb-6">Partnership Benefits</h2>
              <p className="text-foreground-muted font-body text-lg leading-relaxed">
                Windsor delivers qualified buyers and a professional process from lead to closing. We combine local market expertise with international service standards to maximize your project&apos;s reach.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 rounded-xl border border-black/[0.06] bg-paper p-6 shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-[#AA8951]" style={{ backgroundColor: 'rgba(209, 179, 117, 0.15)' }}>
                    <b.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[#0E1B38] mb-1">{b.title}</h3>
                    <p className="text-foreground-muted font-body text-sm leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#152847' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-5"
        >
          <h2 className="font-heading text-section sm:text-[clamp(2rem,5vw,3.5rem)] font-semibold text-white max-w-3xl mx-auto mb-6">
            Interested in Partnering?
          </h2>
          <p className="text-white/80 font-body text-lg max-w-xl mx-auto mb-10">
            Developers interested in partnering with Windsor can reach out to discuss collaboration opportunities.
          </p>
          <Button to="/contact" variant="primary" size="lg">Contact Us</Button>
        </motion.div>
      </section>
    </>
  );
}
