import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  const sizes = {
    default: 'max-w-6xl',
    narrow: 'max-w-3xl',
    wide: 'max-w-7xl',
  };
  return (
    <div className={`mx-auto px-5 sm:px-8 lg:px-10 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
