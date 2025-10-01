import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const SectionHeader = ({ title, subtitle, accentWord, className = "" }) => {
  return (
    <motion.div
      className={`text-center pb-10 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-bold mb-3 text-4xl text-blue-500"
        variants={itemVariants}
      >
        {title} <span className="text-white">{accentWord}</span>
      </motion.h2>
      <motion.p className="text-stone-400" variants={itemVariants}>
        {subtitle}
      </motion.p>
    </motion.div>
  );
};

export default SectionHeader;