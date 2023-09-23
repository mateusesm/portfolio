import { Nav } from "./styled"

import { Link } from "react-router-dom"

interface NavParams {
  handleToggle: () => void,
  menuRef: {
    current: HTMLMenuElement
  }
}

export const NavBar = ({ menuRef, handleToggle }: NavParams) => {
  return (
    <Nav ref={menuRef} className='menu'>
      <ul className='menu-list'>
        <Link onClick={handleToggle} to='/'><li>Home</li></Link>
        <Link onClick={handleToggle} to='/about'><li>Sobre</li></Link>
        <Link onClick={handleToggle} to='/experiences'><li>Experiências</li></Link>
        <Link to='#'><li>Projetos pessoais</li></Link>
        <Link to='#'><li>Entre em contato</li></Link>
      </ul>
    </Nav>
  )
}