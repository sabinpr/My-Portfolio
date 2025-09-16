export default function ProjectCard({ p = {}, onOpen = () => {} }) {
  const tagClass =
    "text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200 transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-700 hover:text-indigo-700 dark:hover:text-indigo-200 cursor-default";

  const buttonClass =
    "text-sm px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transform hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300";

  const linkClass =
    "px-3 py-1 border rounded-md text-sm text-gray-700 dark:text-gray-200 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-105";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-[380px]">
      {/* Optional Image */}
      {p?.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={p.image}
            alt={p.title || "Project Image"}
            className="w-full h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
          {p?.title || "Untitled Project"}
        </h3>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
          {p?.description || "No description provided."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p?.tags?.map((t, i) => (
            <span key={i} className={tagClass}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={() => onOpen(p)} className={buttonClass}>
          Details
        </button>
        {p?.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Code
          </a>
        )}
        {p?.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
