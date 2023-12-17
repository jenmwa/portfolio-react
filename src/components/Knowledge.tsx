import { ColorDiv, ContainerDiv, PContainer, WhiteDivBig } from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { SectionDark } from "./styled/Sections";
import "../style/_knowledge.scss";
import cvPdf from "/CV lia_2024-jenny-waller.pdf";
import { useState } from "react";

export const Knowledge = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleCV = () => {
    console.log("open in new window");
    window.open(cvPdf, "_blank");
  };

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
          <ContainerDiv
            style={{ marginTop: "0", cursor: "pointer" }}
            onClick={handleCV}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <ColorDiv></ColorDiv>
            <WhiteDivBig></WhiteDivBig>
          </ContainerDiv>
          {isHovering && (
            <div
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: "24px 0 24px 0",
                color: "darkslategrey",
                position: "absolute",
                paddingInline: "0.9em",
              }}
            >
              <p>Öppnas i nytt fönster</p>
            </div>
          )}
          <a
            href={cvPdf}
            download={"CV lia_2024-jenny-waller.pdf"}
            style={{ color: "whitesmoke" }}
          >
            Ladda hem CV
          </a>
        </div>
      </SectionDark>
    </>
  );
};
