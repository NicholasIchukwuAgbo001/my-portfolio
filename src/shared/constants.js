export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/NicholasIchukwuAgbo001",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363",
  },
  {
    name: "Twitter",
    url: "https://x.com/AgboIchukw36207",
  },
  {
    name: "Email",
    url: "mailto:ichukwunicholasagbo@email.com",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/2347058705863",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61579155453621",
  },
];

export const PROJECTS = [
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
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/Nikki-s-home-made-pizza.git",
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
    codeLink:
      "https://github.com/NicholasIchukwuAgbo001/Expense-Tracker-2.0.git",
  },
];

export const SKILLS = {
  frontend: [
    { name: "React", level: 95, color: "bg-sky-600" },
    { name: "TypeScript", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-neutral-800" },
    { name: "Tailwind CSS", level: 99, color: "bg-cyan-500" },
    { name: "JavaScript", level: 90, color: "bg-amber-500" },
    { name: "Framer Motion", level: 80, color: "bg-rose-400" },
    { name: "React Native", level: 95, color: "bg-indigo-600" },
    { name: "Flutter", level: 80, color: "bg-blue-400" },
  ],
  backend: [
    { name: "Node.js", level: 90, color: "bg-green-600" },
    { name: "Java", level: 80, color: "bg-slate-500" },
    { name: "Python", level: 65, color: "bg-indigo-500" },
    { name: "Dart", level: 75, color: "bg-blue-700" },
    { name: "GraphQL", level: 50, color: "bg-fuchsia-500" },
    { name: "REST APIs", level: 85, color: "bg-orange-500" },
    { name: "Go", level: 65, color: "bg-blue-800" },
  ],
  database: [
    { name: "MongoDB", level: 90, color: "bg-emerald-600" },
    { name: "Firebase", level: 90, color: "bg-yellow-500" },
    { name: "Supabase", level: 100, color: "bg-lime-500" },
    { name: "MySQL", level: 65, color: "bg-teal-500" },
    { name: "Neon", level: 95, color: "bg-green-400" },
  ],
  devops: [
    { name: "Netlify", level: 99, color: "bg-green-500" },
    { name: "Vercel", level: 100, color: "bg-zinc-800" },
    { name: "Docker", level: 80, color: "bg-sky-500" },
    { name: "Git", level: 90, color: "bg-red-500" },
    { name: "AWS", level: 80, color: "bg-orange-500" },
  ],
};
