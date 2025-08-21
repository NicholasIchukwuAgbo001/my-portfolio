import ProjectCard from "./ProjectCards";
const projects = [
  {
    title: "Hotel Management System",
    description:
      "A full-stack hotel reservation and administration platform featuring secure user authentication, real-time room availability tracking, and an intuitive booking interface. Includes booking management, admin dashboards for room control, and responsive design for seamless use across devices. Built with Next.js, Tailwind CSS, and Supabase for reliability, performance, and scalability.",
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
    title: "Expense Tracker",
    description:
      "A full-stack expense tracker with Clerk authentication, income/expense management, balance summaries, and AI-powered insights using OpenAI for expense analysis and charts. Built with Next.js, Prisma, Neon, and Tailwind CSS for scalability and responsive design.",
    imageUrl: "project-5.png",
    tags: ["Next.js", "Tailwind", "Clerk", "Prisma", "Neon", "OpenAI"],
    demoLink: "https://niko-tech-expense-tracker.vercel.app",
    codeLink: "https://github.com/NicholasIchukwuAgbo001/Expense-Tracker-2.0.git",
  }
];

const ProjectLists = () => {
  return (
    <section className="text-white md:pt-24 pt-5">
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