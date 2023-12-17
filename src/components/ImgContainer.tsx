import { IPortfolioProject } from "../models/IPortfolioProject";
import { BlueDiv, WhiteDiv } from "./styled/Divs";

import yrkesvagledarn from "/yrkesvagledarn.webp";
import thezoo from "/thezoo.webp";
import contrastchecker from "/contrastchecker.webp";
import movieapp from "/movieapp.webp";
import therestaurant from "/therestaurant.webp";
import hobby from "/hobby.webp";
import portfolio2023 from "/portfolio2023.webp";
import tictactoe from "/tictactoe.webp";

import { portfolioProjects } from "../portfolioProjects";

interface IIMgContainerProps {
  handleClick: (github: string) => void;
}

// interface IImgContainerProps {
//   handleClick: (id: number) => void;
// }
// export const ImgContainer = ({ handleClick }: IImgContainerProps) => {
export const ImgContainer = ({ handleClick }: IIMgContainerProps) => {
  // const portfolioProjects: IPortfolioProject[] = [
  //   {
  //     id: 1,
  //     title: "Yrkesvägledarn",
  //     github: "https://github.com/jenmwa/case-af-jobtech",
  //     image: yrkesvagledarn,
  //   },
  //   {
  //     id: 2,
  //     title: "the ZOO",
  //     github: "https://github.com/jenmwa/the-ZOO",
  //     image: thezoo,
  //   },
  //   {
  //     id: 3,
  //     title: "contrastchecker",
  //     github: "https://github.com/jenmwa/contrast-checker",
  //     image: contrastchecker,
  //   },
  //   {
  //     id: 4,
  //     title: "moviesearchapp",
  //     github: "https://github.com/jenmwa/movie-search-app",
  //     image: movieapp,
  //   },
  //   {
  //     id: 5,
  //     title: "therestaurant",
  //     github: "https://github.com/jenmwa/therestaurant",
  //     image: therestaurant,
  //   },
  //   {
  //     id: 6,
  //     title: "hobby",
  //     github: "https://github.com/jenmwa/hobby",
  //     image: hobby,
  //   },
  //   {
  //     id: 7,
  //     title: "portfolio2023",
  //     github: "https://github.com/jenmwa/jenwaller-se",
  //     image: portfolio2023,
  //   },
  //   {
  //     id: 8,
  //     title: "tictactoe",
  //     github: "https://github.com/jenmwa/tic-tac-toe",
  //     image: tictactoe,
  //   },
  // ];

  const html = portfolioProjects.map((project) => (
    <div
      className="portfolio--img-container"
      key={project.id}
      // onClick={() => handleClick(project.id)}
      onClick={() => handleClick(project.github)}
    >
      <BlueDiv></BlueDiv>
      <WhiteDiv style={{ cursor: "pointer" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "124px 0 124px 0",
          }}
        />
      </WhiteDiv>
    </div>
  ));
  return <>{html}</>;
};
