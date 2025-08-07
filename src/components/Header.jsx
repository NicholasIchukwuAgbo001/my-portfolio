import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-10 py-4 bg-slate-950 sticky top-0 z-50 transition-shadow duration-300 shadow-[0_4px_6px_-1px_rgba(37,99,235,0.5)] hover:shadow-[0_6px_12px_-2px_rgba(37,99,235,0.7)]">

      <h2 className="text-blue-600 text-base md:text-lg font-bold tracking-wide cursor-pointer whitespace-nowrap">
        &lt;/&gt; I_AM NICHOLAS
      </h2>

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

      {isOpen && (
        <div className="w-full mt-4 md:hidden">
          <NavBar onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
