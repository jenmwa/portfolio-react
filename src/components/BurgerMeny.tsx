import "../style/burgermenu.scss";

interface toggleMenuprops {
  toggleMenu: (e: React.SyntheticEvent) => void;
  isOpen: boolean;
  handleKeyEnter: (e: React.KeyboardEvent) => void;
}

export const BurgerMeny = ({
  toggleMenu,
  handleKeyEnter,
  isOpen,
}: toggleMenuprops) => {
  const menuClassName = isOpen ? "nav-icon open" : "nav-icon";

  const handleMenuClick = (e: React.MouseEvent) => {
    toggleMenu(e);
  };

  return (
    <>
      <div
        className={menuClassName}
        onClick={handleMenuClick}
        onKeyDown={(e) => handleKeyEnter(e)}
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
