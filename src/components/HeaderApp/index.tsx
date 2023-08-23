import { Link } from "react-router-dom"

import { Header } from "./styled"
import { NavBar } from '../NavBar'

export const HeaderApp = () => {
  return (
    <Header className="header">
      <Link to='/'><h1>&lt; Mateus Macedo /&gt;</h1></Link>
      <NavBar />
    </Header>
  )
}