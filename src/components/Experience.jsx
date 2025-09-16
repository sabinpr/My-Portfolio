import { experiences } from "../data/experiences";
import Container from "./Container";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <Container>
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Experience
        </h2>

        <div className="mt-8 space-y-6">
          {experiences.map((e) => (
            <div
              key={e.id}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition"
            >
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
