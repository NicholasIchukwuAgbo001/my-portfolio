import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-stone-300 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Ichukwu Nicholas Agbo. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
