import React, {useEffect, useState, useContext} from 'react';
import HeroSection from './components/hero/heroSection';
import styled from 'styled-components'; 
import RenderPage from './screens/renderPage.js';
import RenderProjectProfile from './screens/projectProfile.js'; 
import {AppContext} from './components/contextItem.js'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
   // const [desktopVersion, setDesktopVersion] = useState(window.innerWidth > 540 ? true : false)
    const [desktopVersion, setDesktopVersion] = useState(true)

    const resizeEvent = () => {
        if (window.innerWidth <= 540) {
            setDesktopVersion(false)
        }
        else {
            setDesktopVersion(true)
        }
    }

    useEffect(() => {
        resizeEvent(); 

        window.addEventListener('resize', resizeEvent)
        return () => { window.removeEventListener('resize', resizeEvent) }
    }, [])


    //useEffect(() => {
    //    resizeEvent();
    //}, [window.innerWidth])

    const context = {
        desktopVersion, 
    }; 

    useEffect(() => { }, [])
    return (
        <AppContext.Provider value = {context}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RenderPage SectionHeight={'100vh'} />} />
                    <Route path='/project_profile' element={<RenderProjectProfile  />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
        )
}

export default App;

const MainContent = styled.div`
    height: 120vh; 
    width: 100%; 
    background-color: #000000;
`