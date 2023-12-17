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
          borderRadius: "24px 0 24px 0",
          border: "1px solid transparent",
          padding: "0.9em 1.6em",
          fontWeight: "500",
          cursor: "pointer",
          transition: "border-color 0.25s",
          marginTop: "2rem",
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
