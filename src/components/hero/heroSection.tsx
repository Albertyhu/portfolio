import React, { useEffect, useContext } from "react";
import { AppContext } from '../../context/contextItem.js'; 
import WaterWave from "react-water-wave";
import Space from "../../assets/space.jpg";
import "./hero.css";
import {
  MainContent,
  MainTitle,
  Subtitle,
  Shell,
} from "./myStyle.js";
import { GlobalRefs } from "../../utils/refs.js"

const HeroSection = (props) => {

    const {
        setLoading, 
    } = useContext(AppContext)

    const { HeroRef } = GlobalRefs(); 

    useEffect(() => {
        if (HeroRef.current) {
            setLoading(false)
        }
        else {
            setLoading(true)
        }
    }, [HeroRef.current])

  return (
      <MainContent
          id="HeroMainContent"
          ref={HeroRef}
      >
      <WaterWave
              interactive={true}
              resolution={400}
              dropRadius={30}
              perturbance={0.03}
              imageUrl={Space as string}
              id="WaterWaveCont"
              style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "800px",
                  width: "100%",
                  backgroundAttachment: "fixed",
              }}
              
      >
        {({ pause, play }) => (
          <Shell id="Hero_shell">
            <MainTitle>Hi, my name is Albert.</MainTitle>
            <Subtitle>I am a Front End Developer.</Subtitle>
          </Shell>
        )}
      </WaterWave>
    </MainContent>
  );
};

export default HeroSection;
