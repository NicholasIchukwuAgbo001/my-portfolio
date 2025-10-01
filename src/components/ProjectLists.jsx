import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack hotel reservation and administration platform featuring secure user authentication, real-time room availability tracking, and an intuitive booking interface. Includes booking management, admin dashboards for room control, and responsive design for seamless use across devices. Built with Next.js, Tailwind CSS, and Supabase for reliability, performance, and scalability.",
    imageUrl: "project-1.png",
    tags: ["Next.js", "Tailwind", "Supabase"],
    demoLink: "https://the-nikos-hotel-website.vercel.app",
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/hotel-management-system.git",
  },
  {
    title: "Pizza Ordering App",
    description:
      "An interactive pizza ordering platform featuring customizable toppings, dynamic cart management, and real-time order tracking. Built with React and Redux Toolkit, it includes Naira currency formatting, responsive Tailwind CSS design, and an intuitive checkout flow for a seamless user experience.",
    imageUrl: "project-4.png",
    tags: ["React", "Tailwind", "Redux Toolkit", "JavaScript"],
    demoLink: "https://nikki-s-home-made-pizza.vercel.app/",
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/Nikki-s-home-made-pizza.git",
  },
  {
    title: "E-commerce Website",
    description:
      "A modern, responsive e-commerce platform featuring dynamic product listings, integrated shopping cart functionality, and advanced Redux Toolkit state management. Built with a sleek Tailwind CSS interface for smooth browsing, it offers optimized performance, mobile-friendly design, and a scalable architecture ready for future expansion.",
    imageUrl: "project-2.png",
    tags: ["React", "Tailwind", "Redux Toolkit"],
    codeLink: "https://github.com/NicholasIchukwuAgbo001/e-commerce-app.git",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker with Clerk authentication, income/expense management, balance summaries, and AI-powered insights using OpenAI for expense analysis and charts. Built with Next.js, Prisma, Neon, and Tailwind CSS for scalability and responsive design.",
    imageUrl: "project-5.png",
    tags: ["Next.js", "Tailwind", "Clerk", "Prisma", "Neon", "OpenAI"],
    demoLink: "https://niko-tech-expense-tracker.vercel.app",
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/Expense-Tracker-2.0.git",
  },
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

const ProjectLists = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, 2);
  const additionalProjects = projects.slice(2);

  return (
    <section className="text-white md:pt-24 pt-5">
      <motion.div
        className="text-center pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="font-bold mb-3 text-4xl text-blue-500"
          variants={itemVariants}
        >
          Recents <span className="text-white">Projects</span>
        </motion.h2>
        <motion.p className="text-stone-400" variants={itemVariants}>
          A collection of projects that showcase my expertise in building modern
          web applications and solving complex problems
        </motion.p>
      </motion.div>

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

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
        >
          {showAll ? "Show Less" : "Show More Projects"}
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : ""
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
    </section>
  );
};

export default ProjectLists;
