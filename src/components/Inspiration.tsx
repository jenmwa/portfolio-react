import {
  ColorDiv,
  ContainerDiv,
  PContainer,
  PlacementDivInspiration,
} from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { Section } from "./styled/Sections";
import "../style/_inspiration.scss";

export const Inspiration = () => {
  return (
    <>
      <Section className="inspiration">
        <PContainer>
          <H2>Om</H2>
          <p>
            Jag ville använda React då det har varit den största delen av våra
            kursen 2023, men att sätta det i kontext med något eget. Använt Vite
            som bundler, React med Typescript som ramverk, använt EsLint samt
            prettier som linting & formatteringspaket.<br></br>
            Och även använt en del styled components och kompletterat med Sass.
            <br></br>
            Och när jag inte pluggar så går jag gärna på konserter, och när ny
            portfolio skulle skapas så vart det dessa som inspirerade till färg
            & form.
            <br></br>
            Ett pågående projekt för att jag ska fortsätta lära!
          </p>
        </PContainer>
        <ContainerDiv>
          <ColorDiv></ColorDiv>
          <PlacementDivInspiration></PlacementDivInspiration>
        </ContainerDiv>
      </Section>
    </>
  );
};
