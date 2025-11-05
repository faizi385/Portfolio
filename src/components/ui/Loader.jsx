import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 flex flex-col items-center justify-center z-50">
      <motion.div 
        className="relative w-32 h-32 mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 rounded-full border-4 border-t-transparent border-r-blue-400 border-b-blue-600 border-l-blue-400"></div>
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            <FaLaptopCode className="text-4xl text-white" />
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-white mb-2">Faizan Moeen</h2>
        <p className="text-blue-200">Loading Portfolio...</p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 w-32 h-1 bg-blue-500/30 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: '10rem' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      >
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
