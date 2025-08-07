const TimeLine = () => {
  const timelineItems = [
    {
      year: "2019",
      title: "Started My Coding Journey",
      tought: "Self-tought",
      description: "Began learning HTML, CSS, and JavaScript through online tutorials and building small projects."
    },
    {
      year: "2020",
      title: "Dived Into Backend",
      description: "Started learning Node.js and Express, and explored RESTful APIs and databases."
    },
    {
      year: "2021",
      title: "Built Real Projects",
      description: "Worked on full-stack applications, collaborated on open-source, and improved Git/GitHub skills."
    },
    {
      year: "2022",
      title: "Mastered React & TypeScript",
      description: "Learned advanced frontend development with React, React Router, Tailwind CSS, and TypeScript."
    },
    {
      year: "2023 - Present",
      title: "Becoming a Software Engineer",
      description: "Currently building scalable applications, contributing to meaningful projects, and continually learning."
    }
  ];

  return (
    <div className="p-6 text-left">
      <h3 className="text-xl font-semibold mb-4 text-blue-500">My Journey</h3>
      <ul className="space-y-6 border-l-2 border-blue-600 pl-6 relative">
        {timelineItems.map((item, index) => (
          <li key={index} className="relative">
            <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-600 rounded-full border-4 border-slate-950" />
            <div className="bg-slate-900 p-4 rounded-lg shadow-md">
              <p className="text-sm text-blue-400">{item.year}</p>
              <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
              <p className="text-blue-500 text-sm mt-1 py-1">{item.tought}</p>
              <p className="text-stone-300 text-sm mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
