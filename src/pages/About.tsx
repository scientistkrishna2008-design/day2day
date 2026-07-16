import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Day 2 Day Services</title>
        <meta name="description" content="Learn about Day 2 Day Services, Chennai's premier facility management company." />
      </Helmet>
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-8 text-center">About Day 2 Day Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established over a decade ago, Day 2 Day Services has grown from a small housekeeping agency to a comprehensive facility management powerhouse. We pride ourselves on delivering uncompromising quality and reliability to our clients across Chennai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team is composed of highly trained professionals who understand the nuances of maintaining diverse environments, from sterile hospital wards to bustling corporate offices. We continuously invest in training and technology to stay ahead of industry standards.
              </p>
            </div>
            <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Meeting" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 font-bold text-xl">V</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Vision</h3>
              <p className="text-gray-600">To be the most trusted and innovative facility management partner in India, creating environments where businesses thrive and people succeed.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 font-bold text-xl">M</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-600">To provide consistent, high-quality, and cost-effective facility management solutions through trained personnel, modern technology, and sustainable practices.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 font-bold text-xl">C</div>
              <h3 className="text-xl font-bold text-secondary mb-3">Core Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Uncompromising Integrity</li>
                <li>• Pursuit of Excellence</li>
                <li>• Customer-First Approach</li>
                <li>• Collaborative Teamwork</li>
                <li>• Environmental Sustainability</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};
