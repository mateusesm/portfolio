import { useRef, useEffect } from "react"

import { NavBar } from "./components/NavBar"
import { Toggle } from "./components/Toggle"

function App() {
  const toggleRef = useRef(null)

  useEffect(() => {
    const getGitHubData = () => {
      
    }
  }, [])

  const handleToggle = () => {
    console.log('oi')
  }

  return (
    <>
      <header className='header'>
        <NavBar />
        <Toggle handleToggle={handleToggle} toggleRef={toggleRef} />
      </header>
    </>
  )
}

export default App
