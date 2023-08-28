
import '../style/burgermenu.scss';

interface toggleMenuprops {
  toggleMenu: (e: React.SyntheticEvent) => void;
  isOpen: boolean;
  handleKeyEnter: (e:  React.KeyboardEvent) => void;
}

export const BurgerMeny = ({ toggleMenu, handleKeyEnter, isOpen }: toggleMenuprops) => {

  const menuClassName = isOpen ? 'nav-icon open' : 'nav-icon';

  return <>
    <div
      className={menuClassName}
      onClick={(e) => toggleMenu(e)}
      onKeyDown={(e) => handleKeyEnter(e)}
      tabIndex={0}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </>
}