import React, {useEffect} from 'react';
import WaterWave from 'react-water-wave';
import OceanDepth from '../../assets/ocean_depth-resized.jpg';
import Water from '../../assets/water.jpg';
import styled, { keyframes } from 'styled-components'; 
import UnderWater from '../../assets/underwater_art.jpg'; 
import PaperArt from '../../assets/paper-art.jpg'; 
import PurpleCube from '../../assets/purple-cube.jpg'; 
import Space from '../../assets/space.jpg';
import MilkyWay from '../../assets/milky-way.jpg'
import './hero.css';
import RenderDownArrow from '../scrollButton/scrollDown.js'; 

const HeroSection = props => {
    const { SectionOneRef } = props;
    var SectionOneElem; 
    useEffect(() => {
        if (SectionOneRef.current) {
            SectionOneElem = document.querySelector('#SectionOne')
        }
    }, [SectionOneRef.current])

    const ScrollTo = () => {
        SectionOneElem = document.querySelector('#SectionOne')
        SectionOneElem.scrollIntoView(true);
    }

    return (
        <MainContent id = "HeroMainContent">
            <WaterWave
                interactive={true}
                resolution={400}
                dropRadius={30}
                perturbance={0.03}

               // imageUrl={UnderWater as string}
                //   imageUrl={PaperArt as string}
               // imageUrl={PurpleCube as string}
                imageUrl={Space as string}

                id="WaterWaveCont"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '800px',
                    width: '100%',
                    backgroundAttachment: 'fixed',
                }}
            >
                {({ pause, play }) => (
                    <Shell>
                        {/*<Ground src={GroundLayer} />*/}
                        <MainTitle>Hi, my name is Albert.</MainTitle>
                        <Subtitle>I am a Front End Developer.</Subtitle>
                    </Shell>
                    )}
            </WaterWave>
        </MainContent>
        )

}

export default HeroSection; 

const MainContent = styled.div`
    width: 100%; 
    height: auto; 
    font-family: 'Montserrat', sans-serif;
`
const TEXT_RISE = '20px'

const TitleAnimation = keyframes`
0%{
      opacity: 0; 
      transform: translateY(${TEXT_RISE}); 
}
100%{
        opacity: 1; 
        transform: translateY(0); 
}
`

const MainTitle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 50px; 
    user-select: none;
    color: #ffffff; 
    animation: ${TitleAnimation} 2s linear; 
animation-fill-mode: forwards;
    animation-delay: 2s; 
`

const Subtitle = styled.div`
    font-size: 40px; 
    user-select: none;
    color: #b0b0b0;
    animation: ${TitleAnimation} 2s linear; 
    animation-fill-mode: forwards;
    animation-delay: 3s; 
`

const Shell = styled.div`
    width: 80%;
    text-align: center; 
    padding-top: 15%; 
    margin: auto;
    height: fit-content;
& >*{
    opacity: 0.0;
}
`

const Ground = styled.img`
    position: absolute; 
    top: 0; 
    left: 0;
    z-index: 1;
`

