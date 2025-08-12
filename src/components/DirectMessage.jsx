import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const DirectMessage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const serviceID = "service_mmqkyrn";
    const templateID = "template_66pgbg4";
    const userID = "ze41sKGw2hOIBnrHW";

    import("emailjs-com").then((emailjs) => {
      emailjs
        .send(serviceID, templateID, formData, userID)
        .then(() => {
          setShowToast(true);
          setFormData({ name: "", email: "", message: "" });
          setError(null);
          setTimeout(() => setShowToast(false), 3000);
        })
        .catch((err) => {
          setError("Failed to send message. Please try again later.");
          console.error("EmailJS error:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return (
    <div className="relative border-2 text-white p-6 rounded-xl shadow-lg bg-gradient-to-r from-slate-700 via-slate-800 to-slate-950">
      <h3 className="text-2xl font-bold mb-4">Send me a message</h3>

      {showToast && (
        <div className="absolute top-2 right-2 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
          {error}
        </div>
      )}

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
            disabled={loading}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 text-slate-950 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
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
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-md transition duration-300 ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white`}
        >
          <FaEnvelope />
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default DirectMessage;
