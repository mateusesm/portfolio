import { Nav } from "./styled"

import { Link } from "react-router-dom"

interface NavParams {
  menuRef: {
    current: HTMLMenuElement
  },
  toggleRef: {
    current: HTMLButtonElement
  }
}

export const NavBar = ({ menuRef, toggleRef }: NavParams) => {
  const handleCloseToggle = () => {
    if (toggleRef.current.classList.contains('active') && menuRef.current.classList.contains('active')) {
      toggleRef.current.classList.remove('active')
      menuRef.current.classList.remove('active')
    } 
  }

  return (
    <Nav ref={menuRef} className='menu'>
      <ul className='menu-list'>
        <Link onClick={handleCloseToggle} to='/'><li>Home</li></Link>
        <Link onClick={handleCloseToggle} to='/about'><li>Sobre</li></Link>
        <Link onClick={handleCloseToggle} to='/experiences'><li>Experiências</li></Link>
        <Link to='#'><li>Projetos pessoais</li></Link>
        <Link to='#'><li>Entre em contato</li></Link>
      </ul>
    </Nav>
  )
}