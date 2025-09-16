import { useEffect, useState, useRef } from "react";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects({ onOpenProject }) {
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

  const fadeInStyle = (index) => ({
    transform: visible ? "translateY(0)" : "translateY(24px)",
    opacity: visible ? 1 : 0,
    transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
    transitionDelay: `${index * 100}ms`,
  });

  const gridClass =
    "mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";

  // Project card class to match Skills cards
  const projectCardClass =
    "p-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-300";

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-gray-950 scroll-mt-24 transition-colors duration-500"
    >
      <Container>
        <h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white"
          style={fadeInStyle(0)}
        >
          Selected Projects
        </h2>
        <p
          className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          style={fadeInStyle(1)}
        >
          A collection of my favorite works showcasing design and development.
        </p>

        <div className={gridClass}>
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={fadeInStyle(i + 2)}
              className={projectCardClass}
            >
              <ProjectCard p={project} onOpen={onOpenProject} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
