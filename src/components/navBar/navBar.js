import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components'; 
import WhiteHamburger from '../../assets/icons/hamburger_menu_white.png';
import BlackHamburger from '../../assets/icons/Hamburger_icon.svg.png'; 
import { AppContext, NavBarContext, HomeContext } from '../contextItem.js'; 
import RenderMobileMenu from './mobileMenu.js'; 
import { useNavigate } from 'react-router'; 

//Currently, this nav bar is only for the home page 
const RenderNavBar = props => {
    const {
        level,
        isHomePage,
        ProjectPanelRef
    } = props;
    const [textColor, setTextColor] = useState('#ffffff')

    //mobile menu 
    const [menuOpen, setMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setMenuOpen(prev => !prev); 
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }

    const { desktopVersion } = useContext(AppContext); 

    const [aboveSectionOne, setAboveSectionOne] = useState(true); 

    useEffect(() => {
        if (isHomePage && (aboveSectionOne || level == 'level4' || level == 'level5' || level == 'level6'))
            setTextColor('#ffffff')
         else {
            setTextColor('#333333')
        }
    }, [level, aboveSectionOne])

    var MainContainerElem = document.querySelector('#HomeMainContainer');
    var Home = document.querySelector("#SectionZero");
    var SectionOne = document.querySelector('#SectionOne'); 
    var ProjectScreen = document.querySelector('#SectionFour')
    var ContactScreen = document.querySelector('#SectionSix')

    const ScrollTo = location => {
        location.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    const { ContainerRef } = useContext(HomeContext);  

    //The variables always lose reference to the corresponding DOM elements 
    //This is to ensure that they don't. 
    useEffect(() => {
        if (ContainerRef.current) {
            MainContainerElem = document.querySelector('#HomeMainContainer');
            Home = document.querySelector("#SectionZero");
            SectionOne = document.querySelector('#SectionOne'); 
            ProjectScreen = document.querySelector('#SectionFour')
            ContactScreen = document.querySelector('#SectionSix')
        }
    }, [ContainerRef.current])

    //The following code determines whether the color navbar text is white or black
    //SectionOne references SectionOne of renderPage.js 
    const scrollEvent = event => {
        SectionOne = document.querySelector('#SectionOne');
        if (SectionOne.getBoundingClientRect().top > 0) {
            setAboveSectionOne(prev => prev = true)
        }
        //If the top of the window passes the top SectionOne div, that means the navbar text is below 
        //the top of SectionOne div, thus it should be black
        else {
            setAboveSectionOne(prev => prev = false)
        }
    }

    const GoHome = () => {
        Home = document.querySelector("#SectionZero");
        ScrollTo(Home)
        
    }
    var ProjectPanelElem = document.querySelector('.ProjectMainCont'); 

    const GoProject = () => {
        ProjectScreen = document.querySelector('#SectionFour')
            // ScrollTo(ProjectScreen)
        ProjectPanelElem = document.querySelector('.ProjectMainCont'); 

        var position = ProjectPanelElem.getBoundingClientRect().bottom
        //MainContainerElem.scrollTo(0, position)
        ScrollTo(ProjectPanelElem)
    }
    var ContactElem = document.querySelector('#ContactForm_MainCont')
    const GoContact = () => {
        //ContactScreen = document.querySelector('#SectionSix')
        //ScrollTo(ContactScreen)
        ContactElem = document.querySelector('#ContactForm_MainCont')
        ScrollTo(ContactElem)
    }

    const navigate = useNavigate();

    const GoTestimonial = useCallback(() => navigate('/testimonial', {}), [navigate])

    const context = {
        level,
        isHomePage,
        textColor, 
        GoHome,
        GoProject,
        GoContact,
        GoTestimonial,
        closeMenu,
        toggleMenu, 
        menuOpen, 
        ScrollTo
    }

    //The following code determines whether the color navbar text is white or black
    useEffect(() => {
        MainContainerElem = document.querySelector('#HomeMainContainer');
        MainContainerElem.addEventListener('scroll', scrollEvent); 
        return () => { MainContainerElem.removeEventListener("scroll", scrollEvent)}
    }, [])

    return (
        <NavBarContext.Provider value = {context}>
            {desktopVersion ? <DesktopView /> : <MobileMenu />}
          </NavBarContext.Provider>
         )
            
}

export default RenderNavBar; 

const DesktopView = () => {
    const { level,
        isHomePage,
        textColor,
        GoHome,
        GoProject,
        GoContact,
        GoTestimonial 
    } = useContext(NavBarContext);


    return (
        <NavBar
            backgroundC={(level === 'level4' || level === 'level5' || level === 'level6') && isHomePage ? "#333333" : "none"}
            id="Navbar"
        >
            <ItemWrapper id="NavbarWraper">
                <Item
                    Color={textColor}
                    onClick={GoHome}
                >Home</Item>
                <Item
                    Color={textColor}
                    onClick={GoProject}
                >Projects</Item>
                <Item
                    Color={textColor}
                    onClick={GoTestimonial}
                >Testimonials</Item>
                <Item
                    Color={textColor}
                    onClick={GoContact}
                >Contact Me</Item>
            </ItemWrapper>
        </NavBar>
        )

}

const MobileMenu = () => {
    const { level, isHomePage, toggleMenu } = useContext(NavBarContext);
    const { ContainerRef } = useContext(HomeContext); 
    var HomeContainerElem = document.querySelector("#HomeMainContainer");
    var SectionOneElem = document.querySelector("#SectionOne")

    //This is used to determine if the burger menu is on the hero screen. 
    //Since the hero screen is dark, the burger menu should be white.
    //Otherwise, it should be black. 
    const [onHero, setOnHero] = useState(function () {
        SectionOneElem = document.querySelector("#SectionOne")
        return SectionOneElem.getBoundingClientRect().top > 0
    } ? true : false)

    const scrollEvent = () => {
        if (SectionOneElem.getBoundingClientRect().top > 0) {
            setOnHero(true)
        }
        else {
            setOnHero(false)
        }
    }

    const setElements = useCallback(() => {
        HomeContainerElem = document.querySelector("#HomeMainContainer");
        SectionOneElem = document.querySelector("#SectionOne")
    }, [])

    useEffect(() => {
        console.log(ContainerRef)
        if (ContainerRef.current) {
            setElements();
            HomeContainerElem.addEventListener("scroll", scrollEvent)
        }
    }, [ContainerRef.current])

   return( <NavBar
        backgroundC={(level === 'level5' || level === 'level6') && isHomePage ? "#333333" : "none"}
        id="MobileNavbar"
   >
       <RenderMobileMenu />
       <ItemWrapper id="NavbarWraper" onClick={toggleMenu}>
           {(!onHero && level !== 'level5' && level !== 'level6') ?
               <BurgerIcon src={BlackHamburger} />
               :
               <BurgerIcon src={WhiteHamburger} />}
       </ItemWrapper>
   </NavBar>)
}

const NavBar = styled.div`
position: fixed;
top: 0px; 
left: 0px; 
right: 0px; 
width: 100%; 
height: fit-content; 
background-color: ${props => props.backgroundC || 'none'};
display: block; 
opacity: 1;
z-index: 20;
text-align: right;
transition: background-color 1s; 
justify-content: flex-end; 
padding: 10px 0px;
`

const ItemWrapper = styled.div`
width: fit-content; 
display: block; 
margin: 0px 30px 0px auto;
text-align: right;
`

const Item = styled.div`
display: inline-block; 
color: ${props => props.Color || "#ffffff"}; 
cursor: pointer;
margin: auto 20px; 
z-index: 21;
transition: color 1s; 
&:hover{
text-decoration: underline;
font-weight: bold;
}
`

const BurgerIcon = styled.img`
width: 50px;
height: 50px; 
margin: auto; 
`