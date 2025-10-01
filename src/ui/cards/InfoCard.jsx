import { motion } from "framer-motion";

const InfoCard = ({
  title,
  children,
  className = "",
  titleClassName = "text-blue-500",
  whileHover = { y: -5 },
}) => {
  return (
    <motion.div
      className={`bg-slate-900 p-6 rounded-xl shadow-lg ${className}`}
      whileHover={whileHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.h3
          className={`text-xl font-semibold mb-4 ${titleClassName}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h3>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfoCard;
