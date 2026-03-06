import { motion } from 'framer-motion';
import { Button } from './Button';

interface ServiceHeroProps {
  overline?: string;
  title: string;
  subtitle?: string;
  image?: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  trustBadges?: { label: string }[];
}

const defaultTrustBadges = [
  { label: '500+ Happy Clients' },
  { label: '20+ Premium Developments' },
  { label: 'Award Winning Service' },
];

export function ServiceHero({
  overline,
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80',
  primaryCta = { label: 'Get Started', to: '/contact' },
  secondaryCta = { label: 'View Services', to: '/services' },
  trustBadges = defaultTrustBadges,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={image}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dubai-city-skyscrapers-and-the-burj-khalifa-20114-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Navy overlay — reduced opacity */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(23,37,84,0.75) 0%, rgba(30,58,138,0.75) 60%, rgba(29,78,216,0.75) 100%)',
        }}
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(235,211,157,0.06),transparent)] pointer-events-none" />

      <div className="relative z-10 px-5 py-24 max-w-4xl mx-auto">
        {overline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#EBD39D] font-body text-xs uppercase tracking-[0.25em] mb-6 font-medium"
          >
            {overline}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-heading text-display font-semibold text-white mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/85 text-lg sm:text-xl font-body max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Two CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Button to={primaryCta.to} variant="primary" size="lg">{primaryCta.label}</Button>
          <Button to={secondaryCta.to} variant="outlineLight" size="lg">{secondaryCta.label}</Button>
        </motion.div>

        {/* Trust badge row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-white/15"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge.label}
              className="text-white/70 font-body text-sm uppercase tracking-widest"
            >
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
