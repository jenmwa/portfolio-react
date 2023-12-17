import { SpanTextDark2, SpanTextDark } from "./styled/Texts";
import {
  PContainer,
  ContainerDiv,
  ColorDiv,
  PlacementDivJenny,
  WhiteDivBigAbout,
} from "./styled/Divs";
import { H2, H3 } from "./styled/Headings";
import { Section, SectionDark, SectionImgTextReverse } from "./styled/Sections";
import { Button } from "./styled/Buttons";
import { Socials } from "./Socials";

export const AboutJenny = () => {
  const emailJenny = () => {
    (window.location.href = "mailto:jenny.waller@medieinstitutet.se"), "_blank";
  };

  return (
    <>
      <Section className="aboutJenny">
        <PContainer>
          <H2>Vem?</H2>
          {/* <p>
            Om jag skulle sammanfatta mig själv i 3 ord?<br></br>
            Värmlänning, mediavetare och lakritsälskare!
          </p> */}
          <p>
            Kommer ursprungligen från Hammarö, och efter några år med plugg
            utomsocknes fann jag mig tillbaka i Värmland och har stannat i
            Karlstad sen dess.<br></br>
            Gillar kod, färg och kommunikation, och hittade till front-end under
            pandemin... Sagt och gjort, ingenting är omöjligt och nu är jag
            snart färdig frontendare efter Medieinstitutets YH-utbildning!
          </p>
          <p>
            När jag inte sitter med datorn så lagar jag gärna mat, ute i skog
            och mark, lyssnar på musik och åker gärna Sverige runt för konserter
            så fort jag får möjlighet!
          </p>
          <SpanTextDark>Låt oss connecta och prata mer!</SpanTextDark>

          <Socials iconColor="#2a2e45"></Socials>
          <Button style={{ marginTop: "2rem" }} onClick={emailJenny}>
            Kontakta mig
          </Button>
        </PContainer>
        <ContainerDiv>
          <ColorDiv></ColorDiv>
          <PlacementDivJenny></PlacementDivJenny>
        </ContainerDiv>
      </Section>
      <SectionDark className="aboutjennyrandom">
        <PContainer>
          <H2>Random</H2>
          <ul>
            <li>Jag gillar kaffe. Massa.</li>
            <li>
              Jag älskar att vakna innan alla andra och bara mysa runt innan
              världen har vaknat.
            </li>
            <li>
              Jag drömmer om att ha en egen, egenbyggd van att roadtrippa runt
              i.
            </li>
            <li>
              Jag tackar definitivt inte nej till lakrits. varesig söt eller
              salt.
            </li>
            <li>Kvar på bucket-list att se live: Queen med Adam Lambert!</li>
            <li>
              Om jag sett ett band i en stad för att nästa dag åka till nästa
              för att se samma band?<br></br> Ja. och inte bara en gång...
            </li>
            <li> Jag tycker det på riktigt är skittråkigt att diska.</li>
          </ul>
        </PContainer>
        <div className="knowledge-cv-container" style={{ marginTop: "0" }}>
          <ContainerDiv>
            <ColorDiv></ColorDiv>
            <WhiteDivBigAbout></WhiteDivBigAbout>
          </ContainerDiv>
          {/* <ButtonLight>Bildspel allt som är gött</ButtonLight> */}
        </div>
      </SectionDark>

      <SectionImgTextReverse className="random">
        <PContainer>
          <H2>5 snabba:</H2>

          <p>
            <SpanTextDark2>React</SpanTextDark2> vs{" "}
            <SpanTextDark2>Vue</SpanTextDark2>
          </p>
          <p>
            Solsemester eller <SpanTextDark2>Stadssemester</SpanTextDark2>
          </p>
          <p>
            <SpanTextDark2>Morgon</SpanTextDark2> eller Kväll
          </p>
          <p>
            Bootstrap eller <SpanTextDark2>Tailwind</SpanTextDark2>
          </p>
          <p>
            <SpanTextDark2>Kaffe</SpanTextDark2> eller te
          </p>
        </PContainer>

        <PContainer>
          <H3 style={{ marginTop: "3.2rem" }}>Kontakt</H3>
          <p>
            Som så många andra hänger jag lite varstans online, här hittar ni
            mig :)
          </p>
          <SpanTextDark>Låt oss connecta och prata mer!</SpanTextDark>

          <Socials iconColor="#2a2e45"></Socials>
          <Button style={{ marginTop: "2rem" }} onClick={emailJenny}>
            Kontakta mig
          </Button>
        </PContainer>
      </SectionImgTextReverse>
    </>
  );
};
