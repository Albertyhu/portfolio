import { useRef, useCallback, useEffect } from 'react'; 

import ReactPng from '../assets/icons/technologies/react.png';
import CSSPng from '../assets/icons/technologies/css-3.png';
import HTMLPng from '../assets/icons/technologies/html-5.png';
import JavaPng from '../assets/icons/technologies/java-script.png';
import MongoSvg from '../assets/icons/technologies/mongodb.svg';
import NodePng from '../assets/icons/technologies/nodejs.png';
import TailwindSvg from '../assets/icons/technologies/tailwind-css.svg';
import ViteSvg from '../assets/icons/technologies/vite.svg';
import WebpackSvg from '../assets/icons/technologies/webpack.svg';
import ReduxSvg from '../assets/icons/technologies/redux.svg';
import FirebaseSvg from '../assets/icons/technologies/firebase.svg';
import TypescriptSvg from '../assets/icons/technologies/typescript.svg';
import JestSvg from '../assets/icons/technologies/jest.svg';
import GithubSvg from '../assets/icons/technologies/github.svg';

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
            altText="React JS"
        />
}

 const CSSIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={CSSPng}
            customStyle={customStyle}
            altText="CSS3"
        />
}

 const HTMLIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={HTMLPng}
            customStyle={customStyle}
            altText="HTML 5"
        />
}

 const JavaIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={JavaPng}
            customStyle={customStyle}
            altText="Javascript"
        />
}

 const MongoIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={MongoSvg}
            customStyle={customStyle}
            altText="Mongo DB"
        />
}

 const NodeIcon = props => {
    const {
        customStyle = ''
    } = props; 
    return <IconComp
            image={NodePng}
            customStyle={customStyle}
            altText="Node JS"
        />
}
 const TailwindIcon = props => {
    const {
        customStyle = 'w-full h-full mx-auto'
    } = props; 
    return <IconComp
            image={TailwindSvg}
            customStyle={customStyle}
            altText="Tailwind CSS"
        />
}

const ViteIcon = props => {
    const {
        customStyle = 'w-full h-full mx-auto'
    } = props;
    return <IconComp
        image={ViteSvg}
        customStyle={customStyle}
        altText="Vite"
    />
}

const WebpackIcon = props => {
    const {
        customStyle = 'w-full h-full mx-auto'
    } = props;
    return <IconComp
        image={WebpackSvg}
        customStyle={customStyle}
        altText="Webpack"
    />
}

const ReduxIcon = props => {
    const { customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={ReduxSvg}
            customStyle={customStyle}
            altText="Redux"
        />
    );
};

const FirebaseIcon = props => {
    const { customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={FirebaseSvg}
            customStyle={customStyle}
            altText="Firebase"
        />
    );
};

const TypescriptIcon = props => {
    const { customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={TypescriptSvg}
            customStyle={customStyle}
            altText="Typescript"
        />
    );
};

const JestIcon = props => {
    const { customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={JestSvg}
            customStyle={customStyle}
            altText="Jest"
        />
    );
};

const GithubIcon = props => {
    const { customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={GithubSvg}
            customStyle={customStyle}
            altText="Github"
        />
    );
};

export {
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
}

