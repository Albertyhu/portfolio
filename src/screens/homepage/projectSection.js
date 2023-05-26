import {
    useRef, 
    useCallback,
    useEffect
} from 'react'; 
import BlabberImage from '../../components/project_panel/thumbnails/Blabber.jpg'; 
import EarthToneImage from '../../components/project_panel/thumbnails/EarthTone.JPG'; 
import SquareImage from '../../components/fadeInSquareImage';
import RedditImage from '../../components/project_panel/thumbnails/RedditClone.JPG'; 
import { useNavigate } from 'react-router-dom'; 
import { ProjectNavigation } from '../../hooks/navigation.js';
import {
    leftCallback,
    rightCallback,
    rotateUpCallback,
    FadeUpCallback
} from './observerCallbacks.js'; 
import {
    HeaderRotateUp,
    ParagraphRotateUp,
    ScaleUpList, 
} from '../../components/observerAnimations/animatedComponents.js'; 

const ProjectSection = props =>{
    
    const ProjectOneRef = useRef(null); 
    const ProjectTwoRef = useRef(null);
    const ProjectThreeRef = useRef(null); 
    const LeftObserverRef = useRef(null); 
    const RightObserverRef = useRef(null); 
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

    const {
        VisitBlabberDemo,
        GoProjectProfile
    } = ProjectNavigation(navigate)

    const BlabberParagraphs = ["Blabber is a social media platform that allows users to speak their mind. It gives users many features found in prevalent social media sites such as Facebook and Instagram to play around with. It communicates with an API that is built with Node JS. In addition, the server uses RESTful and MVC design patterns to save and manage data in Mongo DB. Json Web Tokens are used to authenticate users."]
    const EarthToneParagraphs = ["Earth Tone is an E-Commerce site that sells tea products and is capable of handling real financial transactions. It has all the basic E-Commerce functionalities including, but not limited to creating an authenticated personal shopping accounting, finding products with the search bar, adding products to a cart/wish list, and creating an order. In addition, the site has an optimized user experience created with intuitive UX design practices, resulting in smooth and efficient navigation.",
        "It has all the basic eCommerce functionalities including, but not limited to:"];

    const RedditParagraphs = [
        "This is a project where I cloned my favorite website Reddit using React JS and it is integrated with Firebase.",
        "It has all the basic features of Reddit including, but not limited to:",
    ]

    const EarthToneList = [
        "Product Pages",
        "Search functionality",
        "Creating a personal account",
        "Credit cart functionality",
        "Order processing",
    ]

    const RedditList = [
        "Creating a profile",
        "Creating threads and being able to respond to them",
        "Voting on thread and comments",
        "Filtering thread feeds and comment feeds based on date, popularity and controversy",
        "Toggling the display theme of each of the communities ",
    ]

    LeftObserverRef.current = new IntersectionObserver(useCallback(leftCallback, []))
    RightObserverRef.current = new IntersectionObserver(useCallback(rightCallback, []))

    const RotateObserver = new IntersectionObserver(useCallback(rotateUpCallback, []), {threshold: 0.25});

    useEffect(()=>{
       if(ProjectOneRef.current)
        LeftObserverRef.current.observe(ProjectOneRef.current)
    }, [ProjectOneRef.currrent])

    useEffect(()=>{
        if (ProjectTwoRef.current)
            RightObserverRef.current.observe(ProjectTwoRef.current)
    }, [ProjectTwoRef.currrent])

    useEffect(()=>{
       if(ProjectThreeRef.current)
        LeftObserverRef.current.observe(ProjectThreeRef.current)
    }, [ProjectThreeRef.currrent])

    //useEffect(() => {
    //    if (HeaderRef.current) {
    //        RotateObserver.observe(HeaderRef.current)
    //    }
    //})

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
                    customStyle = "translate-x-[-300px]"
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
                            onClick={useCallback(() => GoProjectProfile(0), [navigate])}
                        >View Project</button>
                    </div>
                </div>
                <SquareImage 
                    image={EarthToneImage}
                    altText ="Earthtone Ecommerce store"
                    imageRef={ProjectTwoRef}
                    customStyle = "translate-x-[300px]"
                />
                <HeaderRotateUp
                    customStyle="block md:hidden text-white text-center font-bold"
                    elemName="EarthTone Observer Field"
                    text="Earthtone: Full Stack Ecommerce Site"
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
                    />
                    <div
                        className="w-full"
                    >
                        <button
                            className="btn-primary mx-auto mt-5 block"
                            onClick={useCallback(() => GoProjectProfile(1), [navigate])}
                        >View Project</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection; 