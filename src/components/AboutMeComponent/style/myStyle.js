import styled, { keyframes, css } from 'styled-components'; 

export const MainCont = styled.div`
    width: 100%; 
    position: relative;
`
export const Title = styled.div`
    display: flex; 
    font-family: 'Bebas Neue';
    position: absolute; 
    z-index: 2; 
    margin: auto;
    //top: 7% !important; 
    transform: translateY(${props => props.TranslateY || "49"}px);
    left: 0;
    right: 0;
    width: fit-content;
    text-align: center;
& > span:nth-child(1){
    animation-delay: ${props => props.Delay}ms;
    transition-delay: ${props => props.Delay}ms;
}
& > span:nth-child(2){
    animation-delay: ${props => props.Delay * 2}ms;
    transition-delay: ${props => props.Delay * 2}ms;
}
& > span:nth-child(3){
    animation-delay: ${props => props.Delay * 3}ms;
    transition-delay: ${props => props.Delay * 3}ms;
}
& > span:nth-child(4){
    animation-delay: ${props => props.Delay * 4}ms;
    transition-delay: ${props => props.Delay * 4}ms;
}
& > span:nth-child(5){
    animation-delay: ${props => props.Delay * 5}ms;
    transition-delay: ${props => props.Delay * 5}ms;
}
& > span:nth-child(6){
    animation-delay: ${props => props.Delay * 6}ms;
    transition-delay: ${props => props.Delay * 6}ms;
}
& > span:nth-child(7){
    animation-delay: ${props => props.Delay * 7}ms;
    transition-delay: ${props => props.Delay * 7}ms;
}
& > span:nth-child(8){
    animation-delay: ${props => props.Delay * 8}ms;
    transition-delay: ${props => props.Delay * 8}ms;
}

@media screen and (min-width: 500px) {
  
}
@media screen and (min-width: 720px) {}
`


export const Reveal = keyframes`
from{
    opacity: 0; 
    transform: rotateY(90deg);
    filter: blur(10px);
}
to{
    opacity: 1.0;
    transform: rotateY(0deg);
    filter: blur(0px); 
}
`

export const Hide = keyframes`
from{
    opacity: 1.0;
    transform: rotateY(0deg);
    filter: blur(0px); 
}
to{
    filter: blur(10px);
    transform: rotateY(90deg);
    opacity: 0; 
}
`

export const RevealWrapper = css`
   animation: ${Reveal} 2s linear; 
` 

export const HideWrapper = css`
    animation: ${Hide} 2s linear; 
`

export const TitleWrapper = styled.div`
    margin: auto; 
    text-align: center; 
    width: 90%; 
    background-color: #dbdbdb;
    display: contents;
    position: relative;
`

export const Letter = styled.span`
    width: 23px; 
    color: #fff;
    font-size: 34px;
    user-select: none;
    opacity: 0; 
    transform: rotateY(90deg);
    filter: blur(10px);
     ${props => (props.AnimationType)};  
    animation-fill-mode: ${props => props.AnimationFill}; 
`
export const Space = styled.div`
    width: 20px; 
    height: 20px; 
`

export const Video = styled.video`
    position: absolute; 
    width: 320px;
    height: inherit;
    z-index: 0; 
    margin: 0 auto;
    object-fit: cover; 
    top: 0px !important;
    left: 0; 
    right: 0;
` 


export const Button = styled.div`
    width: 100px; 
    cursor: pointer;    
    text-align: center; 
    border-radius: 10px; 
    padding: 5px; 
    user-select: none; 
    margin: 0px auto;
    background-color: #333;
    color: #ffffff;
    z-index: 3;
    display: block;
    transform: translateY(200px);
    & : hover {
        transform: translateX(5px) translateY(5px); 
}
`

export const DevelopmentButtons = styled.div`
    display: ${props => props.Display};
`

export const Paragraph = styled.p`
    color: #fff;    
    font-family: 'Montserrat',sans-serif;
    opacity: 1.0;
    filter: blur(20px);
`
export const ParaWrapper = styled.div`
    transform: translateY(120px);
    width: 90%; 
    margin: 0 auto;
    z-index: 3; 
    user-select: none;
& > p:nth-child(1){
    transition-delay: 0ms;     
}
& > p:nth-child(2){
    transition-delay: 300ms;     
}
& > p:nth-child(3){
    transition-delay: 600ms;     
}

@media screen and (min-width: 500px){
    transform: translateY(175px);
    font-size: 25px;
}

@media screen and (min-width: 720px){
    transform: translateY(220px);
    width: 80%; 
}
`