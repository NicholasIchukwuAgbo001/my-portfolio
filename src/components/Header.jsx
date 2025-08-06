import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-slate-950 shadow-emerald-50 sticky top-0 z-50">
      <h2 className="text-blue-600 text-sm md:text-sm font-bold tracking-wide cursor-pointer">
        &lt;/&gt; Time to Program
      </h2>
      <NavBar />
    </header>
  );
};

export default Header;
