import React, { useState, useEffect } from 'react'; 
import {
    MainCont,   
    Title, 
    Video, 
    Letter, 
    TitleWrapper, 
    Space, 
    Reveal,
    Button, 
    RevealWrapper,
    HideWrapper, 
} from './myStyle.js'; 
import './keyframes.css'; 
import Smoke from './asset/Sequence01.mp4'; 
//import Smoke from './asset/smoke.mp4'; 

const RenderAboutTitle = props => {
    const [start, setStart] = useState("")
    var video = document.querySelector("#AboutMe_Video"); 

    const Animate = () => {
        video = document.querySelector("#AboutMe_Video"); 
        video.play();
        setStart(RevealWrapper)
    }

    const DeAnimate = () => {
        setStart(HideWrapper)
    }

    useEffect(() => {
        video = document.querySelector("#AboutMe_Video"); 
      
    }, [])

    return (
        <MainCont id = "AboutMe_MainCont">
            <TitleWrapper id = "AboutMe_TitleWrapper">
                <Video src={`${Smoke}#t=0`} id="AboutMe_Video" muted />
                <Title
                    id="AboutMe_Title"
                >
                    <Letter AnimationType={start}>A</Letter>
                    <Letter AnimationType={start}>B</Letter>
                    <Letter AnimationType={start}>O</Letter>
                    <Letter AnimationType={start}>U</Letter>
                    <Letter AnimationType={start}>T</Letter>
                    <Space />
                    <Letter AnimationType={start}>M</Letter>
                    <Letter AnimationType={start}>E</Letter>
                </Title>
            </TitleWrapper>
            <Button onClick={Animate} id="Aboutme_button">Reveal</Button>
            <Button onClick={DeAnimate} id="Aboutme_button">Hide</Button>

        </MainCont>
        )
}

export default RenderAboutTitle;

