import { projects } from "../data/projects";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function Projects({ onOpen }) {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-950">
      <Container>
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Selected Projects
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my favorite works showcasing design and development.
        </p>

        {/* Project Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={onOpen} />
          ))}
        </div>
      </Container>
    </section>
  );
}
