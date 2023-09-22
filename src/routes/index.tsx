import { Routes, Route } from 'react-router-dom'

import { SectionHome } from "../components/MainApp/SectionHome"
import { SectionAbout, AvatarURL } from "../components/MainApp/SectionAbout"
import { SectionExperiences } from "../components/MainApp/SectionExperiences"

export const Rotas = ({ avatar_url }: AvatarURL) => {
  return (
    <Routes>
      <Route path='/' element={<SectionHome />} />
      <Route path='/about' element={<SectionAbout avatar_url={avatar_url} />} />
      <Route path='/experiences' element={<SectionExperiences />} />
    </Routes>
  )
}