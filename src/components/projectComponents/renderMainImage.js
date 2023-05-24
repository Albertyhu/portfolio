import {
    useState,
    useRef,
    useEffect, 
} from 'react' 

import {
    MainImage
} from './myStyle.js'

const RenderMainImage = props => {
    const {
        image, 
    } = props; 
    const [displayLightBox, setDisplay] = useState(false);

    const lightboxRef = useRef(null); 
    const clickEvent = evt => {
        if (lightboxRef.current && displayLightBox && lightboxRef.current !== evt.target && !lightboxRef.current.contains(evt.target)){
            setDisplay(false); 
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickEvent)
        return () => document.removeEventListener('mousedown', clickEvent); 
    })

    return (
        <>
            <div
                id="thumbnail wrapper"
                className="w-11/12 h-11/12 mx-auto cursor-pointer"
                onClick={()=>setDisplay(true)}
            >
                <MainImage src={image} />
            </div>
            {displayLightBox &&
                <LightBox
                lightboxRef={lightboxRef}
                image={image}
                clickEvent={clickEvent}
                />
            }
        </>
    )
}

const LightBox = props => {
    const {
        image,
        lightboxRef,
    } = props; 

    return (
        <div
            id="LightBox"
            ref={lightboxRef}
            className="fixed top-[50%] translate-y-[-50%] left-0 right-0 object-fit overflow-hidden max-h-[80%] md:max-h-[90%]"
        >
            
            <img src={image} className = "w-full h-full" alt="lightbox" />
        </div>
    )
}

export default RenderMainImage;
