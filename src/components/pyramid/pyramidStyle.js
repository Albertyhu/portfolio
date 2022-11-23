import styled from 'styled-components'
export const Scene = styled.div`
    width: 200px; 
    height: 200px; 
    perspective: 1000px;
    margin: auto;
    position: absolute;
`

export const Pyramid = styled.div`
    width: 200px; 
    height: 200px; 
    position: relative; 
    transform-style: preserve-3d; 
    transform: transform: ${props => {
        return "translateX(" + props.TranslateX + ") translateY("
            + props.TranslateY + ") translateZ(" + props.TranslateZ + ") rotateX("
            + props.RotateX + ") rotateY(" + props.RotateY + ") rotateZ(" + props.RotateZ
            + ") scale3d(" + props.Scale + ")"
    }}; 
    animation: ${props => props.animationType} ${props => props.Duration} linear;
    animation-fill-mode: forwards;
`

export const PyramidFace = styled.div`
    opacity: 0.7; 
    position: absolute; 
    width: 0;
    height: 0; 
    border: 100px solid transparent;
    border-bottom: 200px solid red;
    border-top: 0px;
& > span {
    font-size: 100px; 
    color: #ffffff;
    margin: auto;
    top: 50%;
}
}
`

export const PyramidBase = styled.div`
    position: absolute; 
    width: 100%; 
    height: 100%;
    border: 0;
`
