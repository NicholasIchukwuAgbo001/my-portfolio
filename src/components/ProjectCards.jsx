import { motion } from "framer-motion";

const ProjectCards = ({
  title,
  description,
  imageUrl,
  tags,
  demoLink,
  codeLink,
}) => {
  return (
    <motion.div
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg relative"
      whileHover={{
        y: -10,
        boxShadow:
          "0 25px 50px -12px rgba(59, 130, 246, 0.5), 0 10px 10px -5px rgba(59, 130, 246, 0.3)",
      }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Gradient overlay for image */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70 z-10 pointer-events-none"></div>

      {/* Project Image with enhanced animation */}
      <motion.div
        className="relative overflow-hidden h-48"
        whileHover="hover"
        initial={{ scale: 1 }}
      >
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          variants={{
            hover: { scale: 1.15 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Image overlay with animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Project Content */}
      <div className="p-5 space-y-4 relative z-20">
        {/* Title with animated underline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h3
            className="text-xl font-bold text-blue-400 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400"
              whileHover={{
                width: "100%",
                transition: { duration: 0.3 },
              }}
            />
          </motion.h3>
        </motion.div>

        {/* Description with fade effect */}
        <motion.p
          className="text-sm text-stone-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        {/* Tags with enhanced animation */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-xs bg-gradient-to-r from-blue-700 to-indigo-800 text-blue-100 px-3 py-1 rounded-full shadow-lg"
              whileHover={{
                y: -3,
                scale: 1.1,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
                background: "linear-gradient(to right, #3B82F6, #4F46E5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              #{tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Links with enhanced buttons */}
        <motion.div
          className="flex gap-4 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {demoLink && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Live Demo</span>
            </motion.a>
          )}
          {codeLink && (
            <motion.a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(209, 213, 219, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span>Code</span>
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCards;
