import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import ProjectLists from "../components/ProjectLists";
import About from "../components/About";

const Home = () => {
  return (
    <div className="px-2 md:px-4">

      <section id="home">
        <HeroSection />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <ProjectLists />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
};

export default Home;
