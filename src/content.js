/*
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO CONTENT — Edit this file to update all text/links
 * ═══════════════════════════════════════════════════════════════
 */

export const PERSONAL = {
  name: 'Yotam Feldheim',
  title: 'Data Analyst',
  subtitle: 'Building data-driven products from raw data to production — pipelines, analytics, AI integration, and full-stack development.',
  email: 'yotam6p@gmail.com',
  github: 'https://github.com/yotamfel',
  linkedin: '', // Add your LinkedIn URL here
}

export const ABOUT = `I'm a data analyst who builds end-to-end — from raw data ingestion and pipeline design to
interactive analytics platforms and AI-powered features. I work across the full stack when the project
calls for it, but my core focus is on making data accessible, accurate, and useful.

My approach: understand the domain deeply, build transparent methodologies (no black boxes),
validate everything against ground truth, and document the decisions along the way.`

export const SKILLS = [
  { category: 'Languages & Data', items: ['Python', 'SQL (PostgreSQL)', 'JavaScript / TypeScript', 'Pandas / Polars / NumPy'] },
  { category: 'Backend & APIs', items: ['FastAPI', 'Express.js', 'Next.js', 'SQLAlchemy / Prisma', 'REST API design'] },
  { category: 'Frontend', items: ['React', 'Tailwind CSS', 'Recharts', 'React Native (Expo)'] },
  { category: 'AI & ML', items: ['Claude API (Anthropic)', 'Prompt engineering', 'NL-to-SQL', 'scikit-learn', 'Cosine similarity'] },
  { category: 'Data & Infra', items: ['PostgreSQL', 'ETL pipelines', 'Neon (serverless DB)', 'Docker', 'Railway', 'GitHub Actions'] },
]

export const PROJECTS = [
  {
    id: 'fourth-and-data',
    name: 'Fourth & Data',
    tagline: 'NFL analytics platform with 875K+ data rows, proprietary metrics, and AI-powered search',
    description: `A full-stack NFL analytics platform covering 56 seasons (1970-2025) and 19,000+ players.
Built from scratch with an automated ETL pipeline, a proprietary career value metric (FDV),
AI-powered natural language search, and interactive statistical analysis tools.`,
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Claude AI', 'nflverse', 'Docker'],
    highlights: [
      'Automated ETL pipeline deriving 15+ fields from play-by-play data with 99%+ accuracy',
      'Proprietary FDV metric with 11 position-specific formulas and era normalization',
      'NL-to-SQL Smart Search translating English/Hebrew questions to database queries',
      'Statistical anomaly detection engine flagging breakout seasons and career highs',
      '875K+ rows across 20 tables, serving 66 API endpoints',
    ],
    liveUrl: 'https://fourth-and-data.up.railway.app',
    portfolioUrl: 'https://fourth-and-data.up.railway.app/portfolio',
    githubUrl: 'https://github.com/yotamfel/NFL_Project',
    color: '#f59e0b',
  },
  {
    id: 'running-tracker',
    name: 'Running Tracker',
    tagline: 'Personal training app with AI-powered analytical feedback',
    description: `A PWA for tracking a 4-month running program — plan management, run logging,
progress visualization, and AI feedback that analyzes performance data without motivational fluff.
Built as a mobile-first Hebrew RTL application.`,
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Claude AI', 'PWA'],
    highlights: [
      'AI feedback analyzes pace trends, plan adherence, and distance progression — purely analytical, no motivational language',
      'Editable training plan with skip/reschedule support for missed sessions',
      'Progress charts showing distance and pace trends over time',
      'PWA installable on phone — works offline for logging runs',
      'Hebrew RTL interface throughout',
    ],
    liveUrl: '', // Add when deployed
    portfolioUrl: '',
    githubUrl: '',
    color: '#3b82f6',
  },
  {
    id: 'baby-feeding',
    name: 'Baby Feeding Tracker',
    tagline: 'Real-time feeding tracker with multi-session support and printable reports',
    description: `A web app built to solve a real daily need — tracking baby feeding amounts, timing,
formula concentration, and teaspoon settings across sessions. Includes printable daily reports
and statistical overview charts.`,
    tech: ['Express.js', 'PostgreSQL', 'Vanilla JS', 'Chart.js'],
    highlights: [
      'Multi-session support with password-protected access',
      'Tracks feeding amounts, formula concentration changes, and teaspoon settings over time',
      'Custom markers for special events on the timeline',
      'Printable HTML reports with daily breakdowns — used daily by the family',
      'Statistics dashboard with feeding pattern charts',
      'Dual storage: PostgreSQL in production, JSON files for local development',
    ],
    liveUrl: '', // Add when deployed
    portfolioUrl: '',
    githubUrl: '',
    color: '#8b5cf6',
  },
]
