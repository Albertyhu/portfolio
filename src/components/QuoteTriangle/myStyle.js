import styled from "styled-components";

export const MainCont = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  position: relative;
`;
export const TriangleWrapper = styled.div`
  position: absolute;
  top: 18%;
  left: 0;
  right: 0;
  width: 100%;
`;

export const QuoteWrapper = styled.div`
  color: #fff;
  font-family: "Bebas Neue";
  font-size: 26px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  width: 250px;
  margin: 0 auto;
  z-index: 2;
  position: absolute;
  left: 0;
  right: 0;
  top: 66px;
  overflow-x: hidden;
  @media screen and (min-width: 360px) {
    font-size: 30px;
    width: 350px;
  }
  @media screen and (min-width: 750px) {
    width: 600px;
    font-size: 50px;
    top: 100px;
  }
`;
export const Quote = styled.div`
  user-select: none;
  white-space: nowrap;
  color: transparent;
  text-shadow: 0 0 32px rgba(0, 0, 0, 0.5);

  &.left {
    text-align: left;
    transform: translateX(100px);
  }
  &.right {
    text-align: right;
    transform: translateX(-100px);
  }
  @media screen and (min-width: 750px) {
    &.left {
      transform: translateX(300px);
    }
    &.right {
      transform: translateX(-300px);
    }
  }
`;

export const AuthorText = styled.div`
  opacity: 0;
  font-size: 25px;
  color: #d5d5d5;
  text-align: right;
  transition: opacity 2s;
`;

export const Video = styled.video`
  width: 100%;
  height: inherit;
  z-index: 0;
  object-fit: cover;
`;
