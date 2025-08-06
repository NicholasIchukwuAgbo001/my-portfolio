import { NavLink } from 'react-router-dom';

const navLists = [
  { label: 'Home', to: '/' },
  { label: 'SKILLS', to: '/skills' },
  { label: 'WORK', to: '/work' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-6 uppercase tracking-wide">
        {navLists.map((list) => (
          <li key={list.to} className="font-serif text-sm">
            <NavLink
              to={list.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-stone-300 hover:text-white'
              }
            >
              {list.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
