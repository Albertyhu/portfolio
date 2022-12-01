import React, { useState, useEffect, useCallback } from "react";
import TriangleAnimation from "./TriangleAnimation/triangleShape.js";
import { MainCont, TriangleWrapper, Video } from "./myStyle.js";
import RenderQuote from "./quote.js";
import "./myStyle.css";
import Dust from "./asset/Dust.mp4";

const RenderQuoteTriangle = (props) => {
  const {
    QuoteOne = '"To h*ll with circumstances',
    QuoteTwo = 'I create opportunities."',
    Author = "Bruce Lee",
  } = props;
  var ComponentElem = document.querySelector("#QuoteTriangle_MainCont");
  var TriangleWrapperElem = document.querySelector("#TriangleWrapper");
  //var MainContElem = document.querySelector(`#${MainContID}`)

  //This indicates when the triangle and quote should appear
  const [triggerUnblurr, setTriggerUnblurr] = useState(400);

  //controls the size of the triangle
  const [triangleSize, setTriSize] = useState("270");

  //When the whole component is in view, triggle the animation
  const [inView, setInView] = useState(false);

  //This block of code determines the size of the triange.
  const resizeEvent = (event) => {
    if (window.innerWidth <= 290) {
      console.log("triangle size: " + window.innerWidth);
      setTriSize(270);
    } else if (window.innerWidth > 290 && window.innerWidth <= 750) {
      setTriSize(300);
    } else if (window.innerWidth > 750) {
      setTriSize(500);
    }
  };

  const ScrollEvent = (event) => {
    ComponentElem = document.querySelector("#QuoteTriangle_MainCont");
    TriangleWrapperElem = document.querySelector("#TriangleWrapper");
    if (
      ComponentElem?.getBoundingClientRect().top <= triggerUnblurr &&
      TriangleWrapperElem?.getBoundingClientRect().bottom >
        TriangleWrapperElem?.offsetHeight / 2
    ) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    resizeEvent();
    // MainContElem = document.querySelector(`#${MainContID}`)
    window.addEventListener("scroll", ScrollEvent);
    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
      window?.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  return (
    <MainCont id="QuoteTriangle_MainCont">
      <Video src={Dust} loop={true} autoPlay muted />
      <TriangleWrapper id="TriangleWrapper">
        <RenderQuote
          QuoteOne={QuoteOne}
          QuoteTwo={QuoteTwo}
          Author={Author}
          inView={inView}
        />
        <TriangleAnimation size={triangleSize} delay={500} inView={inView} />
      </TriangleWrapper>
    </MainCont>
  );
};

export default RenderQuoteTriangle;
