import PropTypes from 'prop-types'; 
import { 
    ReactIcon, 
    CSSIcon, 
    HTMLIcon,
    JavaIcon,
    MongoIcon,
    NodeIcon,
    TailwindIcon
} from './iconComponents.js'; 

const TechnologyField = props =>{
    const {
        icons, 
        customStyle="",
        tailwindStyle ='w-full h-full mx-auto'
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
                return <TailwindIcon key = {`tail-${index}`} customStyle={tailwindStyle} />;
            default:
                return null; 
        }
    }

    return (
        <div className="my-10">
            <h2
            className = "font-bold text-center my-10"
            >Technologies utilized</h2>
            <div 
                id="TechnologyField"
                className="grid sm:grid-cols-2 md:grid-cols-3 mx-auto w-5/12 gap-[10px] sm:gap-[20px]"
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