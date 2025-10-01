import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

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

const ContactInfo = () => {
  return (
    <motion.div
      className="bg-slate-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto"
      variants={itemVariants}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col justify-center items-center sm:items-start space-y-3">
        <motion.h3
          className="text-lg font-semibold text-blue-400"
          variants={itemVariants}
        >
          Contact Information
        </motion.h3>

        <motion.p
          className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
          variants={itemVariants}
        >
          <FaMapMarkerAlt className="text-blue-400" />
          No: 12 Epetedo st, Lagos State, Nigeria
        </motion.p>

        <motion.p
          className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
          variants={itemVariants}
        >
          <FaEnvelope className="text-blue-400" />
          ichukwunicholasagbo@email.com
        </motion.p>

        <motion.p
          className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
          variants={itemVariants}
        >
          <FaPhoneAlt className="text-blue-400" />
          +234 705 870 5863
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
