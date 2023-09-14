import { Article } from "./styled/Articles";
import "../style/portfolio.scss";
import { portfolioProjects } from "../portfolioProjects";
import { useNavigate } from "react-router-dom";

export const PortfolioCard = () => {
  const navigate = useNavigate();
  const projects = portfolioProjects;

  const handleClick = (id: number) => {
    navigate("/portfolio/" + id);
  };

  const html = projects.map((project) => (
    <span key={project.id} onClick={() => handleClick(project.id)}>
      {project.title}
    </span>
  ));
  return (
    <>
      <Article className="portfolio--container">
        <div className="portfolio--upper-section">
          <div className="portfolio-img--container">
            <img src="/placeholder.webp"></img>
          </div>
          {html}
          <span>KATEGORI</span>
          <h3>TITEL</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="portfolio--down-section">
          <div className="portfolio--language">
            <div>
              {/* <span className="material-symbols-outlined">star</span> */}
              <span>Language</span>
            </div>
          </div>
          <div className="portfolio--readMore">
            <a href="/">Learn More</a>
          </div>
        </div>
      </Article>
    </>
  );
};
