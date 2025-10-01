import { useEffect, useState } from "react";

const navLists = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Work", to: "work" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

const NavBar = ({ onItemClick }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLists.forEach(({ to }) => {
      const section = document.getElementById(to);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    if (onItemClick) onItemClick();
  };

  return (
    <nav className="w-full">
      <ul className="flex flex-col md:flex-row gap-6 uppercase tracking-wide bg-slate-900/95 md:bg-transparent rounded-lg p-2 -m-2">
        {navLists.map((list) => (
          <li
            key={list.to}
            className={`font-serif text-sm cursor-pointer transition-all duration-300 underline-offset-4 ${
              activeSection === list.to
                ? "text-blue-500 font-bold underline"
                : "text-stone-300 hover:text-slate-400"
            }`}
            onClick={() => scrollToSection(list.to)}
          >
            {list.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
