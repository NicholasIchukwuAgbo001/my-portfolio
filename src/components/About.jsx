const TimeLine = () => {
  const milestones = [
    {
      year: "2020",
      title: "Started My Journey",
      description: "Began my exploration into web development, focusing on HTML, CSS, and basic JavaScript.",
    },
    {
      year: "2021",
      title: "Built First Projects",
      description: "Created small websites and applications to understand frontend principles and improve coding skills.",
    },
    {
      year: "2022",
      title: "Dived into React & Tailwind",
      description: "Started building responsive interfaces with React and Tailwind CSS, focusing on component-based design.",
    },
    {
      year: "2023",
      title: "Backend & Full-Stack",
      description: "Learned backend technologies like Node.js and MongoDB. Built full-stack applications with APIs and databases.",
    },
    {
      year: "2024",
      title: "Freelance & Collaborations",
      description: "Worked with clients and teams to build real-world web applications, enhancing problem-solving and teamwork.",
    },
  ];

  return (
    <div className="p-6 text-left">
      <h3 className="text-xl font-semibold mb-6 text-blue-500">My Journey</h3>
      <ul className="space-y-6 border-l-2 border-blue-600 pl-6">
        {milestones.map((item, index) => (
          <li key={index} className="relative">
            <span className="absolute -left-3 top-1.5 w-3 h-3 rounded-full bg-blue-600"></span>
            <div className="bg-slate-900 p-4 rounded-lg shadow-md">
              <h4 className="text-blue-400 font-semibold text-sm">{item.year}</h4>
              <p className="text-lg font-bold text-white">{item.title}</p>
              <p className="text-stone-300 text-sm mt-1">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;