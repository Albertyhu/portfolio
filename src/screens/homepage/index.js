import React, { useState, useEffect, useRef } from 'react';
import RenderAboutTitle from '../../components/AboutMeComponent/RenderAboutTitle.js';
import {
    MainCont,
    Section,
    TitleWrapper, 
    ContentWrapper,
} from './myStyle.js'; 
import RenderAboutText from '../../components/AboutMeComponent/AboutParagraph.js'; 
import RenderQuoteTriangle from '../../components/QuoteTriangle'; 
import HeroSection from '../../components/hero/heroSection';
import RenderProjectPanel from '../../components/project_panel_Ver2'; 
import RenderContactForm from '../../components/contactForm/contactForm.js'; 
import RenderNavBar from '../../components/navBar2/navBar.js'; 

const App = () => {
    const SectionOneRef = useRef()
    const [SectionTwoHeight, setSectionTwoHeight] = useState(720)

    const resizeEvent = event => {
        var SectionTwo = document.querySelector("#ContentWrapper")
        var TitleWrapperElem = document.querySelector("#AboutMe_TitleWrapper"); 
        var ParaWrapperElem = document.querySelector("#About_ParaWrapper"); 
        setSectionTwoHeight(SectionTwo.offsetHeight + 270)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        resizeEvent();
        window.addEventListener("resize", resizeEvent)
        return () => { window.removeEventListener("resize", resizeEvent)}
    }, [])

    return (
        <MainCont id="MainCont">
            <RenderNavBar isHomePage={true} />
            <Section id="Section0">
                <HeroSection SectionOneRef={SectionOneRef} />
            </Section>
            <Section id="Section1" ref={SectionOneRef}>
                <RenderQuoteTriangle />
            </Section>
            <Section id="Section2" SectionTwoHeight={SectionTwoHeight}>
                <ContentWrapper id="ContentWrapper">
                    <RenderAboutTitle />
                    <RenderAboutText />
                </ContentWrapper>
            </Section>
            <Section id="Section3">
                <RenderProjectPanel />
            </Section>
            <Section id="Section4">
                <RenderContactForm isHomePage={false} />
            </Section>
        </MainCont>
        )
}

export default App; 