import { FiX } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-2xl w-full p-6 transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 rounded-full transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline transition"
          >
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline transition"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
}
