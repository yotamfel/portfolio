import { PERSONAL, ABOUT, SKILLS, PROJECTS } from './content'

function Badge({ children, color }) {
  return (
    <span className="text-[10px] font-semibold px-2 py-1 rounded-md"
      style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}>
      {children}
    </span>
  )
}

function ProjectCard({ project }) {
  const c = project.color
  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full" style={{ background: c }} />
          <h3 className="text-white font-bold text-lg">{project.name}</h3>
        </div>
        <p className="text-slate-400 text-sm">{project.tagline}</p>
      </div>

      <p className="text-slate-500 text-xs leading-relaxed whitespace-pre-line">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => <Badge key={t} color={c}>{t}</Badge>)}
      </div>

      <ul className="space-y-1.5">
        {project.highlights.map((h, i) => (
          <li key={i} className="text-slate-400 text-xs leading-relaxed flex gap-2">
            <span className="text-slate-600 shrink-0 mt-0.5">-</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-3 pt-1">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: `${c}20`, color: c, border: `1px solid ${c}40` }}>
            Live Platform
          </a>
        )}
        {project.portfolioUrl && (
          <a href={project.portfolioUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
            Technical Deep Dive
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-20">

        {/* Hero */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-black text-white tracking-tight">{PERSONAL.name}</h1>
          <p className="text-amber-500 text-sm font-bold uppercase tracking-widest">{PERSONAL.title}</p>
          <p className="text-slate-400 text-base max-w-xl mx-auto leading-relaxed">{PERSONAL.subtitle}</p>
          <div className="flex justify-center gap-4 pt-2">
            {PERSONAL.github && (
              <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-white transition-colors">GitHub</a>
            )}
            {PERSONAL.linkedin && (
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-white transition-colors">LinkedIn</a>
            )}
            {PERSONAL.email && (
              <a href={`mailto:${PERSONAL.email}`}
                className="text-xs text-slate-500 hover:text-white transition-colors">{PERSONAL.email}</a>
            )}
          </div>
        </header>

        {/* About */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">About</h2>
          <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">{ABOUT}</p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {SKILLS.map(s => (
              <div key={s.category}>
                <p className="text-white text-xs font-semibold mb-2">{s.category}</p>
                <ul className="space-y-1">
                  {s.items.map(item => (
                    <li key={item} className="text-slate-500 text-xs">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-6">Projects</h2>
          <div className="space-y-6">
            {PROJECTS.map(p => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs pb-8">
          <p>{PERSONAL.name} &middot; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  )
}
