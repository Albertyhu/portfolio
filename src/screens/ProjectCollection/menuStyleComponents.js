import styled, { keyframes } from "styled-components";

export const ToggleMenuButton = styled.div`
  border-radius: 10px 10px 0px 0px;
  transform: rotateZ(90deg);
  background-color: #2d2d2d;
  position: fixed;
  cursor: pointer;
  font-size: 30px;
  top: 120px;
  left: -70px;
  right: auto;
  color: #ffffff;
  z-index: 3;
  padding: 5px;
  display: none; 
  @media (min-width: 636px){
    display: block; 
  }
`;

export const BurgerIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-top: auto;
  margin-bottom: auto; 
  margin-left: 5px; 
  margin-right:auto; 
  position: static;
  cursor: pointer;
  display: block; 
  @media screen and (min-width: 636px){
  display: none;   
  }
`;
