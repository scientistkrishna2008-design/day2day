
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'p1',
    title: 'Tech Park Maintenance',
    category: 'Commercial',
    location: 'OMR, Chennai',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p2',
    title: 'Apollo Hospitals',
    category: 'Healthcare',
    location: 'Greams Road, Chennai',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p3',
    title: 'Hyundai Plant',
    category: 'Industrial',
    location: 'Sriperumbudur',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600'
  }
];

export const ProjectsPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h4 className="text-accent font-semibold mb-2 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span> PORTFOLIO
            </h4>
            <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-secondary">
              Featured Projects
            </h2>
          </div>
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
          >
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>
                <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {project.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-poppins font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-300 text-sm">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
