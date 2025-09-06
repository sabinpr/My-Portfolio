import Container from "./Container";

export default function About() {
  return (
    <section id="about" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">About me</h2>
        <div className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
          <p>
            I'm a developer focused on building robust backends with Django and
            engaging frontends with React. I care about writing clean,
            maintainable code and creating intuitive user experiences.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>
              Experienced with Django REST Framework, JWT, and PostgreSQL.
            </li>
            <li>Skilled in building web apps with Node.js and Express.js.</li>
            <li>
              Familiar with templating engines like Pug, EJS, and Handlebars.
            </li>
            <li>Comfortable designing and consuming RESTful APIs.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
