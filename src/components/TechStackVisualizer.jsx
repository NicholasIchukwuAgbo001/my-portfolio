import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TechStackVisualizer = () => {
  const [connections, setConnections] = useState([]);

  const techs = [
    { name: 'React', x: 20, y: 30, size: 80, color: '#61DAFB' },
    { name: 'Next.js', x: 50, y: 15, size: 70, color: '#000000' },
    { name: 'TypeScript', x: 75, y: 25, size: 65, color: '#3178C6' },
    { name: 'Node.js', x: 15, y: 60, size: 75, color: '#339933' },
    { name: 'Tailwind', x: 45, y: 55, size: 60, color: '#06B6D4' },
    { name: 'MongoDB', x: 70, y: 65, size: 65, color: '#47A248' },
    { name: 'React Native', x: 30, y: 80, size: 70, color: '#61DAFB' },
    { name: 'Firebase', x: 85, y: 50, size: 55, color: '#FFCA28' },
    { name: 'Java', x: 60, y: 80, size: 65, color: '#007396' },
  ];

  useEffect(() => {
    // Create random connections
    const newConnections = [];
    for (let i = 0; i < techs.length; i++) {
      const connectTo = Math.floor(Math.random() * techs.length);
      if (connectTo !== i) {
        newConnections.push({ from: i, to: connectTo });
      }
    }
    setConnections(newConnections);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          Technology Universe
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          My <span className="text-emerald-400">Tech Stack</span>
        </h2>
      </motion.div>

      <div className="relative w-full h-[500px] max-w-5xl mx-auto">
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, index) => {
            const from = techs[conn.from];
            const to = techs[conn.to];
            return (
              <motion.line
                key={index}
                x1={`${from.x}%`}
                y1={`${from.y}%`}
                x2={`${to.x}%`}
                y2={`${to.y}%`}
                stroke="rgba(16, 185, 129, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            );
          })}
        </svg>

        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute"
            style={{
              left: `${tech.x}%`,
              top: `${tech.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, zIndex: 10 }}
          >
            <motion.div
              className="relative group cursor-pointer"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-50"
                style={{
                  width: tech.size,
                  height: tech.size,
                  background: `radial-gradient(circle, ${tech.color}40, transparent)`,
                }}
              />

              {/* Tech circle */}
              <div
                className="relative rounded-full border-2 flex items-center justify-center font-bold text-white shadow-lg transition-all group-hover:shadow-2xl"
                style={{
                  width: tech.size,
                  height: tech.size,
                  borderColor: tech.color,
                  background: `radial-gradient(circle, ${tech.color}20, #0f172a)`,
                  fontSize: tech.size > 70 ? '0.75rem' : '0.65rem',
                }}
              >
                {tech.name}
              </div>

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  borderColor: tech.color,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStackVisualizer;
