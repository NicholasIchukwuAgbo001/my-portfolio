import { motion } from 'framer-motion';
import { FiAward, FiCode, FiTrendingUp, FiStar } from 'react-icons/fi';
import { useState } from 'react';

const AchievementBadges = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const badges = [
    {
      id: 1,
      icon: <FiAward className="w-8 h-8" />,
      title: "Software Engineering Graduate",
      description: "Graduated with honors from Semicolon Africa",
      color: "from-amber-400 to-orange-500",
      certificate: "semicolon_software_enginer_result.png",
    },
    {
      id: 2,
      icon: <FiCode className="w-8 h-8" />,
      title: "Full-Stack Developer",
      description: "Proficient in both frontend and backend technologies",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      id: 3,
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "2+ Years Experience",
      description: "Building production-ready applications",
      color: "from-violet-400 to-purple-500",
    },
    {
      id: 4,
      icon: <FiStar className="w-8 h-8" />,
      title: "20+ Projects Delivered",
      description: "Successfully completed and deployed",
      color: "from-rose-400 to-pink-500",
    },
  ];

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-emerald-400 uppercase tracking-wide text-sm mb-2">
          Achievements & Milestones
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          My <span className="text-emerald-400">Achievements</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, scale: 1.05 }}
            onClick={() => badge.certificate && setSelectedBadge(badge)}
            className="relative group cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${badge.color} p-1 rounded-2xl`}>
              <div className="bg-slate-900 rounded-2xl p-6 h-full">
                <motion.div
                  className="text-white mb-4"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {badge.icon}
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {badge.title}
                </h3>
                <p className="text-stone-400 text-sm">
                  {badge.description}
                </p>
                {badge.certificate && (
                  <p className="text-emerald-400 text-xs mt-2">
                    Click to view certificate
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedBadge && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedBadge(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-4 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xl">
                {selectedBadge.title}
              </h3>
              <button
                onClick={() => setSelectedBadge(null)}
                className="text-white hover:text-emerald-400 text-2xl"
              >
                ×
              </button>
            </div>
            <img
              src={selectedBadge.certificate}
              alt={selectedBadge.title}
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AchievementBadges;
