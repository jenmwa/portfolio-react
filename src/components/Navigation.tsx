import '../style/header.scss';
import { Link } from "react-router-dom"
import { BurgerMeny } from "./BurgerMeny"
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../hooks/useClickOutside';


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useClickOutside({
    ref: menuRef, onClickOutside: () =>
      setIsOpen(false)
  })

  const toggleMenu = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen)
  }

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleMenu(e);
    }
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  return <>
    <header>
      <div className='logo-container'>
        <img src='/public/JW-logo.png' width={50} />
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
        <div className='menu-div' >
          <ul className="menu-list" ref={menuRef}>
            <li><Link to='/' onClick={closeMenu}>Home</Link></li>
            <li><Link to='/about' onClick={closeMenu}>About</Link></li>
            <li><Link to='/portfolio' onClick={closeMenu}>Portfolio</Link></li>
            <li><Link to='/contact' onClick={closeMenu}>Contact</Link></li>
            <li><span className="material-symbols-outlined">
              dark_mode
            </span></li>
          </ul></div>
      </CSSTransition>

    </header>

  </>
}