import SocialMedialHandle from "./SocialMedialHandle";

const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 py-12 text-white">
      <p className="text-stone-400 uppercase text-sm tracking-widest mb-6">
        Frontend Engineer
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:max-w-xl space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-relaxed">
            Building Digital <br />
            <span className="text-blue-600">Experiences</span> <br />
            That Matter
          </h2>

          <p className="text-stone-400 text-base sm:text-lg leading-relaxed hover:text-stone-300">
            I craft beautiful and functional web applications using modern technologies — always with a focus on clean design and exceptional user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition duration-300">
              View Work
            </button>
            <button className="border border-white hover:bg-white hover:text-slate-950 px-6 py-2 rounded-full font-medium transition duration-300">
              Get in Touch
            </button>
          </div>
          <SocialMedialHandle />
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-wrap gap-3 text-stone-200 text-sm sm:text-base font-mono">
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
          </div>

          <div>
            <img
              src="my-pic.jpg"
              alt="My Profile"
              className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-blue-600 shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
