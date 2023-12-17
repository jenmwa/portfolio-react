import { IPortfolioProject } from "./models/IPortfolioProject";

import yrkesvagledarn from "/yrkesvagledarn.webp";
import thezoo from "/thezoo.webp";
import contrastchecker from "/contrastchecker.webp";
import movieapp from "/movieapp.webp";
import therestaurant from "/therestaurant.webp";
import hobby from "/hobby.webp";
import portfolio2023 from "/portfolio2023.webp";
import tictactoe from "/tictactoe.webp";

export const portfolioProjects: IPortfolioProject[] = [
  {
    id: 1,
    title: "Yrkesvägledarn",
    github: "https://github.com/jenmwa/case-af-jobtech",
    image: yrkesvagledarn,
  },
  {
    id: 2,
    title: "the ZOO",
    github: "https://github.com/jenmwa/the-ZOO",
    image: thezoo,
  },
  {
    id: 3,
    title: "contrastchecker",
    github: "https://github.com/jenmwa/contrast-checker",
    image: contrastchecker,
  },
  {
    id: 4,
    title: "moviesearchapp",
    github: "https://github.com/jenmwa/movie-search-app",
    image: movieapp,
  },
  {
    id: 5,
    title: "therestaurant",
    github: "https://github.com/jenmwa/therestaurant",
    image: therestaurant,
  },
  {
    id: 6,
    title: "hobby",
    github: "https://github.com/jenmwa/hobby",
    image: hobby,
  },
  {
    id: 7,
    title: "portfolio2023",
    github: "https://github.com/jenmwa/jenwaller-se",
    image: portfolio2023,
  },
  {
    id: 8,
    title: "tictactoe",
    github: "https://github.com/jenmwa/tic-tac-toe",
    image: tictactoe,
  },
];