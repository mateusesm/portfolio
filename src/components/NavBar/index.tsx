import { useRef } from "react"
import { Link } from "react-router-dom"

import { ToggleButton } from "../ToggleButton"
import { Nav } from "./styled"

export const NavBar = () => {
  const toggleRef = useRef() as { current: HTMLButtonElement }
  const menuRef = useRef() as { current: HTMLUListElement }
  
  const handleToggle = () => {
    toggleRef.current.classList.toggle('active')
    menuRef.current.classList.toggle('active')
    if (menuRef.current.classList.contains('active')) {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
  }

  return (
      <Nav className='menu'>
        <Link to='/'><h1>&lt; Mateus Macedo /&gt;</h1></Link>
          <ul ref={menuRef} className='menu-list'>
            <li>Home</li>
            <li>Sobre</li>
            <li>Vida Acadêmica</li>
            <li>Experiências</li>
            <li>Projetos pessoais</li>
            <li>Entre em contato</li>
          </ul>
          <ToggleButton handleToggle={handleToggle} toggleRef={toggleRef} />
      </Nav>
  )
}