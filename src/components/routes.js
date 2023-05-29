import { useContext } from 'react'; 
import { AppContext } from '../context/contextItem.js'; 
import RenderProjectProfile from "../screens/projectProfile/projectProfile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderTestimonialPage from "../screens/TestimonialPage/renderTestimonialPage.js";
import RenderScrollDemo from "./ScrollDemo";
import PortfolioCube from "./PortfolioCube";
import HomePage from "../screens/homepage";
import RenderAboutTitle from "./AboutMeComponent/RenderAboutTitle.js";
import BlabberProject from '../screens/projectProfile/CustomProjectProfile/blabber';
import { LevelsAnim } from './loadingComponent.js'; 
import RenderUpArrow from './scrollButton/scrollUp.js'; 

function RenderRoutes() {
    const { loading } = useContext(AppContext)
    return (
        <>
            {loading && 
                    <LevelsAnim />
            }
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project_profile" element={<RenderProjectProfile />} />
                    <Route path="/testimonial" element={<RenderTestimonialPage />} />
                    <Route path="/ScrollDemo" element={<RenderScrollDemo />} />
                    <Route path="/PortfolioCube" element={<PortfolioCube />} />
                    <Route path="/RenderAboutTitle" element={<RenderAboutTitle />} />
                    <Route path="/blabber" element={<BlabberProject />} />
                </Routes>
            </BrowserRouter>
            <RenderUpArrow />
        </>
  );
}

export default RenderRoutes;
