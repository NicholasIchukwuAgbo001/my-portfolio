import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ProjectLists from "../components/ProjectLists";
import About from "../components/About";
import ContactMe from "../components/ContactMe";


const Home = () => {
  return (
    <div className="px-2 md:px-10 py-2">
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <HeroSection />
      </motion.section>

      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <Skills />
      </motion.section>

      <motion.section
        id="work"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <ProjectLists />
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <About />
      </motion.section>

      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <ContactMe />
      </motion.section>
    </div>
  );
};

export default Home;