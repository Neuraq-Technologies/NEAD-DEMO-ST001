import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update date every minute (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

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
        className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-4 relative shadow-md"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-tight">National Empowerment and Development Agency</h2>
            <p className="text-sm font-medium opacity- text-yellow-950">
              Inauguration – {currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm font-semibold hidden sm:block text-white">
              Join the Movement. Empower the Nation.
            </p>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-full hover:bg-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              aria-label="Close banner"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;