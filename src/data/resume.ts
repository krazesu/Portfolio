import type { ResumeData } from '../types'

export const resume: ResumeData = {
  name: 'Kriz Greg D. Urmeneta',
  title: 'Aspiring Software Engineer',
  location: 'Manila, PH',
  status: 'Open to opportunities',
  summary:
    'I build reliable software applications end to end with an emphasis on clarity, performance, and maintainable code.',

  contact: [
    { label: 'Email', value: 'kriz.greg.work@gmail.com', href: 'mailto:kriz.greg.work@gmail.com' },
    { label: 'GitHub', value: 'github.com/krazesu', href: 'https://github.com/krazesu' },
    { label: 'LinkedIn', value: 'linkedin.com/in/kriz-greg-urmeneta', href: 'https://linkedin.com/in/kriz-greg-urmeneta' },
  ],

  resumeFileHref: '/resume.pdf',

  about: [
    'I am a fresh graduate seeking opportunity in Software Engineering where I can contribute to meaningful projects while continuously developing my technical skills.;',
    'I have university experience in using Python, C++, and Rust. Currently, I am expanding my skills in full-stack development through personal projects using HTML, JavaScript, and Java.',
    'I have also participated in an AI Bootcamp focused on Agentic AI, Large Language Models (LLMs), and Computer Vision, further broadening my knowledge of emerging technologies. '
  ],

  skills: [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Vite', 'Next.js', 'CSS / Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'] },
    { category: 'Tooling', items: ['Git', 'Docker', 'CI/CD', 'Vitest'] },
  ],

  projects: [
    {
      index: '01',
      name: 'Ledger',
      year: '2026',
      role: 'Solo developer',
      description:
        'A personal-finance tracker with automatic categorization and monthly reporting, built to replace a spreadsheet workflow.',
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      href: 'https://example.com',
      repoHref: 'https://github.com/jreyes/ledger',
    },
    {
      index: '02',
      name: 'Routewise',
      year: '2025',
      role: 'Frontend lead, team of 3',
      description:
        'A route-planning tool for delivery drivers that reduced average trip time by 12% in pilot testing.',
      stack: ['React', 'Mapbox GL', 'Express'],
      href: 'https://example.com',
      repoHref: 'https://github.com/jreyes/routewise',
    },
    {
      index: '03',
      name: 'Shelfmark',
      year: '2024',
      role: 'Solo developer',
      description:
        'A self-hosted book-tracking app with a public API, used by a small community of readers.',
      stack: ['Next.js', 'SQLite', 'Docker'],
      repoHref: 'https://github.com/jreyes/shelfmark',
    },
  ],
}
