import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ProjectsPreview } from '../components/home/ProjectsPreview';

export const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Day 2 Day Services</title>
        <meta name="description" content="View our portfolio of facility management projects across commercial, healthcare, and industrial sectors." />
      </Helmet>
      <main className="pt-20 min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-6 py-12">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-6 text-center mt-8">Our Portfolio</h1>
             <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">A showcase of our successful facility management implementations across various sectors, demonstrating our commitment to excellence and attention to detail.</p>
           </motion.div>
        </div>
        <ProjectsPreview />
      </main>
    </>
  );
};
