import { useEffect, useState } from "react"

import { NavBar } from "./components/NavBar"
import { SectionHome } from "./components/SectionHome"
import { FooterApp } from "./components/FooterApp"

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
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <SectionHome avatar_url={dataUser.avatar_url} />
      </main>
      <FooterApp />
    </>
  )
}

export default App
