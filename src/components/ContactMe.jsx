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

const ContactMe = () => {
  return (
    <div className="px-4 pt-16 text-white pb-5">
      <div className="mx-auto text-center">
        <h2 className="text-3xl sm:text-6xl font-bold mb-4">
          Get in <span className="text-blue-500">Touch</span>
        </h2>

        <p className="text-stone-300 max-w-2xl mx-auto text-sm sm:text-base mb-10">
          Ready to start your next project? Let's discuss how we can bring your ideas to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
        
          <div className="bg-slate-900 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
            <div className="flex flex-col justify-center items-center sm:items-start space-y-3">
              <h3 className="text-lg font-semibold text-blue-400">Contact Information</h3>

              <p className="text-stone-300 flex items-center gap-2 text-center sm:text-left">
                <FaMapMarkerAlt className="text-blue-400" />
                No: 12, Epetedo, Lagos
              </p>

              <p className="text-stone-300 flex items-center gap-2 text-center sm:text-left">
                <FaEnvelope className="text-blue-400" />
                ichukwunicholasagbo@email.com
              </p>

              <p className="text-stone-300 flex items-center gap-2 text-center sm:text-left">
                <FaPhoneAlt className="text-blue-400" />
                +234 705 858 7063
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">Follow Me</h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4">
              <a
                href="https://github.com/NicholasIchukwuAgbo001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition duration-300"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md transition duration-300"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>

              <a
                href="https://x.com/AgboIchukw36207"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md transition duration-300"
              >
                <FaTwitter className="text-xl" />
                Twitter
              </a>

              <a
                href="mailto:ichukwunicholasagbo@email.com"
                className="flex items-center gap-2 px-5 py-3 bg-gray-200 hover:bg-gray-300 text-black rounded-md transition duration-300"
              >
                <FaEnvelope className="text-xl" />
                Email
              </a>

              <a
                href="https://wa.me/2347058705863"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-md transition duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61579155453621"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md transition duration-300"
              >
                <FaFacebook className="text-xl" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="bg-green-100 text-green-800 px-4 sm:px-6 md:px-8 py-4 sm:py-6 rounded-md max-w-full sm:max-w-xl md:max-w-lg mx-auto text-center shadow-lg hover:shadow-xl transition duration-300">
          <p className="font-extrabold text-lg sm:text-xl md:text-2xl">🌟 Let's Collaborate! 🌟</p>
          <p className="font-semibold text-base sm:text-lg md:text-xl mt-1">✅ Available for Work</p>
          <p className="text-sm sm:text-base md:text-md mt-2 px-2 sm:px-0">
            I'm excited to bring my skills and expertise to your next project! I'm currently available for freelance projects and full-time opportunities. Let's create something amazing together! 🚀
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContactMe;