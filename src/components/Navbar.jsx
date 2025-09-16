import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";

export default function Navbar({ onThemeToggle, dark, onOpenNav, navOpen }) {
  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a
                href="#"
                className="flex items-center h-8 hover:scale-105 transition-transform duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src="/logo.png" alt="Logo" className="h-full" />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 ml-6 text-sm font-medium text-gray-700 dark:text-gray-300">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            {/* Hire Me (Desktop) */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={onOpenNav}
            >
              {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navOpen && (
          <nav className="md:hidden mt-3 flex flex-col gap-3 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 rounded-lg shadow p-4">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
