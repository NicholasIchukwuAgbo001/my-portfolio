import HeroSection from "../features/hero/HeroSection";
import Skills from "../features/skills/Skills";
import ProjectLists from "../features/projects/ProjectLists";
import About from "../features/about/About";
import ContactMe from "../features/contact/ContactMe";

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
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </div>
  );
};

export default Home;
