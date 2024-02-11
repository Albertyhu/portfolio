import { useState, useEffect, useContext} from 'react'; 
import {
    ToggleMenuButton,
     BurgerIcon, 
 } from "./menuStyleComponents.js"; 
import { ProjectCollectionContext } from "../../context/contextItem.js"; 
import WhiteHamburger from "../../assets/icons/hamburger_menu_white.png";
import BlackHamburger from "../../assets/icons/Hamburger_icon.svg.png";
import "./style.css"; 

const RenderMenuToggle = () =>{

    return(
        <>
            <RenderDesktopIcon />
            <RenderMobileIcon />
        </>
    )
}

export default RenderMenuToggle; 

const RenderDesktopIcon = () =>{
  const {
    toggleMenu,
    menuIconRef, 
  } = useContext(ProjectCollectionContext)
  return (
    <ToggleMenuButton
      onClick = {toggleMenu}
      ref = {menuIconRef}
      className = "ToggleMenuButtonStyle"
    >
      Filter Projects
    </ToggleMenuButton>
  )
}

const RenderMobileIcon = () => {
  const { toggleMenu, ContentDivRef, menuIconRef } = useContext(ProjectCollectionContext);
  const [mobileIconColor, setMobileIconColor] = useState(true);
  const ScrollEvent = () => {
    if(ContentDivRef){
        if (ContentDivRef.current.getBoundingClientRect().top < 0) {
          setMobileIconColor(false);
        } else {
          setMobileIconColor(true);
        }
    }
  };
    useEffect(() => {
        document.addEventListener("scroll", ScrollEvent);
        return () => {
            document.removeEventListener("scroll", ScrollEvent);
        };
    });
  return (
    <div
      className = "h-[40px] w-full fixed bg-black z-[2] top-0 left-0 right-0 flex flex-row justify-center items-center sm:hidden"
    >
      <BurgerIcon
        onClick={toggleMenu}
        src={mobileIconColor ? WhiteHamburger : BlackHamburger}
        alt="MobileIcon"
        ref = {menuIconRef}
      />
    </div>
  );
};
