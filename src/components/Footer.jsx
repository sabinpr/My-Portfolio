import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Sabin Prajapati</span>. All rights
            reserved.
          </p>
          <p className="text-center sm:text-right">
            Built with{" "}
            <span className="text-indigo-600 dark:text-indigo-400 font-medium">
              React
            </span>{" "}
            +{" "}
            <span className="text-sky-500 dark:text-sky-400 font-medium">
              TailwindCSS
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
