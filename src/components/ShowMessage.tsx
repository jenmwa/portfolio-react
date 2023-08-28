import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"


export const ShowMessage = () => {

   const message = useContext(ThemeContext);



    return <>
    <h3>{message}</h3>
    </>
}