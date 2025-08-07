import CountUp from "react-countup";

const navLists = [
  { label: "Javascript" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "Sass" },
  { label: "Webpack" },
  { label: "Vite" },
  { label: "Jest" },
  { label: "Figma" },
  { label: "Notion" },
];

const stats = [
  { value: 20, suffix: "+", label: "Projects Completed" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const OtherSkills = () => {
  return (
    <div className="flex flex-col gap-14 items-center justify-center py-10 sm:px-8 md:px-16">
      <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 uppercase tracking-wide">
        {navLists.map((list, index) => (
          <li key={index} className="font-serif text-sm">
            <span className="text-stone-300 border border-blue-700 px-4 py-2 rounded-full shadow-[0_0_10px_2px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_3px_rgba(37,99,235,0.5)] hover:scale-105 hover:translate-x-1 transition-transform duration-300 ease-in-out">
              {list.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="w-full max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-6 sm:justify-between items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-40 sm:w-auto flex flex-col items-center justify-center text-center"
            >
              <p className="text-2xl md:text-3xl font-extrabold text-blue-500 hover:scale-105 transition duration-300 ease-in-out">
                <CountUp end={stat.value} duration={80} />
                {stat.suffix}
              </p>
              <span className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;