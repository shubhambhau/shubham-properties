import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={hover ? { y: -6, transition: { duration: 0.25 } } : undefined}
      className={`rounded-2xl overflow-hidden bg-paper border border-black/[0.06] shadow-card transition-shadow duration-300 ${hover ? 'hover:shadow-card-hover hover:border-accent/20' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
