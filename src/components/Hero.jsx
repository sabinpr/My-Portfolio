import { useEffect, useState, useRef } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./Container";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Trigger once
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Utility for fade-in with stagger
  const fadeInClass = (index) =>
    `transition-all duration-700 ease-out transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    } delay-[${index * 100}ms]`;

  // Buttons
  const buttons = [
    { text: "View Projects", href: "#projects", primary: true },
    {
      text: "Download CV",
      href: "/Sabin_Prajapati_CV.pdf",
      primary: true,
      download: true,
    },
    { text: "Get in Touch", href: "#contact", primary: false },
  ];

  const buttonBase =
    "inline-flex items-center px-5 py-3 rounded-lg shadow transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";

  const buttonHoverPrimary =
    "bg-indigo-600 text-white hover:-translate-y-1 hover:scale-105 hover:rotate-1 hover:bg-indigo-700";

  const buttonHoverSecondary =
    "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-1 hover:scale-105 hover:rotate-1";

  // Social Links
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

  const socialBase =
    "p-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 transition-transform duration-300";

  const socialHover =
    "hover:scale-125 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-500";

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1
              className={`${fadeInClass(
                0
              )} text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-indigo-400 bg-clip-text text-transparent animate-gradient-slide">
                Sabin
              </span>{" "}
              — a Fullstack Developer.
            </h1>

            <p
              className={`${fadeInClass(
                1
              )} mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed`}
            >
              I build reliable APIs with Django and Node.js, clean React
              frontends, and performance-focused server-side rendered
              applications. I enjoy turning complex problems into simple,
              scalable solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {buttons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.href}
                  className={`${fadeInClass(i + 2)} ${buttonBase} ${
                    btn.primary ? buttonHoverPrimary : buttonHoverSecondary
                  }`}
                  aria-label={btn.text}
                  {...(btn.download ? { download: true } : {})} // 👈 makes it download
                >
                  {btn.text}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-4">
              {socialLinks.map(({ href, icon, label }, i) => {
                const isExternal = href.startsWith("http");

                return (
                  <a
                    key={i}
                    href={href}
                    {...(isExternal && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={`${fadeInClass(
                      i + 4
                    )} ${socialBase} ${socialHover}`}
                    aria-label={label}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Featured Project */}
          <div
            className={`${fadeInClass(
              8
            )} bg-gradient-to-br from-indigo-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-1 transition-all duration-300`}
          >
            <div className="h-64 md:h-80 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-center p-6">
              <div>
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  Featured Project
                </div>
                <div className="mt-3 font-bold text-2xl text-gray-900 dark:text-white">
                  Investment Club Dashboard
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
      <style>{`
        @keyframes gradient-slide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-slide {
          background-size: 200% 200%;
          animation: gradient-slide 5s ease infinite;
        }

        @keyframes bounce-hover {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
        .animate-bounce-on-hover:hover {
          animation: bounce-hover 0.4s ease forwards;
        }

        @keyframes button-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-button-bounce:hover {
          animation: button-bounce 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}
