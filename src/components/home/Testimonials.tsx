
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'TechCorp Solutions',
    rating: 5,
    text: 'Day 2 Day Services has completely transformed our office environment. Their housekeeping staff is extremely professional, punctual, and detail-oriented.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Global Health Care',
    rating: 5,
    text: 'Maintaining hygiene in a hospital setting is critical, and Day 2 Day delivers exceptionally well. We rely on them for round-the-clock facility management.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 3,
    name: 'Suresh Menon',
    company: 'Apex Manufacturing',
    rating: 5,
    text: 'We outsourced our entire manpower supply and pest control to Day 2 Day Services. It has been a seamless experience with zero complaints over the last 3 years.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 4,
    name: 'Anjali Desai',
    company: 'Skyline Apartments',
    rating: 5,
    text: 'The residential cleaning and security services provided are top-notch. Highly recommended for apartment associations.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-accent font-semibold mb-2 flex items-center justify-center gap-2">
            <span className="w-8 h-1 bg-accent rounded-full"></span> TESTIMONIALS
          </h4>
          <h2 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">
            What Our Clients Say
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 relative h-full flex flex-col">
                  <Quote className="absolute top-6 right-6 text-white/20" size={48} />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed italic flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <h4 className="font-poppins font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
