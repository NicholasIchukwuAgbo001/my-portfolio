import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="px-2 md:px-4">
      <HeroSection />
      <Skills />
    </div>
  );
};

export default Home;