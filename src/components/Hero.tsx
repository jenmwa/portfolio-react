import { HeroButton } from "./styled/Buttons";
import { Flex50percent, TextContainer } from "./styled/Divs";
import { H1Light } from "./styled/Headings";
import { ImageContainerFull, ImageFull, ImageOverlay } from "./styled/Image";
import {
  SpanHeader,
  SpanHeading2,
  SpanIcon,
  SpanTextLight,
} from "./styled/Texts";
import jenny from "/jenny-waller-cv-sv.jpg";

export const Hero = () => {
  const emailJenny = () => {
    (window.location.href = "mailto:hej@jenwaller.se"), "_blank";
  };

  return (
    <>
      <Flex50percent>
        <TextContainer style={{ maxWidth: "100%" }}>
          <H1Light>Hej Hej hallååå!</H1Light>
          <SpanHeader
            style={{
              display: "flex",
              alignItems: "end",
            }}
          >
            Kul att just DU hittat hit!
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "4rem" }}
            >
              waving_hand
            </span>
          </SpanHeader>
          <SpanHeader>
            <SpanHeading2>Jenny</SpanHeading2> heter jag,
          </SpanHeader>
          <SpanHeader>
            Blivande <SpanHeading2>Front-End Utvecklare </SpanHeading2>som söker
            <SpanHeading2> LIA</SpanHeading2>-plats Februari 2024
          </SpanHeader>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SpanIcon
              className="material-symbols-outlined"
              style={{ display: "inline", fontSize: "2rem" }}
            >
              home_pin
            </SpanIcon>

            <SpanTextLight style={{ display: "inline" }}>
              Karlstad
            </SpanTextLight>
          </div>
          <HeroButton
            onClick={emailJenny}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="material-symbols-outlined"
              style={{ marginRight: "0.5rem" }}
            >
              mail
            </span>{" "}
            Kontakta mig
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
