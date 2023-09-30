import styled from "styled-components";
import {
  FontHeading,
  accent2,
  grey100,
  grey700,
  grey800,
  primary2,
} from "./variables";

export const Button = styled.button`
  border-radius: 24px 0 24px 0;
  border: 1px solid transparent;
  padding: 0.9em 1.6em;
  font-size: 1rem;
  font-weight: 500;
  font-family: ${FontHeading};
  text-transform: uppercase;
  background-color: ${grey700};
  color: ${grey100};
  cursor: pointer;
  transition: border-color 0.25s;
  display: block;

  &:hover {
    border-color: ${primary2};
    box-shadow: ${accent2} 1px 1px 2px;
    background-color: ${grey800};
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const HeroButton = styled(Button)`
  border: 1px solid ${grey100};
  box-shadow: ${grey100} 1px 1px 2px;
  margin-top: 2rem;

  &:hover {
    border-color: ${primary2};
    box-shadow: ${accent2} 1px 1px 2px;
    font-weight: 800;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    max-width: fit-content;
  }
`;
