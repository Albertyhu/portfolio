import React, { useState, useEffect, useRef, useContext, createContext } from 'react'; 
import { ProjectList } from './projects.js'; 
import styled from 'styled-components'; 
import uuid from 'react-uuid'; 
import './projectStyle.css';
import RenderUpArrow from '../scrollButton/scrollUp.js'; 
const ProjectContext = createContext(); 


const RenderProjectPanel = props => {
    const { inView, ParentRef, SectionHeight } = props; 
    const [currentInd, setCurrentInd] = useState(0); 

    const MainRef = useRef(); 
    var MainContElem;

    //Get the reference to Section Three to allow scroll function 
    var SectionThreeElem; 

    const context = {
        currentInd, 
        setCurrentInd, 
        inView, 
    }

    useEffect(() => {
        if (MainRef.current) {
        MainContElem = document.querySelector('.ProjectMainCont'); 
        }
    }, [MainRef.current])

    useEffect(() => {
        MainContElem = document.querySelector('.ProjectMainCont'); 
        if (inView) {
            MainContElem.classList.remove('projectOutView')
            MainContElem.classList.add('projectInView'); 
        }
        else {
            MainContElem.classList.remove('projectInView')
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


    return (
        <ProjectContext.Provider value = {context}>
            <MainCont
                className='ProjectMainCont'
                ref={MainRef}
                SectionHeight={SectionHeight}
            >
                <RenderUpArrow dispatch={ScrollTo} />
                <div>Scroll Up</div>
                <Panel>
                    <RenderProjectIndex />
                </Panel>
            </MainCont>
        </ProjectContext.Provider>
        )

}

export default RenderProjectPanel; 


const RenderProjectIndex = props => {

    return (
        <IndexShell>
            <RenderSlider />
            <ProjectThumbnail /> 
        </IndexShell>
        )

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

const RenderListItem = ({ title, index, dispatch }) => {
    const { setCurrentInd } = useContext(ProjectContext); 

    return (
        <ListItem onClick={() => {setCurrentInd(index)}}>{title}</ListItem>
        )
}

const ProjectThumbnail = props => {
    const { currentInd } = useContext(ProjectContext);
    return (<ThumbNail src={ProjectList[currentInd].thumbnail} />)
}


const MainCont = styled.div`
width: 100%; 
height: ${props => props.SectionHeight || '100%'};
//height: 100%;
z-index: 99;
text-align: center;
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
    
`

const Slider = styled.div`
    text-align: left;
`

const ListItem = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 25px; 
    cursor: pointer; 
    margin: 15px auto;
    z-index: 99;
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
    height: 100%; 
`

const H2header = styled.h2`
margin: auto;
text-align: center;

`