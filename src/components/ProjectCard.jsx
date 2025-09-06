export default function ProjectCard({ p, onOpen }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {p.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t, i) => (
          <span key={i} className="text-xs px-2 py-1 border rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => onOpen(p)}
          className="text-sm px-3 py-2 bg-indigo-600 text-white rounded-md"
        >
          Details
        </button>
        <a href={p.repo} className="text-sm underline">
          Code
        </a>
        <a href={p.live} className="text-sm underline">
          Live
        </a>
      </div>
    </div>
  );
}
