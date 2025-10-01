import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFacebook,
  FaPhoneAlt,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ContactMe = () => {
  return (
    <div className="px-4 pt-16 text-white pb-5">
      <motion.div
        className="mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl sm:text-6xl font-bold mb-4"
          variants={itemVariants}
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.p
          className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base mb-10"
          variants={itemVariants}
        >
          Ready to start your next project? Let's discuss how we can bring your
          ideas to life.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          <motion.div
            className="bg-slate-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col justify-center items-center sm:items-start space-y-3">
              <motion.h3
                className="text-lg font-semibold text-blue-400"
                variants={itemVariants}
              >
                Contact Information
              </motion.h3>

              <motion.p
                className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
                variants={itemVariants}
              >
                <FaMapMarkerAlt className="text-blue-400" />
                No: 12 Epetedo st, Lagos State, Nigeria
              </motion.p>

              <motion.p
                className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
                variants={itemVariants}
              >
                <FaEnvelope className="text-blue-400" />
                ichukwunicholasagbo@email.com
              </motion.p>

              <motion.p
                className="text-stone-300 flex items-center gap-2 text-center sm:text-left"
                variants={itemVariants}
              >
                <FaPhoneAlt className="text-blue-400" />
                +234 705 870 5863
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center sm:items-start text-center sm:text-left"
            variants={itemVariants}
          >
            <motion.h3
              className="text-lg font-semibold text-blue-400 mb-4"
              variants={itemVariants}
            >
              Follow Me
            </motion.h3>
            <motion.div
              className="flex flex-wrap justify-center sm:justify-start gap-4"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/NicholasIchukwuAgbo001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#374151",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaGithub className="text-xl" />
                GitHub
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#BFDBFE",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </motion.a>

              <motion.a
                href="https://x.com/AgboIchukw36207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#E5E7EB",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaTwitter className="text-xl" />
                Twitter
              </motion.a>

              <motion.a
                href="mailto:ichukwunicholasagbo@email.com"
                className="flex items-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#E5E7EB",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaEnvelope className="text-xl" />
                Email
              </motion.a>

              <motion.a
                href="https://wa.me/2347058705863"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#BBF7D0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61579155453621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition duration-300"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#DBEAFE",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FaFacebook className="text-xl" />
                Facebook
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

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
            I'm excited to bring my skills and expertise to your next project!
            I'm currently available for freelance projects and full-time
            opportunities. Let's create something amazing together! 🚀
          </motion.p>
          <motion.button
            type="button"
            className="mt-6 inline-block bg-slate-950 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1E3A8A",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
