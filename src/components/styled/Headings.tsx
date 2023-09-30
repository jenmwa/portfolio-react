import styled from "styled-components";
import { FontHeading, grey100, grey700 } from "./variables";

export const H1 = styled.h1`
  font-family: ${FontHeading};
  text-transform: uppercase;
  font-size: 4.5rem;
`;

export const H2 = styled.h2`
  margin-top: 0;
  font-family: ${FontHeading};
  text-transform: uppercase;
  font-size: 4rem;
`;

export const H1Light = styled(H1).attrs({
  className: "breakpoint_small",
})`
  color: ${grey100};
  text-shadow: ${grey700} 0 0 10px;
  font-size: 4.7rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    color: ${grey700};
    text-shadow: none;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 6.5rem;
    margin-top: 0;
  }
`;
