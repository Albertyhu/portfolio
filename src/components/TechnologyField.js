import {
    useRef,
    useState,
    useCallback, 
    useEffect, 
} from 'react'; 
import PropTypes from 'prop-types'; 
import { 
    ReactIcon, 
    CSSIcon, 
    HTMLIcon,
    JavaIcon,
    MongoIcon,
    NodeIcon,
    TailwindIcon,
    ViteIcon,
    WebpackIcon,
    ReduxIcon,
    FirebaseIcon,
    TypescriptIcon,
    JestIcon,
    GithubIcon
} from './iconComponents.js'; 

const TechnologyField = props =>{
    const {
        icons,
        title = "Technologies utilized",
        titleStyle = "",
        customStyle = "",
        customGrid, 
        tailwindStyle = 'w-full h-full mx-auto',
        viteStyle = 'w-full h-full mx-auto',
        webpackStyle = 'w-full h-full mx-auto',
        reduxStyle = 'w-full h-full mx-auto',
        firebaseStyle = 'w-full h-full mx-auto',
        typescriptStyle = 'w-full h-full mx-auto',
        jestStyle = 'w-full h-full mx-auto',
        githubStyle = 'w-full h-full mx-auto',
    } = props;

    const activated = icons.map((icon, index) =>ActivateIcon(icon.toLowerCase(), index))
    const [displayIcons, setDisplay] = useState(false); 
    function ActivateIcon(icon, index){
        switch(icon){
            case "react":
                return <ReactIcon key={`react-${index}`} customStyle={customStyle} index={index} />; 
            case "css":
                return <CSSIcon key={`css-${index}`} customStyle={customStyle} index={index} />;
            case "html":
                return <HTMLIcon key={`html-${index}`} customStyle={customStyle} index={index}  />;
            case "js":
                return <JavaIcon key={`js-${index}`} customStyle={customStyle} index={index}   />;
            case "nde":
                return <NodeIcon key={`node-${index}`} customStyle={customStyle} index={index}  />;
            case "mongo":
                return <MongoIcon key={`mongo-${index}`} customStyle={customStyle} index={index}  />;
            case "tail":
                return <TailwindIcon key={`tail-${index}`} customStyle={tailwindStyle} index={index} />;
            case 'vite':
                return <ViteIcon key={`vite-${index}`} customStyle={viteStyle} index={index} />;
            case 'wpack':
                return <WebpackIcon key={`webpack-${index}`} customStyle={webpackStyle} index={index} />;
            case 'redux':
                return <ReduxIcon key={`redux-${index}`} customStyle={reduxStyle} index={index} />;
            case 'firebase':
                return <FirebaseIcon key={`firebase-${index}`} customStyle={firebaseStyle} index={index} />;
            case 'ts':
                return <TypescriptIcon key={`typescript-${index}`} customStyle={typescriptStyle} index={index} />;
            case 'jest':
                return <JestIcon key={`jest-${index}`} customStyle={jestStyle} index={index} />;
            case 'git':
                return <GithubIcon key={`github-${index}`} customStyle={githubStyle} index={index} />;
            default:
                return null; 
        }
    }

    const wrapperRef = useRef(null); 
    const callback = entry => {
        if(entry[0].isIntersecting)
            setDisplay(true)
        else
            setDisplay(false)
    }
    const observer = new IntersectionObserver(useCallback(callback, []))

    useEffect(() => {
        if (wrapperRef.current) {
            observer.observe(wrapperRef.current)
        }
    }, [wrapperRef.current])

    return (

        <div
            className="my-10 min-height-[50px]"
            ref={wrapperRef}
        >
            <h2
                className={`${titleStyle} font-bold text-center my-10`}
            >{title}</h2>
            {displayIcons &&
                <div
                    id="TechnologyField"
                    className={`${customGrid ? customGrid : "grid sm:grid-cols-2 md:grid-cols-3 mx-auto w-5/12 gap-[10px] sm:gap-[20px]"}`}
                >
                    {activated.map(item => item)}
                </div>
            }
        </div>
    )
}

TechnologyField.propTypes = {
        react: PropTypes.bool, 
        css: PropTypes.bool, 
        html: PropTypes.bool,  
        java: PropTypes.bool, 
        mongo: PropTypes.bool, 
        node: PropTypes.bool, 
        tail: PropTypes.bool,  
}

export default TechnologyField;  