import styled from 'styled-components'

export const MainCont = styled.div`
width: 100%; 
height: ${props => props.SectionHeight || '100%'};
text-align: center;
background-color: #000000;
margin 20px auto;
`

export const Panel = styled.div`
width: 83%; 
height: fit-content; 
border-radius: 15px; 
margin: auto;
padding: 20px;
background-color: #fff;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const IndexShell = styled.div`
    display: grid; 
    grid-template-columns: 30% 70%; 
    width: 90%; 
    margin: auto; 
    height: 100%;
@media screen and (max-width: 1290px){
    grid-template-columns: 20% 80%; 
}
@media screen and (max-width: 1140px){
    width: 95%;
}
@media screen and (max-width: 610px){
    grid-template-columns: 40% 60%; 
}
@media screen and (max-width: 540px){
    display: block;
    width: 95%;
}
`

export const Slider = styled.div`
    text-align: left;
    margin-right: 5px;
  @media screen and (max-width: 540px){
    margin-right: auto;
}  
`

export const ListItem = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px; 
    cursor: pointer; 
    margin: 15px auto;
    z-index: 99;
    background-color: ${props => props.BackgroundC}; 

&:hover{
    transform: translateX(5px) translateY(5px);
}
@media screen and (max-width: 1350px){
    font-size: 20px;
}
@media screen and (max-width: 1200px){
    font-size: 15px;
}
`

export const Text = styled.div`
    margin: auto; 
    font-family: 'Montserrat', sans-serif; 
    
`

//export const ThumbNail = styled.img`
//    width: 800px; 
//    height: 500px; 
//    resize: none;
//@media screen and (max-width: 1120px){
//    width: 500px; 
//    height: 300px; 
//}
//@media screen and (max-width: 690px){
//    width: 400px;
//    height: 250px;
//}
//@media screen and (max-width: 615px){
//    width: 250px;
//    height: 150px;
//}

//@media screen and (max-width: 300px){

//}
//`

export const ThumbNail = styled.img`
    width: 100%; 
    height: auto; 
    resize: none;
`

export const H2header = styled.h2`
margin: auto;
text-align: center;
`

export const ThumbNailWrapper = styled.div`
height: 100%; 
width: 100%; 
margin: auto; 
text-align: center; 

@media screen and (min-width: 360px){
    width: 90%; 
}
`

export const Button = styled.div`
    padding: 5px 10px; 
    font-size: 25px; 
    cursor: pointer; 
    user-select: none; 
    color: 636363; 
    margin: 20px auto; 
    border-radius: 15px; 
    width: 180px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    white-space: nowrap;
    background: linear-gradient(to left, #e3e3e3, #ffffff, #e3e3e3);
    &:hover{
        background-color: #e9e9e9; 
    }
    &:active{
        background-color: #ffffff; 
        transform: translateX(2px) translateY(2px); 
    }
`