import { Button } from "./styled/Buttons";
import { ColorDiv } from "./styled/Divs";
import { H2 } from "./styled/Headings";
import { Section } from "./styled/Sections";

export const About = () => {
  return (
    <>
      <Section>
        <H2>About</H2>
        <Button>Button in About</Button>
        <ColorDiv></ColorDiv>
      </Section>
    </>
  );
};
