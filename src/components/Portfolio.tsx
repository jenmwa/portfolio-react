// import { PortfolioCard } from "./PortfolioCard";
// import { Button } from "./styled/Buttons";
import { H2 } from "./styled/Headings";
import { ImgContainer } from "./ImgContainer";
import "../style/_portfolio.scss";
// import { useNavigate } from "react-router-dom";
// import { PortfolioFilterSection } from "./PortfolioFilterSection";

export const Portfolio = () => {
  // const navigate = useNavigate();

  // const handleClick = (id: number) => {
  //   console.log();
  //   navigate(`/portfolio/${id}`);
  // };
  const handleClick = (github: string) => {
    if (github) {
      window.open(github, "_blank");
    }
  };

  return (
    <>
      <section className="portfolio-section">
        <H2>Portfolio</H2>
        <p>
          Några projekt jag gjort senaste året. Vissa i React, vissa i Vue, och
          även några i JavaScript och TypeScript.<br></br> Klicka på bilderna
          för att komma till dess Github-repo.
        </p>
        {/* <PortfolioFilterSection></PortfolioFilterSection> */}
        <div className="portfolio-wrapper">
          <ImgContainer handleClick={handleClick}></ImgContainer>
        </div>
        {/* <Button>Se alla projekt</Button> */}
        {/* <PortfolioCard></PortfolioCard> */}
      </section>
    </>
  );
};
