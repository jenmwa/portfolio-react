import "../style/header.scss";
import { Link } from "react-router-dom";
import { BurgerMeny } from "./BurgerMeny";
import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useClickOutside } from "../hooks/useClickOutside";
import { ThemeContext, ITheme, themes } from "../contexts/ThemeContext";
import { Button } from "./Button";
import logoJW from "/JW-logo.png";
import logoLightJW from "/JW-logo-light.png";

interface IClickProps {
  click: () => void;
}

export const Navigation = ({ click }: IClickProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<ITheme>(themes.dark);
  const [logo, setLogo] = useState(logoJW);

  const menuRef = useRef<HTMLDivElement | null>(null);
  // const nodeRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("menu isOpen: ", !isOpen);
  };

  const handleKeyEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      toggleMenu();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useClickOutside({
    menuRef: menuRef,
    setIsOpen: setIsOpen,
    onClickOutside: () => {
      closeMenu();
      // console.log("click outside");
    },
  });

  const handleThemeToggle = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
      setLogo(logoJW);
    } else {
      setTheme(themes.light);
      setLogo(logoLightJW);
    }
    click();
  };

  return (
    <>
      <header className="header" ref={menuRef}>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} width={50} />
          </Link>
        </div>
        <BurgerMeny
          toggleMenu={toggleMenu}
          handleKeyEnter={handleKeyEnter}
          isOpen={isOpen}
        ></BurgerMeny>

        <CSSTransition
          in={isOpen}
          // nodeRef={nodeRef}
          timeout={300}
          classNames={{
            enter: "menu-slide-enter",
            enterActive: "menu-slide-enter-active",
            exit: "menu-slide-exit",
            exitActive: "menu-slide-exit-active",
          }}
          unmountOnExit
        >
          <ThemeContext.Provider value={theme}>
            <div className={"menu-div"}>
              <ul className="menu-list">
                <li>
                  <Link to="/" onClick={closeMenu}>
                    Hem
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeMenu}>
                    Om
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" onClick={closeMenu}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Button
                    click={handleThemeToggle}
                    children={
                      <>{theme === themes.light ? "light_mode" : "dark_mode"}</>
                    }
                  ></Button>
                </li>
              </ul>
            </div>
          </ThemeContext.Provider>
        </CSSTransition>
      </header>
    </>
  );
};
