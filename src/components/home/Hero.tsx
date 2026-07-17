
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background with abstract shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="pt-10 pb-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6 text-sm font-medium text-primary"
          >
            <ShieldCheck size={16} className="text-accent" />
            ISO Certified Facility Management
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-poppins font-bold text-secondary leading-[1.1] mb-6"
          >
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Workspace</span> Experience
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed"
          >
            Premium facility management, housekeeping, and staffing solutions tailored for corporate, industrial, and residential sectors in Chennai.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-primary/30 flex items-center gap-2 hover:-translate-y-0.5">
              Get Free Quote <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="bg-white hover:bg-gray-50 text-secondary border border-gray-200 px-8 py-4 rounded-full font-medium transition-all shadow-sm flex items-center gap-2 hover:-translate-y-0.5">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200 flex items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-poppins text-secondary">21+</span>
              <span className="text-sm text-gray-500">Years Experience</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-poppins text-secondary">500+</span>
              <span className="text-sm text-gray-500">Professional Staff</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-poppins text-secondary">250+</span>
              <span className="text-sm text-gray-500">Happy Clients</span>
            </div>
          </motion.div>
        </div>

        {/* Image Grid / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Main Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white rounded-3xl p-3 shadow-2xl z-10 rotate-3 transition-transform hover:rotate-0 duration-500">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 relative">
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Corporate Office Cleaning" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-20 -left-10 z-20 glass-card p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Verified Team</p>
              <p className="font-bold text-secondary">100% Background Checked</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 -right-4 z-20 glass-card p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Top Rated</p>
              <p className="font-bold text-secondary">Premium Corporate Service</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
