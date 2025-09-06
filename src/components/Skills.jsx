import { skills } from "../data/skills";
import Container from "./Container";

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="text-sm px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md"
            >
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
