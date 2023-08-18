import { useEffect, useState } from "react"

import { NavBar } from "./components/NavBar"

import axios from './utils/axios'

interface DataUser {
  avatar_url: string,
  repos_url: string
}

function App() {
  const [dataUser, setDataUser] = useState({} as DataUser)
  
  useEffect(() => {
    const getGitHubData = async () => {
      const { data } = await axios('/mateusesm')
      setDataUser({ avatar_url: data.avatar_url, repos_url: data.repos_url })
    }
    getGitHubData()
  }, [])

  return (
    <>
      <header className='header'>
        <NavBar />
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
