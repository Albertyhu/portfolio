import React from 'react';
import HeroSection from './components/hero/heroSection';
import styled from 'styled-components'; 
import RenderPage from './renderPage.js'; 
function App() {
  //return (
  //    <MainContent className="MainContent">
  //        <HeroSection />
  //  </MainContent>
  //);

    return (
        <RenderPage SectionHeight={'100vh'}/>
        )
}

export default App;

const MainContent = styled.div`
    height: 120vh; 
    width: 100%; 
    background-color: #000000;
`