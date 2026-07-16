import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery | Day 2 Day Services</title>
        <meta name="description" content="Photo gallery showcasing our work and team at Day 2 Day Services." />
      </Helmet>
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-4 text-center mt-8">Media Gallery</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">A glimpse into our daily operations, showcasing our dedicated staff and the pristine environments we maintain.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-2xl overflow-hidden group relative shadow-md">
                <img src={`https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600&random=${i}`} alt="Gallery item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
};
