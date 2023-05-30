import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import RenderAboutTitle from "../../components/AboutMeComponent/RenderAboutTitle.js";
import { MainCont, Section, TitleWrapper, ContentWrapper } from "./myStyle.js";
import RenderAboutText from "../../components/AboutMeComponent/AboutParagraph.js";
import RenderQuoteTriangle from "../../components/QuoteTriangle";
//import HeroSection from "../../components/hero/heroSection";
import RenderProjectPanel from "../../components/project_panel";
import RenderContactForm from "../../components/contactForm";
import RenderNavBar from "../../components/navBar/navBar.js";
import ProjectSection from './projectSection.js'; 
import {
    HeroFallback,
    SectionFallback,
} from '../../components/fallbackComponents.js'; 
import { AllIcons } from '../../utils/allIcons.js'
const TechnologyField = lazy(() => import('../../components/TechnologyField.js'));
const HeroSection = lazy(() => import("../../components/hero/heroSection"))

const App = () => {
  const SectionOneRef = useRef();
  const [SectionTwoHeight, setSectionTwoHeight] = useState(720);

  const resizeEvent = (event) => {
    var SectionTwo = document.querySelector("#ContentWrapper");
    setSectionTwoHeight(SectionTwo.offsetHeight + 270);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    resizeEvent();
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  return (
        <MainCont id="MainCont">
            <RenderNavBar isHomePage={true} />
            <Section id="Section0">
                <Suspense fallback={<HeroFallback />}>
                    <HeroSection SectionOneRef={SectionOneRef} />
                </Suspense>
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
                <ProjectSection />
          </Section>
          <Section>
              <Suspense fallback={<SectionFallback />}>
                  <TechnologyField
                      title="Technologies worked with"
                      titleStyle = "text-white text-2xl"
                      iconTitleColor = "text-white"
                      icons={AllIcons}
                      customGrid="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-5 mx-auto w-5/12 lg:w-8/12 gap-[10px] sm:gap-[20px]"
                  />
              </Suspense>
          </Section>
            <Section id="Section4">
                <RenderContactForm isHomePage={false} />
            </Section>
        </MainCont>
  );
};

export default App;
