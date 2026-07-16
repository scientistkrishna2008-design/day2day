
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6 leading-tight">
              Ready to Upgrade Your Workspace?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Get in touch with us today for a free consultation and customized facility management plan tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-accent/30 flex items-center gap-2 hover:-translate-y-1 w-full sm:w-auto justify-center text-lg"
              >
                Get a Free Quote <ArrowRight size={20} />
              </Link>
              <a 
                href="tel:+919500151561"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 hover:-translate-y-1 w-full sm:w-auto justify-center text-lg"
              >
                <PhoneCall size={20} />
                +91 9500151561
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
