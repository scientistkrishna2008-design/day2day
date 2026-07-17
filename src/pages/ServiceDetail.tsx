import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.title} | Direct 2 Drive Facility Service</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
          </div>
          <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-16">
            <Link to="/services" className="inline-flex items-center gap-2 text-white/80 hover:text-accent transition-colors mb-6 w-fit">
              <ArrowLeft size={20} /> Back to Services
            </Link>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="p-3 bg-accent rounded-xl text-white">
                <Icon size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white">
                {service.title}
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 max-w-2xl"
            >
              {service.description}
            </motion.p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-poppins font-bold text-secondary mb-6">Service Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.longDescription}
                </p>
                
                <h3 className="text-xl font-poppins font-bold text-secondary mb-6">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-primary p-8 rounded-3xl text-white shadow-xl sticky top-28"
              >
                <h3 className="text-2xl font-poppins font-bold mb-4">Need this service?</h3>
                <p className="text-primary-foreground/90 mb-8">
                  Get in touch with us today to discuss your specific requirements and receive a customized quote.
                </p>
                <Link 
                  to="/contact"
                  className="block w-full text-center bg-accent hover:bg-white hover:text-secondary text-white font-bold py-4 px-6 rounded-xl transition-colors"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};
