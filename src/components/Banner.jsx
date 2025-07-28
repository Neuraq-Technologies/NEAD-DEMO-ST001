import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isBlinking, setIsBlinking] = useState(true);

  // Blinking effect for the text
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 1000); // Blink every second

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 relative"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.p 
            className="text-sm md:text-base text-white"
            animate={{ opacity: isBlinking ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Join us in empowering communities for sustainable development!
          </motion.p>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Close banner"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;