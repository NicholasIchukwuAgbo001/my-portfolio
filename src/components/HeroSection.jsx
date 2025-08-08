import { motion } from "framer-motion";
import SocialMedialHandle from "./SocialMedialHandle";
import HeroH1 from "./HeroH1";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (time = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 pt-5 pb-16 text-white">
      <motion.p
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="text-stone-400 uppercase text-sm tracking-widest mb-4 sm:mb-6 text-center lg:text-left"
      >
        Senior Software Engineer
      </motion.p>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full lg:max-w-xl space-y-8 text-center lg:text-left"
        >
          <motion.h2
            custom={1}
            variants={textVariant}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight sm:leading-snug"
          >
            <HeroH1 />
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariant}
            className="text-stone-300 text-base sm:text-lg leading-relaxed hover:text-stone-100"
          >
            I craft beautiful and functional web applications using modern
            technologies always with a focus on clean design and exceptional
            user experience.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariant}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 pb-8 sm:pb-10"
          >
            <a 
             href="#work"
             className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition duration-500">
              View Work
            </a>
            <a 
             href="#contact"
             className="border border-white hover:bg-white hover:text-slate-950 px-6 py-2 rounded-full font-medium transition duration-500">
              Get in Touch
            </a>
          </motion.div>

          <motion.div custom={4} variants={textVariant}>
            <SocialMedialHandle />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-3 text-sm sm:text-base font-mono"
          >
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full">React</span>
            <span className="bg-gray-900 text-white px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-green-700 text-white px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full">TypeScript</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
          <img
            src="my-pic.jpg"
            alt="My Profile"
            className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover 
             shadow-[0_0_20px_6px_rgba(37,99,235,0.5)] 
             hover:shadow-[0_0_30px_8px_rgba(37,99,235,0.7)] 
             hover:scale-105 transition duration-500"
          />
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 text-xl sm:text-2xl font-bold text-stone-300 tracking-wide items-center"
          >
            <span className="uppercase text-blue-700 text-2xl sm:text-3xl font-serif">Ichukwu</span>
            <span className="uppercase text-yellow-700 text-3xl sm:text-4xl font-serif">Nicholas</span>
            <span className="uppercase text-blue-700 text-2xl sm:text-3xl font-serif">Agbo</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
