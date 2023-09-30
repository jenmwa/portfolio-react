import styled from "styled-components";
import { grey100, grey700 } from "./variables";

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
