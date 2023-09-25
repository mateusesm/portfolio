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

  const handleBorderBottom = (event: any) => {
    const routeName = event.target.textContent
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

  const handleClickMenu = (event: any) => {
    handleBorderBottom(event)
    handleCloseToggle()
  }

  return (
    <Nav ref={menuRef} className='menu'>
      <ul className='menu-list'>
        <Link className='home' onClick={(event) => handleClickMenu(event)} to='/'><li>Home</li></Link>
        <Link className='sobre' onClick={(event) => handleClickMenu(event)} to='/sobre'><li>Sobre</li></Link>
        <Link className='experiencias' onClick={(event) => handleClickMenu(event)} to='/experiencias'><li>Experiências</li></Link>
        <Link to='#'><li>Projetos pessoais</li></Link>
        <Link to='#'><li>Entre em contato</li></Link>
      </ul>
    </Nav>
  )
}