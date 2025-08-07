import { useEffect, useState, useRef } from "react";
import OtherSkills from "./OtherSkills";

const frontendSkills = [
  { name: "React", level: 95, color: "bg-blue-600" },
  { name: "TypeScript", level: 90, color: "bg-blue-400" },
  { name: "Next.js", level: 88, color: "bg-black" },
  { name: "Tailwind CSS", level: 92, color: "bg-cyan-400" },
  { name: "JavaScript", level: 90, color: "bg-yellow-600" },
  { name: "Framer Motion", level: 85, color: "bg-pink-400" },
];

const backendSkills = [
  { name: "Node.js", level: 90, color: "bg-green-500" },
  { name: "Express.js", level: 88, color: "bg-neutral-700" },
  { name: "Python", level: 85, color: "bg-yellow-400" },
  { name: "GraphQL", level: 80, color: "bg-pink-500" },
  { name: "REST APIs", level: 92, color: "bg-orange-400" },
];

const dataBaseSkills = [
  { name: "MongoDB", level: 90, color: "bg-green-500" },
  { name: "Firebase", level: 90, color: "bg-neutral-700" },
  { name: "Supabase", level: 100, color: "bg-yellow-400" },
  { name: "MYSQL", level: 65, color: "bg-pink-500" },
  { name: "Prisma", level: 50, color: "bg-orange-400" },
];

const hostingSkills = [
  { name: "Netlify", level: 99, color: "bg-green-500" },
  { name: "Vercel", level: 100, color: "bg-neutral-700" },
  { name: "Docker", level: 80, color: "bg-yellow-400" },
  { name: "Git", level: 90, color: "bg-pink-500" },
  { name: "AWS", level: 80, color: "bg-yellow-400" },
];

const SkillBar = ({ skill, animate }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setWidth(`${skill.level}%`);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setWidth("0%");
    }
  }, [animate, skill.level]);

  return (
    <div className="mb-5">
      <div className="flex justify-between text-sm font-medium mb-1 text-slate-700">
        <span>{skill.name}</span>
        <span>{skill.level}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-2.5 ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section ref={ref} className="px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <p className="text-blue-500 font-semibold uppercase tracking-wide text-sm mb-2">
            Technical Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-blue-500">Technologies</span>
          </h2>

          <p className="text-stone-300 mb-10">
            These are the tools and technologies I use regularly to build responsive and performant web applications.
          </p>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
            <span className="text-blue-600">&lt;/&gt;</span>
            Frontend
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Crafting beautiful, responsive user interfaces
          </p>
          {frontendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={isInView} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
            <span>🧱</span>
            Backend
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Building robust server-side solutions
          </p>
          {backendSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={isInView} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
            Database
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Managing and optimizing data storage
          </p>
          {dataBaseSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={isInView} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
            <span>☁️</span>
            DevOps
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Deploying and scaling applications
          </p>
          {hostingSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} animate={isInView} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10 gap-5 px-4">
        <h2 className="text-stone-300 text-lg font-mono">Also Working With</h2>
        <OtherSkills />
      </div>
    </section>
  );
};

export default Skills;