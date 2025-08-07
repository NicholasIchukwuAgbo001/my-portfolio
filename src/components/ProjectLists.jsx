import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack hotel reservation and admin management platform.",
    imageUrl: "project-1.png",
    tags: ["Next.js", "Tailwind", "Supabase"],
    demoLink: "https://the-nikos-hotel-website.vercel.app",
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/hotel-management-system.git",
  },
  {
    title: "E-commerce Website",
    description: "A modern e-commerce store built with React and Redux.",
    imageUrl: "project-2.png",
    tags: ["React", "Tailwind", "Redux Toolkit"],
    codeLink: "https://github.com/NicholasIchukwuAgbo001/e-commerce-app.git",
  },

  {
    title: "World-Wise System",
    description:
      "A travel tracking app that lets you log cities you've visited, add notes and visit dates, and view them all on an interactive world map.",
    imageUrl: "project-3.png",
    tags: ["React", "Tailwind", "Redux Toolkit, java"],
    codeLink: "https://github.com/NicholasIchukwuAgbo001/world-wise.git",
  },
];

const ProjectLists = () => {
  return (
    <section className="px-5 text-white">
      <div className="text-center pb-10">
        <h2 className="font-bold mb-3 text-3xl text-blue-500">
          Recents <span className="text-white">Projects</span>
        </h2>
        <p className="text-stone-400">
          A collection of projects that showcase my expertise in building modern
          web applications and solving complex problems
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLists;
