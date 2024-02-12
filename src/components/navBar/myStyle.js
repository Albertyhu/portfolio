import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: fit-content;
  background-color: ${(props) => props.backgroundC || "none"};
  display: block;
  opacity: 1;
  z-index: 20;
  transition: background-color 1s;
  padding: 10px 0px;
  text-align: center;
  justify-content: center;
  @media screen and (min-width: 700px) {
    justify-content: flex-end;
    text-align: right;
  }
`;

export const ItemWrapper = styled.div`
  width: fit-content;
  display: block;
  margin: 0px 0px 0px auto;
  text-align: center;
  @media screen and (min-width: 700px) {
    text-align: right;
  }
`;

export const Item = styled.div`
  display: inline-block;
  color: #ffffff;
  cursor: pointer;
  margin: auto 20px;
  z-index: 21;
  transition: color 1s;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const BurgerIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

export const MenuDiv = styled.div`
  position: fixed;
  top: 0px;
  left: auto;
  right: 0px;
  width: ${(props) => props.Width || "400px"};
  height: 100%;
  background-color: #494949;
  z-index: 99;
  text-align: center;
  transform: ${(props) => props.Translate};
  transition: transform 1s;
`;

export const MenuItem = styled.div`
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  margin: 30px auto;
  width: 100%;
  cursor: pointer;
  &:active {
    background-color: #818181;
    color: #090909;
  }
`;
