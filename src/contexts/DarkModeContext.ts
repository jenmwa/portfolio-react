import { createContext } from "react";

export interface IDarkModeContext {
    darkMode: boolean,
    toggleDarkMode: () => void;
}

export const darkModeContext = createContext<IDarkModeContext>({
    darkMode: false,
    toggleDarkMode: () => {}
})