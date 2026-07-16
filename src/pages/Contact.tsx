import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Day 2 Day Services</title>
        <meta name="description" content="Get in touch with Day 2 Day Services for your facility management needs." />
      </Helmet>
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold text-secondary mb-4 text-center">Contact Us</h1>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">Have a question or need a quote? Reach out to us and our team will get back to you promptly.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">We would love to hear from you. Reach out to discuss how we can tailor our premium facility management solutions to your specific needs.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Office Address</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">Vaishnavi Enclave, Plot No. 1 & 2<br/>8th Street, 6th Cross<br/>Vaishnavi Nagar, Thirumullaivoyal<br/>Chennai – 600109</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Phone Number</h3>
                    <p className="text-gray-600 mt-1"><a href="tel:+919500151561" className="hover:text-primary transition-colors">+91 9500151561</a></p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Email Address</h3>
                    <p className="text-gray-600 mt-1"><a href="mailto:info@day2dayservices.in" className="hover:text-primary transition-colors">info@day2dayservices.in</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-secondary mb-6">Send a Message</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-1 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};
