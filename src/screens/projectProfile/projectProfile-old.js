import React, {
  useState,
  useEffect,
  useRef,
    useContext,
    lazy, 
  Suspense, 
} from "react";
import { ProjectList } from "../../components/project_panel/projects.js";
import uuid from "react-uuid";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ProjectProfileContext,
} from "../../context/contextItem.js";
import RenderContactFrom from "../../components/contactForm/index.js";
import {
  NoAnimation,
  FadeInAnimation,
  MainCont,
  TitleCont,
  Title,
  Thumbnail,
  ContentDiv,
  TextDiv,
  AttributesHeader,
  AttributesList,
  LinkButton,
  LinkCont,
  DescriptionElem,
} from "../../components/projectComponents/myStyle.js";
import { FormatDescription } from '../../utils/descriptionFormat.js';
import RenderMenuComponent from '../../components/projectComponents/ProjectMenuBar/index.js';
import RenderHero from '../../components/projectComponents/heroComponent.js'; 
import {
    SectionFallback,
} from '../../components/fallbackComponents.js'
const TechnologyField = lazy(() => import('../../components/TechnologyField.js'));

const RenderProjectProfile = (props) => {
  const location = useLocation();
  const { index } = location.state;

  const { profileStyle } = ProjectList[index];

  const ContentDivRef = useRef(null)
  const context = {
    index,
    ContentDivRef, 
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectProfileContext.Provider value={context}>
      <RenderMenuComponent 
        ContentDivRef={ContentDivRef}
      />
      {profileStyle === "standard" && <RenderStandardStyle />}
    </ProjectProfileContext.Provider>
  );
};

export default RenderProjectProfile;

const RenderStandardStyle = () => {
  const { 
      index,    
      ContentDivRef } = useContext(ProjectProfileContext);
  const {
    title,
    link,
    Github,
    description,
    attributesHeader,
    attributes,
    thumbnail,
    type,
    technologies, 
  } = ProjectList[index];

  /*The following block of code is written so that everytime the user changes project on the screen,
   * the animation of the title wil rerun.
   * */
  const [TitleAnimation, setTitleAnimation] = useState(FadeInAnimation);

  useEffect(() => {
    setTitleAnimation(NoAnimation);
  }, [index]);

  useEffect(() => {
    if (TitleAnimation == NoAnimation) {
      setTitleAnimation(FadeInAnimation);
    }
  }, [TitleAnimation]);

  return (
    <MainCont>
      <TitleCont>
        <Title TitleAnimation={TitleAnimation}>{title}</Title>
      </TitleCont>
      <ContentDiv id="ContentDiv" ref={ContentDivRef}>
        <Thumbnail src={thumbnail} />
        <TextDiv>
          <LinkCont id="LinkCont">
            {link !== "" && link !== null && (
              <LinkButton className="livesite" href={link}>
                Live Website
              </LinkButton>
            )}
            {Github !== "" && Github !== null && (
              <LinkButton className="github" href={Github}>
                Github
              </LinkButton>
            )}
          </LinkCont>
                  <DescriptionElem>{FormatDescription(description)}</DescriptionElem>
          {attributesHeader !== "" ? (
            <>
              <AttributesHeader>{attributesHeader}</AttributesHeader>
              <AttributesList>
                {attributes !== ""
                  ? attributes.map((item) => <li key={uuid()}>{item}</li>)
                  : null}
              </AttributesList>
            </>
          ) : null}
              </TextDiv>

          </ContentDiv>
          <div className="mx-auto w-11/12">
              <Suspense fallback={<SectionFallback />}>
                  <TechnologyField
                      iconTitleColor="text-black"
                      icons={technologies}
                  />
              </Suspense>
          </div>
      <RenderContactFrom isHomePage={false} />
    </MainCont>
  );
};
