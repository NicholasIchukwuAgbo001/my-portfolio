import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const AvailableBanner = () => {
  return (
    <motion.div
      className="fixed top-20 right-4 z-40"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(16, 185, 129, 0.4)" }}
        animate={{
          boxShadow: [
            "0 5px 20px rgba(16, 185, 129, 0.3)",
            "0 5px 30px rgba(16, 185, 129, 0.5)",
            "0 5px 20px rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiCheck className="w-5 h-5" />
        </motion.div>
        <span className="font-semibold text-sm">Available for Work</span>
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          animate={{
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AvailableBanner;
