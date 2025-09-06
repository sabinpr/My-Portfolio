import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";

export default function Navbar({ onThemeToggle, dark, onOpenNav, navOpen }) {
  return (
    <header className="py-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur sticky top-0 z-40">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-xl font-bold">
              <a
                href="#"
                className="flex items-center h-8 hover:scale-105 transition-transform duration-200"
                onClick={(e) => {
                  e.preventDefault(); // prevent default jump
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <img src="/logo.png" alt="Logo" className="h-full" />
              </a>
            </div>
            <nav className="hidden md:flex gap-6 ml-6 text-sm text-gray-700 dark:text-gray-300">
              <a href="#about" className="hover:text-indigo-600">
                About
              </a>
              <a href="#projects" className="hover:text-indigo-600">
                Projects
              </a>
              <a href="#skills" className="hover:text-indigo-600">
                Skills
              </a>
              <a href="#contact" className="hover:text-indigo-600">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="text-sm font-medium bg-indigo-600 text-white px-3 py-2 rounded-md"
              >
                Hire me
              </a>
            </div>

            <button className="md:hidden p-2" onClick={onOpenNav}>
              {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        )}
      </Container>
    </header>
  );
}
