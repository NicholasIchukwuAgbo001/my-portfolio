
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
              className="text-stone-300 border border-blue-700 px-4 py-2 rounded-full shadow-[0_0_10px_2px_rgba(37,99,235,0.3)] hover:shadow-[0_0_15px_3px_rgba(37,99,235,0.5)] hover:scale-105 hover:translate-x-1 transition-transform duration-300 ease-in-out"
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