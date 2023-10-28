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
import { SpanText } from "./styled/Texts";

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
      <Section>
        <PContainer>
          <H2>Om Jenny</H2>
          <p>
            I'm Jenny, Nice to meet you! I’m a Front-End Developer Student at
            Medieinstitutet in Stockholm, Sweden and I really enjoy playing
            around with colors, fonts, images, taking photos, being creative,
            and make websites come to life with both design and functionality.
            Right now I’m looking for LIA for the fall 2024! I’m looking for a
            company where I will be a part of a team and where I could continue
            grow in my role as a Front-End Developer.
          </p>
          <SpanText>WANT TO TALK? LET'S CONNECT!</SpanText>
          linkedIn symbol logoGithub logo logoemail symbol logo
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
