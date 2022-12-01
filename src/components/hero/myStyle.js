import styled, { keyframes } from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  height: auto;
  font-family: "Montserrat", sans-serif;
`;
export const TEXT_RISE = "20px";

export const TitleAnimation = keyframes`
0%{
      opacity: 0; 
      transform: translateY(${TEXT_RISE}); 
}
100%{
        opacity: 1; 
        transform: translateY(0); 
}
`;

export const MainTitle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 26px;
  user-select: none;
  color: #ffffff;
  animation: ${TitleAnimation} 2s linear;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  @media screen and (min-width: 540px) {
    font-size: 35px;
  }
  @media screen and (min-width: 900px) {
    font-size: 54px;
  }
`;

export const Subtitle = styled.div`
  font-size: 26px;
  user-select: none;
  color: #b0b0b0;
  animation: ${TitleAnimation} 2s linear;
  animation-fill-mode: forwards;
  animation-delay: 3s;
  @media screen and (min-width: 540px) {
    font-size: 30px;
  }
  @media screen and (min-width: 900px) {
    font-size: 45px;
  }
`;

export const Shell = styled.div`
  width: 80%;
  text-align: center;
  padding-top: 46%;
  margin: auto;
  height: fit-content;
  & > * {
    opacity: 0;
  }
  @media screen and (min-width: 540px) {
    padding-top: 44%;
  }
  @media screen and (min-width: 900px) {
    padding-top: 25%;
  }
  @media screen and (min-width: 1270px) {
    padding-top: 15%;
  }
`;

export const Ground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
