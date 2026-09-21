import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { resume } from './data/resume'

function App() {
  return (
    <>
      <title>Kriz Greg Urmeneta</title>
      <Header data={resume} />
      <main>
        <Hero data={resume} />
        <hr className="rule" />
        <About data={resume} />
        <hr className="rule" />
        <Skills data={resume} />
        <hr className="rule" />
        <Contact data={resume} />
        <hr className="rule" />
        <Footer name={resume.name} />
      </main>
    </>
  )
}

export default App