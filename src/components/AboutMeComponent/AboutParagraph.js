import React, {useEffect, useRef } from "react";
import { Paragraph, ParaWrapper } from "./style/myStyle.js";
import "./style/keyframes.css";

const App = props => {
  const {observer} = props; 
  const paraOne = useRef(null);
  const paraTwo = useRef(null);
  const paraThree = useRef(null); 
  useEffect(() => {
    if(paraOne.current){
      observer.observe(paraOne.current)
    }
  }, [paraOne.curent]);
  useEffect(() => {
    if(paraTwo.current){
      observer.observe(paraTwo.current)
    }
  }, [paraTwo.current]);

  useEffect(() => {
    if(paraThree.current){
      observer.observe(paraThree.current)
    }
  }, [paraThree.current]);

  return (
    <ParaWrapper id="About_ParaWrapper">
      <Paragraph className="About_paragraph" ref = {paraOne}>
        After graduating from UCLA, I spent a lot of time exploring various
        fields of work to find my calling. I decided to follow my natural
        fondness for problem solving and my curiosity about how far I can push
        the boundaries of technology. This had led me to the journey of building
        web applications as a front end developer, which allows me to synergize
        my technical acumen and my creativity together to build remarkable
        things. And most importantly, it allows me to scale and maximize the
        benefits I can provide to a community.
      </Paragraph>
      <Paragraph className="About_paragraph" ref = {paraTwo}>
        I believe that one must constantly strive to live outside their comfort
        zone and improve on his craft. A person can only grow and become the
        best version of himself by living in the edge.
      </Paragraph>
      <Paragraph className="About_paragraph" ref = {paraThree}>
        The journey to realize one's true potential is like climbing a muddy
        hill. If he stays still, he slides back and loses the progress he has
        made. That is why he must constantly put in the work to climb to the
        peak. This is why I am on the path of constant improvement.
      </Paragraph>
    </ParaWrapper>
  );
};
export default App;
