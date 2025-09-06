import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hi, I'm Sabin — a Backend-focused Fullstack developer.
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
              I build reliable APIs with Django and Node.js, clean React
              frontends, and server-side rendered apps using templating engines
              like Pug, EJS, and Handlebars. I enjoy turning complex problems
              into simple, scalable solutions.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Get in touch
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <a
                href="https://github.com/sabinpr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabin-prajapati-6b8b4523b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="#contact"
                className="hover:text-indigo-600 transition-colors duration-200"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Featured Project */}
          <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg">
            <div className="h-56 md:h-72 rounded-lg border border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold">Featured project</div>
                <div className="mt-2 font-bold text-xl">
                  Everest Equity Dashboard
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Member/admin dashboards, proposal & voting flows, and
                  automatic allocation logic.
                </p>
                <div className="mt-4 inline-flex gap-3">
                  <a
                    href="#projects"
                    className="px-3 py-2 bg-white dark:bg-gray-800 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition"
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
