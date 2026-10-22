import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CodeSnippet = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  const snippets = [
    {
      title: "React Component",
      language: "JSX",
      code: `const Portfolio = () => {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    fetchSkills().then(data => {
      setSkills(data);
    });
  }, []);

  return (
    <motion.div animate={{ opacity: 1 }}>
      <h1>My Portfolio</h1>
      {skills.map(skill => (
        <SkillCard key={skill.id} {...skill} />
      ))}
    </motion.div>
  );
};`,
    },
    {
      title: "API Integration",
      language: "TypeScript",
      code: `interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};`,
    },
    {
      title: "State Management",
      language: "JavaScript",
      code: `const useTheme = () => {
  const [theme, setTheme] = useState('dark');
  
  const toggleTheme = () => {
    setTheme(prev => 
      prev === 'dark' ? 'light' : 'dark'
    );
    localStorage.setItem('theme', theme);
  };

  return { theme, toggleTheme };
};`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % snippets.length);
    }, 5000);
    return () => clearInterval(interval);
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
          Code Quality
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold text-white">
          Clean <span className="text-emerald-400">Code</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          key={currentSnippet}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800"
        >
          {/* Editor Header */}
          <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-stone-400 text-sm">
              {snippets[currentSnippet].title} • {snippets[currentSnippet].language}
            </div>
            <div className="flex gap-2">
              {snippets.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSnippet === index
                      ? 'bg-emerald-400 w-6'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-stone-300">
              {snippets[currentSnippet].code.split('\n').map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-800/50 px-2 py-1 rounded"
                >
                  <span className="text-stone-600 select-none mr-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span dangerouslySetInnerHTML={{ 
                    __html: line
                      .replace(/const|let|var|return|import|export|from|interface|async|await|try|catch/g, 
                        '<span class="text-purple-400">$&</span>')
                      .replace(/useState|useEffect|Promise|fetch|setTheme|toggleTheme/g, 
                        '<span class="text-cyan-400">$&</span>')
                      .replace(/'[^']*'/g, '<span class="text-emerald-400">$&</span>')
                      .replace(/\/\/.*$/g, '<span class="text-stone-600">$&</span>')
                  }} />
                </motion.div>
              ))}
            </pre>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {snippets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSnippet(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSnippet === index
                  ? 'bg-emerald-400 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeSnippet;
