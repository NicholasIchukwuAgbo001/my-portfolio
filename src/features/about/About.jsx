import Mission from "./Mission";
import TimeLine from "./TimeLine";
import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import { useState } from "react";

const About = () => {
  const [showCertificate, setShowCertificate] = useState(null);

  return (
    <section className="pt-20 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-stone-300 uppercase tracking-wide text-sm mb-2">
          Get to know me
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold">
          About <span className="text-emerald-400">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <Mission />
        <TimeLine />
      </div>

      {/* Certificates Section */}
      <motion.div
        className="max-w-6xl mx-auto px-4 py-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Semicolon Africa Certificate */}
          <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-1 rounded-2xl">
            <div className="bg-slate-900 rounded-2xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FiAward className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Semicolon Africa
                  </h3>
                  <p className="text-emerald-400 text-sm">
                    Software Engineering • 2025
                  </p>
                </div>
              </div>
              
              <p className="text-stone-300 mb-4 text-sm flex-grow">
                Graduated with Honors. Specialized in full-stack web development, algorithms, system design, and software engineering best practices.
              </p>

              <motion.button
                onClick={() => setShowCertificate('semicolon')}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Certificate
              </motion.button>
            </div>
          </div>

          {/* Henley Business School Certificate */}
          <div className="bg-gradient-to-br from-violet-500 to-purple-500 p-1 rounded-2xl">
            <div className="bg-slate-900 rounded-2xl p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center flex-shrink-0"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <FiAward className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Henley Business School (UK)
                  </h3>
                  <p className="text-violet-400 text-sm">
                    Business Management
                  </p>
                </div>
              </div>
              
              <p className="text-stone-300 mb-4 text-sm flex-grow">
                Certification in Business Management, focusing on strategic thinking, leadership, and organizational excellence.
              </p>

              <motion.button
                onClick={() => setShowCertificate('henley')}
                className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Certificate
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 pt-10 text-center">
        <p className="text-stone-400 uppercase tracking-wide text-sm mb-5">
          Ready to bring your idea to life?
        </p>
        <a
          href="https://wa.me/2348103169500"
          className="px-5 py-2 bg-emerald-600 rounded-full hover:bg-emerald-500 transition-colors"
        >
          Let's work together
        </a>
      </div>

      {/* Certificate Modals */}
      {showCertificate === 'semicolon' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-4 max-w-5xl w-full border border-emerald-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xl">
                Semicolon Africa - Software Engineering Certificate
              </h3>
              <button
                onClick={() => setShowCertificate(null)}
                className="text-white hover:text-emerald-400 text-3xl font-bold"
              >
                ×
              </button>
            </div>
            <img
              src="semicolon_software_enginer_result.png"
              alt="Semicolon Software Engineering Certificate"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}

      {showCertificate === 'henley' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-slate-900 rounded-2xl p-4 max-w-5xl w-full border border-violet-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-bold text-xl">
                Henley Business School - Business Management Certificate
              </h3>
              <button
                onClick={() => setShowCertificate(null)}
                className="text-white hover:text-violet-400 text-3xl font-bold"
              >
                ×
              </button>
            </div>
            <img
              src="henley_business_school.png"
              alt="Henley Business School Certificate"
              className="w-full rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default About;
