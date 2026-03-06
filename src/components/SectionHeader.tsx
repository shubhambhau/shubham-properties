import { motion } from 'framer-motion';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ overline, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className={`max-w-3xl ${alignClass}`}
    >
      {overline && (
        <p className="text-accent text-xs font-body uppercase tracking-[0.2em] mb-4 font-medium">
          {overline}
        </p>
      )}
      <h2 className="font-heading text-section font-semibold text-foreground mb-5">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground-muted font-body text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
