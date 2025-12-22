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
    url: "mailto:wisdombrightuzoma@email.com",
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
    title: "Nexa-Funded",
    description:
      "A modern prediction-trading web app built with Next.js, TypeScript, and Tailwind CSS, featuring a responsive UI, real- time market indicators, and clean., scalable component architecture optimized for performance and usability.",
    imageUrl: "project-1.png",
    tags: ["Next.js", "Tailwind"],
    demoLink: "https://nexafunded.vercel.app",
    codeLink: "https://github.com/NicholasIchukwuAgbo001/nexa-funded-app.git",
  },
  {
    title: "The Interstellar Atlas",
    description:
      "A React-based SPA for exploring global country data via the REST Countries API. Features include region based filtering, live search, client side pagination, border country navigation, persistent data fetching, and responsive design. Built with Vite, Tailwind CSS, React Router, and Zustand for state management.",
    imageUrl: "project-6.png",
    tags: ["React", "Vite", "Tailwind", "Zustand", "REST API", "React Router"],
    demoLink: "https://my-interstellar-atlas.vercel.app",
    codeLink: "",
  },
  {
    title: "Pizza Ordering App",
    description:
      "An interactive pizza ordering platform featuring customizable toppings, dynamic cart management, and real-time order tracking. Built with React and Redux Toolkit, it includes Naira currency formatting, responsive Tailwind CSS design, and an intuitive checkout flow for a seamless user experience.",
    imageUrl: "project-4.png",
    tags: ["React", "Tailwind", "Redux Toolkit", "JavaScript"],
    demoLink: "https://nikki-s-home-made-pizza.vercel.app/",
    codeLink: "",
  },
  {
    title: "Medis Decentralized Medical Records",
    description:
      "A full-stack decentralized healthcare platform enabling patients to securely own, manage, and share medical records using blockchain technology. Features encrypted medical file storage, role-based access for patients and hospitals, emergency-access records, and wallet-based authentication. Built for security, interoperability, and scalability using modern Web3 and full-stack technologies.",
    imageUrl: "project-2.png",
    tags: ["Next.js", "Tailwind CSS", "Sui Blockchain", "Move", "IPFS"],
    demoLink: "https://medis-cyan.vercel.app/",
    codeLink: "https://github.com/Wisdom2788/MEDIS-HACKER-HOUSE-PROJECT.git",
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
