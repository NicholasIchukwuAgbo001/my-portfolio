import LoveBuilding from "./LoveBuilding";

const Mission = () => {
  return (
    <div className="p-6 text-left flex flex-col justify-center">
      <div className="bg-slate-900 p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-blue-500">My Mission</h3>
      <p className="text-stone-300 leading-relaxed">
        I believe technology should be a bridge that connect people and solves real-world problems. My passion is to create innovative solutions that make a positive impact on society and also crafting digital experiences that are not just functional but delightful and accessible to everyone.

        <p className="py-5">
            When i'm not coding, you can find me reading books, learning new things, or exploring the outdoors.
        </p>
      </p>
      </div>
      <LoveBuilding />
    </div>
  );
};

export default Mission;
