import React, { useState, useEffect, useRef, useContext, createContext, useCallback } from 'react';
import { ProjectList } from '../components/project_panel/projects.js';
import styled, { keyframes } from 'styled-components';
import uuid from 'react-uuid'; 
import { useLocation, useNavigate } from 'react-router-dom'
import { ProjectProfileContext, AppContext } from '../components/contextItem.js'; 
import RenderContactFrom from '../components/contactForm/contactForm.js'; 
import WhiteHamburger from '../assets/icons/hamburger_menu_white.png';
import BlackHamburger from '../assets/icons/Hamburger_icon.svg.png'; 

const RenderProjectProfile = props => {
    const location = useLocation(); 
    const { index } = location.state; 
    const [ menuOpened, setMenu ] = useState(false);
    const {
        desktopVersion,
    } = useContext(AppContext)    
    var MenuWidth = '300'; 
    const toggleMenu = () => {
        setMenu(prev => !prev); 
    }

    const closeMenu = () => {
        setMenu(prev => prev = false);
    }

    const {
        profileStyle, 
    } = ProjectList[index]; 

    /*code for the burger menu*/
    const [mobileIconColor, setMobileIconColor] = useState(true);  
   
    const context = {
        index, 
        menuOpened, 
        toggleMenu, 
        closeMenu,
        MenuWidth, 
        mobileIconColor, 
        setMobileIconColor
    } 
    return (
        <ProjectProfileContext.Provider value={context}>
            {desktopVersion ?
                <ToggleMenuButton id="MenuButton" onClick={toggleMenu}>Menu</ToggleMenuButton>
                :
                <RenderMobileIcon />
                }
            <RenderMenu />
            { profileStyle === 'standard' && 
                <RenderStandardStyle />
            
            }
        </ProjectProfileContext.Provider>
        )
}

export default RenderProjectProfile; 

const RenderStandardStyle = () => {
    const { index, setMobileIconColor } = useContext(ProjectProfileContext); 
    const { title,
        link,
        Github,
        description,
        attributesHeader,
        attributes,
        thumbnail,
        type,
        projectStyle,

    } = ProjectList[index]; 

    const ContentDivRef = useRef()
    var ContentDivElem = document.getElementById('ContentDiv');
    const ScrollEvent = () => {
        ContentDivElem = document.getElementById('ContentDiv');
        if (ContentDivElem.getBoundingClientRect().top < 0) {
            setMobileIconColor(false);
        }
        else {
            setMobileIconColor(true);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', ScrollEvent)
        return () => { document.removeEventListener('scroll', ScrollEvent) }
    }, [])

    useEffect(() => {
        if (ContentDivRef.current) {
            ContentDivElem = document.getElementById('ContentDiv')

        }
    }, [ContentDivRef.current])

    /*The following block of code is written so that everytime the user changes project on the screen,
     * the animation of the title wil rerun. 
     * */
    const [TitleAnimation, setTitleAnimation] = useState(FadeInAnimation)

    useEffect(() => {
        setTitleAnimation(NoAnimation); 
    }, [index])

    useEffect(() => {
        if (TitleAnimation == NoAnimation) {
            setTitleAnimation(FadeInAnimation)
        }
    }, [TitleAnimation])


    return (
        <MainCont>
             <TitleCont>
                <Title TitleAnimation={TitleAnimation}>{title}</Title>
            </TitleCont>
            <ContentDiv
                id="ContentDiv"
                ref={ContentDivRef}
            >
                <Thumbnail src={thumbnail} />
                <TextDiv>
                    <LinkCont id = "LinkCont">
                        {link !== '' && link !== null && 
                            <LinkButton
                                className='livesite'
                                href={link}
                            >Live Website</LinkButton>
                        }
                        {(Github !== '' && Github !== null) && 
                            <LinkButton
                                className='github'
                                href={Github}
                            >Github</LinkButton>
                        }
                    </LinkCont>
                    <DescriptionElem>{description}</DescriptionElem>
                    {attributesHeader !== '' ? 
                        <>
                            <AttributesHeader>{attributesHeader}</AttributesHeader>
                            <AttributesList>
                                {attributes !== '' ? 
                                    attributes.map(item => <li key={uuid()}>{item}</li>)
                                    :
                                    null
                                    }
                            </AttributesList>
                        </>
                        :
                        null
                        }
                </TextDiv> 
            </ContentDiv>
            <RenderContactFrom isHomePage={false} />
        </MainCont>
    )
}

const RenderMenu = props => {
    const {
        menuOpened,
        toggleMenu,
        closeMenu,
        MenuWidth,
    } = useContext(ProjectProfileContext); 

    var distance = `-${MenuWidth + 20}`
    const [translateDistance, setTranslateDistance] = useState(`translateX(${distance}px)`)

    const navigate = useNavigate(); 

    const GoHome = useCallback(() => navigate('/', {}), [navigate]);

    //miraculously, changing the project content with this works
    const ChangeProject = useCallback((page) => navigate('/project_profile', {
        state:{
            index: page, 
        }
    }), [navigate]) 

    useEffect(() => {
        if (menuOpened) {
            setTranslateDistance(`translateX(0px)`);
        }
        else {
            setTranslateDistance(`translateX(${distance}px)`)
        }
        //I added this here because it makes closing the menu by clicking outside it work 
        document.addEventListener('mousedown', checkIfClickedOutside); 
    }, [menuOpened])

    const menuRef = useRef();

    //if user clicks outside the menu, close the menu 
    const checkIfClickedOutside = event => {
        if (menuOpened && menuRef.current && !menuRef.current.contains(event.target)) {
            console.log('clicked')
            closeMenu(); 
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', checkIfClickedOutside); 
        return () => { document.removeEventListener('mousedown', checkIfClickedOutside);  }
    }, [])

    return (<Menu
        Status={translateDistance}
        Width={MenuWidth}
        id="Menu"
        ref={menuRef}
        >
        <MenuHeader>Projects</MenuHeader>
        <MenuItemWrapper>
            {ProjectList.map((item, index) => <MenuItem onClick={() => {
                ChangeProject(index);
                closeMenu();
            }}
                key={uuid()}
        >{item.title}</MenuItem>)}
            <MenuItem onClick={() => GoHome()}>Go Back</MenuItem>
            <MenuItem onClick={()=>closeMenu()}>Close Menu</MenuItem>
        </MenuItemWrapper>
    </Menu>)

}

