import { About } from "./About";
import { Portfolio } from "./Portfolio";

import { Hero } from "./Hero";
import { Contact } from "./Contact";

export const Home = () => {
  console.log("Hi there!");

  return (
    <>
      <Hero></Hero>

      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
};
