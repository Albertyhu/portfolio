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

const ProjectSection = props =>{
    
    const ProjectOneRef = useRef(null); 
    const ProjectTwoRef = useRef(null);
    const ProjectThreeRef = useRef(null); 
    const LeftObserverRef = useRef(null); 
    const RightObserverRef = useRef(null); 
    const HeaderRef = useRef(null); 
    const navigate = useNavigate(); 

    const {
        VisitBlabberDemo,
        GoProjectProfile
    } = ProjectNavigation(navigate)

    LeftObserverRef.current = new IntersectionObserver(useCallback(leftCallback, []))
    RightObserverRef.current = new IntersectionObserver(useCallback(rightCallback, []))

    const RotateObserver = new IntersectionObserver(useCallback(rotateUpCallback, []), {threshold: 0.50});
    const FadeUpObserver = new IntersectionObserver(useCallback(FadeUpCallback, []));

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

    useEffect(() => {
        if (HeaderRef.current) {
            RotateObserver.observe(HeaderRef.current)
        }
    })

    return(
        <section 
            id="ProjectSection"
            className="w-full h-fit grid [&>div>div>h2]:font-bold [&>div>div>h2]:text-2xl my-5 ProjectMainCont overflow-hidden">
            <div
                id="ProjectTitleDiv"
                className="w-full min-h-[100px]"
                ref={HeaderRef}
            >
                <h1
                    className="font-bold text-white text-center my-5 text-4xl uppercase transition-all duration-1000 RotateOut"
                >Projects</h1>
            </div>
            <div className="w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative gap-[10px]">
                <h2
                    className="block text-white font-bold md:hidden text-center text-2xl"
                >Blabber: Full Stack Social Media Site</h2>
                <SquareImage 
                    image={BlabberImage}
                    altText ="Blabber social media site"
                    imageRef={ProjectOneRef}
                    customStyle = "translate-x-[-300px]"
                />
                <div className = "text-white">
                    <h2
                        className="hidden md:block"
                    >Blabber: Full Stack Social Media Site</h2>
                    <p>Blabber is a social media platform that allows users to speak their mind. It gives users many features found in prevalent social media sites such as Facebook and Instagram to play around with. It communicates with an API that is built with Node JS. In addition, the server uses RESTful and MVC design patterns to save and manage data in Mongo DB. Json Web Tokens are used to authenticate users.</p>
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
                    <h2
                        className="hidden md:block"
                    >Earthtone: Full Stack Ecommerce Site</h2>
                    <p>Earth Tone is an E-Commerce site that sells tea products and is capable of handling real financial transactions. It has all the basic E-Commerce functionalities including, but not limited to creating an authenticated personal shopping accounting, finding products with the search bar, adding products to a cart/wish list, and creating an order. In addition, the site has an optimized user experience created with intuitive UX design practices, resulting in smooth and efficient navigation.</p>
                    <p>It has all the basic eCommerce functionalities including, but not limited to:</p>
                    <ul
                        className ="list-disc list-inside"
                    >
                        <li>Product Pages</li>
                        <li>Search functionality</li>
                        <li>Creating a personal account</li>
                        <li>Credit cart functionality</li>
                        <li>Order processing</li>
                    </ul>
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
                <h2
                    className="block text-white font-bold md:hidden text-center text-2xl"
                >Earthtone: Full Stack Ecommerce Site</h2>
            </div>
            <div className="w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative my-10 gap-[10px]">
                <h2
                    className="block text-white font-bold md:hidden text-center text-2xl"
                >Reddit Clone: React Social Media Site</h2>
                <SquareImage 
                    image={RedditImage}
                    altText ="Reddit"
                    imageRef={ProjectThreeRef}
                    customStyle = "translate-x-[-300px]"
                />
                <div className = "text-white">
                    <h2
                        className="hidden md:block"
                    >Reddit Clone: React Social Media Site</h2>
                    <p>This is a project where I cloned my favorite website Reddit using React JS and it is integrated with Firebase.</p>
                    <p>It has all the basic features of Reddit including, but not limited to:</p>
                    <ul
                        className ="list-disc list-inside"
                    >
                        <li>Creating a profile</li>
                        <li>Creating threads and being able to respond to them</li>
                        <li>Voting on thread and comments</li>
                        <li>Filtering thread feeds and comment feeds based on date, popularity and controversy</li>
                        <li>Toggling the display theme of each of the communities </li>
                    </ul>
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