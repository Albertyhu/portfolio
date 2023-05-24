import ReactPng from '../assets/icons/technologies/react.png';
import PropTypes from 'prop-types';

 const IconComp = props => {
    const {
        image,
        altText = "icon",
        size = "25",
        customStyle = ''
    } = props; 

    return (
        <img
            src={image}
            alt={altText}
            className={`w-[${size}px] h-[${size}px] ${customStyle}`}
        />
        )
}

IconComp.propTypes = {
    altText: PropTypes.string, 
    size: PropTypes.string, 
    customStyle: PropTypes.string, 
} 

 const ReactIcon = props => {
    const {
        size = "25",
        customStyle = ''
    } = props; 
    return <IconComp
            image={ReactPng}
            size={size}
            customStyle={customStyle}
            altText="React Icon"
        />
}

export {
    ReactIcon, 
}