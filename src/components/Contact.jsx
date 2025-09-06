import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // success or error message
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "https://portfolio-backend-production-d840.up.railway.app/api/contact/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("⚠️ Failed to send message: " + (data.message || ""));
      }
    } catch (err) {
      setStatus("⚠️ Error: " + err.message);
    } finally {
      setLoading(false);
      // Hide message after 3 seconds
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <section id="contact" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 relative">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your message..."
                required
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {/* Status Message */}
            {status && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-green-500 text-white px-4 py-2 rounded-md animate-slide-down shadow-lg">
                {status}
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold">Let's talk</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or contract work.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                <FiMail />
                <a
                  href="mailto:sabinprajapati.verified@gmail.com"
                  className="text-sm"
                >
                  sabinprajapati.verified@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                <FiGithub />
                <a
                  href="https://github.com/sabinpr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  github.com/sabinpr
                </a>
              </div>

              <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                <FiLinkedin />
                <a
                  href="https://linkedin.com/in/sabin-prajapati-6b8b4523b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                >
                  linkedin.com/in/sabin-prajapati-6b8b4523b/
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <style>
        {`
          @keyframes slide-down {
            0% { transform: translateY(-100%); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-down {
            animation: slide-down 0.5s ease forwards;
          }
        `}
      </style>
    </section>
  );
}
