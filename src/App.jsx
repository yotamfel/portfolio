import { PERSONAL, ABOUT, SKILLS, PROJECTS } from './content'

function Badge({ children, color }) {
  return (
    <span className="text-[10px] font-semibold px-2 py-1 rounded-md"
      style={{ background: `${color}12`, color, border: `1px solid ${color}25` }}>
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  const c = project.color
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 hover:border-gray-300 hover:shadow-md transition-all">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: c }} />
          <h3 className="text-gray-900 font-bold text-lg">{project.name}</h3>
        </div>
        <p className="text-gray-500 text-sm">{project.tagline}</p>
      </div>

      <p className="text-gray-600 text-xs leading-relaxed whitespace-pre-line">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => <Badge key={t} color={c}>{t}</Badge>)}
      </div>

      <ul className="space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-gray-600 text-xs leading-relaxed flex gap-2">
            <span className="text-gray-400 shrink-0 mt-0.5">-</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 pt-1">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: `${c}15`, color: c, border: `1px solid ${c}30` }}>
            Live Platform
          </a>
        )}
        {project.portfolioUrl && (
          <a href={project.portfolioUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors">
            Technical Deep Dive
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-300 text-gray-500 hover:text-gray-800 hover:border-gray-400 transition-colors">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-black text-gray-900 tracking-tight">{PERSONAL.name}</h1>
          <p className="text-amber-600 text-sm font-bold uppercase tracking-widest">{PERSONAL.title}</p>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">{PERSONAL.subtitle}</p>
          <div className="flex justify-center gap-4 pt-2">
            {PERSONAL.github && (
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-800 transition-colors">GitHub</a>
            )}
            {PERSONAL.linkedin && (
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-800 transition-colors">LinkedIn</a>
            )}
            {PERSONAL.email && (
              <a href={`mailto:${PERSONAL.email}`}
                className="text-xs text-gray-400 hover:text-gray-800 transition-colors">{PERSONAL.email}</a>
            )}
          </div>
        </header>

        {/* About */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3">About</h2>
          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{ABOUT}</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white border border-gray-200 rounded-2xl p-6">
            {SKILLS.map(s => (
              <div key={s.category}>
                <p className="text-gray-900 text-xs font-semibold mb-2">{s.category}</p>
                <ul className="space-y-1">
                  {s.items.map(item => (
                    <li key={item} className="text-gray-500 text-xs">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-6">Projects</h2>
          <div className="space-y-6">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-xs pb-8">
          <p>{PERSONAL.name} &middot; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}
