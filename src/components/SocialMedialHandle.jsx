import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const SocialMedialHandle = () => {
  return (
    <div className="flex gap-6 text-white text-2xl justify-center md:justify-normal">

      <a
        href="mailto:ichukwunicholasagbo@gmail.com" target="_blank" 
        rel="noopener noreferrer">
        <HiOutlineMail className="hover:text-blue-400 transition" />
      </a>

      <a
        href="https://github.com/NicholasIchukwuAgbo001" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaGithub className="hover:text-gray-300 transition" />
      </a>

      <a
        href="https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaLinkedin className="hover:text-blue-500 transition" />
      </a>

      <a
        href="https://x.com/AgboIchukw36207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter"
      >
        <FaTwitter className="hover:text-sky-400 transition-colors duration-300" />
      </a>

      <a
        href="#" 
        target="_blank" 
        rel="noopener noreferrer">
        <FaInstagram className="hover:text-pink-500 transition" />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaWhatsapp className="hover:text-green-500 transition text-2xl" />
       </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >
          <FaFacebook className="hover:text-blue-600 transition text-2xl" />
        </a>
    </div>
  );
};

export default SocialMedialHandle
