import { useEffect, useState, useRef } from "react";
import Container from "./Container";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const highlightClass = "font-medium text-indigo-600 dark:text-indigo-400";

  const fadeInStyle = (index) => ({
    transform: visible ? "translateY(0)" : "translateY(24px)",
    opacity: visible ? 1 : 0,
    transition: "all 0.7s ease",
    transitionDelay: `${index * 100}ms`,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 scroll-mt-24"
    >
      <Container>
        <h2
          style={fadeInStyle(0)}
          className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white text-center transform transition-transform duration-300 hover:scale-105 hover:text-indigo-600 dark:hover:text-indigo-400"
        >
          About Me
        </h2>

        <div className="mt-6 max-w-3xl space-y-4 text-gray-700 dark:text-gray-300">
          <p style={fadeInStyle(1)}>
            I'm a developer focused on building robust backends with Django and
            engaging frontends with React. I care about writing clean,
            maintainable code and creating intuitive user experiences.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li style={fadeInStyle(2)}>
              Experienced with{" "}
              <span className={highlightClass}>Django REST Framework</span>,
              JWT, and PostgreSQL.
            </li>
            <li style={fadeInStyle(3)}>
              Skilled in building web apps with{" "}
              <span className={highlightClass}>Node.js</span> and Express.js.
            </li>
            <li style={fadeInStyle(4)}>
              Familiar with templating engines like{" "}
              <span className={highlightClass}>Pug, EJS, and Handlebars</span>.
            </li>
            <li style={fadeInStyle(5)}>
              Comfortable designing and consuming{" "}
              <span className={highlightClass}>RESTful APIs</span>.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
