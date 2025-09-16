import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Sabin Prajapati
          </span>
          . All rights reserved.
        </p>

        {/* Technology Credits */}
        <p className="text-center sm:text-right flex flex-wrap gap-2 justify-center sm:justify-end">
          Built with{" "}
          <span className="font-medium transition-all duration-500 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-indigo-500">
            React
          </span>{" "}
          +{" "}
          <span className="font-medium transition-all duration-500 bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent hover:from-indigo-400 hover:to-sky-400">
            TailwindCSS
          </span>
        </p>
      </Container>
    </footer>
  );
}
