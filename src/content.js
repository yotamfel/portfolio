/*
 * ═══════════════════════════════════════════════════════════════
 *  PORTFOLIO CONTENT — Edit this file to update all text/links
 * ═══════════════════════════════════════════════════════════════
 */

export const PERSONAL = {
  name: 'Yotam Feldheim',
  title: 'Data Analyst',
  subtitle: 'Turning raw data into clear answers — from validation and analysis to building data products with AI-assisted development.',
  email: 'yotam6p@gmail.com',
  github: 'https://github.com/yotamfel',
  linkedin: 'https://www.linkedin.com/in/yotam-feldheim',
}

export const ABOUT = `Data analyst with experience in data validation, quality assurance, and cross-source analysis.
Background includes QA work on driving datasets at Mobileye — validating structured data and video clips,
identifying discrepancies, and improving data quality for computer vision systems.

I build data-driven projects to apply and sharpen my analytical skills — designing the logic, defining
metrics, making architectural decisions, and using AI-assisted development (Claude Code) to bring
them to production. I focus on the data layer: what to measure, how to structure it, and what insights
to surface. The projects below reflect that approach.`

export const SKILLS = [
  { category: 'Core Analysis', items: ['SQL (PostgreSQL)', 'Python (Pandas, NumPy)', 'Excel / Google Sheets', 'Power BI', 'Data validation & QA'] },
  { category: 'Data & Tools', items: ['Database design', 'ETL pipeline logic', 'Statistical analysis', 'Data cleaning & recovery', 'Cross-source comparison'] },
  { category: 'AI & Productivity', items: ['Claude Code (AI-assisted dev)', 'Prompt engineering', 'AI API integration', 'AI-powered analytics'] },
  { category: 'Technical', items: ['Linux', 'Git / GitHub', 'Data visualization', 'Report generation'] },
]

export const PROJECTS = [
  {
    id: 'fourth-and-data',
    name: 'Fourth & Data',
    tagline: 'NFL analytics platform — 56 seasons, 19,000+ players, proprietary career metric',
    description: `An NFL statistics platform I designed and built using AI-assisted development. My role was
defining the analytical approach: which metrics matter, how to normalize across eras, how to
score career value fairly across 11 positions, and how to validate data accuracy against
published references.

The platform covers 1970-2025 with 875K+ data rows, automated data pipelines, and AI-powered
search that translates plain English questions into database queries.`,
    tech: ['SQL', 'Python', 'Data pipelines', 'Statistical modeling', 'AI integration', 'Data validation'],
    highlights: [
      'Designed FDV (Fourth & Data Value) — a proprietary career metric with position-specific formulas, era normalization, and draft-based weighting',
      'Defined data validation methodology: verified 15+ derived fields against published values, achieving 99%+ accuracy',
      'Identified and resolved 4 distinct data corruption patterns from legacy exports',
      'Designed the ETL pipeline logic: what data to derive from play-by-play vs. pre-aggregated sources, and why',
      'Built using AI-assisted development (Claude Code) — I defined the requirements, made architectural decisions, and validated outputs',
    ],
    liveUrl: 'https://fourth-and-data.up.railway.app',
    portfolioUrl: 'https://fourth-and-data.up.railway.app/portfolio',
    githubUrl: 'https://github.com/yotamfel/NFL_Project',
    screenshot: 'fourth-and-data.png',
    color: '#f59e0b',
  },
  {
    id: 'admin-app',
    name: 'Admin Mobile App',
    tagline: 'Android companion app for real-time platform monitoring',
    description: `A mobile admin dashboard for the Fourth & Data platform — built so I can monitor
user activity, respond to feedback, and track feature usage from my phone without opening a browser.

Connects to the same API as the web platform. I designed the screens and data layout
based on what I actually need to see day-to-day as a platform operator.`,
    tech: ['React Native', 'Expo', 'REST API', 'Mobile UI'],
    highlights: [
      'Real-time dashboard: user count, visit stats (today/7d/30d), unresolved feedback',
      'Sortable user list with activity tracking — last active, total visits, 7-day activity',
      'Feedback management with threaded chat — read, reply, resolve, delete from the phone',
      'Feature usage tracking: page popularity, AI call counts, thumbs up/down quality metrics',
      'Notification badge for new feedback — polls every 30 seconds',
    ],
    liveUrl: '',
    portfolioUrl: '',
    githubUrl: '',
    screenshot: '', // Add: admin-app.png
    color: '#10b981',
  },
  {
    id: 'running-tracker',
    name: 'Running Tracker',
    tagline: 'Personal training app with AI-powered analytical feedback',
    description: `A mobile-friendly web app for tracking a structured 4-month running program. I designed the
training plan logic, the data model for tracking runs vs. planned sessions, and the AI feedback
system that analyzes performance data without motivational fluff — purely analytical.

Built with AI-assisted development. I defined the requirements, the data structure, and the
analytical approach for the AI feedback.`,
    tech: ['SQL', 'Data modeling', 'AI analytics', 'PWA', 'TypeScript'],
    highlights: [
      'Designed the training plan data model — flexible enough to handle skipped, rescheduled, and completed sessions',
      'Defined AI feedback criteria: analyze pace trends, plan adherence, and distance progression with purely analytical tone',
      'Mobile-first Hebrew RTL interface installable as a phone app',
      'Progress tracking with pace and distance trend visualization',
    ],
    liveUrl: 'https://running-app-production-bb02.up.railway.app',
    portfolioUrl: '',
    githubUrl: 'https://github.com/yotamfel/running-app',
    screenshot: 'running-tracker.png',
    color: '#3b82f6',
  },
  {
    id: 'baby-feeding',
    name: 'Baby Feeding Tracker',
    tagline: 'Real-world data tracking app solving a daily family need',
    description: `Built to solve an actual daily problem — tracking baby feeding amounts, timing, formula
concentration changes, and generating printable reports for pediatrician visits.

This was my first full project using AI-assisted development. I defined every feature based on
real daily needs, designed the data structure, and iterated based on actual usage.`,
    tech: ['SQL', 'Data modeling', 'JavaScript', 'PostgreSQL', 'Charts'],
    highlights: [
      'Designed the data model: feedings, concentration changes, teaspoon settings, and custom event markers on a timeline',
      'Multi-session support — different family members track separately with password protection',
      'Printable daily reports used in actual pediatrician visits',
      'Statistics dashboard showing feeding patterns and trends over time',
      'In active daily use by the family since launch',
    ],
    liveUrl: 'https://babyfeeding-production.up.railway.app',
    portfolioUrl: '',
    githubUrl: 'https://github.com/yotamfel/baby_feeding',
    screenshot: 'baby-feeding.png',
    color: '#8b5cf6',
  },
]
