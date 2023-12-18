import styled from "styled-components";

export const ImageContainerFull = styled.div`
  margin-top: 0.9rem;
  /* margin-top: -5.9rem; */
  position: relative;
  height: 90vh;
  /* width: 100%; */
  /* display: inline-block; */

  @media (min-width: 1024px) {
    margin-top: -5.9rem;
    height: 100vh;
  }
`;

export const ImageFull = styled.img`
  width: 100%;
  height: 90vh;
  display: block;
  object-fit: cover;
  object-position: top left;

  @media (min-width: 768px) {
    object-position: top center;
    border-radius: 0 0 0 96px;
  }

  @media (min-width: 1024px) {
    margin-top: 5.9rem;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

  @media (min-width: 768px) {
    display: none;
  }
`;
