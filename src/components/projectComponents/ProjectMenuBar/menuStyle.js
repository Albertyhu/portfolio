import styled, { keyframes } from "styled-components";

export const ToggleMenuButton = styled.div`
  border-radius: 10px 10px 0px 0px;
  transform: rotateZ(90deg);
  background-color: #2d2d2d;
  position: fixed;
  cursor: pointer;
  font-size: 30px;
  top: 5%;
  left: -20px;
  right: auto;
  color: #ffffff;
  z-index: 3;
  padding: 5px;
`;

export const Menu = styled.div`
  position: fixed;
  left: 0;
  right: auto;
  width: ${(props) => props.Width || "300px"};
  height: 100%;
  background-color: #2d2d2d;
  color: #ffffff;
  transform: ${(props) => props.Status};
  transition: transform 1s;
  z-index: 99;
  overflow-y: auto;
`;

export const MenuHeader = styled.h2`
  color: #ffffff;
  text-align: center;
  font-weight: bold;
`;

export const MenuItemWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const MenuItem = styled.div`
  width: 100%;
  margin: 15px auto;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #404040;
    transform: translateX(5px) translateY(5px);
  }
  &:active {
    background-color: #5e5e5e;
  }
`;

export const BurgerIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: auto;
  position: fixed;
  top: 1%;
  left: 5px;
  right: auto;
  cursor: pointer;
  z-index: 10;
`;
