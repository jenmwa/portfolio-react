import { About } from "./About";
import { Portfolio } from "./Portfolio";

import { Hero } from "./Hero";
import { ContactSimple } from "./ContactSimple";
import { Knowledge } from "./Knowledge";
import { Inspiration } from "./Inspiration";

export const Home = () => {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Knowledge></Knowledge>
      <Portfolio></Portfolio>
      <Inspiration></Inspiration>
      <ContactSimple></ContactSimple>
    </>
  );
};
