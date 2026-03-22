import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-dark-bg)] text-[var(--color-beige-light)]">
      {/* Top Bar */}
      <div className="bg-[var(--color-dark-surface)] py-2 px-4 sm:px-6 lg:px-8 border-b border-white/5 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider text-[var(--color-beige-muted)] uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> 575-607-8392</span>
            <span>Clovis, New Mexico</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/natts_lashes_" target="_blank" rel="noreferrer" className="hover:text-[var(--color-brown-accent)] transition-colors">
              <Instagram size={14} />
            </a>
            <a href="https://www.facebook.com/share/Vq1cvUjhyryEDJrY/?" target="_blank" rel="noreferrer" className="hover:text-[var(--color-brown-accent)] transition-colors">
              <Facebook size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[var(--color-dark-bg)]/90 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif tracking-wide text-[var(--color-beige-light)]">
            Natt's<span className="text-[var(--color-brown-accent)] italic">Lashes</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-[var(--color-brown-accent)] ${
                  location.pathname === link.path ? 'text-[var(--color-brown-accent)]' : 'text-[var(--color-beige-muted)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/book"
              className="px-6 py-2.5 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] text-sm uppercase tracking-widest font-medium hover:bg-[var(--color-beige-light)] transition-colors duration-300"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--color-beige-light)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-dark-bg)] pt-24 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-2xl font-serif tracking-wide ${
                  location.pathname === link.path ? 'text-[var(--color-brown-accent)]' : 'text-[var(--color-beige-light)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link 
                to="/book"
                className="w-full py-4 bg-[var(--color-brown-accent)] text-[var(--color-dark-bg)] text-center uppercase tracking-widest font-medium"
              >
                Book Appointment
              </Link>
              <a 
                href="https://wa.me/15756078392" 
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 border border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] text-center uppercase tracking-widest font-medium"
              >
                Book via WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-dark-surface)] pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <Link to="/" className="text-2xl font-serif tracking-wide text-[var(--color-beige-light)] mb-6 block">
                Natt's<span className="text-[var(--color-brown-accent)] italic">Lashes</span>
              </Link>
              <p className="text-[var(--color-beige-muted)] text-sm leading-relaxed mb-6">
                Premium lash extensions and facial treatments in Clovis, New Mexico. Enhancing your natural beauty with precision and care.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/natts_lashes_" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-beige-muted)] hover:bg-[var(--color-brown-accent)] hover:text-[var(--color-dark-bg)] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/share/Vq1cvUjhyryEDJrY/?" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[var(--color-beige-muted)] hover:bg-[var(--color-brown-accent)] hover:text-[var(--color-dark-bg)] transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest text-[var(--color-beige-light)] font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-[var(--color-beige-muted)] hover:text-[var(--color-brown-accent)] transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-[var(--color-beige-light)] font-medium mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-[var(--color-beige-muted)]">
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-[var(--color-brown-accent)] mt-0.5" />
                  <span>575-607-8392</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar size={16} className="text-[var(--color-brown-accent)] mt-0.5" />
                  <span>By Appointment Only</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest text-[var(--color-beige-light)] font-medium mb-6">Location</h4>
              <p className="text-sm text-[var(--color-beige-muted)] leading-relaxed mb-4">
                Clovis, New Mexico<br />
                NM 88101
              </p>
              <Link 
                to="/book"
                className="inline-block border-b border-[var(--color-brown-accent)] text-[var(--color-brown-accent)] text-sm uppercase tracking-widest pb-1 hover:text-[var(--color-beige-light)] hover:border-[var(--color-beige-light)] transition-colors"
              >
                Book Online
              </Link>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-beige-muted)]">
            <p>&copy; {new Date().getFullYear()} Natt's Lashes & Skin. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="https://glossgenius.com/privacy" target="_blank" rel="noreferrer" className="hover:text-[var(--color-beige-light)]">Privacy Policy</a>
              <a href="https://glossgenius.com/legal/user-terms" target="_blank" rel="noreferrer" className="hover:text-[var(--color-beige-light)]">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
