import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import spLogo from '../assets/sp logo.png';

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand & Contact */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img src={spLogo} alt="Shubham Properties Logo" className="w-10 h-10 rounded-xl object-contain" />
              <div>
                <div className="font-heading font-bold text-base text-white">Shubham Properties</div>
                <div className="font-body text-xs text-blue-200">Nashik's Trusted Realtors</div>
              </div>
            </Link>
            <p className="text-blue-200 font-body text-sm mb-5 leading-relaxed">
              Leading real estate consultant in Nashik offering comprehensive property services — buy, sell, rent, and invest.
            </p>
            <div className="space-y-3">
              <a href="tel:+919689708425" className="flex items-start gap-3 text-white/80 hover:text-orange-300 transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                +91 9689708425
              </a>
              <a href="tel:+919422267161" className="flex items-start gap-3 text-white/80 hover:text-orange-300 transition-colors text-sm">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                +91 9422267161
              </a>
              <a href="mailto:contact@propertyinnashik.in" className="flex items-start gap-3 text-white/80 hover:text-orange-300 transition-colors text-sm">
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                contact@propertyinnashik.in
              </a>
              <div className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Office No. 416, Thakkers M Square,<br />Gangapur Road, Nashik – 422005</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-orange-300 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Properties', path: '/properties' },
                { label: 'Market Insights', path: '/market-insights' },
                { label: 'Contact Us', path: '/contact' },
                { label: 'EMI Calculator', path: '/services/emi-calculator' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/75 hover:text-orange-300 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-orange-300 mb-5">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Property Buying', path: '/services/property-buying' },
                { label: 'Property Selling', path: '/services/property-selling' },
                { label: 'Rental Services', path: '/services/property-rental' },
                { label: 'Investment Advisory', path: '/services/investment-consulting' },
                { label: 'Legal Advisory', path: '/services/legal-advisory' },
                { label: 'Loan Consultancy', path: '/services/loan-consultancy' },
                { label: 'Construction Services', path: '/services/construction-services' },
                { label: 'Interior Decoration', path: '/services/interior-decoration' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/75 hover:text-orange-300 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Property Types */}
          <nav aria-label="Property types">
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-orange-300 mb-5">Property Types</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Residential Properties', path: '/properties?category=residential' },
                { label: 'Commercial Properties', path: '/properties?category=commercial' },
                { label: 'Industrial Properties', path: '/properties?category=industrial' },
                { label: 'Hospitality Properties', path: '/properties?category=hospitality' },
                { label: 'Properties for Sale', path: '/properties?purpose=buy' },
                { label: 'Properties for Rent', path: '/properties?purpose=rent' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path} className="text-white/75 hover:text-orange-300 text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-body font-semibold text-sm uppercase tracking-wider text-orange-300 mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 border border-white/20 hover:border-orange-400 hover:text-orange-300 hover:bg-orange-400/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm font-body text-center sm:text-left">
            © {new Date().getFullYear()} Shubham Properties. All rights reserved. | Nashik, Maharashtra, India
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <a href="https://www.propertyinnashik.in" target="_blank" rel="noopener noreferrer" className="hover:text-orange-300 transition-colors">
              propertyinnashik.in
            </a>
            <span>·</span>
            <a href="mailto:shubhamproperties.sonar@gmail.com" className="hover:text-orange-300 transition-colors">
              shubhamproperties.sonar@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
