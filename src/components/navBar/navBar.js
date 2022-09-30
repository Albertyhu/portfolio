import React, { useState, useEffect, createContext, useContext } from 'react';
import styled from 'styled-components'; 
import WhiteHamburger from '../../assets/icons/hamburger_menu_white.png';
import BlackHamburger from '../../assets/icons/Hamburger_icon.svg.png'; 
import { HomeContext } from '../contextItem.js'; 

const NavBarContext = createContext(); 

//home, projects, contact
const RenderNavBar = props => {
    const { level, isHomePage } = props;
    const [textColor, setTextColor] = useState('#ffffff')
    const [desktopVersion, setDesktop] = useState(true); 
    useEffect(() => {
        if ((level !== 'level0' && level !== 'level5' && level !== 'level6') && isHomePage) {
            setTextColor('#333333')
        }
        else
            setTextColor('#ffffff')
    }, [level])

    const resizeEvent = event => {
        if (window.innerWidth <= 540) {
            setDesktop(false)
        }
        else
            setDesktop(true)
    }

    useEffect(() => {
        document.addEventListener('resize', resizeEvent)
        return () => { document.removeEventListener('resize', resizeEvent)}
    }, [])


    useEffect(() => {
        resizeEvent();
    }, [window.innerWidth])

    var Home = document.querySelector("#SectionZero");
    var ProjectScreen = document.querySelector('#SectionFour')
    var ContactScreen = document.querySelector('#SectionSix')

    const ScrollTo = location => {
        location.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }


    const { ContainerRef } = useContext(HomeContext);  


    useEffect(() => {
        if (ContainerRef.current) {
             Home = document.querySelector("#SectionZero");
             ProjectScreen = document.querySelector('#SectionFour')
             ContactScreen = document.querySelector('#SectionSix')
        }
    }, [ContainerRef.current])

    const GoHome = () => {
        Home = document.querySelector("#SectionZero");
        ScrollTo(Home)
    }

    const GoProject = () => {
        ProjectScreen = document.querySelector('#SectionFour')
        ScrollTo(ProjectScreen)
    }

    const GoContact = () => {
        ContactScreen = document.querySelector('#SectionSix')
        ScrollTo(ContactScreen)
    }

    const context = {
        level,
        isHomePage,
        textColor, 
        GoHome,
        GoProject,
        GoContact, 
    }

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
        GoContact
    } = useContext(NavBarContext);


    return (
        <NavBar
            backgroundC={(level === 'level5' || level === 'level6') && isHomePage ? "#333333" : "none"}
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
                    onClick={GoContact}
                >Contact Me</Item>
            </ItemWrapper>
        </NavBar>
        )

}

const MobileMenu = () => {
    const { level, isHomePage } = useContext(NavBarContext);
   return( <NavBar
        backgroundC={(level === 'level5' || level === 'level6') && isHomePage ? "#333333" : "none"}
        id="Navbar"
   >
       <ItemWrapper id="NavbarWraper">
           {(level !== 'level0' && level !== 'level5' && level !== 'level6') ?
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