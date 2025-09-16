import { skills } from "../data/skills";
import Container from "./Container";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-950">
      <Container>
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Technologies and tools I’ve worked with.
        </p>

        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((s) => (
            <span
              key={s}
              className="text-sm font-medium px-4 py-2 rounded-lg bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
