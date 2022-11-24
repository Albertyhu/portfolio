import React, { useState, useEffect, useCallback, useContext } from 'react';
import styled from 'styled-components'; 
import WhiteHamburger from '../../assets/icons/hamburger_menu_white.png';
import BlackHamburger from '../../assets/icons/Hamburger_icon.svg.png'; 
import { AppContext, NavBarContext, HomeContext } from '../contextItem.js'; 
import RenderMobileMenu from './mobileMenu.js'; 
import { useNavigate } from 'react-router'; 
import {
    NavBar, 
    ItemWrapper,
    Item,
    BurgerIcon, 
} from './myStyle.js';
//Currently, this nav bar is only for the home page 
const RenderNavBar = props => {
    const {
        level,
        isHomePage,
    } = props;
    const [textColor, setTextColor] = useState('#ffffff')
    var SectionTwo = document.querySelector("#Section2")
    const TRIGGER = 48; 
    //mobile menu 
    const [menuOpen, setMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setMenuOpen(prev => !prev); 
    }
    const closeMenu = () => {
        setMenuOpen(false)
    }

    const { desktopVersion } = useContext(AppContext); 

    const [VisibleBackground, setVisibleBackground] = useState(false); 

    useEffect(() => {
        if (isHomePage && VisibleBackground)
            setTextColor('#ffffff')
         else {
            setTextColor('#333333')
        }
    }, [level, VisibleBackground])

    var Home = document.querySelector("#Section0");
    var SectionOne = document.querySelector('#Section1'); 


    const ScrollTo = location => {
        location.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }

    //The following code determines whether the color navbar text is white or black
    //SectionOne references SectionOne of renderPage.js 
    const scrollEvent = event => {
        SectionTwo = document.querySelector("#Section2")
        if (SectionTwo?.getBoundingClientRect().top <= TRIGGER) {
            setVisibleBackground(prev => prev = true)
        }
        //If the top of the window passes the top SectionOne div, that means the navbar text is below 
        //the top of SectionOne div, thus it should be black
        else {
            setVisibleBackground(prev => prev = false)
        }
    }

    const GoHome = () => {
        Home = document.querySelector("#Section0");
        ScrollTo(Home)
        
    }
    var ProjectPanelElem = document.querySelector('.ProjectMainCont'); 

    const GoProject = () => {
        ProjectPanelElem = document?.querySelector('.ProjectMainCont'); 
        ScrollTo(ProjectPanelElem)
    }
    var ContactElem = document.querySelector('#ContactForm_MainCont')
    const GoContact = () => {
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
        ScrollTo,
        VisibleBackground
    }

    //The following code determines whether the color navbar text is white or black
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent); 
        return () => { window.removeEventListener("scroll", scrollEvent)}
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
        GoTestimonial,
        VisibleBackground
    } = useContext(NavBarContext);


    return (
        <NavBar
            backgroundC={VisibleBackground && isHomePage ? "#333333" : "none"}
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
    const {
        level,
        isHomePage,
        toggleMenu,
        VisibleBackground
    } = useContext(NavBarContext);
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

   return( <NavBar
        backgroundC={VisibleBackground && isHomePage ? "#333333" : "none"}
        id="MobileNavbar"
   >
       <RenderMobileMenu />
       <ItemWrapper id="NavbarWraper" onClick={toggleMenu}>
           {(!onHero && level !== 'level5' && level !== 'level6') ?
               <BurgerIcon src={BlackHamburger} alt = "MobileMenu" />
               :
               <BurgerIcon src={WhiteHamburger} alt="MobileMenu" />}
       </ItemWrapper>
   </NavBar>)
}
