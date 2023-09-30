import { useParams } from "react-router-dom";
// import { PortfolioCard } from "./PortfolioCard";
import { Button } from "./styled/Buttons";
import { H2 } from "./styled/Headings";
import { ImgContainer } from "./ImgContainer";
import "../style/portfolio.scss";

export const Portfolio = () => {
  const { id } = useParams();
  const idToNumber: number = Number(id);
  //rendera lista med projekt och hitta id.
  console.log(idToNumber);
  return (
    <>
      <section className="portfolio-section">
        <H2>Portfolio</H2>
        <div className="portfolio-wrapper">
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
          <ImgContainer></ImgContainer>
        </div>
        <Button>Se alla projekt</Button>
        {/* <PortfolioCard></PortfolioCard> */}
      </section>
    </>
  );
};
