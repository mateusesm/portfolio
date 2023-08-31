import { useEffect, useState } from "react"

import { ContainerApp } from "./components/ContainerApp/styled"

import { HeaderApp } from "./components/HeaderApp"
import { MainApp } from "./components/MainApp/styled"

import { SectionHome } from "./components/MainApp/SectionHome"
import { SectionAbout } from "./components/MainApp/SectionAbout"
import { SectionExperiences } from "./components/MainApp/SectionExperiences"

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
    <ContainerApp className="container">
      <HeaderApp />
      <MainApp className="main">
        <SectionHome />
        <SectionAbout avatar_url={dataUser.avatar_url} />
        <SectionExperiences />
      </MainApp>
      <FooterApp />
    </ContainerApp>
  )
}

export default App
