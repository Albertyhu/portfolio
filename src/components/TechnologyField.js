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

    function ActivateIcon(icon, index){
        switch(icon){
            case "react":
                return <ReactIcon key = {`react-${index}`} customStyle ={customStyle} />; 
            case "css":
                return <CSSIcon key = {`css-${index}`} customStyle ={customStyle}   />;
            case "html":
                return <HTMLIcon key = {`html-${index}`} customStyle ={customStyle}  />;
            case "js":
                return <JavaIcon key = {`js-${index}`} customStyle ={customStyle}   />;
            case "nde":
                return <NodeIcon key = {`node-${index}`}  customStyle ={customStyle}  />;
            case "mongo":
                return <MongoIcon key = {`mongo-${index}`} customStyle ={customStyle}  />;
            case "tail":
                return <TailwindIcon key={`tail-${index}`} customStyle={tailwindStyle} />;
            case 'vite':
                return <ViteIcon key={`vite-${index}`} customStyle={viteStyle} />;
            case 'wpack':
                return <WebpackIcon key={`webpack-${index}`} customStyle={webpackStyle} />;
            case 'redux':
                return <ReduxIcon key={`redux-${index}`} customStyle={reduxStyle} />;
            case 'firebase':
                return <FirebaseIcon key={`firebase-${index}`} customStyle={firebaseStyle} />;
            case 'ts':
                return <TypescriptIcon key={`typescript-${index}`} customStyle={typescriptStyle} />;
            case 'jest':
                return <JestIcon key={`jest-${index}`} customStyle={jestStyle} />;
            case 'git':
                return <GithubIcon key={`github-${index}`} customStyle={githubStyle} />;
            default:
                return null; 
        }
    }

    return (
        <div className="my-10">
            <h2
                className={`${titleStyle} font-bold text-center my-10`}
            >{title}</h2>
            <div
                id="TechnologyField"
                className={`${customGrid ? customGrid : "grid sm:grid-cols-2 md:grid-cols-3 mx-auto w-5/12 gap-[10px] sm:gap-[20px]"}`}
            >
                {activated.map(item => item)}
            </div>
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