import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Navigation } from "./Navigation"
import { useReducer } from "react"
import { DarkModereducer } from "./reducers/DarkModeReducer"
import { darkModeContext } from "../contexts/DarkModeContext"


export const Layout = () => {
  const [darkMode, dispatch] = useReducer(DarkModereducer, false);

  const toggleDarkMode = () => {
    dispatch({
      type: 'DARKMODE',
      payload: false
    });
  };

  return <>
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* <div className={darkMode ? 'darkMode' : ''}> */}
        <header className={darkMode ? 'darkMode' : ''}>
          <Navigation click={toggleDarkMode} ></Navigation>
        </header>
        <main className={darkMode ? 'darkMode' : ''}>
          <Outlet></Outlet>
        </main>
        <footer className={darkMode ? 'darkMode' : ''}>
          <Footer></Footer>
        </footer>
      {/* </div> */}
    </darkModeContext.Provider>
  </>
}