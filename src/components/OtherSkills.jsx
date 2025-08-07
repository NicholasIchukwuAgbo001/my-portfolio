
const navLists = [
  { label: 'Javascript' },
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'Sass' },
  { label: 'Webpack' },
  { label: 'Vite' },
  { label: 'Jest' },
  { label: 'Figma' },
  { label: 'Notion' },
];

const OtherSkills = () => {
  return (
    <nav>
      <ul className="flex flex-wrap gap-6 uppercase tracking-wide">
        {navLists.map((list, index) => (
          <li key={index} className="font-serif text-sm">
            <span
              className="text-stone-300 border border-slate-500 px-4 py-2 rounded-full hover:bg-slate-900 transition duration-300"
            >
              {list.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OtherSkills;