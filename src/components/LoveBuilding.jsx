const LoveBuilding = () => {
  const items = [
    {
      no: "1",
      title: "User Experience",
      description: "Crafting intuitive interfaces that users love",
    },
    {
      no: "2",
      title: "Performance Optimization",
      description: "Building fast and responsive applications",
    },
    {
      no: "3",
      title: "Clean Architecture",
      description: "Writing scalable and maintainable code",
    },
    {
      no: "4",
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
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
              className="bg-slate-900 border border-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-500 flex gap-7 items-center hover:scale-105"
            >
              <p className="p-4 border border-blue-200 text-xl text-blue-500 rounded-lg">{item.no}</p>
              <div>
                <h3 className="font-bold text-blue-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
};

export default LoveBuilding;