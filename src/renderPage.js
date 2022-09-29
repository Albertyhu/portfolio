import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import RenderCube from './components/renderCube/cube.js';
import RenderZoneOne from './components/AnimationZone/zone1.js';
import RenderZoneTwo from './components/AnimationZone/zone2.js';
import RenderZoneThree from './components/AnimationZone/zone3.js';
import RenderZoneOneCamera from './components/camera/ZoneOneAnimation.js';
import RenderZoneTwoCamera from './components/camera/ZoneTwoAnimation.js';
import RenderZoneThreeCamera from './components/camera/ZoneThreeAnimation.js';
import RenderProjectPanel from './components/project_panel/projectIndex.js';
import HeroSection from './components/hero/heroSection';

const RenderScrollSnappingPage = props => {

    const { SectionHeight = "800px"} = props
    const [level, setLevel] = useState('level0');
    const [position, setPosition] = useState('absolute')
    const ContainerRef = useRef();
    var MainContElem;
    var MainContElemHeight;
    //var SectionHeight;
    const SectionZeroRef = useRef();
    const SectionOneRef = useRef();
    const SectionTwoRef = useRef();
    const SectionThreeRef = useRef();
    const SectionFourRef = useRef();

    var FixedMarkerElem;
    const [FixedMarkerHeight, setMarkerHeight] = useState(0);

    var SectionOneMarkerElem;
    const [MarkerOneHeight, setMarkerOneHeight] = useState(0);

    var rootMarginVal = '800px'

    const thresholdLevel = 0.5;

    var SectionZero;
    var SectionOne;
    var SectionTwo;
    var SectionThree;
    var SectionFour;

    const scrollEvent = event => {
        if (MainContElem.scrollTop < 1009) {
            setPosition('absolute');
        }
        else {
            setPosition('fixed');
        }
        if (MainContElem.scrollTop < MainContElemHeight / 5) {
            setLevel('level0');
        }
        if (SectionOne.getBoundingClientRect().top <= 0) {
            setLevel('level1')
        }
        if (SectionTwo.getBoundingClientRect().top <= 0) {
            setLevel('level2')
        }
        if (SectionThree.getBoundingClientRect().top <= 0) {
            setLevel('level3')
        }
        if (SectionFour.getBoundingClientRect().top <= 0) {
            setLevel('level4')
        }
    }

    useEffect(() => {
        if (ContainerRef.current) {
            MainContElem = document.querySelector('#container');
            MainContElem.addEventListener('scroll', scrollEvent)
            MainContElemHeight = MainContElem.clientHeight;
           //SectionHeight = MainContElemHeight / 5;
            SectionZero = document.querySelector('#SectionZero');
            SectionOne = document.querySelector('#SectionOne');
            SectionTwo = document.querySelector('#SectionTwo');
            SectionThree = document.querySelector('#SectionThree');
            SectionFour = document.querySelector('#SectionFour');
        }
    }, [ContainerRef.current])

    /*
    useEffect(() => {
        console.log("position: " + position)
    }, [position])
    */

    useEffect(() => {
        console.log("level: " + level)
    }, [level])

    useEffect(() => {
        console.log("MarkerOneHeight: " + MarkerOneHeight)
    }, [MarkerOneHeight])

    useEffect(() => {
        return () => { document.removeEventListener('scroll', scrollEvent) }
    }, [])

    return (
        <MainContainer id="container" ref={ContainerRef}>
            <FixedElement
                id="FixedElement"
                Position={position}
                ZIndex={level == 'level4' ? "20" : "-1"}
            >
                <RenderZoneOneCamera
                    level={level}
                />
                <RenderZoneTwoCamera
                    level={level}
                />
                <RenderZoneThreeCamera
                    level={level}
                />
                <RenderProjectPanel
                    inView={level === 'level4' ? true : false}
                    ParentRef={ContainerRef}
                    SectionHeight={SectionHeight}
                />
            </FixedElement> 
            <Section
                id="SectionZero"
                ref={SectionZeroRef}
                SectionHeight={SectionHeight}
            >
                {/*<Title>Section Zero</Title>*/}
                <HeroSection SectionOneRef={SectionOneRef} />
            </Section >
            <Section
                id="SectionOne"
                ref={SectionOneRef}
                SectionHeight={SectionHeight}
            >
                <Title>First Section</Title>
            </Section >
            <Section
                id="SectionTwo"
                ref={SectionTwoRef}
                SectionHeight={SectionHeight}
            >
                <Title>Second Section</Title>

            </Section >
            <Section
                id="SectionThree"
                ref={SectionThreeRef}
                SectionHeight={SectionHeight}
            >
                <Title>ThirdSection</Title>
            </Section >
            <Section
                id="SectionFour"
                ref={SectionFourRef}
                SectionHeight={SectionHeight}>
                <Title>Fourth Section</Title>
            </Section>
            <Footer />
        </MainContainer>
    )
}

export default RenderScrollSnappingPage;


const MainContainer = styled.div`
    //scroll-snap-type: y mandatory; 
    //scroll-snap-stop: always;
    overflow-y: scroll;
    overflow-x: hidden; 
    height: 100vh; 
    //height: 100%; 

    position: relative;
`
const Section = styled.div`
    scroll-snap-align: end; 
    //height: 866px;  
    height: ${props => props.SectionHeight || '800px'};
    //resize: none;
    text-align: center; 
    opacity: 1.0;
&#SectionOne{
    background-color: #EFF213; 
    opacity: 0.0;
}
&#SectionTwo{
    background-color: #1792D8; 
    opacity: 0.0;
}
&#SectionThree{
    background-color: #D81754; 
    opacity: 0.0;
}
&#SectionFour{
    background-color: #17D849; 
    opacity: 0.0;
    padding-bottom: 20px;

}
`

const Title = styled.div`
    margin: auto; 
`

const FixedElement = styled.div`
    position: ${props => props.Position || 'fixed'}; 
    opacity: 1.0; 
    margin: auto;
    height: fit-content;
    top: ${props => {
        if (props.Position === 'absolute') {
            return '1200px';
        }
        else {
            return '10%';
        }
    }};
    left:  ${props => {
        if (props.Position === 'absolute') {
            return '15px';
        }
        else {
            return '0px';
        }
    }};
    right: 0;
    z-index: ${props => props.ZIndex || "-1"};
`

const HalfPageMarker = styled.div`
    position: fixed; 
    width: 100%; 
    top: 50%; 
    border: none;
    border-top: 1px solid red; 
    opacity: 1.0 !important; 
    z-index:3;
    display: ${props => props.Display || 'none'};
`

const Footer = styled.div`
    width: 100%;
    height: 200px; 
`