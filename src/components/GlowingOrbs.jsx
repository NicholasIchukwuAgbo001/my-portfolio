import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const GlowingOrbs = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const orbs = [
    {
      colorDark: 'rgba(16, 185, 129, 0.4)',
      colorLight: 'rgba(16, 185, 129, 0.25)',
      size: 400,
      initialX: '10%',
      initialY: '20%',
      animateX: ['10%', '15%', '5%', '10%'],
      animateY: ['20%', '30%', '15%', '20%'],
      duration: 20,
    },
    {
      colorDark: 'rgba(6, 182, 212, 0.35)',
      colorLight: 'rgba(6, 182, 212, 0.2)',
      size: 500,
      initialX: '70%',
      initialY: '10%',
      animateX: ['70%', '75%', '65%', '70%'],
      animateY: ['10%', '20%', '5%', '10%'],
      duration: 25,
    },
    {
      colorDark: 'rgba(251, 146, 60, 0.3)',
      colorLight: 'rgba(251, 146, 60, 0.18)',
      size: 450,
      initialX: '50%',
      initialY: '70%',
      animateX: ['50%', '45%', '55%', '50%'],
      animateY: ['70%', '75%', '65%', '70%'],
      duration: 22,
    },
    {
      colorDark: 'rgba(167, 139, 250, 0.25)',
      colorLight: 'rgba(167, 139, 250, 0.15)',
      size: 350,
      initialX: '85%',
      initialY: '60%',
      animateX: ['85%', '80%', '90%', '85%'],
      animateY: ['60%', '65%', '55%', '60%'],
      duration: 18,
    },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.initialX,
            top: orb.initialY,
            background: `radial-gradient(circle, ${isDark ? orb.colorDark : orb.colorLight} 0%, transparent 70%)`,
            filter: 'blur(60px)',
            transition: 'background 0.5s ease',
          }}
          animate={{
            x: orb.animateX,
            y: orb.animateY,
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GlowingOrbs;
