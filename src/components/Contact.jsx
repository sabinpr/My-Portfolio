import { useEffect, useState, useRef } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll-triggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const inputClass =
    "mt-2 block w-full rounded-lg border px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";

  const cardClass =
    "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-lg";

  const fadeInStyle = (index) => ({
    transform: visible ? "translateY(0)" : "translateY(24px)",
    opacity: visible ? 1 : 0,
    transitionProperty: "opacity, transform",
    transitionDuration: "0.7s",
    transitionTimingFunction: "ease-out",
    transitionDelay: `${index * 100}ms`,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status) setStatus("");
  };

  const handleSubmit = async (e) => {
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
  };

  const contactFields = [
    { name: "name", label: "Name", placeholder: "Your Name", type: "text" },
    {
      name: "email",
      label: "Email",
      placeholder: "your@example.com",
      type: "email",
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Your message...",
      type: "textarea",
      rows: 5,
    },
  ];

  const contactInfo = [
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
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <Container>
        {/* Heading */}
        <h2
          style={fadeInStyle(0)}
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center transform transition-transform duration-300 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          Contact
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            style={fadeInStyle(1)}
            className={`${cardClass} space-y-6 relative`}
          >
            {status && (
              <div
                aria-live="polite"
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg animate-slide-down"
              >
                {status}
              </div>
            )}

            {contactFields.map((field, i) => (
              <div key={i}>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    required
                    className={inputClass}
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className={inputClass}
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={loading}
              aria-label="Send contact message"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div style={fadeInStyle(2)} className={cardClass}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Let's talk
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or contract work.
            </p>
            <div className="mt-6 space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition transform hover:scale-105"
                >
                  {item.icon}
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
