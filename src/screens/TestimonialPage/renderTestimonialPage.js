import React, { useState, useContext, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components'; 
import { Testimonials } from '../../components/testimonial/testimonial.js'; 
import ContactForm from '../../components/contactForm/contactForm.js'; 
import TitleAnimation from '../../components/TitleAnimation.js'; 
import { TestimonialContext, AppContext } from '../../components/contextItem.js'; 
import { ImQuotesLeft, ImQuotesRight, ImArrowLeft, ImLinkedin} from 'react-icons/im';
import "../../components/testimonial/style.css"; 
import { BsGithub } from 'react-icons/bs'; 
import { useNavigate } from 'react-router-dom'; 
import uuid from 'react-uuid'; 


const RenderTestimonialPage = props => {
    const MainContRef = useRef(); 

    const context = {
        MainContRef
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (Testimonials.length === 0) {
        return (
            <TestimonialContext.Provider value={context}>
                <MainCont id="TestimonialMainCont" ref={MainContRef}>
                    <BackArrowWrapper id="BackArrowWrapper"><ImArrowLeft id='WhiteArrow' /></BackArrowWrapper>
                    <TitleAnimation
                        title="Testimonials" index="1"
                        subtitle="See what my clients have said about my work."
                        Height={"60vh"}
                    />
                    <MainSection id="TestimonialMainSection">There are currently no testimonials to show here.</MainSection>
                   <ContactForm isHome={false} />
                </MainCont>
            </TestimonialContext.Provider>
            )
    }

    return (
        <TestimonialContext.Provider value={context}>
            <MainCont id="TestimonialMainCont" ref={MainContRef}>
                <RenderBackButton />

                <TitleAnimation
                    title="Testimonials" index="1"
                    subtitle="See what my clients have said about my work."
                    Height={"60vh"}
                />
                <MainSection id="TestimonialMainSection" Repeat={Testimonials.length < 3 ? Testimonials.length : 3}>
                    {Testimonials.map(test => <RenderItem {...test} key={uuid()}/>) }
                </MainSection>
                <ContactForm isHome={false} />
            </MainCont>
        </TestimonialContext.Provider>
            )
}

export default RenderTestimonialPage; 

const RenderBackButton = props => {
    const {
        desktopVersion,
    } = useContext(AppContext)

    const {
        MainContRef
    } = useContext(TestimonialContext);

    const [whiteArrow, setWhiteArrow] = useState(true); 

    const navigate = useNavigate();

    const goHome = useCallback(() => navigate('/', {}), [navigate]); 
    var MainContElem = document.getElementById('TestimonialMainCont'); 
    var MainSectionElem = document.getElementById('TestimonialMainSection')

    const scrollEvent = event => {
        MainSectionElem = document.getElementById('TestimonialMainSection')
        console.log(MainSectionElem.getBoundingClientRect().bottom)
        if (MainSectionElem.getBoundingClientRect().top < 0) {
            setWhiteArrow(false);
        }
        else
            setWhiteArrow(true);
    }
    useEffect(() => {
        if (MainContRef.current) {
            MainContElem = document.getElementById('TestimonialMainCont'); 
            MainSectionElem = document.getElementById('TestimonialMainSection')
        }
    }, [MainContRef.current])

    useEffect(() => {
      //  MainContElem = document.getElementById('TestimonialMainCont');
        document.addEventListener('scroll', scrollEvent);
        return () => { document.removeEventListener('scroll', scrollEvent);}
    }, [])

    useEffect(() => {
        console.log(`whiteArrow: ${whiteArrow}`)
    }, [whiteArrow])

    return (<>
        <BackArrowWrapper
            id="BackArrowWrapper"
            Color={whiteArrow ? "#ffffff" : "#000000"}
            onClick={goHome}
        >{whiteArrow ? <ImArrowLeft id='WhiteArrow' /> : <ImArrowLeft id='BlackArrow' />}<span>Go Back</span></BackArrowWrapper>
    </>)
}

const RenderItem = props => {

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
    const { } = useContext(TestimonialContext)
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
        setMaxWidth(DetermineWidth)
    }, [Testimonials.length])

    return (
        <TestimonialWrapper id = "TestimonialWrapper">
            <MainPanel id="MainPanel" MaxWidth={MaxWidth} >
                <ProfileImgWrapper><ProfileImg src={image} /></ProfileImgWrapper>
                <QuoteDiv><ImQuotesLeft className="QuoteIcon" />{quote}</QuoteDiv>
                <SignatureWrapper id ="SignatureWrapper">
                <Signature>
                        <Name>-{name} {linkedIn !== '' && linkedIn !== null && <a href={linkedIn}><ImLinkedin /></a> }</Name>
                {profession !== '' && profession !== null ? <Profession>{profession}</Profession>  : null}
                {projectTitle !== '' && projectTitle !== null && <ProjectTitle>{projectTitle}</ProjectTitle>}
                {dateWorked !== '' && dateWorked !== null && <DateWorked>{dateWorked}</DateWorked> }
                {projectLink !== '' && projectLink !== null && <ProjectLink>{projectLink}</ProjectLink>}
                {githubLink !== '' && githubLink !== null && <Githublink href={githubLink}><BsGithub /></Githublink>}
                    </Signature>
                </SignatureWrapper>
            </MainPanel>

        </TestimonialWrapper>
        ) 
}


