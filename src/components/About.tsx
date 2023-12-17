import { useNavigate } from "react-router-dom";
import { Button } from "./styled/Buttons";
import {
  ColorDiv,
  ContainerDiv,
  PContainer,
  PlacementDiv,
} from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { Section } from "./styled/Sections";
import { SpanTextDark } from "./styled/Texts";
import { Socials } from "./Socials";

export const About = () => {
  const navigate = useNavigate();
  // const emailJenny = () => {
  //   (window.location.href = "mailto:hej@jenwaller.se"), "_blank";
  // };
  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <Section className="about">
        <PContainer>
          <H2>Om Jenny</H2>
          <p>
            Jenny, blivande Front-End Utvecklare som studerar via
            MedieInstitutet i Stockholm. Klar med studierna juni 2024 men innan
            dess ska jag ut på LIA!
          </p>
          <p>
            {" "}
            Jag gillar att få webbapplikationer att komma till liv med både
            design samt funktionalitet och med fokus på tillgänglighet. Jag
            letar efter en företag där jag kommer att vara en del av ett team
            och där jag skulle kunna fortsätta växa i min roll som Front-End
            Utvecklare.
          </p>
          <SpanTextDark>Låt oss connecta och prata mer!</SpanTextDark>

          <Socials iconColor="#2a2e45"></Socials>
          <Button style={{ marginTop: "2rem" }} onClick={goToAbout}>
            Mer om jenny
          </Button>
        </PContainer>
        <ContainerDiv>
          <ColorDiv></ColorDiv>
          <PlacementDiv></PlacementDiv>
        </ContainerDiv>
      </Section>
    </>
  );
};
