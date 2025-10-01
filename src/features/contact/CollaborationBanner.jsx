import { motion } from "framer-motion";
import Button from "../../ui/buttons/Button";

const CollaborationBanner = () => {
  return (
    <motion.div
      className="bg-green-100 text-green-800 px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-md max-w-full sm:max-w-xl md:max-w-lg mx-auto text-center shadow-lg hover:shadow-xl transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <motion.p
        className="font-extrabold text-lg sm:text-xl md:text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 }}
      >
        🌟 Let's Collaborate! 🌟
      </motion.p>
      <motion.p
        className="font-semibold text-base sm:text-lg md:text-xl mt-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3 }}
      >
        ✅ Available for Work
      </motion.p>
      <motion.p
        className="text-sm sm:text-base md:text-md mt-2 px-2 sm:px-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.4 }}
      >
        I'm excited to bring my skills and expertise to your next project! I'm
        currently available for freelance projects and full-time opportunities.
        Let's create something amazing together! 🚀
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <Button
          variant="accent"
          className="mt-6"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CollaborationBanner;
