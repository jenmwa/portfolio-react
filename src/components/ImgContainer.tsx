import { IPortfolioProject } from "../models/IPortfolioProject";
import { BlueDiv, WhiteDiv } from "./styled/Divs";

interface IImgContainerProps {
  handleClick: (id: number) => void;
}

export const ImgContainer = ({ handleClick }: IImgContainerProps) => {
  const portfolioProjects: IPortfolioProject[] = [
    {
      id: 1,
      title: "Projekt 1",
      github: "",
    },
    {
      id: 2,
      title: "Projekt 2",
      github: "https://",
    },
    {
      id: 3,
      title: "Projekt 3",
      github: "",
    },
    {
      id: 4,
      title: "Projekt 4",
      github: "",
    },
  ];

  const html = portfolioProjects.map((project) => (
    <div
      className="portfolio--img-container"
      key={project.id}
      onClick={() => handleClick(project.id)}
    >
      <BlueDiv></BlueDiv>
      <WhiteDiv></WhiteDiv>
    </div>
  ));
  return (
    <>
      {html}
      {/* <div className="portfolio--img-container" onClick={() => handleClick()}>
        <BlueDiv></BlueDiv>
        <WhiteDiv></WhiteDiv>
      </div> */}
    </>
  );
};
