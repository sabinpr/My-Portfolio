import { experiences } from "../data/experiences";
import Container from "./Container";

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-4">
          {experiences.map((e) => (
            <div
              key={e.id}
              className="p-4 border rounded-lg bg-white dark:bg-gray-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {e.role} — <span className="text-indigo-600">{e.org}</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {e.date}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
