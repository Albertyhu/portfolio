import { useState, useEffect, useContext} from 'react'; 
import {
    ToggleMenuButton,
     BurgerIcon, 
 } from "./menuStyleComponents.js"; 
import { ProjectCollectionContext } from "../../context/contextItem.js"; 
import WhiteHamburger from "../../assets/icons/hamburger_menu_white.png";
import BlackHamburger from "../../assets/icons/Hamburger_icon.svg.png";
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
  const {toggleMenu} = useContext(ProjectCollectionContext)
  return (
    <ToggleMenuButton
      onClick = {toggleMenu}
    >
      Filter Projects
    </ToggleMenuButton>
  )
}

const RenderMobileIcon = () => {
  const { toggleMenu, ContentDivRef } = useContext(ProjectCollectionContext);
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
    <BurgerIcon
      onClick={toggleMenu}
      src={mobileIconColor ? WhiteHamburger : BlackHamburger}
      alt="MobileIcon"
    />
  );
};
