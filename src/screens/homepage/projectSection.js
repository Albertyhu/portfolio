import {
    useRef, 
    useCallback,
    useEffect
} from 'react'; 
import BlabberImage from '../../components/project_panel/thumbnails/Blabber.jpg'; 
import EarthToneImage from '../../components/project_panel/thumbnails/EarthTone.JPG'; 
import SquareImage from '../../components/fadeInSquareImage';
import RedditImage from '../../components/project_panel/thumbnails/RedditClone.JPG'; 

const ProjectSection = props =>{
    
    const ProjectOneRef = useRef(null); 
    const ProjectTwoRef = useRef(null);
    const ProjectThreeRef = useRef(null); 
    const ObserverRef = useRef(null); 

    const callback = useCallback((entry) =>{
        if(entry[0].isIntersecting){
            if(entry[0].target.classList.contains("opacity-0")){
                entry[0].target.classList.remove("opacity-0")
            }
            if(!entry[0].target.classList.contains("opacity-100")){
                entry[0].target.classList.add("opacity-100")
            }
            if(entry[0].target.classList.contains("translate-x-[-300px]")){
                entry[0].target.classList.remove("translate-x-[-300px]")
            }
            if(entry[0].target.classList.contains("translate-x-[300px]")){
                entry[0].target.classList.remove("translate-x-[300px]")
            }
            if(!entry[0].target.classList.contains("translate-x-[0px]")){
                entry[0].target.classList.add("translate-x-[0px]")
            }
        }
    }, [])
    
    const options = {
        //threshold: 0.25,
    } 
    ObserverRef.current = new IntersectionObserver(callback, options)
    useEffect(()=>{
       if(ProjectOneRef.current)
        ObserverRef.current.observe(ProjectOneRef.current)
    }, [ProjectOneRef.currrent])

    useEffect(()=>{
       if(ProjectTwoRef.current)
        ObserverRef.current.observe(ProjectTwoRef.current)
    }, [ProjectTwoRef.currrent])

    useEffect(()=>{
       if(ProjectThreeRef.current)
        ObserverRef.current.observe(ProjectThreeRef.current)
    }, [ProjectThreeRef.currrent])

    return(
        <section 
            id="ProjectSection"
            className = "w-full h-fit grid [&>div>div>h2]:font-bold">
            <div className = "w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative my-10 gap-[10px]">
                <SquareImage 
                    image={BlabberImage}
                    altText ="Blabber social media site"
                    imageRef={ProjectOneRef}
                    customStyle = "translate-x-[-300px]"
                />
                <div className = "text-white">
                    <h2>Blabber: Full Stack Social Media Site</h2>
                    <p>Blabber is a social media platform that allows users to speak their mind. It gives users many features found in prevalent social media sites such as Facebook and Instagram to play around with. It communicates with an API that is built with Node JS. In addition, the server uses RESTful and MVC design patterns to save and manage data in Mongo DB. Json Web Tokens are used to authenticate users.</p>
                </div>
            </div>
            <div className = "w-11/12 h-fit mx-auto flex md:grid md:grid-cols-2 block relative my-10 gap-[10px] flex-col-reverse">
                <div className = "text-white">
                    <h2>Earthtone: Full Stack Ecommerce Site</h2>
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
                </div>
                <SquareImage 
                    image={EarthToneImage}
                    altText ="Earthtone Ecommerce store"
                    imageRef={ProjectTwoRef}
                    customStyle = "translate-x-[300px]"
                />
            </div>
            <div className = "w-11/12 h-fit mx-auto grid md:grid-cols-2 block relative my-10 gap-[10px]">
                <SquareImage 
                    image={RedditImage}
                    altText ="Reddit"
                    imageRef={ProjectThreeRef}
                    customStyle = "translate-x-[-300px]"
                />
                <div className = "text-white">
                    <h2>Reddit Clone: React Social Media Site</h2>
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
                </div>
            </div>
        </section>
    )
}

export default ProjectSection; 