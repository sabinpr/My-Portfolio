import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-6 border-t mt-12 dark:border-gray-800">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Sabin Prajapati. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">Built with React + TailwindCSS</p>
        </div>
      </Container>
    </footer>
  );
}
