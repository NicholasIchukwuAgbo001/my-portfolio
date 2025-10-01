import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../../ui/cards/ProjectCard";
import ToggleButton from "../../ui/buttons/ToggleButton";
import SectionHeader from "../../ui/sections/SectionHeader";
import { PROJECTS } from "../../shared/constants";

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

const ProjectLists = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = PROJECTS.slice(0, 2);
  const additionalProjects = PROJECTS.slice(2);

  return (
    <section className="text-white md:pt-24 pt-5">
      <SectionHeader
        title="Recents"
        accentWord="Projects"
        subtitle="A collection of projects that showcase my expertise in building modern web applications and solving complex problems"
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {initialProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

        {showAll &&
          additionalProjects.map((project, index) => (
            <motion.div
              key={index + 2}
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
      </div>

      <ToggleButton
        isOpen={showAll}
        onClick={() => setShowAll(!showAll)}
        label="Projects"
      />
    </section>
  );
};

export default ProjectLists;
