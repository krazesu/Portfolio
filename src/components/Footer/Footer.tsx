import './Footer.css'

interface Props {
  name: string
}

export default function Footer({ name }: Props) {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>
          © {year} {name}
        </span>
        <span>Built with React + Vite + TypeScript</span>
      </div>
    </footer>
  )
}
