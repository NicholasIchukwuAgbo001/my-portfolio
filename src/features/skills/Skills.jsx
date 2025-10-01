import { useState } from "react";
import { motion } from "framer-motion";
import SkillCategory from "./SkillCategory";
import ToggleButton from "../../ui/buttons/ToggleButton";
import SectionHeader from "../../ui/sections/SectionHeader";
import OtherSkills from "./OtherSkills";
import { FaCode, FaDatabase, FaServer, FaCloud } from "react-icons/fa";
import { SKILLS } from "../../shared/constants";

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

const Skills = () => {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section className="md:pt-20 py-4">
      <SectionHeader
        title="Skills &"
        accentWord="Technologies"
        subtitle="These are the tools and technologies I use regularly to build responsive web applications."
      />

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <SkillCategory
          title="Frontend"
          icon={<FaCode className="text-yellow-500" />}
          description="Crafting beautiful, responsive user interfaces"
          skills={SKILLS.frontend}
          variants={itemVariants}
        />

        <SkillCategory
          title="Backend"
          icon={<FaServer className="text-red-500" />}
          description="Building robust server-side solutions"
          skills={SKILLS.backend}
          variants={itemVariants}
        />

        {showAdditional && (
          <>
            <SkillCategory
              title="Database"
              icon={<FaDatabase className="text-green-500" />}
              description="Managing and optimizing data storage"
              skills={SKILLS.database}
              variants={itemVariants}
              animateOnShow
            />

            <SkillCategory
              title="DevOps"
              icon={<FaCloud className="text-purple-500" />}
              description="Deploying and scaling applications"
              skills={SKILLS.devops}
              variants={itemVariants}
              animateOnShow
            />
          </>
        )}
      </motion.div>

      <ToggleButton
        isOpen={showAdditional}
        onClick={() => setShowAdditional(!showAdditional)}
        label="Skills"
      />

      <motion.div
        className="flex flex-col justify-center items-center pt-10 gap-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-stone-300 text-lg font-mono">Also Working With</h2>
        <OtherSkills />
      </motion.div>
    </section>
  );
};

export default Skills;
