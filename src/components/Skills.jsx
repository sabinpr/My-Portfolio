import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import { skills } from "../data/skills";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.2 } // trigger when 20% of the section is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const fadeInStyle = (index) => ({
    transform: visible ? "translateY(0)" : "translateY(24px)",
    opacity: visible ? 1 : 0,
    transitionProperty: "opacity, transform",
    transitionDuration: "0.7s",
    transitionTimingFunction: "ease-out",
    transitionDelay: `${index * 100}ms`,
  });

  const skillCardClass =
    "group flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-default relative h-28";

  const iconClass =
    "w-8 h-8 transition-transform duration-300 group-hover:scale-110 group-hover:brightness-125";

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-gray-950 transition-colors duration-500 scroll-mt-24"
    >
      <Container>
        <h2
          style={fadeInStyle(0)}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        >
          Skills
        </h2>
        <p
          style={fadeInStyle(1)}
          className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
        >
          Technologies and tools I’ve worked with.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={i}
                style={fadeInStyle(i + 2)}
                className={skillCardClass}
              >
                {Icon && (
                  <Icon className={iconClass} style={{ color: skill.color }} />
                )}
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
