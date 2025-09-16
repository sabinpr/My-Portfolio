import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import Container from "./Container";

export default function Navbar({ onThemeToggle, dark, onOpenNav, navOpen }) {
  // Added "Experience" to nav items
  const navItems = ["About", "Projects", "Skills", "Experience", "Contact"];
  const NAVBAR_HEIGHT = 64; // adjust if your navbar height changes

  const navLinkClass =
    "hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200";

  const buttonClass =
    "p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500/30 dark:focus:ring-indigo-400/30";

  // Smooth scroll to element ID accounting for sticky navbar
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -NAVBAR_HEIGHT;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    if (navOpen) onOpenNav(); // close mobile nav if open
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="text-xl font-bold">
              <a
                href="#"
                className="flex items-center h-8 transform transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  e.currentTarget.blur();
                }}
              >
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-full pointer-events-none"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 ml-6 text-sm font-medium text-gray-700 dark:text-gray-300">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToId(item.toLowerCase())}
                  className={
                    navLinkClass +
                    " focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 rounded cursor-pointer"
                  }
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
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onThemeToggle();
                }
              }}
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
            <button onClick={onOpenNav} className={buttonClass + " md:hidden"}>
              {navOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <nav
          className={`md:hidden flex flex-col gap-3 text-sm font-medium text-gray-700 dark:text-gray-300 
            bg-white dark:bg-gray-900 rounded-lg shadow p-4 transform transition-all duration-300 origin-top
            ${
              navOpen
                ? "opacity-100 scale-y-100 translate-y-0"
                : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
            }`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToId(item.toLowerCase())}
              className={
                navLinkClass +
                " focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500/30 dark:focus-visible:ring-indigo-400/30 rounded cursor-pointer"
              }
            >
              {item}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
}
