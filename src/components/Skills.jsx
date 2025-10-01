import { useState } from "react";
import { motion } from "framer-motion";
import OtherSkills from "./OtherSkills";
import { FaCode, FaDatabase, FaServer, FaCloud } from "react-icons/fa";

const frontendSkills = [
  { name: "React", level: 95, color: "bg-sky-600" },
  { name: "TypeScript", level: 90, color: "bg-blue-500" },
  { name: "Next.js", level: 85, color: "bg-neutral-800" },
  { name: "Tailwind CSS", level: 99, color: "bg-cyan-500" },
  { name: "JavaScript", level: 90, color: "bg-amber-500" },
  { name: "Framer Motion", level: 80, color: "bg-rose-400" },
  { name: "React Native", level: 95, color: "bg-indigo-600" },
  { name: "Flutter", level: 80, color: "bg-blue-400" },
];

const backendSkills = [
  { name: "Node.js", level: 90, color: "bg-green-600" },
  { name: "Java", level: 80, color: "bg-slate-500" },
  { name: "Python", level: 65, color: "bg-indigo-500" },
  { name: "Dart", level: 75, color: "bg-blue-700" },
  { name: "GraphQL", level: 50, color: "bg-fuchsia-500" },
  { name: "REST APIs", level: 85, color: "bg-orange-500" },
  { name: "Go", level: 65, color: "bg-blue-800" },
];

const dataBaseSkills = [
  { name: "MongoDB", level: 90, color: "bg-emerald-600" },
  { name: "Firebase", level: 90, color: "bg-yellow-500" },
  { name: "Supabase", level: 100, color: "bg-lime-500" },
  { name: "MySQL", level: 65, color: "bg-teal-500" },
  { name: "Neon", level: 95, color: "bg-green-400" },
];

const hostingSkills = [
  { name: "Netlify", level: 99, color: "bg-green-500" },
  { name: "Vercel", level: 100, color: "bg-zinc-800" },
  { name: "Docker", level: 80, color: "bg-sky-500" },
  { name: "Git", level: 90, color: "bg-red-500" },
  { name: "AWS", level: 80, color: "bg-orange-500" },
];

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

const SkillBar = ({ skill }) => {
  return (
    <motion.div
      className="mb-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between text-sm font-medium mb-1 text-slate-700">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-2.5 ${skill.color} transition-all duration-1000 ease-out`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [showAdditional, setShowAdditional] = useState(false);

  return (
    <section className="md:pt-20 py-4">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p
          className="text-blue-500 font-semibold uppercase tracking-wider text-sm sm:text-base mb-2"
          variants={itemVariants}
        >
          Technical Expertise
        </motion.p>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-4"
          variants={itemVariants}
        >
          Skills & <span className="text-blue-500">Technologies</span>
        </motion.h2>

        <motion.p
          className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base mb-10"
          variants={itemVariants}
        >
          These are the tools and technologies I use regularly to build
          responsive web applications.
        </motion.p>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 md:p-8"
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <h3 className="text-xl text-blue-600 font-semibold flex items-center gap-2 mb-3">
            <FaCode className="text-yellow-500" />
            Frontend
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Crafting beautiful, responsive user interfaces
          </p>
          <div className="space-y-4">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-md p-6 md:p-8"
          variants={itemVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <h3 className="text-xl text-blue-600 font-semibold flex items-center gap-2 mb-3">
            <FaServer className="text-red-500" />
            Backend
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Building robust server-side solutions
          </p>
          <div className="space-y-4">
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {showAdditional && (
          <>
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-blue-600 font-semibold flex items-center gap-2 mb-3">
                <FaDatabase className="text-green-500" />
                Database
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Managing and optimizing data storage
              </p>
              <div className="space-y-4">
                {dataBaseSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl text-blue-600 font-semibold flex items-center gap-2 mb-3">
                <FaCloud className="text-purple-500" />
                DevOps
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Deploying and scaling applications
              </p>
              <div className="space-y-4">
                {hostingSkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={() => setShowAdditional(!showAdditional)}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
        >
          {showAdditional ? "Show Less" : "Show More Skills"}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              showAdditional ? "rotate-180" : ""
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
