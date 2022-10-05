import React, {useEffect, useState, useRef, useContext} from 'react'; 
import styled, {keyframes} from 'styled-components'
import RenderZoneThree from '../AnimationZone/zone3.js'; 
import { Text } from '../global/globalStyleComponents.js'; 
import { AppContext } from '../contextItem.js';  
import './ZoneThreeStyle.css'; 

const RenderCameraWork = props => {
    const { level } = props; 
    const { displayIdentifier } = useContext(AppContext)
    const ZoneThreeRef = useRef()
    var ZoneThreeElem; 

    var animationDelay = '2s'
    useEffect(() => {
        if (ZoneThreeRef.current) {
            ZoneThreeElem = document.querySelector('.ZoneThree'); 
        }
    }, [ZoneThreeRef.current])

    useEffect(() => {
        ZoneThreeElem = document.querySelector('.ZoneThree'); 
        if (level === 'level3') {
            if (ZoneThreeElem.classList.contains('ZoneThreeSlideToBottomRight'))
                ZoneThreeElem.classList.remove('ZoneThreeSlideToBottomRight')
            if (ZoneThreeElem.classList.contains('ZoneThreeSlideToTopRight'))
                ZoneThreeElem.classList.remove('ZoneThreeSlideToTopRight')
            if (ZoneThreeElem.classList.contains('ZoneThreeSlideToTop'))
                ZoneThreeElem.classList.remove('ZoneThreeSlideToTop')
            ZoneThreeElem.classList.add('ZoneThreeSlideFromBottomRight')
        }
        else if (level === 'level4') {
            ZoneThreeElem.classList.remove('ZoneThreeSlideFromBottomRight')
            ZoneThreeElem.classList.add('ZoneThreeSlideToTop')
        }

        else {
            ZoneThreeElem.classList.remove('ZoneThreeSlideFromBottomRight')
            ZoneThreeElem.classList.add('ZoneThreeSlideToBottomRight')
        }
    }, [level])

    if (level <= 2) {
        return null;
    }

    return (
        <Scene>
            <div
                className="ZoneThree"
                ref={ZoneThreeRef}>
                <RenderZoneThree
                    inView={level == 'level3' ? true : false}
                    duration='2s'
                    displayIdentifier={displayIdentifier}
                />
                <Table>
                    <tbody>
                        <tr>
                            <th colSpan = '2'>Skills</th> 
                        </tr>
                        <tr>
                            <td>React JS</td>
                            <td>React Native</td>
                        </tr>
                        <tr>
                            <td>Typescript</td>
                            <td>Redux</td>
                        </tr>
                        <tr>
                            <td>Javscript</td>
                            <td>Webpack</td>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td>CSS3</td>
                        </tr>
                        <tr>
                            <td>Responsive Design</td>
                            <td>Jest</td>
                        </tr>
                        <tr>
                            <td>Firebase</td>
                            <td>Amazon AWS Amplify</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </Scene>
        )
}

export default RenderCameraWork;

const Scene = styled.div`
width: 100%; 
height: 100%; 
perspective: 1000px; 
position: absolute;
transform-style: preserve-3d;
`

const Table = styled.table`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    width: 50%;
    margin: auto;
    text-align: center;
    position: absolute;
    top: 5%; 
    left: 0; 
    right: 0;
`
