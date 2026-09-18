import type { ResumeData } from '../../types'
import './Header.css'

interface Props {
  data: Pick<ResumeData, 'name'>
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header({ data }: Props) {
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#top">
          {data.name}
        </a>
        <nav aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
