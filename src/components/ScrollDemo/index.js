import React, { useState, useEffect, useRef } from 'react';
import RenderAboutTitle from '../AboutMeComponent/RenderAboutTitle.js';
import {
    MainCont,
    Section,
    TitleWrapper, 
} from './myStyle.js'; 
import RenderAboutText from '../AboutMeComponent/AboutParagraph.js'; 
import RenderQuoteTriangle from '../QuoteTriangle'; 
import HeroSection from '../hero/heroSection';
import RenderProjectPanel from '../project_panel_Ver2'; 
import RenderContactForm from '../contactForm/contactForm.js'; 

const App = () => {
    const SectionOneRef = useRef()
    const [SectionTwoHeight, setSectionTwoHeight] = useState(720)


    const resizeEvent = event => {
        var SectionTwo = document.querySelector("#ContextWrapper")
        var TitleWrapperElem = document.querySelector("#AboutMe_TitleWrapper"); 
        var ParaWrapperElem = document.querySelector("#About_ParaWrapper"); 
        setSectionTwoHeight(SectionTwo.offsetHeight + 250)
    }

    useEffect(() => {
        resizeEvent();
        window.addEventListener("resize", resizeEvent)
        return () => { window.removeEventListener("resize", resizeEvent)}
    }, [])

    return (
        <MainCont id="MainCont">
            <Section id="Section0">
                <HeroSection SectionOneRef={SectionOneRef} />
            </Section>
            <Section id="Section1" ref={SectionOneRef}>
                <RenderQuoteTriangle />
            </Section>
            <Section id="Section2" SectionTwoHeight={SectionTwoHeight}>
                <div id="ContextWrapper">
                    <TitleWrapper><RenderAboutTitle /></TitleWrapper>
                    <RenderAboutText />
                </div>
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