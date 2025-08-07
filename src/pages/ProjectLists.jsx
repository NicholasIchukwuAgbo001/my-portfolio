import ProjectCard from "../components/ProjectCards";

const projects = [
    {
        title: "Hotel Management System",
        description: "A full-stack hotel reservation and admin management platform.",
        imageUrl: "project-1.png",
        tags: ["Next.js", "Tailwind", "Supabase"],
        demoLink: "https://the-nikos-hotel-website.vercel.app",
        codeLink: "https://github.com/NicholasIchukwuAgbo001/hotel-management-system.git",
    },
    {
        title: "E-commerce Website",
        description: "A modern e-commerce store built with React and Redux.",
        imageUrl: "project-2.png",
        tags: ["React", "Tailwind", "Redux Toolkit"],
        codeLink: "https://github.com/NicholasIchukwuAgbo001/e-commerce-app.git",
    },

    {
        title: "E-commerce Website",
        description: "A modern e-commerce store built with React and Redux.",
        imageUrl: "project-3.png",
        tags: ["React", "Tailwind", "Redux Toolkit, java"],
        codeLink: "https://github.com/NicholasIchukwuAgbo001/world-wise.git",
    },
];

const ProjectLists = () => {
  return (
    <section className=" px-5 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-500">My Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLists;
