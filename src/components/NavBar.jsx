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
    <div>
      <ul className="flex gap-4 uppercase">
        {navLists.map((list) => (
          <li key={list.to} className="font-serif">
            <NavLink
              to={list.to}
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-900 font-bold'
                  : 'text-stone-600 hover:text-slate-800'
              }
            >
              {list.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
