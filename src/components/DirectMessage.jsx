import { FaEnvelope } from "react-icons/fa";

const DirectMessage = () => {
  return (
    <div className="border-2 text-white p-6 rounded-xl shadow-lg  bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950">
      <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-3 text-slate-950 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-3 text-slate-950 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="4"
          required
          className="w-full text-slate-950 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition duration-300"
        >
          <FaEnvelope />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default DirectMessage;
