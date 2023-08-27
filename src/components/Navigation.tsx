import '../style/header.scss';
import { Link } from "react-router-dom"
import { BurgerMeny } from "./BurgerMeny"
import { useState } from "react"
import { CSSTransition } from 'react-transition-group';


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return <>
    <header>
      <p>header</p>
      <BurgerMeny toggleMenu={toggleMenu} isOpen={isOpen}></BurgerMeny>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="menu-slide"
        unmountOnExit
      >
        <ul className="menu-list">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </CSSTransition>

    </header>

  </>
}