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
        "https://portfolio-backend-6g0v.onrender.com/api/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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
      setTimeout(() => setStatus(""), 3000);
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="your@example.com"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 block w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message */}
            {status && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg animate-slide-down">
                {status}
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Let's talk
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or contract work.
            </p>
            <div className="mt-6 space-y-4">
              {[
                {
                  icon: <FiMail />,
                  text: "sabinprajapati.verified@gmail.com",
                  href: "mailto:sabinprajapati.verified@gmail.com",
                },
                {
                  icon: <FiGithub />,
                  text: "github.com/sabinpr",
                  href: "https://github.com/sabinpr",
                },
                {
                  icon: <FiLinkedin />,
                  text: "linkedin.com/in/sabin-prajapati-6b8b4523b/",
                  href: "https://linkedin.com/in/sabin-prajapati-6b8b4523b/",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
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
