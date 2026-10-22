import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic 3D Grid */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: isDark ? 0.3 : 0.2 }}>
        <defs>
          <pattern 
            id="grid" 
            width="60" 
            height="60" 
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${mousePosition.x * 0.02} ${mousePosition.y * 0.02})`}
          >
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke={isDark ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.3)"}
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </pattern>
          
          {/* Radial gradient for spotlight effect */}
          <radialGradient id="spotlight">
            <stop offset="0%" stopColor={isDark ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"} />
            <stop offset="50%" stopColor={isDark ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0.08)"} />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Mouse spotlight */}
        <circle
          cx={mousePosition.x}
          cy={mousePosition.y}
          r="200"
          fill="url(#spotlight)"
          style={{
            transition: 'cx 0.3s ease, cy 0.3s ease'
          }}
        />
      </svg>

      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark 
            ? 'linear-gradient(0deg, transparent 0%, rgba(16, 185, 129, 0.05) 50%, transparent 100%)' 
            : 'linear-gradient(0deg, transparent 0%, rgba(16, 185, 129, 0.03) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
          transition: 'background 0.5s ease',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default GridBackground;
