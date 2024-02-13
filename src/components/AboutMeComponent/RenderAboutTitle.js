import React, { useEffect, useRef } from "react";
import {
  MainCont,
  Title,
  Video,
  Letter,
  TitleWrapper,
  Space,
  Button,
  DevelopmentButtons,
} from "./style/myStyle.js";
import "./style/keyframes.css";
import "./style/myStyle.css";
import Smoke from "./asset/Sequence01.mp4";
import { AnimateAboutMeTitle, DeAnimateAboutMeTitle } from "./AboutMeFunctions.js";

const RenderAboutTitle = (props) => {
  const {
    observer
  } = props; 
  const AboutMeTitleRef = useRef(null); 

  useEffect(()=>{
    if(AboutMeTitleRef.current){
      observer.observe(AboutMeTitleRef.current)
    }
  },[AboutMeTitleRef.current])
  return (
    <MainCont 
      id="AboutMe_MainCont"
      ref = {AboutMeTitleRef}
      >
      <TitleWrapper id="AboutMe_TitleWrapper">
        <Video src={`${Smoke}#t=0`} id="AboutMe_Video" muted disableRemotePlayback playsinline />
        <Title id="AboutMe_Title" Delay={400}>
          <Letter className="Letter">A</Letter>
          <Letter className="Letter">B</Letter>
          <Letter className="Letter">O</Letter>
          <Letter className="Letter">U</Letter>
          <Letter className="Letter">T</Letter>
          <Space />
          <Letter className="Letter">M</Letter>
          <Letter className="Letter">E</Letter>
        </Title>
      </TitleWrapper>
    </MainCont>
  );
};

export default RenderAboutTitle;

//This is  to display buttons only for development purposes
//Display prop controls whether this component will display or not.
const RenderDevelopmentButtons = () => {
  return (
    <DevelopmentButtons Display="none">
      <Button onClick={AnimateAboutMeTitle} id="Aboutme_button">
        Reveal
      </Button>
      <Button onClick={DeAnimateAboutMeTitle} id="Aboutme_button">
        Hide
      </Button>
    </DevelopmentButtons>
  );
};
