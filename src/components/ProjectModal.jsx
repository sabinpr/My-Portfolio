import { FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    triggerRef.current = document.activeElement;
    setVisible(true);

    // Prevent background scroll
    document.body.style.overflow = "hidden";

    const focusable = modalRef.current.querySelectorAll(
      "a, button, textarea, input, select, [tabindex]:not([tabindex='-1'])"
    );
    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "Tab" && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstEl?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // restore scroll
    };
  }, [project]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      onClose?.();
      triggerRef.current?.focus();
    }, 300);
  };

  if (!project) return null;

  const tagClass =
    "text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 transform hover:scale-105";

  const linkClass =
    "text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline transition";

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4`}
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(4px)",
      }}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto outline-none
                    transform transition-all duration-300
                    ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3
            id="modal-title"
            className="text-xl font-semibold text-gray-900 dark:text-white"
          >
            {project.title || "Untitled Project"}
          </h3>
          <button
            onClick={handleClose}
            className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description || "No description available."}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.length
            ? project.tags.map((t, i) => (
                <span key={i} className={tagClass}>
                  {t}
                </span>
              ))
            : null}
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4 flex-wrap">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
