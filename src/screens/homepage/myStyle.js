import styled from 'styled-components'; 

export const MainCont = styled.div`
    width: 100%; 
    height: auto; 
    background-color: #000;
`
export const Section = styled.div`
    height: fit-content;
    width: 100%;
    min-height: 450px;
    position: relative;
&#Section2{
    // height: ${props => props.SectionTwoHeight || "700"}px; 
}

`

export const TitleWrapper = styled.div`
    //position: relative; 
    display: block;
`

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
`
