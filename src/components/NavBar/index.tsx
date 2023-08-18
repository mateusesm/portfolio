import { useRef } from "react"
import { Link } from "react-router-dom"

import { Toggle } from "../Toggle"
import { Nav } from "./styled"

export const NavBar = () => {
  const toggleRef = useRef() as { current: HTMLButtonElement }
  const navRef = useRef() as { current: HTMLElement }
  
  const handleToggle = () => {
    toggleRef.current.classList.toggle('active')
    navRef.current.classList.toggle('active')
  }

  return (
      <Nav ref={navRef} className='menu'>
        <Link to='/'><h1>Mateus Macedo</h1></Link>
          <ul className='menu-list'>
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