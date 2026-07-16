
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPreview = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Corporate Meeting" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-xl"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 hidden sm:flex">
              <div className="text-5xl font-poppins font-bold text-primary">10+</div>
              <div className="text-sm font-medium text-gray-600 leading-tight">
                Years of<br/>Excellence
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span> ABOUT US
            </h4>
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-secondary mb-6 leading-tight">
              Transforming Workspaces with Premium Facility Management
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Day 2 Day Services, we believe that a clean, well-managed environment is the foundation for success. As Chennai's premier facility management company, we deliver tailored solutions that meet the unique needs of corporate, industrial, and residential sectors.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our dedicated team of professionals uses industry-leading practices and eco-friendly products to ensure your space is not just maintained, but elevated to its highest potential.
            </p>
            
            <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group">
              Discover Our Story 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
