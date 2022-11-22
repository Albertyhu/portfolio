import React, { useEffect, useContext, useState, useRef } from 'react';
import { AppContext, NavBarContext, HomeContext } from '../contextItem.js'; 
import { MenuDiv, MenuItem } from './myStyle.js'; 

const RenderMobileMenu = props => {
    const { closeMenu, menuOpen, ScrollTo, GoTestimonial } = useContext(NavBarContext);
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

    var ProjectScreen = document.querySelector('#Section3')
    var ContactScreen = document.querySelector('#Section4')

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
                window.scrollTo(0,0);
                closeMenu();
            }}>Home</MenuItem>
            <MenuItem onClick={() => {
                ScrollTo(ProjectScreen);
                closeMenu();
            }}>Projects</MenuItem>
            <MenuItem onClick={() => {
                GoTestimonial();
                closeMenu();
            }}>Testimonials</MenuItem>
            <MenuItem onClick={() => {
                ScrollTo(ContactScreen);
                closeMenu();
            }}>Contact Me</MenuItem>
            <MenuItem onClick={closeMenu}>Close</MenuItem>
        </MenuDiv>)
    }
}

export default RenderMobileMenu; 
