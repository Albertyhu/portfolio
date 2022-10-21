import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

//This component renders the Hero section with an animated Title that fades in 
const RenderTitleAnimation = props => {

    const { title,
        index,
        subtitle,
        Height
    } = props;

    /*The following block of code is written so that everytime the user changes project on the screen,
     * the animation of the title wil rerun. 
     * */

    const [TitleAnimation, setTitleAnimation] = useState(FadeInAnimation)

    useEffect(() => {
        setTitleAnimation(NoAnimation);
    }, [index])

    useEffect(() => {
        if (TitleAnimation == NoAnimation) {
            setTitleAnimation(FadeInAnimation)
        }
    }, [TitleAnimation])
    return (
        <TitleCont Height={Height}>
            <TitleWrapper>
                <Title TitleAnimation={TitleAnimation}>{title}</Title>
                    {subtitle !== '' && subtitle !== null && 
                        <Subtitle>{subtitle}</Subtitle>
                        }
                 </TitleWrapper>
            </TitleCont>


        )
}

export default RenderTitleAnimation; 

const NoAnimation = keyframes``

const FadeInAnimation = keyframes`
0%{ 
    transform: translateY(100px); 
    opacity: 0.0; 
}
100%{
    transform: translateY(0px); 
    opacity: 1.0; 
}
`

const TitleCont = styled.div`
width: 100%; 
background-color: #000000; 
background-attachment: fixed; 
position: relative; 
height: ${props => props.Height};
background-attachment: fixed;
@media screen and (max-width: 540px){
    height: 54vh;
}
`

const TitleWrapper = styled.div`
width: 100%; 
position: absolute; 
top: 35%; 
left: 0; 
right: 0; 
text-align: center; 
& > *{
    color: #ffffff; 
    user-select: none;
}
`

const Title = styled.div`
font-size: 100px; 

//animation: ${FadeInAnimation} 2s linear; 
animation: ${props => props.TitleAnimation || FadeInAnimation} 2s linear; 

@media screen and (max-width: 540px){
    font-size: 30px;
}
@media screen and (max-width: 300px){
    font-size: 25px;
}
`

const Subtitle = styled.div`
animation: ${props => props.TitleAnimation || FadeInAnimation} 2s linear; 
animation-delay: 500ms;
opacity: 0;
animation-fill-mode: forwards;
text-align: center; 
color: #808080;
font-size: 25px;
@media screen and (max-width: 540px){
    font-size: 25px;
}
@media screen and (max-width: 300px){
    font-size: 20px;
}
`

