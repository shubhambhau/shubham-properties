import { motion } from 'framer-motion';

interface PageHeroProps {
  overline?: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({ overline, title, subtitle, image }: PageHeroProps) {
  const defaultImage = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80';
  const bgImage = image || defaultImage;

  return (
    <section className="relative py-section overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
          aria-hidden
        />
        <video
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          autoPlay
          muted
          loop
          playsInline
          poster={bgImage}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-dubais-skyscrapers-and-suburbs-landscape-28602-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Navy overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(14, 27, 56, 0.72) 0%, rgba(14, 27, 56, 0.78) 50%, rgba(14, 27, 56, 0.85) 100%)',
        }}
      />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(235,211,157,0.06),transparent)] pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[55vh] text-center px-5">
        {overline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#EBD39D] font-body text-xs uppercase tracking-[0.25em] mb-4 font-medium"
          >
            {overline}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="font-heading text-section font-semibold text-white max-w-3xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/85 text-lg max-w-2xl mx-auto mt-5 font-body leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
