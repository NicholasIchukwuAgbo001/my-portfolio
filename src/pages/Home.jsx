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
      {sections.map(({ id, component }) => (
        <section key={id} id={id}>
          {component}
        </section>
      ))}
    </div>
  );
};

export default Home;
