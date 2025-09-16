import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import { experiences } from "../data/experiences";

export default function Experience() {
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
      { threshold: 0.2 } // trigger when 20% visible
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

  const cardClass =
    "p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300";

  const titleClass =
    "text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center transform transition-transform duration-300 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-400";

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <Container>
        <h2 style={fadeInStyle(0)} className={titleClass}>
          Experience
        </h2>

        <div className="mt-8 space-y-8">
          {experiences.map((e, i) => (
            <div key={e.id} style={fadeInStyle(i + 1)} className={cardClass}>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {e.role}{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      — {e.org}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {e.date}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
