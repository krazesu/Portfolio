import type { ResumeData } from '../types'

export const resume: ResumeData = {
  name: 'Kriz Greg D. Urmeneta',
  title: 'Computer Engineering Graduate',
  location: 'Manila, PH',
  status: 'Open to opportunities',
  summary:
    'I build reliable software applications end to end with an emphasis on clarity, performance, and maintainable code.',

  contact: [
    { label: 'Email', value: 'krizgreg.urmeneta.work@gmail.com', href: 'mailto:krizgreg.urmeneta.work@gmail.com' },
    { label: 'GitHub', value: 'github.com/krazesu', href: 'https://github.com/krazesu' },
    { label: 'LinkedIn', value: 'linkedin.com/in/kriz-greg-urmeneta', href: 'https://linkedin.com/in/kriz-greg-urmeneta' },
  ],

  profileImageSrc: '/profile.png',
  profileImageAlt: 'Portrait of Kriz Greg D. Urmeneta',

  resumeFileHref: '/KrizGreg_Urmeneta_Resume.pdf',

  about: [
    'I am a fresh graduate seeking opportunity in Software Engineering where I can contribute to meaningful projects while continuously developing my technical skills.',
    'I have university experience in using Python, C++, and Rust. Currently, I am expanding my skills in full-stack development through personal projects using HTML, JavaScript, Typescript, and Java.',
    'I have also participated in an AI Bootcamp focused on Agentic AI, Large Language Models (LLMs), and Computer Vision, further broadening my knowledge of emerging technologies. '
  ],

  education: [
    {
      degree: 'B.S. in Computer Engineering',
      institution: 'University of the Philippines Diliman',
      year: '2021 – 2026',
      detail: 'Graduated Magna cum laude',
    },
    {
      degree: '',
      institution: 'Philippine Science High School - Eastern Visayas Campus',
      year: '2015-2021',
      detail: 'Graduated with High Honors',
    },
  ],

  skills: [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'C/C++','Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Vite', 'CSS / Tailwind'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'SQL/NoSQL', 'REST APIs'] },
    { category: 'Tooling', items: ['Git', 'Docker', 'Postman'] },
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
