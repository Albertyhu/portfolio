import React, { useEffect, useRef, useState } from "react";
import { MainCont } from "./style/myStyle.js";
import RenderCube from "./RenderCube.js";

const App = () => {
  return (
    <MainCont>
      <RenderCube />
    </MainCont>
  );
};

export default App;
