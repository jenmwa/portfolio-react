import { About } from "./About";
import { Portfolio } from "./Portfolio";

import { Hero } from "./Hero";
import { Contact } from "./Contact";
import { Knowledge } from "./Knowledge";
import { Inspiration } from "./Inspiration";

export const Home = () => {
  console.log("Hi there!");

  return (
    <>
      <Hero></Hero>
      <About></About>
      <Knowledge></Knowledge>
      <Portfolio></Portfolio>
      <Inspiration></Inspiration>
      <Contact></Contact>
    </>
  );
};
