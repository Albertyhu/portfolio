import React from "react";
import UpArrow from "../../assets/up-arrow-angle.png";
import styled from "styled-components";

const RenderUpArrow = (props) => {
  const { dispatch } = props;
  return (
    <Arrow
      src={UpArrow}
      onClick={() => {
        dispatch();
      }}
    />
  );
};

export default RenderUpArrow;

const Arrow = styled.img`
  width: 100px;
  height: 60px;
  cursor: pointer;
  margin: 0px auto;
`;
