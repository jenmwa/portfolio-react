import { HeroButton } from "./styled/Buttons";
import { Flex50percent, TextContainer } from "./styled/Divs";
import { H1Light } from "./styled/Headings";
import { ImageContainerFull, ImageFull, ImageOverlay } from "./styled/Image";
import { SpanHeader } from "./styled/Texts";
import jenny from "/jenny-waller-cv-sv.jpg";

export const Hero = () => {
  return (
    <>
      <Flex50percent>
        <TextContainer>
          <H1Light>Hej Hej hallååå!</H1Light>
          <SpanHeader>Kul att just DU hittat hit!</SpanHeader>
          <SpanHeader>Jenny heter jag,</SpanHeader>
          <SpanHeader>och detta är min nya portfolio kodad i React</SpanHeader>
          <HeroButton>My CTA Button in Hero</HeroButton>
        </TextContainer>
        <ImageContainerFull>
          <ImageFull src={jenny} alt="en tjej som ler mot kameran"></ImageFull>
          <ImageOverlay></ImageOverlay>
        </ImageContainerFull>
      </Flex50percent>
    </>
  );
};
