export default function ProjectCard({ p, onOpen }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Title */}
      <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
        {p.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        {p.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={() => onOpen(p)}
          className="text-sm px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
        >
          Details
        </button>
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
        >
          Code
        </a>
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
        >
          Live
        </a>
      </div>
    </div>
  );
}
