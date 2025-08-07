import { useEffect, useState } from "react";

const navLists = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Work", to: "work" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLists.map((item) =>
        document.getElementById(item.to)
      );

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className="flex gap-6 uppercase tracking-wide">
        {navLists.map((list) => (
          <li
            key={list.to}
            className={`font-serif text-sm cursor-pointer ${
              activeSection === list.to
                ? "text-blue-500 underline"
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

export default NavBar
