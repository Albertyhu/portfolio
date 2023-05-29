import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { Testimonials } from "./testimonialData.js";
import ContactForm from "../../components/contactForm";
import TitleAnimation from "./TitleAnimation.js";
import {
  TestimonialContext,
  AppContext,
} from "../../context/contextItem.js";
import { ImQuotesLeft, ImArrowLeft, ImLinkedin } from "react-icons/im";
import "./style.css";
import { BsGithub } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import {
  MainCont,
  MainSection,
  TestimonialWrapper,
  ProfileImgWrapper,
  ProfileImg,
  MainPanel,
  QuoteDiv,
  SignatureWrapper,
  Signature,
  Name,
  Profession,
  ProjectTitle,
  DateWorked,
  ProjectLink,
  Githublink,
  BackArrowWrapper,
} from "./myStyle.js";

const RenderTestimonialPage = (props) => {
  const MainContRef = useRef();

  const context = {
    MainContRef,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (Testimonials.length === 0) {
    return (
      <TestimonialContext.Provider value={context}>
        <MainCont id="TestimonialMainCont" ref={MainContRef}>
          <BackArrowWrapper id="BackArrowWrapper">
            <ImArrowLeft id="WhiteArrow" />
          </BackArrowWrapper>
          <TitleAnimation
            title="Testimonials"
            index="1"
            subtitle="See what my clients have said about my work."
            Height={"60vh"}
          />
          <MainSection id="TestimonialMainSection">
            There are currently no testimonials to show here.
          </MainSection>
          <ContactForm isHome={false} />
        </MainCont>
      </TestimonialContext.Provider>
    );
  }

  return (
    <TestimonialContext.Provider value={context}>
      <MainCont id="TestimonialMainCont" ref={MainContRef}>
        <RenderBackButton />

        <TitleAnimation
          title="Testimonials"
          index="1"
          subtitle="See what my clients have said about my work."
          Height={"60vh"}
        />
        <MainSection
          id="TestimonialMainSection"
          Repeat={Testimonials.length < 3 ? Testimonials.length : 3}
        >
          {Testimonials.map((test) => (
            <RenderItem {...test} key={uuid()} />
          ))}
        </MainSection>
        <ContactForm isHome={false} />
      </MainCont>
    </TestimonialContext.Provider>
  );
};

export default RenderTestimonialPage;

const RenderBackButton = (props) => {
  const { desktopVersion } = useContext(AppContext);

  const { MainContRef } = useContext(TestimonialContext);

  const [whiteArrow, setWhiteArrow] = useState(true);

  const navigate = useNavigate();

  const goHome = useCallback(() => navigate("/", {}), [navigate]);
  var MainContElem = document.getElementById("TestimonialMainCont");
  var MainSectionElem = document.getElementById("TestimonialMainSection");

  const scrollEvent = (event) => {
    MainSectionElem = document.getElementById("TestimonialMainSection");
    console.log(MainSectionElem.getBoundingClientRect().bottom);
    if (MainSectionElem.getBoundingClientRect().top < 0) {
      setWhiteArrow(false);
    } else setWhiteArrow(true);
  };
  useEffect(() => {
    if (MainContRef.current) {
      MainContElem = document.getElementById("TestimonialMainCont");
      MainSectionElem = document.getElementById("TestimonialMainSection");
    }
  }, [MainContRef.current]);

  useEffect(() => {
    //  MainContElem = document.getElementById('TestimonialMainCont');
    document.addEventListener("scroll", scrollEvent);
    return () => {
      document.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    console.log(`whiteArrow: ${whiteArrow}`);
  }, [whiteArrow]);

  return (
    <>
      <BackArrowWrapper
        id="BackArrowWrapper"
        Color={whiteArrow ? "#ffffff" : "#000000"}
        onClick={goHome}
      >
        {whiteArrow ? (
          <ImArrowLeft id="WhiteArrow" />
        ) : (
          <ImArrowLeft id="BlackArrow" />
        )}
        <span>Go Back</span>
      </BackArrowWrapper>
    </>
  );
};

const RenderItem = (props) => {
  const {
    name,
    profession,
    quote,
    image,
    projectTitle,
    projectLink,
    githubLink,
    linkedIn,
    dateWorked,
  } = props;
  const {} = useContext(TestimonialContext);
  const [MaxWidth, setMaxWidth] = useState(DetermineWidth());
  function DetermineWidth() {
    switch (Testimonials.length) {
      case 0:
        return "100%";
        break;
      case 1:
        return "33%";
        break;
      case 2:
        return "64%";
        break;
      default:
        return "86%";
        break;
    }
  }

  useEffect(() => {
    setMaxWidth(DetermineWidth);
  }, [Testimonials.length]);

  return (
    <TestimonialWrapper id="TestimonialWrapper">
      <MainPanel id="MainPanel" MaxWidth={MaxWidth}>
        <ProfileImgWrapper>
          <ProfileImg src={image} alt="ProfilePic" />
        </ProfileImgWrapper>
        <QuoteDiv>
          <ImQuotesLeft className="QuoteIcon" />
          {quote}
        </QuoteDiv>
        <SignatureWrapper id="SignatureWrapper">
          <Signature>
            <Name>
              -{name}{" "}
              {linkedIn !== "" && linkedIn !== null && (
                <a
                    className="ml-1" 
                    href={linkedIn}
                    target="__blank">
                  <ImLinkedin />
                </a>
              )}
            </Name>
            <div
               className = "ml-5"
            >
                {profession !== "" && profession !== null ? (
                  <Profession>{profession}</Profession>
                ) : null}
                {projectTitle !== "" && projectTitle !== null && (
                  <ProjectTitle>{projectTitle}</ProjectTitle>
                )}
                {dateWorked !== "" && dateWorked !== null && (
                  <DateWorked>{dateWorked}</DateWorked>
                )}
                {projectLink !== "" && projectLink !== null && (
                  <ProjectLink>{projectLink}</ProjectLink>
                )}
                {githubLink !== "" && githubLink !== null && (
                  <Githublink href={githubLink}>
                    <BsGithub />
                  </Githublink>
                              )}
             </div>
          </Signature>
        </SignatureWrapper>
      </MainPanel>
    </TestimonialWrapper>
  );
};
