const navLists = [
  { label: 'Home', to: '#hero' },
  { label: 'Skills', to: '#skills' },
  { label: 'Work', to: '#work' },
  { label: 'About', to: '#about' },
  { label: 'Contact', to: '#contact' },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-6 uppercase tracking-wide">
        {navLists.map((list) => (
          <li key={list.to} className="font-serif text-sm hover:underline">
            <a
              href={list.to}
              className="text-stone-300 hover:text-slate-400 transition"
            >
              {list.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
