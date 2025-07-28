import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid md:grid-cols-4 gap-12"
        >
          <motion.div variants={fadeIn}>
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="https://via.placeholder.com/180x60?text=NEADS+Logo" 
                alt="NEADS Logo" 
                className="h-10"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering communities through sustainable development initiatives.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={`M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z`} />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4">Focus Areas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Water Supply</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sanitation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Waste Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women Empowerment</a></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>123 Development Avenue</p>
              <p>Empowerment City, EC 12345</p>
              <p>Email: info@neads.org</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500"
        >
          <p>&copy; {new Date().getFullYear()} National Empowerment and Development Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;