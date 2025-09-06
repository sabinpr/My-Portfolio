import { FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <button onClick={onClose} className="p-2">
            <FiX />
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-4 flex gap-3">
          <a href={project.repo} className="underline">
            Code
          </a>
          <a href={project.live} className="underline">
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
