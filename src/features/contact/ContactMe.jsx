import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import CollaborationBanner from "./CollaborationBanner";
import SectionHeader from "../../ui/sections/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
        <SectionHeader
          title="Get in"
          accentWord="Touch"
          subtitle="Ready to start your next project? Let's discuss how we can bring your ideas to life."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto"
          variants={containerVariants}
        >
          <ContactInfo />
          <SocialLinks />
        </motion.div>

        <CollaborationBanner />
      </motion.div>
    </div>
  );
};

export default ContactMe;
