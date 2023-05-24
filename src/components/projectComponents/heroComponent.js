import React, {
  useState,
  useEffect,
} from "react";

import {
  NoAnimation,
  FadeInAnimation,
  TitleCont,
  Title,
} from "./myStyle.js";


const RenderHero = props => {
  const { 
      title, 
  } = props; 

  const [TitleAnimation, setTitleAnimation] = useState(null);

  useEffect(() => {
    if (TitleAnimation === NoAnimation || TitleAnimation === null) {
      setTitleAnimation(FadeInAnimation);
    }
  }, [TitleAnimation]);


  return (
    <TitleCont>
       <Title TitleAnimation={TitleAnimation}>{title}</Title>
    </TitleCont>
  );
};

  export default RenderHero; 