import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ServicesPreview } from '../components/home/ServicesPreview';

export const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Day 2 Day Services</title>
        <meta name="description" content="Explore our premium facility management services including housekeeping, pest control, and staffing." />
      </Helmet>
      <main className="pt-20 min-h-screen">
        <div className="bg-secondary text-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-poppins font-bold mb-6">Our Premium Services</motion.h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Discover how we can elevate your workspace with our comprehensive facility management solutions tailored for your business needs.</p>
          </div>
        </div>
        <ServicesPreview />
      </main>
    </>
  );
};
