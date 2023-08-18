import { useRef } from "react"
import { Link } from "react-router-dom"

import { Toggle } from "../Toggle"
import { Nav } from "./styled"

export const NavBar = () => {
  const toggleRef = useRef() as { current: HTMLButtonElement }
  const menuRef = useRef() as { current: HTMLUListElement }
  
  const handleToggle = () => {
    toggleRef.current.classList.toggle('active')
    menuRef.current.classList.toggle('active')
  }

  return (
      <Nav className='menu'>
        <Link to='/'><h1>Mateus Macedo</h1></Link>
          <ul ref={menuRef} className='menu-list'>
            <li>Home</li>
            <li>Sobre</li>
            <li>Vida Acadêmica</li>
            <li>Experiências</li>
            <li>Projetos pessoais</li>
            <li>Entre em contato</li>
          </ul>
          <Toggle handleToggle={handleToggle} toggleRef={toggleRef} />
      </Nav>
  )
}