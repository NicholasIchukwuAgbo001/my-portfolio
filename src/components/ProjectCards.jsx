const ProjectCards = ({ title, description, imageUrl, tags, demoLink, codeLink }) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-blue-400">{title}</h3>
        <p className="text-sm text-stone-300">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-2">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
