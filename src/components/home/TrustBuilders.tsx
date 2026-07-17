
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { value: '21+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '250+', label: 'Happy Clients' },
  { value: '150+', label: 'Professional Staff' },
];

const features = [
  'Verified Team',
  'Quality Assurance',
  'Quick Response',
  'Customer Satisfaction',
  '24/7 Support',
  'Eco-Friendly Products'
];

export const TrustBuilders = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-secondary rounded-3xl p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-6">
                Why Choose Day 2 Day Services?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We don't just maintain facilities; we elevate them. Our commitment to excellence, rigorous quality checks, and trained professionals ensure your workspace is always at its best.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                    <span className="font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block h-[400px]">
               <img 
                 src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800" 
                 alt="Professional Cleaning Staff" 
                 className="w-full h-full object-cover rounded-2xl shadow-2xl"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
