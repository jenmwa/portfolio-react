import '../style/header.scss';
import { Link } from "react-router-dom"
import { BurgerMeny } from "./BurgerMeny"
import { useRef, useState } from "react"
import { CSSTransition } from 'react-transition-group';
import { useClickOutside } from '../hooks/useClickOutside';


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);



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
    },});

  // useEffect(() => {
  //   function handleClickOutside(event: MouseEvent): void {
  //     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
  //       setIsOpen(false);
  //       console.log('click outside');
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // });



  return <>
    <header ref={menuRef}>
      <div className='logo-container' >
        <img src='/JW-logo.png' width={50} />
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
          <ul className="menu-list" >
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