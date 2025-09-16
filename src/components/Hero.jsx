import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="hero" className="py-24 bg-white dark:bg-gray-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-indigo-600">Sabin</span> — a
              Backend-focused Fullstack Developer.
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              I build reliable APIs with Django and Node.js, clean React
              frontends, and server-side rendered apps using templating engines
              like Pug, EJS, and Handlebars. I enjoy turning complex problems
              into simple, scalable solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              {[
                {
                  href: "https://github.com/sabinpr",
                  icon: <FiGithub size={20} />,
                },
                {
                  href: "https://www.linkedin.com/in/sabin-prajapati-6b8b4523b/",
                  icon: <FiLinkedin size={20} />,
                },
                { href: "#contact", icon: <FiMail size={20} /> },
              ].map(({ href, icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:border-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-400 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="h-64 md:h-80 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-center p-6">
              <div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  Featured Project
                </div>
                <div className="mt-3 font-bold text-2xl text-gray-900 dark:text-white">
                  Everest Equity Dashboard
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm mx-auto">
                  Member/admin dashboards, proposal & voting flows, and
                  automatic allocation logic.
                </p>
                <div className="mt-5 inline-flex gap-3">
                  <a
                    href="#projects"
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
