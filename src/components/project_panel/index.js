import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  createContext,
  useCallback,
} from "react";
import { ProjectList } from "./projects.js";
import uuid from "react-uuid";
import "./projectStyle.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/contextItem.js";
import {
  MainCont,
  Panel,
  IndexShell,
  Slider,
  ListItem,
  Text,
  ThumbNail,
  H2header,
  ThumbNailWrapper,
  Button,
} from "./projectStyle.js";
import { ProjectNavigation } from '../../hooks/navigation.js'; 

const ProjectContext = createContext();

const RenderProjectPanel = (props) => {
  const [currentInd, setCurrentInd] = useState(0);
  const [inView, setInView] = useState(false);
  const TRIGGER = 75;

  var MainContElem;
  const ProjectPanelRef = useRef();

  const navigate = useNavigate();

  const GoProjectProfile = useCallback(
    (page) =>
      navigate("/project_profile", {
        state: {
          index: page,
        },
      }),
    [navigate]
  );

  const context = {
    currentInd,
    setCurrentInd,
    inView,
    GoProjectProfile,
  };

  const ScrollEvent = (event) => {
    MainContElem = document.querySelector(".ProjectMainCont");
    if (MainContElem.getBoundingClientRect().top <= TRIGGER) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    if (ProjectPanelRef.current) {
      MainContElem = document.querySelector(".ProjectMainCont");
      MainContElem.classList.add("ProjectInView");
    }
  }, [ProjectPanelRef.current]);

  useEffect(() => {
    window.addEventListener("scroll", ScrollEvent);
    return () => {
      window.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  if (ProjectList.length === 0) {
    return (
      <MainCont className="ProjectMainCont" ref={ProjectPanelRef}>
        <div>Scroll Up</div>
        <Panel>
          <Text>No projects to show.</Text>
        </Panel>
      </MainCont>
    );
  }

  return (
    <ProjectContext.Provider value={context}>
      <MainCont
        className="ProjectMainCont"
        ref={ProjectPanelRef}
        SectionHeight={"auto"}
      >
        <Panel className="ProjectPanel">
          <RenderProjectIndex />
        </Panel>
      </MainCont>
    </ProjectContext.Provider>
  );
};

export default RenderProjectPanel;

const RenderProjectIndex = (props) => {
  const { desktopVersion } = useContext(AppContext);

  return desktopVersion ? (
    <IndexShell>
      <RenderSlider />
      <ProjectThumbnail />
    </IndexShell>
  ) : (
    <IndexShell>
      <ProjectThumbnail />
      <RenderSlider />
    </IndexShell>
  );
};

const RenderSlider = (props) => {
    const navigate = useNavigate(); 
    const { VisitBlabberDemo } = ProjectNavigation(navigate)
      return (
        <Slider>
              <H2header>Projects</H2header>
              <ListItem
                  onClick={() =>VisitBlabberDemo()}
              >Blabber: Full Stack Social Media Site</ListItem>
          {ProjectList.map((item, index) => (
            <RenderListItem title={item.title} index={index} key={uuid()} />
          ))}
        </Slider>
      );
};

const RenderListItem = ({ title, index }) => {
  const { setCurrentInd, currentInd } = useContext(ProjectContext);

  return (
    <ListItem
      onClick={() => {
        setCurrentInd(index);
      }}
      BackgroundC={index === currentInd ? "#E9E9E9" : "none"}
    >
      {title}
    </ListItem>
  );
};

const ProjectThumbnail = (props) => {
  const { currentInd, GoProjectProfile } = useContext(ProjectContext);

  return (
    <ThumbNailWrapper className="Project_thumbNailWrapper">
      <ThumbNail
        src={ProjectList[currentInd].thumbnail}
        className="Project_ThumbNail"
        alt="Thumbnail"
      />
      <Button onClick={() => GoProjectProfile(currentInd)}>View Project</Button>
    </ThumbNailWrapper>
  );
};
