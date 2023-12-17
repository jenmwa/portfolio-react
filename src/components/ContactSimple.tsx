import { Socials } from "./Socials";
import { H2 } from "./styled/Headings";

export const ContactSimple = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#2a2e45",
          padding: "2rem",
          color: "#F8F8F8",
          textAlign: "center",
        }}
      >
        <H2 style={{ color: "whitesmoke" }}>Kontakt</H2>
        <div>
          <p>Ska vi prata? Hör av dig!</p>
          <Socials iconColor="whitesmoke"></Socials>

          <a
            href="mailto:jenny.waller@medieinstitutet.se"
            target="_blank"
            style={{
              fontStyle: "bold",
              color: "whitesmoke",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            jenny.waller@medieinstitutet.se
          </a>
          <a
            href="tel:+46701507714"
            target="_blank"
            className="block"
            style={{
              fontStyle: "bold",
              color: "whitesmoke",
              display: "block",
            }}
          >
            0701507714
          </a>
          <br />
          <br />
          <p className="textColor">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "3rem" }}
            >
              location_on
            </span>
            <p>Karlstad</p>
          </p>
        </div>
      </div>
    </>
  );
};
