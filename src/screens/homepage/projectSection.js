import {
    useRef, 
    useCallback,
} from 'react'; 
import BlabberImage from '../../components/project_panel/thumbnails/Blabber.jpg'; 
import EarthToneImage from '../../components/project_panel/thumbnails/EarthTone.JPG'; 
import SquareImage from '../../components/fadeInSquareImage';
import RedditImage from '../../components/project_panel/thumbnails/RedditClone.JPG'; 
import { useNavigate } from 'react-router-dom'; 
import { ProjectNavigation } from '../../hooks/navigation.js';
import {
    HeaderRotateUp,
    ParagraphRotateUp,
    ScaleUpList, 
} from '../../components/observerAnimations/animatedComponents.js'; 
import {
    BlabberParagraphs,
    EarthToneParagraphs,
    RedditParagraphs,
    EarthToneList,
    RedditList
} from './textComponents.js'; 

const ProjectSection = props =>{
    
    const ProjectOneRef = useRef(null); 
    const ProjectTwoRef = useRef(null);
    const ProjectThreeRef = useRef(null); 
    const HeaderRef = useRef(null); 
    const ProjectOneMobileHeaderRef = useRef(null); 
    const ProjectOneHeaderRef = useRef(null); 
    const BalbberParaRef = useRef(null)
    const EarthToneMobileHeaderRef = useRef(null); 
    const EarthToneHeaderRef = useRef(null); 
    const RedditMobileHeaderRef = useRef(null); 
    const RedditHeaderRef = useRef(null); 
    const EarthToneParaRef = useRef(null); 
    const EarthToneListRef = useRef(null); 
    const RedditParaRef=useRef(null)
    const RedditListtRef = useRef(null);
    const navigate = useNavigate(); 

    const ViewAllProjectsButton = () =>{
        return(
            <button
                onClick = {useCallback(()=>navigate("/projects"), [])}
                type = "button"
                className = "btn-secondary mx-auto my-10"
            >View More</button>
        )
    }
    const {
        VisitBlabberDemo,
        GoProjectProfile,
        VisitEarthtoneDemo, 
        VisitRedditDemo
    } = ProjectNavigation(navigate)

    return(
        <section 
            id="ProjectSection"
            className="w-full h-fit grid [&>div>div>h2]:font-bold [&>div>div>h2]:text-2xl my-5 ProjectMainCont overflow-hidden">
            <HeaderRotateUp
                customStyle="w-full min-h-[100px]"
                elemName="ProjectTitleDiv"
                text="Projects"
                customHeaderStyle="font-bold text-white text-center my-5 text-4xl uppercase"
                elemRef={HeaderRef}
                threhold={0.5}
            />
            <div className="w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative gap-[10px]">
                <HeaderRotateUp
                    customStyle="block md:hidden"
                    elemName="Blabber Mobile Header Observer Field"
                    text="Blabber: Full Stack Social Media Site"
                    elemRef={ProjectOneMobileHeaderRef}
                />
                <SquareImage 
                    image={BlabberImage}
                    altText ="Blabber social media site"
                    imageRef={ProjectOneRef}
                    customStyle="translate-x-[-300px]"
                    direction="left"
                />
                <div className="text-white">
                    <HeaderRotateUp
                        customStyle="hidden md:block text-white"
                        elemName="Blabber Header Observer Field"
                        text="Blabber: Full Stack Social Media Site"
                        elemRef={ProjectOneHeaderRef}
                    />
                    <ParagraphRotateUp
                        customStyle="text-white"
                        elemName="Blabber paragraph observer field"
                        textArray={BlabberParagraphs}
                        elemRef={BalbberParaRef}
                    />
                    <div
                        className="w-full"
                    >
                        <button
                            className="btn-primary mx-auto mt-5 block" 
                            onClick={() => VisitBlabberDemo()}
                        >View Project</button>
                    </div>
                </div>
            </div>
            <div className="w-11/12 h-fit mx-auto flex md:grid md:grid-cols-2 block relative my-10 gap-[10px] flex-col-reverse">
                <div className = "text-white">
                    <HeaderRotateUp
                        customStyle="hidden md:block text-white"
                        elemName="EarthTone Observer Field"
                        text="Earthtone: Full Stack Ecommerce Site"
                        elemRef={EarthToneHeaderRef}
                    />
                    <ParagraphRotateUp
                        customStyle="text-white"
                        elemName="Earthtone paragraph observer field"
                        textArray={EarthToneParagraphs}
                        elemRef={EarthToneParaRef}
                    />
                    <ScaleUpList
                        customStyle="text-white"
                        elemName="Earthtone list observer field"
                        list={EarthToneList}
                        elemRef={EarthToneListRef}
                    />
                    <div
                        className="w-full"
                    >
                        <button
                            className="btn-primary mx-auto mt-5 block"
                            onClick={useCallback(() => VisitEarthtoneDemo(), [navigate])}
                        >View Project</button>
                    </div>
                </div>
                <SquareImage 
                    image={EarthToneImage}
                    altText ="Earthtone Ecommerce store"
                    imageRef={ProjectTwoRef}
                    customStyle="translate-x-[300px]"
                    direction ="right"
                />
                <HeaderRotateUp
                    customStyle="block md:hidden text-white text-center font-bold"
                    elemName="EarthTone Observer Field"
                    text="Earth Tone: Full Stack Ecommerce Site"
                    elemRef={EarthToneMobileHeaderRef}
                />
            </div>
            <div className="w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative my-10 gap-[10px]">
                <HeaderRotateUp
                    customStyle="block md:hidden text-white text-center font-bold"
                    elemName="Reddit Observer Field"
                    text="Reddit Clone: React Social Media Site"
                    elemRef={RedditMobileHeaderRef}
                />
                <SquareImage 
                    image={RedditImage}
                    altText ="Reddit"
                    imageRef={ProjectThreeRef}
                    customStyle = "translate-x-[-300px]"
                />
                <div className = "text-white">
                    <HeaderRotateUp
                        customStyle="hidden md:block text-white text-center font-bold"
                        elemName="Reddit Observer Field"
                        text="Reddit Clone: React Social Media Site"
                        elemRef={RedditHeaderRef}
                    />
                    <ParagraphRotateUp
                        customStyle="text-white"
                        elemName="Reddit paragraph observer field"
                        textArray={RedditParagraphs}
                        elemRef={RedditParaRef}
                    />
                    <ScaleUpList
                        customStyle="text-white"
                        elemName="Reddit list observer field"
                        list={RedditList}
                        elemRef={RedditListtRef}
                        direction="left"
                    />
                    <div
                        className="w-full"
                    >
                        <button
                            className="btn-primary mx-auto mt-5 block"
                            onClick={useCallback(() => VisitRedditDemo(), [navigate])}
                        >View Project</button>
                    </div>
                </div>
            </div>
            <div>
            <h3
                className = "text-white text-2xl text-center"
            >Click here to view additional projects</h3>
            <ViewAllProjectsButton />
            </div>
        </section>
    )
}

export default ProjectSection; 