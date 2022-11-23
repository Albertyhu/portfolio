import styled from 'styled-components'

export const Scene = styled.div`
    width: 200px; 
    height: 200px; 
    perspective: 1000px; 
    margin: auto;
    position: absolute; 
`
export const Cube = styled.div`
    width: 100%; 
    height: 100%; 
    position: relative;
    transform-style: preserve-3d;
    //The transform code is not in use since the next property 'animation' will take care of the animation of the cube
    transform: ${props => {
        return "translateX(" + props.TranslateX + ") translateY("
            + props.TranslateY + ") translateZ(" + props.TranslateZ + ") rotateX("
            + props.RotateX + ") rotateY(" + props.RotateY + ") rotateZ(" + props.RotateZ
            + ") scale3d(" + props.Scale + ")"
    }};

    animation: ${props => props.animationType} ${props => props.Duration} linear;
    animation-fill-mode: forwards;
`

export const Cubeface = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    opacity: 0.5;
    text-align: center; 
    justify-content: center; 

& > div {
    font-size: 80px; 
    color: #ffffff;
    margin: auto;
    position: relative;
    top: 25%;
}
`

export const NeonSurface = styled.div`
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
`