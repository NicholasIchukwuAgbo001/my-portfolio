import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ProjectLists from "../components/ProjectLists";
import About from "../components/About";
import ContactMe from "../components/ContactMe";

const sections = [
  { id: "home", component: <HeroSection />, delay: 0 },
  { id: "skills", component: <Skills />, delay: 0.5 },
  { id: "work", component: <ProjectLists />, delay: 0.5 },
  { id: "about", component: <About />, delay: 0.5 },
  { id: "contact", component: <ContactMe />, delay: 0.5 },
];

const Home = () => {
  return (
    <div className="px-2 md:px-5 py-2">
      {sections.map(({ id, component, delay }) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay }}
          viewport={{ once: false }}
        >
          {component}
        </motion.section>
      ))}
    </div>
  );
};

export default Home;