import styled, { keyframes, css } from 'styled-components'; 

export const MainCont = styled.div`
    width: 100%; 
    background-color: #000;
`

export const Title = styled.div`
    display: flex; 
    font-family: 'Bebas Neue';
    position: absolute; 
    z-index: 2; 
    margin: auto;
    top: 7% !important; 
    left: 0;
    right: 0;
    width: fit-content;
    text-align: center;
& > span:nth-child(1){
    animation-delay: 400ms;
}
& > span:nth-child(2){
    animation-delay: 800ms;
}
& > span:nth-child(3){
    animation-delay: 1200ms;
}
& > span:nth-child(4){
    animation-delay: 1600ms;
}
& > span:nth-child(5){
    animation-delay: 2000ms;
}
& > span:nth-child(6){
    animation-delay: 2400ms;
}
& > span:nth-child(7){
    animation-delay: 2800ms;
}
& > span:nth-child(8){
    animation-delay: 3200ms;
}
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

export const TitleWrapper = styled.section`
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
    animation-fill-mode: forwards; 
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
` 


export const Button = styled.div`
    width: 100px; 
    cursor: pointer;    
    text-align: center; 
    border-radius: 10px; 
    padding: 5px; 
    user-select: none; 
    margin: 10px auto;
    background-color: #333;
    color: #ffffff;
    z-index: 3;
    display: block;
    transform: translateY(200px);
  //  position: relative;
    & : hover {
        transform: translateX(5px) translateY(5px); 
}
`