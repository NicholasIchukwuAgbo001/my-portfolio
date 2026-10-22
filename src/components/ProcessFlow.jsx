import { motion } from 'framer-motion';
import { FiSearch, FiLayout, FiCode, FiCheckCircle } from 'react-icons/fi';

const ProcessFlow = () => {
  const steps = [
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Discovery & Research",
      description: "Understanding requirements and user needs",
      color: "from-emerald-400 to-cyan-500",
    },
    {
      icon: <FiLayout className="w-8 h-8" />,
      title: "Design & Prototype",
      description: "Creating wireframes and interactive prototypes",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Development",
      description: "Building scalable and performant solutions",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Testing & Deploy",
      description: "Quality assurance and production deployment",
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
          How I Work
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          My <span className="text-emerald-400">Process</span>
        </h2>
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Connection Line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-pink-500 -translate-y-1/2 opacity-30" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative z-10 bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 mx-auto`}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div style={{ transform: 'rotate(0deg)' }}>
                    {step.icon}
                  </div>
                </motion.div>

                <h3 className="text-white font-bold text-lg mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-stone-400 text-sm text-center">
                  {step.description}
                </p>
              </motion.div>

              {/* Animated Arrow (between steps) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden lg:block absolute top-1/2 -right-8 w-16 h-1 z-0"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-cyan-500" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
