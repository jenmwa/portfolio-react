import styled from "styled-components";

export const ColorDiv = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 125px 0 125px 0;
  background: rgb(244, 198, 234);
  background: linear-gradient(
    137deg,
    rgba(244, 198, 234, 1) 0%,
    rgba(143, 132, 238, 1) 34%,
    rgba(110, 131, 232, 1) 48%,
    rgba(6, 177, 171, 1) 100%
  );
`;

export const Flex50percent = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  z-index: 10;
  top: 70%;
  left: 40%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    position: relative;
    top: 2rem;
    left: 2rem;
    transform: translate(0, 0);
  }
`;
