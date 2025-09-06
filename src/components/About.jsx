import Container from "./Container";

export default function About() {
  return (
    <section id="about" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold">About me</h2>
        <div className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
          <p>
            I'm a developer focused on building robust backends with Django and
            delightful frontends with React. I care about maintainable code,
            tests, and automation that saves time.
          </p>
          <ul className="mt-4 list-disc pl-5 space-y-2">
            <li>
              Experienced with Django REST Framework, JWT, and PostgreSQL.
            </li>
            <li>
              Implemented Celery tasks for scheduled reminders & background
              jobs.
            </li>
            <li>
              Comfortable designing and consuming APIs, and writing unit tests.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