const RenderMobileIcon = () => {
    const { mobileIconColor, toggleMenu } = useContext(ProjectProfileContext)

    useEffect(() => {
        console.log(`mobileIconColor: ${mobileIconColor}`)
    }, [mobileIconColor])

    return <BurgerIcon
        onClick={toggleMenu}
        src={mobileIconColor ? WhiteHamburger : BlackHamburger} />
}

const NoAnimation = keyframes``

const FadeInAnimation = keyframes`
0%{ 
    transform: translateY(100px); 
    opacity: 0.0; 
}
100%{
    transform: translateY(0px); 
    opacity: 1.0; 
}
`

const MainCont = styled.div`
height: 100%; 
width: 100%; 
font-family: 'Montserrat', sans-serif;
`
const ToggleMenuButton = styled.div`
border-radius: 10px 10px 0px 0px;
transform: rotateZ(90deg);
background-color: #2D2D2D; 
position: fixed; 
cursor: pointer; 
font-size: 30px; 
top: 5%; 
left: -20px;
right: auto; 
color: #ffffff;
z-index: 3;
padding: 5px;
`

const Menu = styled.div`
position: fixed; 
left: 0; 
right: auto;
width: ${props =>props.Width || "300px" }; 
height: 100%; 
background-color: #2D2D2D; 
color: #ffffff; 
transform: ${props => props.Status}; 
transition: transform 1s; 
z-index: 99;
overflow-y: auto;
`

const MenuHeader = styled.h2`
color: #ffffff; 
text-align: center;

`

const MenuItemWrapper = styled.div`
width: 90%; 
margin: 0 auto; 
`

const MenuItem = styled.div`
width: 100%; 
margin: 15px auto; 
cursor: pointer; 
user-select: none;
&:hover{
    background-color: #404040; 
    transform: translateX(5px) translateY(5px); 
}
&:active{
    background-color: #5E5E5E;
}
`

const TitleCont = styled.div`
width: 100%; 
background-color: #000000; 
background-attachment: fixed; 
position: relative; 
height: 90vh;
background-attachment: fixed;
@media screen and (max-width: 540px){
    height: 20vh;
}
`


const Title = styled.div`
font-size: 100px; 
color: #ffffff; 
position: absolute; 
top: 35%; 
left: 0; 
right: 0; 
user-select: none;
//animation: ${FadeInAnimation} 2s linear; 
animation: ${props =>props.TitleAnimation || FadeInAnimation} 2s linear; 
text-align: center; 
@media screen and (max-width: 1000px){
    font-size: 50px;
}
@media screen and (max-width: 540px){
    font-size: 30px;
}
@media screen and (max-width: 380px){
    font-size: 20px;
}
`


const Thumbnail = styled.img`
width: 660px; 
height: 90%;
max-height: 400px;
margin: auto;
display: block;
@media screen and (max-width: 1300px){
width: 560px; 
}
@media screen and (max-width: 1100px){
width: 400px; 
height: 40%;
}
@media screen and (max-width: 660px){
width: 300px; 
height: 30%;
}
@media screen and (max-width: 540px){
text-align: center;
margin: 10px auto;
animation: ${FadeInAnimation} 2s linear; 
}
@media screen and (max-width: 660px){
width: 90%; 
height: 30%;
}
`

const ContentDiv = styled.div`
display: grid; 
grid-template-columns: 50% 50%; 
margin: 40px auto;
@media screen and (max-width: 900px){
grid-template-columns: 60% 40%; 
}

@media screen and (max-width: 540px){
    display: block; 
    margin: auto;
}
`

const TextDiv = styled.div`
display: block; 
animation: ${FadeInAnimation} 2s linear; 
`

const AttributesDiv = styled.div`

`

const AttributesHeader = styled.div`
display: block; 
margin: 10px 10px;
`

const AttributesList = styled.ul``

const LinkButton = styled.a`
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
    text-decoration: none;
    &.livesite {
        background-color: #C2C2C2;
        color: #373737; 
}
    &.github{
        background-color: #373737; 
        color: #C2C2C2;
}
    &:hover{
        background-color: #e9e9e9; 
    }
    &:active{
        background-color: #ffffff; 
        transform: translateX(2px) translateY(2px); 
    }
`

const LinkCont = styled.div`
    display: grid; 
    text-align: center;
    margin: 20px auto; 
`

const DescriptionElem = styled.p`
    margin: 0px 10px;
`

const BurgerIcon = styled.img`
width: 25px;
height: 25px; 
margin: auto; 
position: fixed; 
top: 1%; 
left: 5px; 
right: auto;
cursor: pointer; 
z-index: 10;
`