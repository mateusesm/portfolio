import { Nav } from "./styled"

interface NavParams {
  menuRef: {
    current: HTMLMenuElement
  }
}

export const NavBar = ({ menuRef }: NavParams) => {
  return (
    <Nav ref={menuRef} className='menu'>
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