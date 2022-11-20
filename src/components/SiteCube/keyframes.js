import styled, { keyframes } from 'styled-components'; 

export const Scene = styled.div`
width: 200px; 
height: 200px; 
perspective: 600px; 
margin: auto;
`
export const Cube = styled.div`
width: 100%; 
height: 100%; 
position: relative;
transform-style: preserve-3d; 
animation: ${props => {
        switch (props.animationType) {
            case 'level1':
                return RotateUp;
                break;
            case 'level2':
                return RotateDown;
                break;
            case 'level3':
                return RotateLeft;
                break;
            case 'level4':
                return RotateRight;
                break;
            case 'level0':
                break;
        }
    }} 2s linear
`

export const Cubeface = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
    opacity: 0.5;
`

export const RotateUp = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(0deg) 
            rotateX(180deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(0deg) 
            rotateX(360deg) 
            rotateZ(0deg) ;
}
`
export const RotateDown = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(0deg) 
            rotateX(-180deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(0deg) 
            rotateX(-360deg) 
            rotateZ(0deg) ;
}
`
export const RotateLeft = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(-180deg) 
            rotateX(deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(-360deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
`
export const RotateRight = keyframes`
    0%{
        transform: 
            rotateY(0deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;

}
    50%{
        transform: 
            rotateY(180deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
    100%{
        transform: 
            rotateY(360deg) 
            rotateX(0deg) 
            rotateZ(0deg) ;
}
`