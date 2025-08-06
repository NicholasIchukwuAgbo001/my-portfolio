import { motion } from "framer-motion";
import SocialMedialHandle from "./SocialMedialHandle";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (time = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: time * 0.5,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="px-4 md:px-8 py-12 text-white">
      <motion.p
        variants={textVariant}
        initial="hidden"
        animate="visible"
        className="text-stone-400 uppercase text-sm tracking-widest mb-4 sm:mb-6 text-center lg:text-left"
      >
        Software Engineer
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
            Building Digital <br />
            <span className="text-blue-600">Experiences</span> <br />
            That Matter
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
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-medium transition duration-300">
              View Work
            </button>
            <button className="border border-white hover:bg-white hover:text-slate-950 px-6 py-2 rounded-full font-medium transition duration-300">
              Get in Touch
            </button>
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
            className="flex flex-wrap justify-center gap-3 text-stone-100 text-sm sm:text-base font-mono"
          >
            <span>React</span>
            <span>Next.js</span>
            <span>Node.js</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            <img
              src="my-pic.jpg"
              alt="My Profile"
              className="w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-600 shadow-lg hover:scale-105 transition duration-300"
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
