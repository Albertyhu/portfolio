import styled from 'styled-components'; 

export const ContactInfoWrapper = styled.div`
text-align: center; 
`
export const ContactInfoText = styled.div`
color: #ffffff;
`

export const BigHeader = styled.div`
font-size: 75px;
color: #ffffff; 
margin: auto; 
text-align: center;
@media screen and (max-width: 770px){
    font-size: 60px;
}
@media screen and (max-width: 540px){
font-size: 50px;
} 
@media screen and (max-width: 350px){
font-size: 25px;
} 
`

export const MainCont = styled.div`
width: 100%; 
height: 100%; 
background: linear-gradient(45deg, red, #6313a2, #0c309f);
position: ${props => props.Position};
bottom: 0px;
left: 0px;
right: 0px; 
font-family: 'Montserrat', sans-serif;
padding-bottom: 40px;
display: grid;
grid-template-columns: 50% 50%; 
@media screen and (max-width: 540px){
    display: block; 
    height: fit-content;
}
`
export const Shell = styled.div`
//width: 50%; 
width: 80%;
height: 90%; 
margin: auto;
padding: 20px 0px;
@media screen and (max-width: 540px){
    width: 90%; 
    margin: 10px auto;
    height: 38%;
}
`

export const Title = styled.h2`
    color: #ffffff;
    margin: 20px auto; 
    text-align: center; 
@media screen and (max-width: 350px){
font-size: 20px;
} 
`
export const Subtitle = styled.h3`
text-align: left; 
color: #cdcdcd; 

`

export const InputWrapper = styled.div`
margin: 20px auto;
width: inherit;
@media screen and (max-width: 540px){
    padding: 0;
}
`

export const Input = styled.input`
text-align: left; 
width: 100%;
padding: 5px; 
background-color: #ffffff; 
border-radius: 5px; 
@media screen and (max-width: 540px){
    margin: 0 auto;
    width: 95%; 
}
`

export const SubjectLineWrapper = styled.div`
width: 100%;
padding: 0px 5px;
border-radius: 5px; 
background-color: #ffffff; 
display: flex;
//position: relative; 
margin: 0 auto;
border: 1px solid #000000;
outline: ${props => props.Outline || "none"}; 
@media screen and (max-width: 540px){
padding: 0px;
}
`

export const SubjectLineCounter = styled.div`
background-color: #ffffff;
border-radius: 5px; 
min-width: 60px;
&>span{
    margin: auto; 
    color: #929292;
    user-select: none
    display: inline-flex;
    align-items: center;
    min-height: 100px;
}
`

export const SubjectLineInput = styled.input`
text-align: left; 
padding: 5px; 
background-color: #ffffff; 
border: none; 
border-radius: 5px; 
width: 100%;
    &:focus {
        border: none;
        outline: none;
    }
@media screen and (max-width: 540px){
    margin: 0 auto;
}`


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
    text-align: center;
    background: linear-gradient(to left, #e3e3e3, #ffffff, #e3e3e3);
    &:hover{
        background-color: #e9e9e9; 
    }
    &:active{
        background-color: #ffffff; 
        transform: translateX(2px) translateY(2px); 
    }
`

export const TextArea = styled.textarea`
resize: none; 
width: 100%;
margin: auto;
border-radius: 10px;
padding: 5px;
font-family: 'Montserrat', sans-serif;
@media screen and (max-width: 540px){
width: 95%;
}
`

export const CaptchaWrapper = styled.div`
width: fit-content; 
margin: 20px auto; 
text-align: center; 
&>*{
    margin: 0px auto;
}
`