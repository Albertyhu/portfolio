import React from 'react';
import HeroSection from './components/hero/heroSection';
import styled from 'styled-components'; 
import RenderPage from './screens/renderPage.js';
import RenderProjectProfile from './screens/projectProfile.js'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RenderPage SectionHeight={'100vh'} />} />
                <Route path='/project_profile' element={<RenderProjectProfile  />} />
            </Routes>
        </BrowserRouter>
        )
}

export default App;

const MainContent = styled.div`
    height: 120vh; 
    width: 100%; 
    background-color: #000000;
`