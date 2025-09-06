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
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border px-3 py-2 bg-white dark:bg-gray-800"
              />
            </div>
            <div>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold">Let's talk</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations or contract work.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <FiMail />{" "}
                <span className="text-sm">
                  sabinprajapati.verified@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FiGithub /> <span className="text-sm">github.com/sabinpr</span>
              </div>
              <div className="flex items-center gap-3">
                <FiLinkedin />{" "}
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
