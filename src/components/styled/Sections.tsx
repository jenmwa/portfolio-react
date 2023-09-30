import styled from "styled-components";

export const Section = styled.section`
  min-height: 80dvh;
  background-color: whitesmoke;
  margin: 0;
  position: relative;
  padding: 2rem;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 4rem;
    /* grid-template-columns: 1fr 1fr; */
    /* gap: 50px; */
  }

  @media (min-width: 1024px) {
    padding-left: 5rem;
  }
`;
