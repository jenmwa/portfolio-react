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
    },
    {
      id: 2,
      title: "Projekt 2",
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
