import { ButtonLight } from "./styled/Buttons";
import { ColorDiv, ContainerDiv, PContainer, WhiteDivBig } from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { SectionDark } from "./styled/Sections";
import "../style/_knowledge.scss";

export const Knowledge = () => {
  return (
    <>
      <SectionDark className="knowledge">
        <PContainer>
          <H2 style={{ marginBottom: "0rem" }}>Kunskaper</H2>
          <div className="text-container">
            <span className="text-html">HTML</span>
            <span className="text-react">React</span>
            <span className="text-js">JavaScript</span>
            <span className="text-css">CSS</span>
            <span className="text-ts">TypeScript</span>
            <span className="text-vue">Vue</span>
            <span className="text-scss">SCSS</span>
            <span className="text-express">Express</span>
            <span className="text-git">Git</span>
            <span className="text-vite">Vite</span>
            <span className="text-axios">Axios</span>

            <span className="text-more">
              and: Figma, Adobe Suite, Axios, Jest, Cypress, VS Code, Node.js,
              MongoDB, Postman
            </span>
          </div>
          {/* <H2>Kunskaper</H2>
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
          <p>Vite, VS Code, Git, Axios, Nodejs, Parcel, Jest, Cypress</p> */}
        </PContainer>
        <div className="knowledge-cv-container">
          <ContainerDiv style={{ marginTop: "0" }}>
            <ColorDiv></ColorDiv>
            <WhiteDivBig></WhiteDivBig>
          </ContainerDiv>
          <ButtonLight>Ladda hem CV</ButtonLight>
        </div>
      </SectionDark>
    </>
  );
};
