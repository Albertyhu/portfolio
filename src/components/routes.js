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
import DesignInitiativeProject from '../screens/projectProfile/CustomProjectProfile/design-initiative';
import { LevelsAnim } from './loadingComponent.js'; 
import RenderUpArrow from './scrollButton/scrollUp.js'; 
import EarthtoneProject from '../screens/projectProfile/CustomProjectProfile/earthtone'; 
import RedditProject from '../screens/projectProfile/CustomProjectProfile/reddit'; 
import ChatAppProject from '../screens/projectProfile/CustomProjectProfile/chat-app'; 
import NotFoundPage from "../screens/NotFound.js";
import ProjectCollectionPage from "../screens/ProjectCollection"
import PrimeCleaningPage from "../screens/projectProfile/CustomProjectProfile/prime-cleaning"; 

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
                    {/* <Route path="/project_profile" element={<RenderProjectProfile />} /> */}
                    <Route path="/projects/:project_name" element={<RenderProjectProfile />} />
                    <Route path="/projects" element={<ProjectCollectionPage />} />
                    <Route path="/testimonial" element={<RenderTestimonialPage />} />
                    <Route path="/ScrollDemo" element={<RenderScrollDemo />} />
                    <Route path="/PortfolioCube" element={<PortfolioCube />} />
                    <Route path="/RenderAboutTitle" element={<RenderAboutTitle />} />
                    <Route path="/blabber" element={<BlabberProject />} />
                    <Route path="/design-initiative" element={<DesignInitiativeProject />} />
                    <Route path="/earthtone" element={<EarthtoneProject />} />
                    <Route path="/reddit" element={<RedditProject />} />
                    <Route path="/prime-cleaning" element={<PrimeCleaningPage />} />
                    <Route path="/chat-app" element={<ChatAppProject />} />
                    <Route path = "*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
            <RenderUpArrow />
        </>
  );
}

export default RenderRoutes;
