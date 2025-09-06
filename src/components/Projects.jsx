import { projects } from "../data/projects";
import Container from "./Container";
import ProjectCard from "./ProjectCard";

export default function Projects({ onOpen }) {
  return (
    <section id="projects" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Selected projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} onOpen={onOpen} />
          ))}
        </div>
      </Container>
    </section>
  );
}
