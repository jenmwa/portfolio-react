import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        index: true,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }

]);