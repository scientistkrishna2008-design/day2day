import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Globe } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block bg-white p-2 rounded-xl">
              <img src="/logo.png" alt="Direct 2 Drive Logo" className="h-12 md:h-16" />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium facility management and staffing solutions tailored for corporate, industrial, and residential sectors in Chennai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Our Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <ArrowRight size={16} /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={16} className="text-accent" /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300">
                  Vaishnavi Enclave, Plot No. 1 & 2<br />
                  8th Street, 6th Cross<br />
                  Vaishnavi Nagar, Thirumullaivoyal<br />
                  Chennai – 600109
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={20} />
                <a href="tel:+919500151561" className="text-gray-300 hover:text-accent transition-colors">
                  +91 9500151561
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={20} />
                <a href="mailto:info@day2dayservices.in" className="text-gray-300 hover:text-accent transition-colors">
                  info@day2dayservices.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Day 2 Day Services. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
