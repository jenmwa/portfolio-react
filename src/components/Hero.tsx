import { useNavigate } from "react-router-dom";
import { HeroButton } from "./styled/Buttons";
import { Flex50percent, TextContainer } from "./styled/Divs";
import { H1Light } from "./styled/Headings";
import { ImageContainerFull, ImageFull, ImageOverlay } from "./styled/Image";
import { SpanHeader, SpanHeading2, SpanIcon, SpanText } from "./styled/Texts";
import jenny from "/jenny-waller-cv-sv.jpg";

export const Hero = () => {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <>
      <Flex50percent>
        <TextContainer>
          <H1Light>Hej Hej hallååå!</H1Light>
          <SpanHeader>
            Kul att just DU hittat hit!
            <span className="material-symbols-outlined">waving_hand</span>
          </SpanHeader>
          <SpanHeader>
            <SpanHeading2>Jenny</SpanHeading2> heter jag,
          </SpanHeader>
          <SpanHeader>Front-end-Developer in the makin'</SpanHeader>
          <SpanIcon
            className="material-symbols-outlined"
            style={{ display: "inline" }}
          >
            home_pin
          </SpanIcon>
          <SpanText style={{ display: "inline" }}>Karlstad</SpanText>
          <HeroButton onClick={goToAbout}>
            <span className="material-symbols-outlined">mail</span> Kontakta mig
          </HeroButton>
        </TextContainer>
        <ImageContainerFull>
          <ImageFull src={jenny} alt="en tjej som ler mot kameran"></ImageFull>
          <ImageOverlay></ImageOverlay>
        </ImageContainerFull>
      </Flex50percent>
    </>
  );
};
