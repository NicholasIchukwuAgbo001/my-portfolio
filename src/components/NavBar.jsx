import { NavLink } from 'react-router-dom';

const navLists = [
  { label: 'Home'},
  { label: 'SKILLS'},
  { label: 'WORK'},
  { label: 'ABOUT'},
  { label: 'CONTACT'},
];

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-6 uppercase tracking-wide">
        {navLists.map((list) => (
          <li key={list.to} className="font-serif text-sm hover:underline">
            <NavLink
              to={list.to}
              className='text-stone-300 hover:text-slate-400'
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
