import { useRef } from 'react';

import { Header } from './styled';
import { NavBar } from './NavBar';
import { ToggleButton } from './ToggleButton';

export const HeaderApp = () => {
  const toggleRef = useRef() as { current: HTMLButtonElement };
  const menuRef = useRef() as { current: HTMLMenuElement };

  const handleToggle = () => {
    toggleRef.current.classList.toggle('active');
    menuRef.current.classList.toggle('active');
    if (menuRef.current.classList.contains('active')) {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    }
  };

  return (
    <Header className="header">
      <a href="/">
        <h1>&lt; Mateus Macedo /&gt;</h1>
      </a>
      <NavBar menuRef={menuRef} toggleRef={toggleRef} />
      <ToggleButton handleToggle={handleToggle} toggleRef={toggleRef} />
    </Header>
  );
};
