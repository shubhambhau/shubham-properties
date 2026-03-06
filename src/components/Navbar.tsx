import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Building2, FileText, Home, Phone, Briefcase, Wrench } from 'lucide-react';
import spLogo from '../assets/sp logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/properties', label: 'Properties' },
  {
    label: 'Services',
    children: [
      { path: '/services', label: 'All Services', icon: <FileText className="w-4 h-4" /> },
      { path: '/services/property-buying', label: 'Property Buying', icon: <Home className="w-4 h-4" /> },
      { path: '/services/property-selling', label: 'Property Selling', icon: <Building2 className="w-4 h-4" /> },
      { path: '/services/property-rental', label: 'Rentals', icon: <Building2 className="w-4 h-4" /> },
      { path: '/services/investment-consulting', label: 'Investment Advisory', icon: <Briefcase className="w-4 h-4" /> },
      { path: '/services/legal-advisory', label: 'Legal Advisory', icon: <FileText className="w-4 h-4" /> },
      { path: '/services/loan-consultancy', label: 'Loan Consultancy', icon: <FileText className="w-4 h-4" /> },
      { path: '/services/construction-services', label: 'Construction', icon: <Wrench className="w-4 h-4" /> },
      { path: '/services/emi-calculator', label: 'EMI Calculator', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  { path: '/market-insights', label: 'Market Insights' },
  { path: '/contact', label: 'Contact' },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 240 });
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateDropdownPosition = () => {
    if (!openDropdown) return;
    const el = triggerRefs.current[openDropdown];
    if (el) {
      const rect = el.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom + 4, left: rect.left, width: Math.max(rect.width, 240) });
    }
  };

  const scheduleClose = () => { closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 130); };
  const cancelClose = () => { if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; } };

  useLayoutEffect(() => {
    if (!openDropdown) return;
    updateDropdownPosition();
    window.addEventListener('scroll', updateDropdownPosition, true);
    window.addEventListener('resize', updateDropdownPosition);
    return () => { window.removeEventListener('scroll', updateDropdownPosition, true); window.removeEventListener('resize', updateDropdownPosition); };
  }, [openDropdown]);

  useEffect(() => () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); }, []);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !scrolled;
  const navBg = mobileOpen
    ? 'bg-[#1e3a8a]'
    : isTransparent
    ? 'bg-transparent'
    : scrolled
    ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
    : 'bg-[#1e3a8a]';

  const useLightText = isTransparent || (!scrolled);
  const linkClass = useLightText ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-primary-700';
  const activeClass = useLightText ? 'text-white font-semibold' : 'text-primary-700 font-semibold';
  const brandNameClass = 'bg-gradient-to-r from-[#ff4da6] to-[#ffdd99] bg-clip-text text-transparent';
  const taglineClass = useLightText ? 'text-white/70' : 'text-slate-500';

  function NavLink({ item }: { item: { path: string; label: string } }) {
    const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
    return (
      <Link to={item.path} className={`relative py-6 font-body text-base font-medium transition-colors whitespace-nowrap ${isActive ? activeClass : linkClass}`}>
        {item.label}
        {isActive && (
          <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />
        )}
      </Link>
    );
  }

  return (
    <motion.header initial={{ y: -100 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-300 ${navBg}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between min-h-[68px] lg:min-h-[76px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <img
              src={spLogo}
              alt="Shubham Properties Logo"
              className={`w-14 h-14 rounded-xl object-contain transition-all duration-200 group-hover:scale-105 ${useLightText ? 'brightness-0 invert' : ''}`}
            />
            <div className="hidden sm:block">
              <div className={`font-heading font-bold text-xl leading-tight ${brandNameClass}`}>
                Shubham Properties
              </div>
              <div className={`font-body text-sm ${taglineClass}`}>
                Nashik's Trusted Realtors
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              'children' in item ? (
                <div
                  key={item.label}
                  ref={(el) => { triggerRefs.current[item.label] = el; }}
                  className="relative"
                  onMouseEnter={() => { cancelClose(); setOpenDropdown(item.label); }}
                  onMouseLeave={scheduleClose}
                >
                  <button className={`flex items-center gap-1 px-3 py-6 font-body text-base font-medium transition-colors whitespace-nowrap ${location.pathname.startsWith('/services') ? activeClass : linkClass}`}>
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ) : (
                <div key={item.path} className="px-1">
                  <NavLink item={item} />
                </div>
              )
            )}
            <a
              href="tel:+919689708425"
              className="ml-4 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Portal dropdown */}
          {openDropdown && (() => {
            const item = navLinks.find((i) => 'children' in i && i.label === openDropdown);
            if (!item || !('children' in item)) return null;
            const { top, left, width } = dropdownPosition;
            return createPortal(
              <AnimatePresence>
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="fixed z-[60]"
                  style={{ top: `${top}px`, left: `${left}px`, minWidth: `${width}px` }}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-slate-100 py-2 overflow-hidden">
                    {item.children?.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 hover:text-primary-700 hover:bg-blue-50 transition-colors duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="text-primary-500">{child.icon}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>,
              document.body
            );
          })()}

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${useLightText ? 'text-white' : 'text-slate-700'}`}
            onClick={() => { setMobileOpen(!mobileOpen); if (mobileOpen) setOpenMobileSubmenu(null); }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#1e3a8a] border-t border-white/10"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((item) =>
                'children' in item ? (
                  <div key={item.label}>
                    <button
                      type="button"
                      onClick={() => setOpenMobileSubmenu((p) => (p === item.label ? null : item.label))}
                      className="flex w-full items-center justify-between px-3 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {openMobileSubmenu === item.label && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="overflow-hidden">
                          <div className="pl-4 pb-2 space-y-0.5">
                            {item.children?.map((child) => (
                              <Link key={child.path} to={child.path} className="flex items-center gap-2.5 px-3 py-2 text-sm text-white/75 hover:text-white transition-colors" onClick={() => { setMobileOpen(false); setOpenMobileSubmenu(null); }}>
                                <span className="text-orange-300">{child.icon}</span>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2.5 text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-orange-300' : 'text-white/90 hover:text-white'}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 pb-1">
                <a href="tel:+919689708425" className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors w-full">
                  <Phone className="w-4 h-4" />
                  +91 9689708425
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
