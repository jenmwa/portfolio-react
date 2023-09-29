import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IClickProps {
  click: () => void;
  children: JSX.Element;
}

export const Button = ({ click, children }: IClickProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <>
      <button
        style={{
          backgroundColor: currentTheme.backgroundColor,
          color: currentTheme.color,
        }}
        className="material-symbols-outlined"
        onClick={click}
      >
        {children}
        {/* dark_mode */}
      </button>
    </>
  );
};
