import { ContactForm } from "./ContactForm";
import { H2 } from "./styled/Headings";

export const Contact = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#2a2e45",
          padding: "2rem",
          color: "#F8F8F8",
        }}
      >
        <H2 style={{ color: "whitesmoke" }}>Contact</H2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <span>telefon: xxxx</span>
        <br></br>
        <span>mail: xxx</span>
        <ContactForm></ContactForm>
      </div>
    </>
  );
};
