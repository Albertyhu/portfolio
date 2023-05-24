import ReactPng from '../assets/icons/technologies/react.png';
import CSSPng from '../assets/icons/technologies/css-3.png';
import HTMLPng from '../assets/icons/technologies/html-5.png';
import JavaPng from '../assets/icons/technologies/java-script.png';
import MongoSvg from '../assets/icons/technologies/mongodb.svg';
import NodePng from '../assets/icons/technologies/nodejs.png';
import TailwindSvg from '../assets/icons/technologies/tailwind-css.svg';
import PropTypes from 'prop-types';

 const IconComp = props => {
    const {
        image,
        altText = "icon",
        customStyle = ''
    } = props; 


    return (
        <img
            src={image}
            alt={altText}
            className={customStyle}
        />
        )
}

IconComp.propTypes = {
    altText: PropTypes.string, 
    customStyle: PropTypes.string, 
} 

 const ReactIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={ReactPng}
            customStyle={customStyle}
            altText="React Icon"
        />
}

 const CSSIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={CSSPng}
            customStyle={customStyle}
            altText="React Icon"
        />
}

 const HTMLIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={HTMLPng}
            customStyle={customStyle}
            altText="React Icon"
        />
}

 const JavaIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={JavaPng}
            customStyle={customStyle}
            altText="React Icon"
        />
}

 const MongoIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={MongoSvg}
            customStyle={customStyle}
            altText="React Icon"
        />
}

 const NodeIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={NodePng}
            customStyle={customStyle}
            altText="React Icon"
        />
}
 const TailwindIcon = props => {
    const {
        customStyle = 'w-full h-full mx-auto'
    } = props; 
    return <IconComp
            image={TailwindSvg}
            customStyle={customStyle}
            altText="React Icon"
        />
}


export {
    ReactIcon, 
    CSSIcon, 
     HTMLIcon,
     JavaIcon,
     MongoIcon,
     NodeIcon,
     TailwindIcon
}