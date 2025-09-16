import Container from "./Container";

const TechBadge = ({ children }) => (
  <span
    className="font-medium bg-clip-text text-transparent
               bg-gradient-to-r from-indigo-600 to-purple-600
               dark:from-indigo-400 dark:to-purple-400
               transition-all duration-500
               hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-400 dark:hover:to-indigo-400
               drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
  >
    {children}
  </span>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 border-t border-gray-200 dark:border-gray-800">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
        {/* Copyright */}
        <p className="text-center sm:text-left">
          © {year}{" "}
          <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300 hover:text-indigo-600 dark:hover:text-indigo-400">
            Sabin Prajapati
          </span>
          . All rights reserved.
        </p>

        {/* Technology Credits */}
        <p className="text-center sm:text-right flex flex-wrap gap-2 justify-center sm:justify-end">
          Built with <TechBadge>React</TechBadge> +{" "}
          <TechBadge>TailwindCSS</TechBadge>
        </p>
      </Container>
    </footer>
  );
}
