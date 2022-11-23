import React, { useState, useEffect } from 'react';
import {
    MainCont,
    Sides,
    ShapeCont,
} from './triangleStyle.js';
import './triangleKeyframes.css'

const Triangle = props => {
    const {
        size,
        delay = 0,
        inView = true, 
    } = props; 
    const WIDTH = size; 
    const HalfSide = WIDTH / 2.0; 
    const HEIGHT = Math.sqrt(Math.pow(WIDTH, 2) - Math.pow((HalfSide), 2)); 
    var Side1 = document.querySelector('.side1')
    var Side2 = document.querySelector('.side2')
    var Side3 = document.querySelector('.side3')

    var Side2delay = 200;
    var Side3delay = 400;

    function AnimateTriangle() {
        Side1 = document.querySelector('.side1')
        Side2 = document.querySelector('.side2')
        Side3 = document.querySelector('.side3')
        Side1?.classList.remove('Side1-disappear');
        Side1?.classList.add('Side1-appear');
        setTimeout(() => {
            Side2?.classList.remove('Side2-disappear');
            Side2?.classList.add('Side2-appear')
        }, [Side2delay])
        
        setTimeout(() => {
            Side3?.classList.remove('Side3-disappear');
            Side3?.classList.add('Side3-appear');
        }, [Side3delay])
            
    }

    function EraseTriangle() {
        Side1 = document.querySelector('.side1')
        Side2 = document.querySelector('.side2')
        Side3 = document.querySelector('.side3')

        Side3?.classList.remove('Side3-appear');
        Side3?.classList.add('Side3-disappear');

        Side2?.classList.remove('Side2-appear');
        Side2?.classList.add('Side2-disappear')

        Side1?.classList.remove('Side1-appear');
        Side1?.classList.add('Side1-disappear');

    }

    useEffect(() => {
        Side1 = document.querySelector('.side1')
        Side2 = document.querySelector('.side2')
        Side3 = document.querySelector('.side3')
    }, [Side1])


    useEffect(() => {
        if (inView) {
            setTimeout(() => AnimateTriangle(), [delay])
        }
        else {
            setTimeout(() => EraseTriangle(), [delay])
           
        }
    }, [inView])

    return (
        <ShapeCont
            Width={WIDTH}
            Height={HEIGHT}
        >
            <Sides
                className="side1"
            />
            <Sides
                className="side2"
            />
            <Sides
                className="side3"
            />
        </ShapeCont>
    )
}

export default Triangle; 
