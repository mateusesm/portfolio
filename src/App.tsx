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
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <section className="home">
          <div>
            <h1>Mateus Macedo</h1>
          </div>
          <aside>
            <img src={dataUser.avatar_url} alt="Foto Mateus" />
          </aside>
        </section>
        <section className="about"></section>
        <section className="academic"></section>
        <section className="experience"></section>
        <section className="projects"></section>
        <section className="contact"></section>
      </main>
      <footer className="footer">&copy; Mateus Macedo | Alguns direitos reservados</footer>
    </>
  )
}

export default App
