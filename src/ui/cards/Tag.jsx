import { motion } from "framer-motion";

const Tag = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-slate-700 text-white",
    accent: "bg-gradient-to-r from-blue-700 to-indigo-800 text-blue-100",
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-xs px-3 py-1",
    lg: "text-sm px-4 py-2",
  };

  return (
    <motion.span
      className={`rounded-full shadow-lg ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{
        y: -2,
        scale: 1.05,
        boxShadow: "0 5px 15px -3px rgba(59, 130, 246, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
    </motion.span>
  );
};

export default Tag;
