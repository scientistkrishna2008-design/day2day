import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = scrolled || !isHome 
    ? 'bg-white/90 backdrop-blur-md shadow-md py-4 text-text'
    : 'bg-transparent py-6 text-white';

  const linkClass = (path: string) => {
    const isActive = location.pathname === path;
    if (scrolled || !isHome) {
      return isActive ? 'text-accent' : 'text-gray-700 hover:text-primary';
    }
    return isActive ? 'text-accent' : 'text-white/90 hover:text-white';
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Direct 2 Drive Logo" className="h-14 md:h-16" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors ${linkClass(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+919500151561"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-accent/30"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} className={scrolled || isOpen || !isHome ? 'text-text' : 'text-white'} />
          ) : (
            <Menu size={28} className={scrolled || !isHome ? 'text-text' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-poppins font-medium ${
                  location.pathname === link.path ? 'text-accent' : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+919500151561"
              className="mt-4 flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full text-lg font-medium"
            >
              <Phone size={20} />
              <span>+91 9500151561</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
