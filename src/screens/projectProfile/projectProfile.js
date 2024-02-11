import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  lazy, 
  Suspense, 
  useCallback, 
} from "react";
import { ProjectList } from "../../components/project_panel/projects.js";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import {
  ProjectProfileContext,
} from "../../context/contextItem.js";
import RenderContactFrom from "../../components/contactForm";
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
import RenderMenuComponent from '../../components/projectComponents/ProjectMenuBar';
import NotFoundPage from "../NotFound.js";
import {
    SectionFallback,
} from '../../components/fallbackComponents.js'
const TechnologyField = lazy(() => import('../../components/TechnologyField.js'));

const RenderProjectProfile = (props) => {
  const {project_name} = useParams(); 
  const ContentDivRef = useRef(null)

  const project = ProjectList.find(item => item.path === project_name); 
  
  const [TitleAnimation, setTitleAnimation] = useState(FadeInAnimation);

  useEffect(() => {
    if (TitleAnimation == NoAnimation) {
      setTitleAnimation(FadeInAnimation);
    }
  }, [TitleAnimation]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitleAnimation(NoAnimation);
  }, []);

  return !project ? 
  <NotFoundPage />
  :
  (
    <>
      <RenderMenuComponent 
        ContentDivRef={ContentDivRef}
      />
      <MainCont>
        <TitleCont>
          <Title TitleAnimation={TitleAnimation}>{project.title}</Title>
        </TitleCont>
        <ContentDiv id="ContentDiv" ref={ContentDivRef}>
          <Thumbnail src={project.thumbnail} />
          <TextDiv>
            <LinkCont id="LinkCont">
              {project.link !== "" && project.link !== null && (
                <LinkButton className="livesite" href={project.link}>
                  Live Website
                </LinkButton>
              )}
              {project.Github !== "" && project.Github !== null && (
                <LinkButton className="github" href={project.Github}>
                  Github
                </LinkButton>
              )}
            </LinkCont>
                <div
                className = "w-11/12 mx-auto mb-10 sm:mb-10"
                >{project.description}</div>
            {project.attributesHeader !== "" ? (
              <>
                <AttributesHeader>{project.attributesHeader}</AttributesHeader>
                <AttributesList>
                  {project.attributes !== ""
                    ? project.attributes.map((item) => <li key={uuid()}>{project.item}</li>)
                    : null}
                </AttributesList>
              </>
            ) : null}
                </TextDiv>

            </ContentDiv>
            <div className="mx-auto w-11/12">
                {project.body && 
                  <div
                    dangerouslySetInnerHTML={{__html: project.body}}
                  />
                }
                <Suspense fallback={<SectionFallback />}>
                    <TechnologyField
                        iconTitleColor="text-black"
                        icons={project.technologies}
                    />
                </Suspense>
            </div>
        <RenderContactFrom isHomePage={false} />
      </MainCont>
    </>
  );
};

export default RenderProjectProfile;
