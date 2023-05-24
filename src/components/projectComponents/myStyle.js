import styled, { keyframes } from "styled-components";

export const NoAnimation = keyframes``;

export const FadeInAnimation = keyframes`
0%{ 
    transform: translateY(100px); 
    opacity: 0.0; 
}
100%{
    transform: translateY(0px); 
    opacity: 1.0; 
}
`;

export const MainCont = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;

export const TitleCont = styled.div`
  width: 100%;
  background-color: #000000;
  background-attachment: fixed;
  position: relative;
  height: 90vh;
  background-attachment: fixed;
  @media screen and (max-width: 540px) {
    height: 20vh;
  }
`;

//export const Title = styled.div`
//  font-size: 100px;
//  color: #ffffff;
//  position: absolute;
//  top: 35%;
//  left: 0;
//  right: 0;
//  user-select: none;
//  //animation: ${FadeInAnimation} 2s linear;
//  animation: ${(props) => props.TitleAnimation || FadeInAnimation} 2s linear;
//  text-align: center;
//  @media screen and (max-width: 1000px) {
//    font-size: 50px;
//  }
//  @media screen and (max-width: 540px) {
//    font-size: 30px;
//  }
//  @media screen and (max-width: 380px) {
//    font-size: 20px;
//  }
//`;

export const Title = styled.div`
  font-size: 20px;
  color: #ffffff;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  user-select: none;
  width: 96.333%; 
  animation: ${(props) => props.TitleAnimation || FadeInAnimation} 2s linear;
  text-align: center;
  @media screen and (min-width: 380px) {
    font-size: 30px;
  }
    @media screen and (min-width: 540px) {
    font-size: 50px;
  }
    @media screen and (min-width: 1000px) {
    font-size: 100px;
  }
`;

export const Thumbnail = styled.img`
  width: 660px;
  height: 90%;
  max-height: 400px;
  margin: auto;
  display: block;
  object-fit:cover;
  object-position: center;
  @media screen and (max-width: 1300px) {
    width: 560px;
  }
  @media screen and (max-width: 1100px) {
    width: 400px;
    height: 40%;
  }
  @media screen and (max-width: 660px) {
    width: 300px;
    height: 30%;
  }
  @media screen and (max-width: 540px) {
    text-align: center;
    margin: 10px auto;
    animation: ${FadeInAnimation} 2s linear;
  }
  @media screen and (max-width: 660px) {
    width: 90%;
    height: 30%;
  }
`;

export const MainImage = styled.img`
  margin: auto;
  display: block;
  object-fit:cover;
  object-position: center;
 /* animation: ${FadeInAnimation} 2s linear;*/
`;


export const ContentDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin: 40px auto;
  @media screen and (max-width: 900px) {
    grid-template-columns: 60% 40%;
  }

  @media screen and (max-width: 540px) {
    display: block;
    margin: auto;
  }
`;

export const TextDiv = styled.div`
  display: block;
  animation: ${FadeInAnimation} 2s linear;
`;

export const AttributesHeader = styled.div`
  display: block;
  margin: 10px 10px;
`;

export const AttributesList = styled.ul``;

export const LinkButton = styled.a`
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: 636363;
  margin: 20px auto;
  border-radius: 15px;
  width: fit-content;
  height: fit-content;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  white-space: nowrap;
  text-decoration: none;
  &.livesite {
    background-color: #c2c2c2;
    color: #373737;
  }
  &.github {
    background-color: #373737;
    color: #c2c2c2;
  }
  &:hover {
    background-color: #e9e9e9;
  }
  &:active {
    background-color: #ffffff;
    transform: translateX(2px) translateY(2px);
  }
  @media screen and (min-width: 540px){
    font-size: 25px;
  }
`;

export const LinkCont = styled.div`
  display: grid;
  text-align: center;
  margin: 5px auto;
  @media screen and (min-width: 540px){
      margin: 20px auto;
  }
`;

export const DescriptionElem = styled.p`
  margin: 0px 10px;
`;
