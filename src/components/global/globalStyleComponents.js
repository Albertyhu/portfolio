import styled, { keyframes } from "styled-components";

export const Text = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  width: 50%;
  margin: auto;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  transform: translateZ(300px) scale(0.75);
  @media screen and (max-width: 540px) {
    width: 75%;
  }
  @media screen and (max-width: 380px), screen and (max-height: 540px) {
    font-size: 20px;
    width: 60%;
  }
`;

export const HalfPageMarker = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
  border: none;
  border-top: 1px solid red;
  opacity: 1;
  z-index: 3;
  display: none;
`;
