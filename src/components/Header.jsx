import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-7 py-4 bg-slate-950 sticky top-0 z-50 transition-shadow duration-300 shadow-[0_4px_6px_-1px_rgba(37,99,235,0.5)] hover:shadow-[0_6px_12px_-2px_rgba(37,99,235,0.7)]">
      <h2 className="text-blue-600 text-sm md:text-sm font-bold tracking-wide cursor-pointer">
        &lt;/&gt; Time to Program
      </h2>
      <NavBar />
    </header>
  );
};

export default Header;
