const HeroSection = () => {
  return (
    <section className="px-6 py-12 text-white">

      <p className="text-stone-400 uppercase text-sm tracking-widest mb-4">
        Frontend Engineer
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6">

        <div className="space-y-2 text-3xl font-semibold leading-snug">
          <p className="text-5xl font-bold">Building Digital</p>
          <p className="text-blue-600 font-bold text-5xl">Experiences</p>
          <p className="font-bold text-5xl">That Matter</p>
        </div>

        <div className="flex flex-wrap gap-6 text-stone-400 text-sm md:text-base font-mono">
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
