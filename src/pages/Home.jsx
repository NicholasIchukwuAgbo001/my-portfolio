import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="px-2 md:px-4">
      <section id="hero" className="scroll-mt-14">
        <HeroSection />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
    </div>
  );
};

export default Home;
