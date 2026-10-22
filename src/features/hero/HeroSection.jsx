import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SocialMediaHandle from "./SocialMedialHandle";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={ref} className="text-white pb-10 pt-10 relative overflow-hidden min-h-screen flex items-center">
      <motion.div style={{ y, opacity }} className="w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          className="w-full lg:max-w-xl sm:space-y-8 text-center lg:text-left"
        >
          <motion.h2 custom={1} variants={textVariant}>
            <HeroH1 />
          </motion.h2>

          <motion.p
            custom={2}
            variants={textVariant}
            className="text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed py-5"
          >
            I craft beautiful and functional web and mobile applications using modern
            technologies, always with a focus on clean design and exceptional
            user experience.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariant}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 pb-6 sm:pb-8"
          >
            <motion.a
              href="#work"
              className="relative overflow-hidden bg-emerald-600 text-white px-5 sm:px-6 py-2 rounded-full font-medium
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500 before:to-cyan-600 before:-translate-x-full
                        before:transition-transform before:duration-500 hover:before:translate-x-0 shadow-lg hover:shadow-emerald-500/50
                        after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-100 
                        after:shadow-[0_0_30px_rgba(16,185,129,0.6)] after:transition-opacity after:duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  '0 10px 25px -5px rgba(16, 185, 129, 0.3)',
                  '0 10px 25px -5px rgba(16, 185, 129, 0.5)',
                  '0 10px 25px -5px rgba(16, 185, 129, 0.3)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            >
              <span className="relative z-10">View Work</span>
            </motion.a>

            <motion.a
              href="#contact"
              className="relative overflow-hidden border-2 border-emerald-400 text-white px-5 sm:px-6 py-2 rounded-full font-medium
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500 before:to-cyan-600 before:-translate-x-full
                        before:transition-transform before:duration-500 hover:before:translate-x-0 shadow-lg hover:shadow-cyan-500/50
                        after:absolute after:inset-0 after:rounded-full after:opacity-0 hover:after:opacity-100 
                        after:shadow-[0_0_30px_rgba(6,182,212,0.6)] after:transition-opacity after:duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                borderColor: ['rgba(16, 185, 129, 1)', 'rgba(6, 182, 212, 1)', 'rgba(16, 185, 129, 1)'],
              }}
              transition={{
                borderColor: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            >
              <span className="relative z-10">Get in Touch</span>
            </motion.a>
          </motion.div>

          <motion.div
            custom={4}
            variants={textVariant}
            className="hidden lg:block"
          >
            <SocialMediaHandle />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center py-6 px-8"
          >
            <div className="relative p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <motion.img
                src="my-pic.jpg"
                alt="My Profile"
                className="w-44 h-44 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover
                          shadow-[0_0_20px_6px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_8px_rgba(37,99,235,0.7)]
                          transition duration-500"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 text-lg sm:text-xl md:text-2xl font-bold text-stone-300 tracking-wide items-center"
          >
            <motion.span
              className="uppercase text-blue-700 sm:text-2xl md:text-3xl font-serif"
              whileHover={{ scale: 1.1 }}
            >
              Ichukwu
            </motion.span>
            <motion.span
              className="uppercase text-yellow-700 sm:text-3xl md:text-4xl font-serif"
              whileHover={{ scale: 1.1 }}
            >
              Nicholas
            </motion.span>
            <motion.span
              className="uppercase text-blue-700 sm:text-2xl md:text-3xl font-serif"
              whileHover={{ scale: 1.1 }}
            >
              Agbo
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
