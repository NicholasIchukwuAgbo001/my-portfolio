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
  { value: 200, suffix: "+", label: "International Brands" },
  { value: 2000, suffix: "+", label: "High-Quality" },
  { value: 30000, suffix: "+", label: "Happy Customers" },
];

const OtherSkills = () => {
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 uppercase tracking-wide">
        {navLists.map((list, index) => (
          <li key={index} className="font-serif text-sm">
            <span className="text-stone-300 border border-blue-700 px-4 py-2 rounded-full shadow-[0_0_10px_2px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_3px_rgba(37,99,235,0.5)] hover:scale-105 hover:translate-x-1 transition-transform duration-300 ease-in-out">
              {list.label}
            </span>
          </li>
        ))}
      </ul>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start">
              <p className="text-3xl font-extrabold text-stone-800 hover:scale-105 transition duration-300 ease-in-out">
                <CountUp end={stat.value} duration={4} separator="," />
                {stat.suffix}
              </p>
              <span className="mt-2 text-sm sm:text-base text-gray-600">
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
