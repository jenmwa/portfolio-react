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

  margin-top: 4rem;

  @media (min-width: 768px) {
    width: 325px;
    height: 325px;
  }
`;

export const PlacementDiv = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 125px 0 125px 0;
  background-image: url("/placeholder.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: -2rem;
  left: 2rem;

  @media (min-width: 768px) {
    width: 325px;
    height: 325px;
    top: 2rem;
    left: 2rem;
  }
`;

export const Flex50percent = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* gap: 50px; */
  }
`;

export const ContainerDiv = styled.div`
  position: relative;

  @media (min-width: 768px) {
    margin: 8rem auto 0 auto;
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
    /* width: 400px; */
  }

  @media (min-width: 1024px) {
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-left: 5rem;
    width: 400px;
    /* left: 5rem; */
  }
`;

export const PContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    p {
      width: 300px;
    }
  }

  @media (min-width: 850px) {
    p {
      width: 350px;
    }
  }

  @media (min-width: 1024px) {
    width: 50%;
    /* margin-right: 5rem; */

    p {
      width: 400px;
    }
  }

  @media (min-width: 1200px) {
    p {
      width: 450px;
    }
  }
`;
