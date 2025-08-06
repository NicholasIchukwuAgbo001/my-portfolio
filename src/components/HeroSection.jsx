const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 py-10 text-white">

      <p className="text-stone-400 uppercase text-sm tracking-widest mb-6">
        Frontend Engineer
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-xl space-y-6">
          <h2 className="text-3xl md:text-6xl font-bold leading-relaxed">
            Building Digital <br />
            <span className="text-blue-600">Experiences</span> <br />
            That Matter
          </h2>

          <p className="text-stone-300 text-base md:text-lg leading-relaxed">
            I craft beautiful and functional web applications using modern technologies — always with a focus on clean design and exceptional user experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-stone-400 text-sm md:text-base font-mono">
          <span>React</span>
          <span>Next.js</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
