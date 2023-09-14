import { useParams } from "react-router-dom";
import { PortfolioCard } from "./PortfolioCard";
import { Button } from "./styled/Buttons";
import { H2 } from "./styled/Headings";

export const Portfolio = () => {
  const { id } = useParams();
  const idToNumber: number = Number(id);
  //rendera lista med projekt och hitta id.
  console.log(idToNumber);
  return (
    <>
      <H2>Portfolio</H2>
      <Button>Button in Portfolio</Button>
      <br></br>
      <br></br>
      <br></br>

      <PortfolioCard></PortfolioCard>
    </>
  );
};
