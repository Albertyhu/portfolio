import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { ProjectList } from "../../project_panel/projects.js";
import uuid from "react-uuid";
import {  useNavigate } from "react-router-dom";
import {
  AppContext,
  ProjectNavBarContext,
} from "../../../context/contextItem.js";
import { ProjectNavigation } from '../../../hooks/navigation.js';
import WhiteHamburger from "../../../assets/icons/hamburger_menu_white.png";
import BlackHamburger from "../../../assets/icons/Hamburger_icon.svg.png";
import {
  ToggleMenuButton,
  Menu,
  MenuHeader,
  MenuItemWrapper,
  MenuItem,
  BurgerIcon,
} from "./menuStyle.js";

const RenderMenuComponent= props => {
  const { 
      ContentDivRef,  
      } = props; 
  const [menuOpened, setMenu] = useState(false);
  const { 
      desktopVersion,
  } = useContext(AppContext);
  var MenuWidth = "320";
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu((prev) => (prev = false));
  };

  /*code for the burger menu*/
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

  const context = {
    menuOpened,
    toggleMenu,
    closeMenu,
    MenuWidth,
    mobileIconColor,
    setMobileIconColor,
  };

  useEffect(() => {
    document.addEventListener("scroll", ScrollEvent);
    return () => {
      document.removeEventListener("scroll", ScrollEvent);
    };
  });

  return (
    <ProjectNavBarContext.Provider value={context}>
      {desktopVersion ? (
        <ToggleMenuButton id="MenuButton" onClick={toggleMenu}>
          Menu
        </ToggleMenuButton>
      ) : (
        <RenderMobileIcon />
      )}
      <RenderMenu />
    </ProjectNavBarContext.Provider>
  );
};

export default RenderMenuComponent;

const RenderMenu = (props) => {
  const { 
      menuOpened,
      closeMenu, 
      MenuWidth 
  } = useContext(ProjectNavBarContext);

  var distance = `-${MenuWidth}`;
  const [translateDistance, setTranslateDistance] = useState(
    `translateX(${distance}px)`
  );

  const navigate = useNavigate();
    const { VisitBlabberDemo } = ProjectNavigation(navigate)
  const GoHome = useCallback(() => navigate("/", {}), [navigate]);
  const GoTestimonial = useCallback(
    () => navigate("/testimonial", {}),
    [navigate]
  );

  //miraculously, changing the project content with this works
  const ChangeProject = useCallback(
    (page) =>
      navigate("/project_profile", {
        state: {
          index: page,
        },
      }),
    [navigate]
  );

  useEffect(() => {
    if (menuOpened) {
      setTranslateDistance(`translateX(0px)`);
    } else {
      setTranslateDistance(`translateX(${distance}px)`);
    }
    //I added this here because it makes closing the menu by clicking outside it work
    document.addEventListener("mousedown", checkIfClickedOutside);
  }, [menuOpened]);

  const menuRef = useRef();

  //if user clicks outside the menu, close the menu
  const checkIfClickedOutside = (event) => {
    if (
      menuOpened &&
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      console.log("clicked");
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  return (
    <Menu Status={translateDistance} Width={MenuWidth} id="Menu" ref={menuRef}>
      <MenuHeader>Projects</MenuHeader>
          <MenuItemWrapper>
              <MenuItem onClick={useCallback(()=>VisitBlabberDemo(), [navigate]) }>Blabber: Full Stack Social Media Site</MenuItem>
        {ProjectList.map((item, index) => (
          <MenuItem
            key={uuid()}
            onClick={() => {
              ChangeProject(index);
              closeMenu();
            }}
          >
            {item.title}
          </MenuItem>
        ))}
        <MenuItem onClick={() => GoHome()}>Home Page</MenuItem>
        <MenuItem onClick={() => GoTestimonial()}>Testimonials</MenuItem>
        <MenuItem onClick={() => closeMenu()}>Close Menu</MenuItem>
      </MenuItemWrapper>
    </Menu>
  );
};

const RenderMobileIcon = () => {
  const { mobileIconColor, toggleMenu } = useContext(ProjectNavBarContext);

  return (
    <BurgerIcon
      onClick={toggleMenu}
      src={mobileIconColor ? WhiteHamburger : BlackHamburger}
      alt="MobileIcon"
    />
  );
};