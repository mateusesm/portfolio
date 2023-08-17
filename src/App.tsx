import { useRef, useEffect, useState } from "react"

import { NavBar } from "./components/NavBar"
import { Toggle } from "./components/Toggle"

import axios from './utils/axios'

interface DataUser {
  avatar_url: string,
  repos_url: string
}

function App() {
  const [dataUser, setDataUser] = useState({} as DataUser)
  const toggleRef = useRef(null)

  useEffect(() => {
    const getGitHubData = async () => {
      const { data } = await axios('/mateusesm')
      setDataUser({ avatar_url: data.avatar_url, repos_url: data.repos_url })
    }
    getGitHubData()
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
      <main>
        <div>
          <img src={dataUser.avatar_url} alt="Foto Mateus" />
        </div>
      </main>
    </>
  )
}

export default App
