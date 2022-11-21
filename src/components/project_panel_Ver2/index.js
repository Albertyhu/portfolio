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
    const {
        SectionHeight = "100vh",
        } = props; 
    const [currentInd, setCurrentInd] = useState(0); 
    const { desktopVersion } = useContext(AppContext);
    const [inView, setInView] = useState(false); 
    const TRIGGER = 75; 

    var MainContElem;
    const ProjectPanelRef = useRef();

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

    const ScrollEvent = event => {
        MainContElem = document.querySelector('.ProjectMainCont');
       // console.log("form: " + MainContElem.getBoundingClientRect().top)
        if (MainContElem.getBoundingClientRect().top <= TRIGGER) {
            setInView(true)
        }
        else {
            setInView(false)
        }
    }

    //this part is responsible for when the project panel fades in and out into view
    useEffect(() => {
        MainContElem = document.querySelector('.ProjectMainCont'); 

        //if (inView) {
        //    MainContElem.classList.remove('ProjectOutView')
        //    if(desktopVersion)
        //        MainContElem.classList.add('ProjectInView');
        //    else
        //        MainContElem.classList.add('ProjectInView_mobile');
        //}
        //else {
        //    MainContElem.classList.remove('ProjectInView')
        //    MainContElem.classList.remove('ProjectInView_mobile')
        //    MainContElem.classList.add('ProjectOutView');
        //}
    }, [inView])

    useEffect(() => {
        if (ProjectPanelRef.current) {
            MainContElem = document.querySelector('.ProjectMainCont');
            MainContElem.classList.add('ProjectInView')
        }
    }, [ProjectPanelRef.current])

    useEffect(() => {
        window.addEventListener("scroll", ScrollEvent)
        return () => { window.removeEventListener("scroll", ScrollEvent) }
    }, [])

    if (ProjectList.length === 0) {
        return (
            <MainCont
                className='ProjectMainCont'
                ref={ProjectPanelRef}
            >
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
                <Panel className="ProjectPanel">
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


