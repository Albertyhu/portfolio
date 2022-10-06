import React, {useEffect, useState, useContext} from 'react';
import HeroSection from './components/hero/heroSection';
import styled from 'styled-components'; 
import RenderPage from './screens/renderPage.js';
import RenderProjectProfile from './screens/projectProfile.js'; 
import {AppContext} from './components/contextItem.js'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    //The following block of code determines who the site will be displayed depending on whether it's being displayed on desktop or mobile
    const [desktopVersion, setDesktopVersion] = useState(true)

    const resizeEvent = () => {
        if (window.innerWidth <= 540) {
            setDesktopVersion(false)
        }
        else {
            setDesktopVersion(true)
        }
    }

    //Whenever window size changes, trigger resizeEvent function 
    useEffect(() => {
        resizeEvent(); 
        window.addEventListener('resize', resizeEvent)
        return () => { window.removeEventListener('resize', resizeEvent) }
    }, [])

    const context = {
        desktopVersion, 

        //displayIdentifier decides whether or not the number that identifies each cube will be displayed or not
        displayIdentifier: false, 
    }; 

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