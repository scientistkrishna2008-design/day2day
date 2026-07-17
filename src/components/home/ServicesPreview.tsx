
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { servicesData as services } from '../../data/servicesData';

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-accent font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span> OUR EXPERTISE
          </h4>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-secondary mb-4">
            Premium Services We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive facility management solutions designed to maintain the highest standards of cleanliness, safety, and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-white flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-primary group-hover:text-accent group-hover:scale-110 transition-all">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-poppins font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors mt-auto"
                  >
                    Learn More <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-primary text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
