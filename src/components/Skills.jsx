const frontendSkills = [
  { name: "React", level: 95, color: "bg-blue-600" },
  { name: "TypeScript", level: 90, color: "bg-blue-400" },
  { name: "Next.js", level: 88, color: "bg-black" },
  { name: "Tailwind CSS", level: 92, color: "bg-cyan-400" },
  { name: "Framer Motion", level: 85, color: "bg-pink-400" },
];

const backendSkills = [
  { name: "Node.js", level: 90, color: "bg-green-500" },
  { name: "Express.js", level: 88, color: "bg-neutral-700" },
  { name: "Python", level: 85, color: "bg-yellow-400" },
  { name: "GraphQL", level: 80, color: "bg-pink-500" },
  { name: "REST APIs", level: 92, color: "bg-orange-400" },
];

const SkillBar = ({ skill }) => (
  <div className="mb-4">
    <div className="flex justify-between text-sm font-medium mb-1">
      <span>{skill.name}</span>
      <span>{skill.level}%</span>
    </div>
    <div className="w-full h-2.5 bg-gray-200 rounded-full">
      <div
        className={`h-2.5 rounded-full ${skill.color}`}
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="py-16 px-4 text-slate-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-1"> Frontend </h3>
          <p className="text-sm text-gray-500 mb-6">
            Crafting beautiful, responsive user interfaces
          </p>
          {frontendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-1"> Backend </h3>
          <p className="text-sm text-gray-500 mb-6">
            Building robust server-side solutions
          </p>
          {backendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
