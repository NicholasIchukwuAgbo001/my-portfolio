import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
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

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/NicholasIchukwuAgbo001",
      bgColor: "bg-gray-800",
      hoverBgColor: "bg-gray-700",
      textColor: "text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363",
      bgColor: "bg-blue-100",
      hoverBgColor: "bg-blue-200",
      textColor: "text-blue-700",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-xl" />,
      url: "https://x.com/AgboIchukw36207",
      bgColor: "bg-gray-200",
      hoverBgColor: "bg-gray-300",
      textColor: "text-black",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:ichukwunicholasagbo@email.com",
      bgColor: "bg-gray-200",
      hoverBgColor: "bg-gray-300",
      textColor: "text-black",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-xl" />,
      url: "https://wa.me/2347058705863",
      bgColor: "bg-green-100",
      hoverBgColor: "bg-green-200",
      textColor: "text-green-800",
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-xl" />,
      url: "https://www.facebook.com/profile.php?id=61579155453621",
      bgColor: "bg-blue-50",
      hoverBgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  return (
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
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-5 py-3 ${link.bgColor} hover:${link.hoverBgColor} ${link.textColor} rounded-md transition duration-300`}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: link.hoverBgColor.replace("bg-", ""),
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {link.icon}
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SocialLinks;
