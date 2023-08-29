import '../style/header.scss';
import { Link } from "react-router-dom"
import { BurgerMeny } from "./BurgerMeny"
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../hooks/useClickOutside';
import { ThemeContext, ITheme, themes } from '../contexts/ThemeContext';
import { Button } from './Button';



interface IClickProps {
  click: () => void
}

export const Navigation = ({click}: IClickProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ITheme>(themes.dark);



  const toggleMenu = () => {
    setIsOpen(!isOpen)
    console.log('menu isOpen: ', !isOpen)
  }

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleMenu();
    }
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside({
    menuRef: menuRef,
    setIsOpen: setIsOpen,
    onClickOutside: () => {
      closeMenu();
      console.log('click outside');
    },
  });

  const handleThemeToggle = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
    click();
  };

  return <>
    <header ref={menuRef}>
      <div className='logo-container'><Link to='/'>
        <img src='/JW-logo.png' width={50} />
      </Link>
      </div>
      <BurgerMeny
        toggleMenu={toggleMenu}
        handleKeyEnter={handleKeyEnter}
        isOpen={isOpen}
      ></BurgerMeny>

      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu-slide"
        unmountOnExit
      >
        <ThemeContext.Provider value={theme}>
          <div className={`menu-div`}>
            <ul className="menu-list" >
              <li><Link to='/' onClick={closeMenu}>Home</Link></li>
              <li><Link to='/about' onClick={closeMenu}>About</Link></li>
              <li><Link to='/portfolio' onClick={closeMenu}>Portfolio</Link></li>
              <li><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
              <li><Button click={handleThemeToggle} children={<>{theme === themes.light ? 'light_mode' : 'dark_mode'}</>}></Button>
              </li>
            </ul></div>
        </ThemeContext.Provider>
      </CSSTransition>
    </header>
  </>
}

