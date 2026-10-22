import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Button from "../buttons/Button";
import Tag from "./Tag";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  tags,
  demoLink,
  demoLinkText,
  codeLink,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isImageArray = Array.isArray(imageUrl);
  const images = isImageArray ? imageUrl : [imageUrl];

  useEffect(() => {
    if (!isImageArray) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isImageArray, images.length]);

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
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70 z-10 pointer-events-none"></div>

      <motion.div
        className="relative overflow-hidden h-48"
        whileHover="hover"
        initial={{ scale: 1 }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`${title} ${index + 1}`}
            className="w-full h-full object-cover absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            variants={{
              hover: { scale: 1.15 },
            }}
          />
        ))}

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {isImageArray && images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-blue-400 w-6"
                    : "bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>

      <div className="p-5 space-y-4 relative z-20">
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

        <motion.p
          className="text-sm text-stone-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {tags.map((tag, index) => (
            <Tag key={index} variant="accent">
              #{tag}
            </Tag>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-4 pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {demoLink && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(demoLink, "_blank")}
            >
              {demoLinkText || "Live Demo"}
            </Button>
          )}
          {codeLink && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(codeLink, "_blank")}
            >
              Code
            </Button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;