import React, { useState, useEffect, useRef, useContext, createContext, useCallback } from 'react';
import { ProjectList } from '../../components/project_panel/projects.js';
import styled, { keyframes } from 'styled-components';
import uuid from 'react-uuid'; 
import { useLocation, useNavigate } from 'react-router-dom'
import { ProjectProfileContext, AppContext } from '../../components/contextItem.js'; 
import RenderContactFrom from '../../components/contactForm/contactForm.js'; 
import WhiteHamburger from '../../assets/icons/hamburger_menu_white.png';
import BlackHamburger from '../../assets/icons/Hamburger_icon.svg.png'; 
import {
    NoAnimation,
    FadeInAnimation,
    MainCont, 
    ToggleMenuButton,
    Menu, 
    MenuHeader,
    MenuItemWrapper, 
    MenuItem, 
    TitleCont,
    Title,
    Thumbnail,
    ContentDiv, 
    TextDiv, 
    AttributesDiv,
    AttributesHeader,
    AttributesList,
    LinkButton,
    LinkCont, 
    DescriptionElem,
    BurgerIcon,
} from './myStyle.js'; 

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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

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
    const GoTestimonial = useCallback(() => navigate('/testimonial', {}), [navigate])
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
            <MenuItem onClick={() => GoHome()}>Home Page</MenuItem>
            <MenuItem onClick={() => GoTestimonial()}>Testimonials</MenuItem>
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
        src={mobileIconColor ? WhiteHamburger : BlackHamburger} alt = "MobileIcon" />
}


