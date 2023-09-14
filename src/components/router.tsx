import { createHashRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Project } from "./Project";

// export const router = createBrowserRouter([
export const router = createHashRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        index: true,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/portfolio/:id",
        element: <Project></Project>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
