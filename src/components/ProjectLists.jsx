import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack hotel reservation and administration platform featuring secure user authentication, real-time room availability tracking, and an intuitive booking interface. Built with Next.js, Tailwind CSS, and Supabase for seamless performance and scalability.",
    imageUrl: "project-1.png",
    tags: ["Next.js", "Tailwind", "Supabase"],
    demoLink: "https://the-nikos-hotel-website.vercel.app",
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/hotel-management-system.git",
  },
  {
    title: "Pizza Ordering App",
    description:
      "An interactive pizza ordering platform featuring customizable toppings, dynamic cart management, and real-time order tracking. Built with React and Redux Toolkit, it includes Naira currency formatting, responsive Tailwind CSS design, and an intuitive checkout flow for a seamless user experience.",
    imageUrl: "project-4.png",
    tags: ["React", "Tailwind", "Redux Toolkit", "JavaScript"],
    demoLink: "https://nikki-s-home-made-pizza.vercel.app/", 
    codeLink: "https://github.com/NicholasIchukwuAgbo001/Nikki-s-home-made-pizza.git",
  },
  {
    title: "E-commerce Website",
    description:
    "A modern, responsive e-commerce platform featuring dynamic product listings, integrated shopping cart functionality, and advanced Redux Toolkit state management. Built with a sleek Tailwind CSS interface for smooth browsing, it offers optimized performance, mobile-friendly design, and a scalable architecture ready for future expansion.",
    imageUrl: "project-2.png",
    tags: ["React", "Tailwind", "Redux Toolkit"],
    codeLink: "https://github.com/NicholasIchukwuAgbo001/e-commerce-app.git",
  },
  {
    title: "World-Wise System",
    description:
    "A travel tracking web app that allows users to log cities they’ve visited, attach personal notes, and record visit dates. Features an interactive world map for visualizing journeys, responsive design with Tailwind CSS, and state management using Redux Toolkit for smooth performance and seamless user experience.",
    imageUrl: "project-3.png",
    tags: ["React", "Tailwind", "Redux Toolkit", "Java"],
    codeLink: "https://github.com/NicholasIchukwuAgbo001/world-wise.git",
  },
];

const ProjectLists = () => {
  return (
    <section className="px-5 text-white">
      <div className="text-center pb-10">
        <h2 className="font-bold mb-3 text-4xl text-blue-500">
          Recents <span className="text-white">Projects</span>
        </h2>
        <p className="text-stone-400">
          A collection of projects that showcase my expertise in building modern
          web applications and solving complex problems
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectLists;