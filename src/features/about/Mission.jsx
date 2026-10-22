import LoveBuilding from "./LoveBuilding";

const Mission = () => {
  return (
    <div className="p-6 text-left flex flex-col justify-center">
      <div className="bg-slate-900 p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-blue-500">My Mission</h3>
        <p className="text-stone-300 leading-relaxed">
          I'm a creative all rounder who blends technical expertise with 
          creative direction and social media management. I believe technology 
          should be a bridge that connects people and solves real-world problems. 
          My passion is crafting innovative digital experiences that are not just 
          functional but delightful, accessible, and engaging across all platforms.
        </p>
        <p className="py-5">
          Whether it's building scalable applications, designing user-centric 
          interfaces, or creating compelling social media strategies, I bring 
          creativity and innovation to every project. When I'm not coding or 
          creating, you can find me reading books, learning new things, or 
          exploring the outdoors.
        </p>
      </div>
      <LoveBuilding />
    </div>
  );
};

export default Mission;
