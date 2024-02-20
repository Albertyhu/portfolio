import React, { useState, useEffect, useCallback, useRef } from "react";
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

    const observerRef = new IntersectionObserver(useCallback((entry) => {
        if (entry[0].isIntersecting) {
            setInView(true)
        }
        else {
            setInView(false)
        }
    }, []), {threshold: 0.5})
  const triangleRef = useRef(null)
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

 
  useEffect(() => {
    resizeEvent();
      if (triangleRef.current) {
          observerRef.observe(triangleRef.current)
      }
    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, [triangleRef.current]);

  return (
      <MainCont
          id="QuoteTriangle_MainCont"
          ref={triangleRef}
      >
      <Video src={Dust} loop={true} autoPlay muted disableRemotePlayback playsinline />
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
