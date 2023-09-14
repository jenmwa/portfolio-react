import styled from "styled-components";
import { FontHeading, grey100, grey700 } from "./variables";

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

  /* button:hover {
    border-color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  } */
`;
