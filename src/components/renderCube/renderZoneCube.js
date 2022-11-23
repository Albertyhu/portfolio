import React from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import './style/cubeStyle.css';
import {
    Cube,
    Cubeface,
    NeonSurface
} from './style/cubeStyle.js'; 

const RenderCube = props => {
    const {
        /*For development purposes, 'identifier displays a number on the 3d object to identify it*/
        identifier, 
        /*For development purposes, this determines whether the identifier will be displayed or not*/
        displayIdentifier, 

        /*animationType passes the instructions for how the cube will be animated */
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
    } = props; 
    if (disabled) {
        return null;
    }
    return (
        <Scene id = "Scene">
            <Cube
                id="Cube"
                className="cube"
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
                <Cubeface className="cube_face cube_face-front" >
                    {displayIdentifier && <div>{identifier}</div>}
                    </Cubeface>
                <Cubeface className="cube_face cube_face-back" ></Cubeface>
                <Cubeface className="cube_face cube_face-left" ></Cubeface> 
                <Cubeface className="cube_face cube_face-right" ></Cubeface>
                <Cubeface className="cube_face cube_face-top" ></Cubeface>
                <Cubeface className="cube_face cube_face-bottom" ></Cubeface>
            </Cube>
        </Scene>
        )
}

export default RenderCube; 
