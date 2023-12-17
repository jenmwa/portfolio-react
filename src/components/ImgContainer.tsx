import { BlueDiv, WhiteDiv } from "./styled/Divs";

import { portfolioProjects } from "../portfolioProjects";

interface IIMgContainerProps {
  handleClick: (github: string) => void;
}

export const ImgContainer = ({ handleClick }: IIMgContainerProps) => {
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
