import { createContext } from "react";

export interface ITheme {
    name: string,
    backgroundColor: string,
    color: string,
}

export interface IThemes {
    dark: ITheme,
    light: ITheme,
}

export const themes: IThemes = {
    dark: {
        name: 'Night',
        backgroundColor: 'black',
        color: 'whitesmoke',
    },
    light: {
        name: 'Light',
        backgroundColor: 'whitesmoke',
        color: 'black',
    }
}

export const ThemeContext = createContext<ITheme>(themes.light)