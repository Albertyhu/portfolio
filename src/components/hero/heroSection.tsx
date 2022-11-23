import React, {useEffect} from 'react';
import WaterWave from 'react-water-wave';
import Space from '../../assets/space.jpg';
import './hero.css';
import RenderDownArrow from '../scrollButton/scrollDown.js'; 
import { AppContext } from '../contextItem.js';
import {
    MainContent,
    TEXT_RISE,
    MainTitle,
    Subtitle,
    Shell,
    Ground, 

} from './myStyle.js'; 
 
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
                    <Shell id ="Hero_shell">
                        <MainTitle>Hi, my name is Albert.</MainTitle>
                        <Subtitle>I am a Front End Developer.</Subtitle>
                    </Shell>
                    )}
            </WaterWave>
        </MainContent>
        )

}

export default HeroSection; 
