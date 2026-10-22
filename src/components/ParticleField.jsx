import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const ParticleField = () => {
  const [particles, setParticles] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: isDark 
              ? `radial-gradient(circle, rgba(16, 185, 129, ${particle.opacity}), rgba(6, 182, 212, ${particle.opacity * 0.5}))` 
              : `radial-gradient(circle, rgba(16, 185, 129, ${particle.opacity * 0.6}), rgba(6, 182, 212, ${particle.opacity * 0.3}))`,
            boxShadow: isDark
              ? `0 0 ${particle.size * 2}px rgba(16, 185, 129, ${particle.opacity})`
              : `0 0 ${particle.size * 2}px rgba(16, 185, 129, ${particle.opacity * 0.5})`,
            transition: 'background 0.5s ease, box-shadow 0.5s ease',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(particle.id) * 50, 0],
            scale: [1, 1.5, 1],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
