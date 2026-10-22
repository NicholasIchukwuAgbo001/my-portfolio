import HeroSection from "../features/hero/HeroSection";
import Skills from "../features/skills/Skills";
import ProjectLists from "../features/projects/ProjectLists";
import About from "../features/about/About";
import ContactMe from "../features/contact/ContactMe";
import TechStackVisualizer from "../components/TechStackVisualizer";
import ProcessFlow from "../components/ProcessFlow";
import CodeSnippet from "../components/CodeSnippet";
import AvailableBanner from "../components/AvailableBanner";

const sections = [
  { id: "home", component: <HeroSection /> },
  { id: "tech-stack", component: <TechStackVisualizer /> },
  { id: "skills", component: <Skills /> },
  { id: "work", component: <ProjectLists /> },
  { id: "process", component: <ProcessFlow /> },
  { id: "code", component: <CodeSnippet /> },
  { id: "about", component: <About /> },
  { id: "contact", component: <ContactMe /> },
];

const Home = () => {
  return (
    <>
      <AvailableBanner />
      <div className="px-5">
        {sections.map(({ id, component }) => (
          <section key={id} id={id}>
            {component}
          </section>
        ))}
      </div>
    </>
  );
};

export default Home;
