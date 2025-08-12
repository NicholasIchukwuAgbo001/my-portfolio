import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-slate-950 sticky top-0 z-50 shadow-[0_4px_6px_-1px_rgba(37,99,235,0.5)] hover:shadow-[0_6px_12px_-2px_rgba(37,99,235,0.7)] mb-10"> 
      <a
        href="#home"
        className="text-blue-600 text-base md:text-lg font-bold tracking-wide cursor-pointer whitespace-nowrap"
      >
        &lt;/&gt; I_AM NICHOLAS
      </a>

      <div className="hidden md:flex">
        <NavBar />
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-blue-500 text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >

        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="absolute left-0 top-0 h-full w-64 bg-slate-900 p-6 shadow-lg">
          <NavBar onItemClick={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
