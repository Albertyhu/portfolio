import React, { useState, useEffect, useRef, useContext, createContext, useCallback } from 'react'; 
import { ProjectList } from './projects.js'; 
import styled from 'styled-components'; 
import uuid from 'react-uuid'; 
import './projectStyle.css';
import RenderUpArrow from '../scrollButton/scrollUp.js'; 
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../contextItem.js'; 

const ProjectContext = createContext(); 


const RenderProjectPanel = props => {
    const { inView, ParentRef, SectionHeight } = props; 
    const [currentInd, setCurrentInd] = useState(0); 
    const { desktopVersion } = useContext(AppContext)
    const MainRef = useRef(); 
    var MainContElem;

    //Get the reference to Section Three to allow scroll function 
    var SectionThreeElem; 

    const navigate = useNavigate();

    const GoProjectProfile = useCallback((page) => navigate("/project_profile", {
        state: {
            index: page,
        }
    }), [navigate]); 



    const context = {
        currentInd, 
        setCurrentInd, 
        inView, 
        GoProjectProfile,
    }

    useEffect(() => {
        if (MainRef.current) {
            MainContElem = document.querySelector('.ProjectMainCont'); 
            MainContElem.classList.add('projectOutView')
        }
    }, [MainRef.current])

    //this part is responsible for when the project panel fades in and out into view
    useEffect(() => {
        MainContElem = document.querySelector('.ProjectMainCont'); 

        if (inView) {
            MainContElem.classList.remove('projectOutView')
            if(desktopVersion)
                MainContElem.classList.add('projectInView');
            else
                MainContElem.classList.add('projectInView_mobile');
        }
        else {
            MainContElem.classList.remove('projectInView')
            MainContElem.classList.remove('projectInView_mobile')
            MainContElem.classList.add('projectOutView');
        }
    }, [inView])


    useEffect(() => {
        if (ParentRef.current) {
            SectionThreeElem = document.querySelector("#SectionThree")
        }
    }, [ParentRef.current])


    const ScrollTo = () => {
        SectionThreeElem = document.querySelector("#SectionThree")
        SectionThreeElem.scrollIntoView(true);
    }

    //useEffect(() => {
    //    console.log("currentInd: " + currentInd)
    //}, [currentInd])

    if (ProjectList.length === 0) {
        return (
            <MainCont
                className='ProjectMainCont'
                ref={MainRef}
                
            >
                <RenderUpArrow dispatch={ScrollTo} />
                <div>Scroll Up</div>
                <Panel>
                    <Text>No projects to show.</Text>
                </Panel>
            </MainCont>
            )
    }

    //the line SectionHeight={desktopVersion ? SectionHeight : 'auto'} makes the div element responsive
    return (
        <ProjectContext.Provider value = {context}>
            <MainCont
                className='ProjectMainCont'
                ref={MainRef}
                SectionHeight={desktopVersion ? SectionHeight : 'auto'}
            >
                {/* <RenderUpArrow dispatch={ScrollTo} />
                <div>Scroll Up</div> */}
                <Panel>
                    <RenderProjectIndex />
                </Panel>
            </MainCont>
        </ProjectContext.Provider>
        )

}

export default RenderProjectPanel; 


const RenderProjectIndex = props => {
    const { desktopVersion } = useContext(AppContext); 

    return desktopVersion ? 
        <IndexShell>
            <RenderSlider />
            <ProjectThumbnail /> 
        </IndexShell >
            :
            <IndexShell>
                <ProjectThumbnail />
                <RenderSlider />
            </IndexShell >
        

}

const RenderSlider = props => {


    return (
        <Slider>
            <H2header>Projects</H2header>
            {ProjectList.map((item, index) => <RenderListItem
                title={item.title}
                index={index}
                key={uuid()}
            />)}
    </Slider>)
}

const RenderListItem = ({ title, index}) => {
    const { setCurrentInd, currentInd } = useContext(ProjectContext); 

    return (
        <ListItem
            onClick={() => { setCurrentInd(index) }}
            BackgroundC={index === currentInd ? '#E9E9E9' : 'none' }
        >{title}</ListItem>
        )
}

const ProjectThumbnail = props => {
    const { currentInd, GoProjectProfile } = useContext(ProjectContext);

    return (
        <ThumnnailWrapper>
            <ThumbNail src={ProjectList[currentInd].thumbnail} />
            <Button onClick={()=>GoProjectProfile(currentInd)}>View Project</Button>
        </ThumnnailWrapper>)
}


const MainCont = styled.div`
width: 100%; 
height: ${props => props.SectionHeight || '100%'};
//height: 100%;
text-align: center;
margin-top: 20%;
position: absolute; 
top: 100px;
left: 0px;
right: 0px;
background-color: #ffffff;
@media screen and (max-width: 540px){
    top: -100px;
}

@media screen and (max-width: 380px), screen and (max-height: 540px){
    top: -300px; 
}
`

const Panel = styled.div`
width: 90%; 
height: 80%; 
border-radius: 15px; 
margin: auto;
padding: 20px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const IndexShell = styled.div`
    display: grid; 
    grid-template-columns: 30% 70%; 
    width: 90%; 
    margin: auto; 
    height: 100%;
@media screen and (max-width: 540px){
    display: block;
    width: 95%;
}
`

const Slider = styled.div`
    text-align: left;
  margin-right: 5px;
  @media screen and (max-width: 540px){
    margin-right: auto;
}  
`

const ListItem = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px; 
    cursor: pointer; 
    margin: 15px auto;
    z-index: 99;
    background-color: ${props => props.BackgroundC}; 

&:hover{
    transform: translateX(5px) translateY(5px);
}
`

const Text = styled.div`
    margin: auto; 
    font-family: 'Montserrat', sans-serif; 
    
`

const ThumbNail = styled.img`
    width: 100%; 
    height: 500px; 
    resize: none;
@media screen and (max-width: 540px){
    height: 250px;
}
`

const H2header = styled.h2`
margin: auto;
text-align: center;
`

const ThumnnailWrapper = styled.div`
height: 100%; 
width: 100%; 
margin: auto; 
text-align: center; 
`

const Button = styled.div`
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