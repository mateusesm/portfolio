import { Link } from "react-router-dom"
import { Nav } from "./styled"

export const NavBar = () => {
  return (
      <Nav className='menu'>
        <Link to='/'><h1>Mateus Macedo</h1></Link>
          <ul className='menu-list'>
            <span className='menu-item'><li>Home</li></span>
            <span className='menu-item'><li>Sobre</li></span>
            <span className='menu-item'><li>Vida Acadêmica</li></span>
            <span className='menu-item'><li>Experiências</li></span>
            <span className='menu-item'><li>Projetos pessoais</li></span>
            <span className='menu-item'><li>Entre em contato</li></span>
          </ul>
      </Nav>
  )
}