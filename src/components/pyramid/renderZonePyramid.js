import React from 'react';
import styled, { keyframes } from 'styled-components';
import './pyramidStyle.css';
import {
    Scene, 
    Pyramid,
    PyramidFace, 
    PyramidBase
} from './pyramidStyle.js';

const RenderPyramid = props => {
    const {
        identifier, 
        animationType,
        TranslateX,
        TranslateY,
        TranslateZ,
        RotateX,
        RotateY,
        RotateZ,
        Scale = "1, 1, 1",
        duration = '2s',
        disabled = false, 
        displayIdentifier 
    } = props; 

    if (disabled) {
        return null;
    }

    return (
        <Scene
            id="PyramidScene"
        >
            <Pyramid
                className="Pyramid"
                animationType={animationType}
                TranslateX={TranslateX}
                TranslateY={TranslateY}
                TranslateZ={TranslateZ}
                RotateX={RotateX}
                RotateY={RotateY}
                RotateZ={RotateZ}
                Scale={Scale}
                Duration={duration}
            >
                <PyramidBase className="Pyramid_base"></PyramidBase>
                <PyramidFace className="PyramidFace PyramidFace-back">
                    {displayIdentifier && <span>{identifier}</span>}
                </PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-front"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-left"></PyramidFace>
                <PyramidFace className="PyramidFace PyramidFace-right"></PyramidFace>
                </Pyramid>
        </Scene> 
        )

}

export default RenderPyramid; 
