import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const DirectMessage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="border-2 text-white p-6 rounded-xl shadow-lg bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950">
      <h3 className="text-2xl font-bold mb-4">Send me a message</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 text-slate-950 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-slate-950 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
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
