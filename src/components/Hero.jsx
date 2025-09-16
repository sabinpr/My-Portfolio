import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./Container";

export default function Hero() {
  const buttonClass =
    "inline-flex items-center px-5 py-3 rounded-lg shadow transition transform hover:-translate-y-1 hover:scale-105 hover:rotate-1 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

  const socialClass =
    "p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:scale-110 animate-bounce-on-hover transition-all duration-300";

  const socialLinks = [
    {
      href: "https://github.com/sabinpr",
      icon: <FiGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/sabin-prajapati-6b8b4523b/",
      icon: <FiLinkedin size={20} />,
      label: "LinkedIn",
    },
    { href: "#contact", icon: <FiMail size={20} />, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-slide">
                Sabin
              </span>{" "}
              — a Backend-focused Fullstack Developer.
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed transition-colors duration-300">
              I build reliable APIs with Django and Node.js, clean React
              frontends, and server-side rendered apps using templating engines
              like Pug, EJS, and Handlebars. I enjoy turning complex problems
              into simple, scalable solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className={`${buttonClass} bg-indigo-600 text-white hover:bg-indigo-700`}
                aria-label="View Projects"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={`${buttonClass} border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800`}
                aria-label="Get in Touch"
              >
                Get in Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              {socialLinks.map(({ href, icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          <div className="bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-1 transition-transform transition-shadow duration-300">
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
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition transform hover:-translate-y-1 hover:scale-105 duration-300"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes gradient-slide {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-slide {
          background-size: 200% 200%;
          animation: gradient-slide 5s ease infinite;
        }
        @keyframes bounce-hover {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-bounce-on-hover:hover {
          animation: bounce-hover 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