const MainCont = styled.div`
    font-family: 'Montserrat', sans-serif;
`
const MainSection = styled.div`
    height: fit-content;
    //display: flex;
    display: grid;
    margin: 0 20px;
    grid-template-columns: repeat(${props => props.Repeat || "3"}, 1fr);
    gap: 30px;
    @media screen and (max-width: 540px){
        //margin: 75px 0 0 0;
        display: block;
}
`

const TestimonialWrapper = styled.div`
margin-bottom: 100px;
`

const Shell = styled.div`

`

const ProfileImgWrapper = styled.div`
width: 100%; 
text-align: center; 
position: absolute; 
top: -70px; 
margin-left: auto;
margin-right: auto;
resize: none;
`

const ProfileImg = styled.img`
width: 100px; 
height: 100px; 
border-radius: 100px; 
border: 20px solid #ffffff;
margin-left: auto;
margin-right: auto;
`

const MainPanel = styled.div`
    max-width:${props => props.MaxWidth};
    background-color: #E5E5E5; 
    color: #000000; 
    position: relative; 
    margin: 20px auto; 
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    padding: 10px;
    height: 100%;
    @media screen and (max-width: 540px){
        max-width: 86%;
}
`
const QuoteDiv = styled.div`
    width: 90%; 
    height: fit-content;
    margin: 75px auto 30px auto; 
    text-align: left; 
`
const SignatureWrapper = styled.div`
    width: 100%;
    text-align: right; 
    justify-content: flex-end;
    display: flex;
`

const Signature = styled.div`
    width: fit-content;
    text-align: left;
    margin: 20px;
  & > * {
    white-space: nowrap;
    
    }
@media screen and (max-width: 540px){
 & > * {
    white-space: normal;
}
@media screen and (max-width: 240px){
    width: 100%; 
 & > * {
   font-size: 10px;
}
}
`

const Name = styled.div`
color: #0c309f; 
font-weight: bold; 
font-size: 25px;
@media screen and (max-width: 240px){
    font-size: 15px;
}
`
const Profession = styled.div`

`
const ProjectTitle = styled.div``
const DateWorked = styled.div``
const ProjectLink = styled.div``
const Githublink = styled.a``

const BackArrowWrapper = styled.div`
    position: fixed; 
    left: 10px; 
    margin-top: 20px;
    z-index: 10;
    color: ${props => props.Color || "#ffffff"};
    justify-content: center;
    display: flex;
    align-items: center; 
    cursor: pointer;    
    user-select: none;
    & > span{
        margin: auto;
}   

`