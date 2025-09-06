import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar
        dark={dark}
        onThemeToggle={() => setDark(!dark)}
        navOpen={navOpen}
        onOpenNav={() => setNavOpen(!navOpen)}
      />

      <Hero />
      <About />
      <Projects onOpen={(p) => setSelectedProject(p)} />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
