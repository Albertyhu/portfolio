import React, { useState, useEffect } from 'react';
import RenderAboutTitle from '../AboutMeTitle/RenderAboutTitle.js';
import {
    MainCont,
    Section,
} from './myStyle.js'; 

const App = () => {
    return (
        <MainCont id ="MainCont">
            <Section id="Section1"></Section>
            <Section id="Section2">
                <RenderAboutTitle />
            </Section>
            <Section id="Section3"></Section>

        </MainCont>
        )
}

export default App; 