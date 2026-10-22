import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-16 h-8 rounded-full p-1 
        ${isDark 
          ? 'bg-slate-700 border border-emerald-500/30' 
          : 'bg-slate-200 border border-amber-400/30'
        }
        transition-colors duration-300 ease-in-out
        shadow-lg hover:shadow-xl
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {/* Toggle circle */}
      <motion.div
        className={`
          w-6 h-6 rounded-full flex items-center justify-center
          ${isDark 
            ? 'bg-gradient-to-br from-emerald-400 to-cyan-500' 
            : 'bg-gradient-to-br from-amber-300 to-orange-400'
          }
          shadow-md
        `}
        animate={{
          x: isDark ? 0 : 32,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {isDark ? (
          <FiMoon className="w-4 h-4 text-slate-900" />
        ) : (
          <FiSun className="w-4 h-4 text-white" />
        )}
      </motion.div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <FiMoon 
          className={`w-3 h-3 transition-opacity ${
            isDark ? 'opacity-50 text-emerald-300' : 'opacity-20 text-slate-400'
          }`} 
        />
        <FiSun 
          className={`w-3 h-3 transition-opacity ${
            !isDark ? 'opacity-50 text-amber-500' : 'opacity-20 text-slate-500'
          }`} 
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
