import { ButtonLight } from "./styled/Buttons";
import { ColorDiv, ContainerDiv, PContainer, WhiteDivBig } from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { SectionDark } from "./styled/Sections";
import "../style/_knowledge.scss";

export const Knowledge = () => {
  return (
    <>
      <SectionDark>
        <PContainer>
          <H2>Kunskaper</H2>
          <ul>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NextJs</li>
            <li>Vue</li>
            <li>Figma</li>
            <li>
              Adobe<br></br>(Photoshop, Illustrator, InDesign, AfterEffects)
            </li>
          </ul>
          <p>Vite, VS Code, Git, Axios, Nodejs, Parcel, Jest, Cypress</p>
        </PContainer>
        <div className="knowledge-cv-container">
          <ContainerDiv>
            <ColorDiv></ColorDiv>
            <WhiteDivBig></WhiteDivBig>
          </ContainerDiv>
          <ButtonLight>Ladda hem CV</ButtonLight>
        </div>
      </SectionDark>
    </>
  );
};
