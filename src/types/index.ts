export interface ContactLink {
  label: string
  value: string
  href: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  index: string // e.g. "01"
  name: string
  year: string
  role: string
  description: string
  stack: string[]
  href?: string
  repoHref?: string
}

export interface ResumeData {
  name: string
  title: string
  location: string
  summary: string
  status: string // e.g. "Open to opportunities"
  contact: ContactLink[]
  about: string[]
  skills: SkillGroup[]
  projects: Project[]
  resumeFileHref: string // path to a PDF resume in /public
}
