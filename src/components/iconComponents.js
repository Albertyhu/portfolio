import { useRef, useCallback, useEffect} from 'react'; 

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
        altText,
        customStyle = '',
        index,
    } = props;

    const IconRef = useRef(null)
    var timeID = useRef(null);

    useEffect(() => {
        if (IconRef.current) {
            timeID.current = setTimeout(() => {
                IconRef.current.classList.remove("RiseFadeOut")
            }, index * 200)
        }

        return () => {
            clearTimeout(timeID.current)
            if (IconRef.current) {
                IconRef.current.classList.add("RiseFadeOut")
            }
        }
    }, [IconRef.current])

     return (
         <div
             className='transition-all duration-[500ms] RiseFadeOut relative my-10 md:my-1'
             ref={IconRef}
         >
            <img
                src={image}
                alt={altText ? altText : "icon"}
                className={`${customStyle}`}
                
             />
             <div className= "w-full h-full absolute bottom-0 left-0 right-0 md:opacity-0 hover:opacity-100 transition-all duration-700">
                <h2
                     className="text-white font-bold text-center absolute bottom-[-20px] left-0 right-0"
                 >{altText}</h2>
             </div>
         </div>
        )
}

IconComp.propTypes = {
    altText: PropTypes.string, 
    customStyle: PropTypes.string, 
} 

 const ReactIcon = props => {
    const {
        customStyle = '',
        index, 
    } = props; 
    return <IconComp
            image={ReactPng}
            customStyle={customStyle}
            altText="React JS"
            index={index}
            />
}

 const CSSIcon = props => {
     const {
         index,
        customStyle = ''
    } = props; 
    return <IconComp
            image={CSSPng}
            customStyle={customStyle}
            altText="CSS3"
            index={index}
            />
}

 const HTMLIcon = props => {
     const {
         index,
        customStyle = ''
    } = props; 
    return <IconComp
            image={HTMLPng}
            customStyle={customStyle}
            altText="HTML 5"
            index={index}
            />
}

 const JavaIcon = props => {
     const {
         index,
        customStyle = ''
    } = props; 
    return <IconComp
            image={JavaPng}
            customStyle={customStyle}
            altText="Javascript"
            index={index}
            />
}

 const MongoIcon = props => {
     const {
         index,
        customStyle = ''
    } = props; 
    return <IconComp
            image={MongoSvg}
            customStyle={`${customStyle}`}
            altText="Mongo DB"
            index={index}
            />
}

 const NodeIcon = props => {
     const {
         index,
        customStyle = ''
    } = props; 
    return <IconComp
            image={NodePng}
            customStyle={customStyle}
            altText="Node JS"
            index={index}
            />
}
 const TailwindIcon = props => {
     const {
         index,
        customStyle = 'w-full h-full mx-auto'
    } = props; 
    return <IconComp
            image={TailwindSvg}
            customStyle={customStyle}
            altText="Tailwind CSS"
            index={index}
            />
}

const ViteIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto'
    } = props;
    return <IconComp
        image={ViteSvg}
        customStyle={customStyle}
        altText="Vite"
        index={index}
    />
}

const WebpackIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto'
    } = props;
    return <IconComp
        image={WebpackSvg}
        customStyle={customStyle}
        altText="Webpack"
        index={index}
    />
}

const ReduxIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto',
    } = props;
    return (
        <IconComp
            image={ReduxSvg}
            customStyle={customStyle}
            altText="Redux"
            index={index}
        />
    );
};

const FirebaseIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto'
    } = props;
    return (
        <IconComp
            image={FirebaseSvg}
            customStyle={customStyle}
            altText="Firebase"
            index={index}
        />
    );
};

const TypescriptIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto',
    } = props;
    return (
        <IconComp
            image={TypescriptSvg}
            customStyle={customStyle}
            altText="Typescript"
            index={index}
        />
    );
};

const JestIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={JestSvg}
            customStyle={customStyle}
            altText="Jest"
            index={index}
        />
    );
};

const GithubIcon = props => {
    const {
        index,
        customStyle = 'w-full h-full mx-auto' } = props;
    return (
        <IconComp
            image={GithubSvg}
            customStyle={customStyle}
            altText="Github"
            index={index}
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

