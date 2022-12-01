import styled from "styled-components";

export const MainCont = styled.div`
  font-family: "Montserrat", sans-serif;
`;
export const MainSection = styled.div`
  height: fit-content;
  //display: flex;
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(${(props) => props.Repeat || "3"}, 1fr);
  gap: 30px;
  @media screen and (max-width: 540px) {
    //margin: 75px 0 0 0;
    display: block;
  }
`;

export const TestimonialWrapper = styled.div`
  margin-bottom: 100px;
`;

export const Shell = styled.div``;

export const ProfileImgWrapper = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  top: -70px;
  margin-left: auto;
  margin-right: auto;
  resize: none;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 20px solid #ffffff;
  margin-left: auto;
  margin-right: auto;
`;

export const MainPanel = styled.div`
  max-width: ${(props) => props.MaxWidth};
  background-color: #e5e5e5;
  color: #000000;
  position: relative;
  margin: 20px auto;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  padding: 10px;
  height: 100%;
  @media screen and (max-width: 540px) {
    max-width: 86%;
  }
`;
export const QuoteDiv = styled.div`
  width: 90%;
  height: fit-content;
  margin: 75px auto 30px auto;
  text-align: left;
`;
export const SignatureWrapper = styled.div`
  width: 100%;
  text-align: right;
  justify-content: flex-end;
  display: flex;
`;

export const Signature = styled.div`
    width: fit-content;
    text-align: left;
    margin: 20px;
  & > * {
    white-space: nowrap;
    
    }
@media screen and (max-width: 540px){
 & > * {
    white-space: normal;
}
@media screen and (max-width: 240px){
    width: 100%; 
 & > * {
   font-size: 10px;
}
}
`;

export const Name = styled.div`
  color: #0c309f;
  font-weight: bold;
  font-size: 25px;
  @media screen and (max-width: 240px) {
    font-size: 15px;
  }
`;
export const Profession = styled.div``;
export const ProjectTitle = styled.div``;
export const DateWorked = styled.div``;
export const ProjectLink = styled.div``;
export const Githublink = styled.a``;

export const BackArrowWrapper = styled.div`
  position: fixed;
  left: 10px;
  margin-top: 20px;
  z-index: 10;
  color: ${(props) => props.Color || "#ffffff"};
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  & > span {
    margin: auto;
  }
`;
