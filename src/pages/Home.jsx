import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ProjectLists from "../components/ProjectLists";
import About from "../components/About";
import ContactMe from "../components/ContactMe";

const sections = [
  { id: "home", component: <HeroSection /> },
  { id: "skills", component: <Skills /> },
  { id: "work", component: <ProjectLists /> },
  { id: "about", component: <About /> },
  { id: "contact", component: <ContactMe /> },
];

const Home = () => {
  return (
    <div className="px-5">
      {sections.map(({ id, component }, index) => (
        <motion.section
          key={id}
          id={id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          viewport={{ once: false }}
        >
          {component}
        </motion.section>
      ))}
    </div>
  );
};

export default Home;