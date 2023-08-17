import { Link } from "react-router-dom"
import { Nav } from "./styled"

export const NavBar = () => {
  return (
      <Nav className='menu'>
        <Link to='/'><h1>Mateus Macedo</h1></Link>
          <ul className='menu-list'>
            <li>Home</li>
            <li>Sobre</li>
            <li>Vida Acadêmica</li>
            <li>Experiências</li>
            <li>Projetos pessoais</li>
            <li>Entre em contato</li>
          </ul>
      </Nav>
  )
}