import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";

export default function Navbar({ onThemeToggle, dark, onOpenNav, navOpen }) {
  const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];
  const NAVBAR_HEIGHT = 64;

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -NAVBAR_HEIGHT;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (navOpen) onOpenNav();
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-50 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                e.currentTarget.blur();
              }}
              className="text-xl font-bold flex items-center h-8 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-full pointer-events-none"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 ml-6 text-sm font-medium text-gray-700 dark:text-gray-300">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToId(item.toLowerCase())}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <span
              onClick={onThemeToggle}
              onKeyDown={(e) =>
                (e.key === "Enter" || e.key === " ") && onThemeToggle()
              }
              tabIndex={0}
              className="inline-flex items-center justify-center cursor-pointer transition-transform duration-500 transform hover:rotate-180 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 rounded"
              aria-label="Toggle theme"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </span>

            {/* Hire Me (Desktop) */}
            <a
              href="#contact"
              className="hidden md:inline-block text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 cursor-pointer"
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={onOpenNav}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30"
            >
              {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="relative md:hidden">
          <nav
            className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col gap-3 text-sm font-medium transition-all duration-300 origin-top
              ${
                navOpen
                  ? "opacity-100 scale-y-100 pointer-events-auto"
                  : "opacity-0 scale-y-0 pointer-events-none"
              }`}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToId(item.toLowerCase())}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 cursor-pointer"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
