import { motion } from "framer-motion";

const ToggleButton = ({ isOpen, onClick, label, className = "" }) => {
  return (
    <motion.div
      className={`flex justify-center mt-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <button
        onClick={onClick}
        className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
      >
        {isOpen ? `Show Less ${label}` : `Show More ${label}`}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default ToggleButton;