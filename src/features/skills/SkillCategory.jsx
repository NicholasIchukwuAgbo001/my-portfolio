import { motion } from "framer-motion";
import SkillBar from "../../ui/cards/SkillBar";

const SkillCategory = ({
  title,
  icon,
  description,
  skills,
  variants,
  animateOnShow = false,
}) => {
  const animationProps = animateOnShow
    ? {
        initial: { opacity: 0, x: title === "Database" ? -20 : 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5 },
      }
    : {};

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md p-6 md:p-8"
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      {...animationProps}
    >
      <h3 className="text-xl text-blue-600 font-semibold flex items-center gap-2 mb-3">
        {icon}
        {title}
      </h3>
      <p className="text-sm text-gray-500 mb-6">{description}</p>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
