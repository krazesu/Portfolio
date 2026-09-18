import Header from './components/Header/Header'
import { resume } from './data/resume'

function App() {
  return (
    <>
      <Header data={resume} />
    </>
  )
}

export default App