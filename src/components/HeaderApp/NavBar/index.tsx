import { Nav } from "./styled"

import { Link } from "react-router-dom"

interface NavParams {
  menuRef: {
    current: HTMLMenuElement
  }
}

export const NavBar = ({ menuRef }: NavParams) => {
  return (
    <Nav ref={menuRef} className='menu'>
      <ul className='menu-list'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/about'><li>Sobre</li></Link>
        <Link to='/experiences'><li>Experiências</li></Link>
        <Link to='#'><li>Projetos pessoais</li></Link>
        <Link to='#'><li>Entre em contato</li></Link>
      </ul>
    </Nav>
  )
}