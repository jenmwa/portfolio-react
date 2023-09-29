import { Button } from "./styled/Buttons";
import { Flex50percent } from "./styled/Divs";
import { H1 } from "./styled/Headings";
import { ImageContainerFull, ImageFull } from "./styled/Image";
import jenny from "/jenny-waller-cv-sv.jpg";

export const Hero = () => {
  return (
    <>
      <Flex50percent>
        <div className="hero-text">
          <H1>hi there</H1>
          <span>I'm Jenny</span>
          <span>Front End Developer in the makin'</span>
          <Button>My CTA Button in Hero</Button>
        </div>
        <ImageContainerFull>
          <ImageFull src={jenny} alt="en tjej som ler mot kameran"></ImageFull>
        </ImageContainerFull>
      </Flex50percent>
    </>
  );
};
