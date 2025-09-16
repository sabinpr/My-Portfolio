import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import FadeInSection from "./components/FadeInSection";

// Wrapper for consistent fade-in + section styling
const SectionWrapper = ({ children, className = "" }) => (
  <FadeInSection className={`transition-colors duration-300 ${className}`}>
    <div className="bg-gray-50 dark:bg-gray-900">{children}</div>
  </FadeInSection>
);

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // Lifted project state

  // Sync theme with DOM and localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Handlers for opening and closing modal
  const handleOpenProject = (project) => setSelectedProject(project);
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar
        dark={dark}
        onThemeToggle={() => setDark(!dark)}
        navOpen={navOpen}
        onOpenNav={() => setNavOpen(!navOpen)}
      />

      <main>
        <SectionWrapper>
          <Hero />
        </SectionWrapper>

        <SectionWrapper>
          <About />
        </SectionWrapper>

        <SectionWrapper>
          <Projects onOpenProject={handleOpenProject} />
        </SectionWrapper>

        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />

      {/* Modal rendered at top level to overlay everything */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseProject} />
      )}
    </div>
  );
}
