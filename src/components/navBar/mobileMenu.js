import React, { useEffect, useContext, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components'; 
import { AppContext, NavBarContext, HomeContext } from '../contextItem.js'; 

const RenderMobileMenu = props => {
    const { closeMenu, menuOpen, ScrollTo } = useContext(NavBarContext);
    const { ContainerRef } = useContext(HomeContext); 
    const { desktopVersion } = useContext(AppContext);
    const [MenuWidth, setMenuWidth] = useState(Math.floor(window.innerWidth * 0.8)); 
    const [translateDistance, setTranslateDistance] = useState(`translateX(${MenuWidth}px)`)
    const menuRef = useRef();
    var menuElem = document.querySelector('#MobileMenu'); 

    //This function determines the width of the mobile menu according to the width of the window
    const resizeWidth = () => {
        setMenuWidth(Math.floor(window.innerWidth * 0.8)); 
    }

    //if user clicks outside the menu, close it
    const checkIfClickedOutside = event => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    }

    useEffect(() => {
        if (menuRef.current) {
            menuElem = document.querySelector('#MobileMenu');
        }
    }, [menuRef.current])

    useEffect(() => {
        resizeWidth(); 
        window.addEventListener("resize", resizeWidth); 
        return () => {
            window.removeEventListener("resize", resizeWidth);
        }
    }, [])

    //code for determining whether the mobile menu is opened or closed 
    useEffect(() => {
        if (menuOpen) {
            setTranslateDistance(`translateX(0px)`)
        }
        else {
            setTranslateDistance(`translateX(${MenuWidth}px)`)
        }

        document.addEventListener('mousedown', checkIfClickedOutside); 
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside); 
        }
    }, [menuOpen])

    var HomeElem = document.querySelector("#SectionZero");
    var ProjectScreen = document.querySelector('#SectionFour')
    var ContactScreen = document.querySelector('#SectionSix')

    useEffect(() => {
        if (ContainerRef.current) {
            HomeElem = document.querySelector("#SectionZero");
            ProjectScreen = document.querySelector('#SectionFour')
            ContactScreen = document.querySelector('#SectionSix')
        }
    }, [ContainerRef.current])

    //const ScrollTo = location => {
    //    location.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //}

    if (desktopVersion)
        return null
    else {
        return (<MenuDiv
            isOpen={menuOpen}
            id="MobileMenu"
            Width={`${MenuWidth}px`}
            ref={menuRef}
            Translate={translateDistance}
        >
            <MenuItem onClick={() => {
                ScrollTo(HomeElem);
                closeMenu();
            }}>Home</MenuItem>
            <MenuItem onClick={() => {
                ScrollTo(ProjectScreen);
                closeMenu();
            }}>Projects</MenuItem>
            <MenuItem onClick={() => {
                ScrollTo(ContactScreen);
                closeMenu();
            }}>Contact Me</MenuItem>
            <MenuItem onClick={closeMenu}>Close</MenuItem>
        </MenuDiv>)
    }
}

export default RenderMobileMenu; 

const MenuDiv = styled.div`
position: fixed; 
top: 0px; 
left: auto; 
right: 0px;
width: ${props => props.Width || "400px"}; 
height: 100%; 
background-color: #000000; 
z-index: 99;
text-align: center;
transform: ${props => props.Translate}; 
transition: transform 1s; 
`

const MenuItem = styled.div`
    color: #ffffff; 
    font-family: 'Montserrat', sans-serif;
    font-size: 25px;
    margin: 30px auto; 
    width: 100%;
    cursor: pointer; 
&:active{
    background-color: #818181; 
    color: #090909; 
}
`