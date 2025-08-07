const LoveBuilding = () => {
  const items = [
    {
      title: "User Experience",
      description: "Crafting intuitive interfaces that users love",
    },
    {
      title: "Performance Optimization",
      description: "Building fast and responsive applications",
    },
    {
      title: "Clean Architecture",
      description: "Writing scalable and maintainable code",
    },
  ];

  return (
    <section className="py-12 text-white">
        <p className="text-blue-500 font-semibold text-sm uppercase mb-6 tracking-wide">
          What I Love Building
        </p>

        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-bold text-blue-400 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default LoveBuilding;