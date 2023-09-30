// import { PortfolioCard } from "./PortfolioCard";
import { Button } from "./styled/Buttons";
import { H2 } from "./styled/Headings";
import { ImgContainer } from "./ImgContainer";
import "../style/portfolio.scss";
import { useNavigate } from "react-router-dom";

export const Portfolio = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    console.log();
    navigate(`/portfolio/${id}`);
  };

  return (
    <>
      <section className="portfolio-section">
        <H2>Portfolio</H2>
        <div className="portfolio-wrapper">
          <ImgContainer handleClick={handleClick}></ImgContainer>
          <ImgContainer handleClick={handleClick}></ImgContainer>
          <ImgContainer handleClick={handleClick}></ImgContainer>
          <ImgContainer handleClick={handleClick}></ImgContainer>
        </div>
        <Button>Se alla projekt</Button>
        {/* <PortfolioCard></PortfolioCard> */}
      </section>
    </>
  );
};
