import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import { darkModeContext } from "../contexts/darkModeContext"
import { useReducer } from "react"
import { DarkModereducer } from "./reducers/DarkModeReducer"





export const Layout = () => {
    const [darkMode, dispatch] = useReducer(DarkModereducer, false);


    const toggleDarkMode = () => {
        dispatch({
            type: 'DARKMODE',
            payload: false
        });
      };
   
    return <>
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode}}>
    <div className={darkMode ? 'darkMode' : ''}>
    <header>
        <Navigation click={toggleDarkMode}></Navigation>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer>
    <Footer></Footer>
    </footer>
</div>
    </darkModeContext.Provider>
    </>
  }