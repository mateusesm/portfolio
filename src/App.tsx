import { useEffect, useState } from "react"

import { NavBar } from "./components/NavBar"
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
        <section className="home">
          <div>
            <h1>Mateus Macedo</h1>
          </div>
          <aside>
            <img src={dataUser.avatar_url} alt="Foto Mateus" />
          </aside>
        </section>
        <section className="about">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi ipsum sit illum nisi necessitatibus unde iure quibusdam tempore fugit facere non ea, enim repellendus est alias maxime animi itaque culpa.</section>
        <section className="academic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati accusamus dignissimos laboriosam ut culpa inventore possimus accusantium asperiores. Sint dolore voluptate cumque corporis molestiae, facere veniam debitis labore unde.</section>
        <section className="experience">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut facilis enim nemo quidem omnis eum laboriosam quaerat quibusdam reiciendis eos porro nulla, aperiam, accusantium aliquam. Sapiente dignissimos veritatis iusto pariatur.</section>
        <section className="projects">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam cum fugiat eius at ullam sint sapiente, quo officiis, incidunt dolor vero tenetur? Eligendi, doloremque? Accusantium ad facere sequi vel rem!</section>
        <section className="contact">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus vitae id eligendi laudantium repellendus dolor voluptatibus. Ducimus veritatis consequuntur commodi doloribus, officia ipsa similique quae facere incidunt, fuga sapiente sequi?</section>
      </main>
      <FooterApp />
    </>
  )
}

export default App
