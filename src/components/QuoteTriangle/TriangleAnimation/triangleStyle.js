import styled from 'styled-components'

export const MainCont = styled.div`
width: 100%; 
`

export const ShapeCont = styled.div`
position: relative;
margin: 0px auto; 
&>*{
    width: ${props => props.Width || "500"}px; 
    height: ${props => props.Height || "433"}px;
}
`

export const Sides = styled.div`
    background-color: #9918da; 
    border: none; 
    margin: 10px auto; 
    background: linear-gradient(45deg, #5318da, #9918da, #da3018);
    position: absolute;
    left: 0;
    right: 0; 
    top: 50%; 
    &.side1{
    clip-path: polygon(50% 80%, 50% 100%, 50% 100%, 50% 80%); 
    }
    &.side2{
    clip-path: polygon(15% 10%, 0% 0, 0% 0, 15% 10%); 
    }
    &.side3{
    clip-path: polygon(85% 10%, 100% 0, 100% 0, 85% 10%);
    }

//code for the sides to appear */
    //&.side1{
    //  clip-path: polygon(50% 80%, 50% 100%, 0 0, 15% 10%); 
    //}
    //&.side2{
    //  clip-path: polygon(15% 10%, 0% 0, 100% 0, 85% 10%); 
    //}
    //&.side3{
    //  clip-path: polygon(85% 10%, 100% 0, 50% 100%, 50% 80%);
    //}
`