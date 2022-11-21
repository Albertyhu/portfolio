import React, { useEffect, useRef, useState } from 'react';
import './style/cubeStyle.css'
import {
    Scene, 
    Cube,
    Cubeface
} from './style/keyframes.js'

const RenderCube = props => {
    //const { level } = props;

    return (
        <Scene id="Scene">
            <Cube
                id="Cube"
                className="cube"
                //animationType={level}
            >
                <Cubeface className="cube_face cube_face-front"></Cubeface>
                <Cubeface className="cube_face cube_face-back"></Cubeface>
                <Cubeface className="cube_face cube_face-left"></Cubeface>
                <Cubeface className="cube_face cube_face-right"></Cubeface>
                <Cubeface className="cube_face cube_face-top"></Cubeface>
                <Cubeface className="cube_face cube_face-bottom"></Cubeface>
            </Cube>
        </Scene>
    )
}

export default RenderCube;
