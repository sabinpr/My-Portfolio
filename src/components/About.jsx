import Container from "./Container";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="mt-6 text-gray-700 dark:text-gray-300 max-w-3xl space-y-4">
          <p className="leading-relaxed">
            I'm a developer focused on building robust backends with Django and
            engaging frontends with React. I care about writing clean,
            maintainable code and creating intuitive user experiences.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Experienced with{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Django REST Framework
              </span>
              , JWT, and PostgreSQL.
            </li>
            <li>
              Skilled in building web apps with{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Node.js
              </span>{" "}
              and Express.js.
            </li>
            <li>
              Familiar with templating engines like{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                Pug, EJS, and Handlebars
              </span>
              .
            </li>
            <li>
              Comfortable designing and consuming{" "}
              <span className="font-medium text-indigo-600 dark:text-indigo-400">
                RESTful APIs
              </span>
              .
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
