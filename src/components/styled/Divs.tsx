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
  /* top: 80%;
  left: 40%; */
  top: 65%;
  left: 200px;
  transform: translate(-50%, -50%);
  width: 340px;

  @media (min-width: 768px) {
    position: relative;
    top: 10rem;
    left: 2rem;
    transform: translate(0, 0);
    width: 400px;
  }

  @media (min-width: 1024px) {
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 6rem;
    /* left: 5rem; */
  }
`;
