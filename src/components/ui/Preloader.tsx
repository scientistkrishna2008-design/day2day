import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Keep the preloader visible for at least 2.5 seconds to show the animation
    const timer = setTimeout(() => {
      setIsAnimating(false);
      // Wait for the exit animation (slide up) to finish before unmounting
      setTimeout(onComplete, 800); 
    }, 2500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      initial={{ y: 0 }}
      animate={{ y: isAnimating ? 0 : '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Reveal the logo from bottom to top using clipPath */}
        <motion.div 
          className="relative overflow-hidden"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        >
           <img 
             src="/logo.png" 
             alt="Direct 2 Drive Logo" 
             className="h-32 md:h-48 object-contain px-4"
             onError={(e) => {
               // Fallback if logo.png isn't placed yet
               e.currentTarget.style.display = 'none';
             }}
           />
           {/* Fallback text if image doesn't load */}
           <div className="absolute inset-0 flex items-center justify-center -z-10">
             <span className="text-3xl font-bold text-primary">Direct 2 Drive</span>
           </div>
        </motion.div>
        
        {/* Animated Loading Bar */}
        <motion.div 
          className="h-1 bg-primary mt-8 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 250, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
        />
        
        {/* Subtitle fading in */}
        <motion.p
          className="mt-4 text-gray-500 font-medium tracking-widest uppercase text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Facility Service
        </motion.p>
      </div>
    </motion.div>
  );
};
