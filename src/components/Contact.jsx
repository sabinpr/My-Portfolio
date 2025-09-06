import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks ${form.name || "there"} — message received!`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
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
                <span className="text-sm">
                  sabinprajapati.verified@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                <FiGithub />
                <span className="text-sm">github.com/sabinpr</span>
              </div>
              <div className="flex items-center gap-3 hover:text-indigo-600 transition-colors duration-200 cursor-pointer">
                <FiLinkedin />
                <span className="text-sm">
                  linkedin.com/in/sabin-prajapati-6b8b4523b/
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
