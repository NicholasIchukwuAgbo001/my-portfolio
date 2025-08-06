const Skills = () => {
  return (
    <section className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm mb-2">
          Technical Expertise
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Skills & <span className="text-blue-700">Technologies</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          A comprehensive toolkit for building modern, scalable applications from concept to deployment.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 py-10 px-4">
        <div className="bg-white text-slate-900 w-96 h-96 rounded-xl shadow-md p-6 text-xl font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
          React
        </div>
        <div className="bg-white text-slate-900 w-96 h-96 rounded-xl shadow-lg p-6 text-xl font-semibold hover:scale-105 hover:shadow-lg transition duration-300">
          Node.js
        </div>
      </div>
    </section>
  );
};

export default Skills;
