import styled from "styled-components";
import { FontHeading, grey100, grey700, primary3, primary1 } from "./variables";

export const SpanHeader = styled.span`
  color: ${grey100};
  display: block;
  text-shadow: ${grey700} 0 0 10px;

  @media (min-width: 768px) {
    color: ${grey700};
    text-shadow: none;
    font-size: 1.2rem;
  }
`;

export const SpanHeading2 = styled.span`
  color: ${grey100};

  text-shadow: ${grey700} 0 0 10px;
  font-family: ${FontHeading};
  text-transform: uppercase;

  @media (min-width: 768px) {
    color: ${grey700};
    text-shadow: none;
    font-size: 1.2rem;
  }
`;

export const SpanTextLight = styled.span`
  color: ${primary1};
  display: block;
  font-family: ${FontHeading};
  text-transform: uppercase;

  @media (min-width: 768px) {
    color: ${grey700};
    text-shadow: none;
    font-size: 1.2rem;
  }
`;

export const SpanTextDark = styled(SpanTextLight)`
  color: ${primary3};
`;

export const SpanIcon = styled.span`
  color: ${primary1};
  display: block;
  font-size: 2rem;

  @media (min-width: 768px) {
    color: ${grey700};
    text-shadow: none;
    font-size: 1.2rem;
  }
`;
