import { Nav } from "./styled"

import { Link, useLocation } from "react-router-dom"

interface NavParams {
  menuRef: {
    current: HTMLMenuElement
  },
  toggleRef: {
    current: HTMLButtonElement
  }
}

export const NavBar = ({ menuRef, toggleRef }: NavParams) => {
  const location = useLocation()

  const handleBorderBottom = () => {
    alert(location.pathname)
  }

  const handleCloseToggle = () => {
    if (toggleRef.current.classList.contains('active') && menuRef.current.classList.contains('active')) {
      toggleRef.current.classList.remove('active')
      menuRef.current.classList.remove('active')
    }
    if (document.getElementsByTagName('body')[0].style.overflowY === 'hidden') {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
  }

  const handleClickMenu = (event) => {
    handleBorderBottom()
    handleCloseToggle()
  }

  return (
    <Nav ref={menuRef} className='menu'>
      <ul className='menu-list'>
        <Link onClick={(event) => handleClickMenu(event)} to='/'><li>Home</li></Link>
        <Link onClick={(event) => handleClickMenu(event)} to='/sobre'><li>Sobre</li></Link>
        <Link onClick={(event) => handleClickMenu(event)} to='/experiencias'><li>Experiências</li></Link>
        <Link to='#'><li>Projetos pessoais</li></Link>
        <Link to='#'><li>Entre em contato</li></Link>
      </ul>
    </Nav>
  )
}