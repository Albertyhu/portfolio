import { useEffect, useCallback, useState } from 'react'; 
import uuid from 'react-uuid'; 

import {
    leftCallback,
    rightCallback,
    rotateUpCallback,
    ListFadeUpCallback
} from './observerCallbacks.js';

const HeaderRotateUp = props => {
    const {
        elemRef,
        customStyle = "hidden md:block",
        elemName, 
        text, 
    } = props; 

    const observerObj = new IntersectionObserver(useCallback(rotateUpCallback, []), { threshold: 0.25 })

    useEffect(() => {
        if (elemRef.current) {
            observerObj.observe(elemRef.current)
        }
    })

    return (
        <div
            id={`${elemName ? elemName : "observer_field"}` }
            className={`min-h-[30px] ${customStyle}`}
            ref={elemRef}
        >
            <h2
                className="text-white font-bold text-center text-2xl transition-all duration-1000 RotateOut"
            >{text}</h2>
        </div>
    )
}

const ParagraphRotateUp = props => {
    const {
        elemRef,
        customStyle = "hidden md:block",
        elemName,
        textArray,
    } = props;

    const observerObj = new IntersectionObserver(useCallback(rotateUpCallback, []), { threshold: 0.25 })

    useEffect(() => {
        if (elemRef.current) {
            observerObj.observe(elemRef.current)
        }
    })
    return (
        <div
            id={`${elemName ? elemName : "observer_field"}`}
            className={`min-h-[50px] ${customStyle}`}
            ref={elemRef}
        >
            {textArray && textArray.length > 0 && 
                textArray.map(text => <p
                    key={uuid()}
                    className="transition-all duration-1000 RotateOut"
                    dangerouslySetInnerHTML={{ __html: text }}
                ></p>)    
            }
        </div>
    )

}

const ScaleUpList = props => {
    const {
        elemRef,
        customStyle = "hidden md:block",
        elemName,
        list,
    } = props;
    const observerObj = new IntersectionObserver(useCallback(ListFadeUpCallback, []), { threshold: 0.25 })

    useEffect(() => {
        if (elemRef.current) {
            observerObj.observe(elemRef.current)
        }
    })

    return (
        <ul
            id={`${elemName ? elemName : "observer_field"}`}
            className={`min-h-[50px] list-disc list-inside ${customStyle}`}
            ref={elemRef}
        >
            {list && list.length > 0 &&
                list.map((text, index) => {
                    return <li
                        key={uuid()}
                        className={`transition-all duration-1000 translate-y-[200px] opacity-0 ease-in-out`}
                        dangerouslySetInnerHTML={{ __html: text }}
                    ></li>;
            })
            }
        </ul>
    )
}


const wait = (time, element) => {
    const myPromise = new Promise(resolve => {
        setTimeout(resolve(element), [time])
    })
    return element
}

export {
    HeaderRotateUp,
    ParagraphRotateUp,
    ScaleUpList
}