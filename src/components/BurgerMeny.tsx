
import '../style/burgermenu.scss';

interface toggleMenuprops {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const BurgerMeny = ({ toggleMenu, isOpen }: toggleMenuprops) => {


  // const toggleMenu = () => {
  //   setIsOpen(!isOpen)
  // }

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      toggleMenu();
    }
  }

  const menuClassName = isOpen ? 'nav-icon open' : 'nav-icon'

  return <>
    <div
      className={menuClassName}
      onClick={toggleMenu}
      onKeyDown={(e) => handleKeyEnter(e)}
      tabIndex={0}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </>
}