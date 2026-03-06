import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'outlineLight' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  onClick,
  type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-body font-medium transition-all duration-300 rounded-lg';
  const variants = {
    primary:
      'text-[#0E1B38] font-semibold shadow-[0_8px_30px_rgba(0,0,0,0.25),0_4px_12px_rgba(235,211,157,0.2)] hover:opacity-95',
    outline:
      'border-[3px] border-[#D1B275] text-[#0E1B38] hover:bg-[#D1B275]/15 hover:border-[#AA8951]',
    outlineLight:
      'border-[3px] border-[#D1B275] text-white hover:bg-[#D1B275]/25 hover:border-[#EBD39D] backdrop-blur-md bg-white/5',
    ghost: 'text-foreground-muted hover:bg-black/5 hover:text-[#AA8951]',
  };
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  };
  const primaryStyle = { background: 'linear-gradient(135deg, #EBD39D 0%, #D1B275 50%, #AA8951 100%)' };
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <motion.span
          whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
          style={
            variant === 'primary'
              ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', ...primaryStyle }
              : { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }
          }
        >
          {children}
        </motion.span>
      </Link>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      style={variant === 'primary' ? primaryStyle : undefined}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}
