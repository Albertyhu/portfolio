import { useEffect, useCallback } from 'react'; 
import {
    leftCallback,
    rightCallback,
    rotateUpCallback,
    FadeUpCallback,
} from './observerCallbacks.js';

const RenderImage = props => {
    const {
        image,
        altText = "image",
        imageRef,
        customStyle,
        direction,
    } = props;

    const DetermineDirection = () => {
        switch (direction) {
            case "left":
                return leftCallback;
            case "right":
                return rightCallback;
            default:
                return leftCallback;
        }
    }
    const observer = new IntersectionObserver(useCallback(DetermineDirection(), [direction]))

    useEffect(() => {
        if (imageRef.current)
            observer.observe(imageRef.current)
    }, [imageRef.current])

    return(
        <div
            id={`${altText}`}
            className={`relative block opacity-0 transition-all duration-1000 ${customStyle}`}
            ref={imageRef}
        >
            <div
                className = {`w-full h-auto overflow-hidden top-0 left-0 right-0`}
            >
            <img src = {image} 
                className = "object-fit object-center w-full h-full"
                alt={altText}
            />
            </div>
        </div>
    )
}

export default RenderImage; 