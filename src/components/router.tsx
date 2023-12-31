import { createHashRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Portfolio } from "./Portfolio";
import { ContactSimple } from "./ContactSimple";
import { Project } from "./Project";
import { AboutJenny } from "./AboutJenny";

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
        element: <AboutJenny></AboutJenny>,
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
        element: <ContactSimple></ContactSimple>,
      },
    ],
  },
]);
