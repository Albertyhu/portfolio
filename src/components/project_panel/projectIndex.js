import React, { useState, useEffect, useRef, useContext, createContext, useCallback } from 'react'; 
import { ProjectList } from './projects.js'; 
import styled from 'styled-components'; 
import uuid from 'react-uuid'; 
import './projectStyle.css';
import RenderUpArrow from '../scrollButton/scrollUp.js'; 
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../contextItem.js'; 
import {
    MainCont, 
    Panel, 
    IndexShell,
    Slider, 
    ListItem,
    Text,
    ThumbNail,
    H2header,
    ThumbNailWrapper,
    Button
} from './projectStyle.js'; 
const ProjectContext = createContext(); 


const RenderProjectPanel = props => {
    const { inView, ParentRef, SectionHeight, ProjectPanelRef} = props; 
    const [currentInd, setCurrentInd] = useState(0); 
    const { desktopVersion} = useContext(AppContext)
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
        if (ProjectPanelRef.current) {
            MainContElem = document.querySelector('.ProjectMainCont'); 
            MainContElem.classList.add('projectOutView')
        }
    }, [ProjectPanelRef.current])

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
                ref={ProjectPanelRef}
                
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
                ref={ProjectPanelRef}
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
        <ThumbNailWrapper>
            <ThumbNail src={ProjectList[currentInd].thumbnail} />
            <Button onClick={()=>GoProjectProfile(currentInd)}>View Project</Button>
        </ThumbNailWrapper>)
}


