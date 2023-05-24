import RenderProjectProfile from "../screens/projectProfile/projectProfile.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderTestimonialPage from "../screens/TestimonialPage/renderTestimonialPage.js";
import RenderScrollDemo from "./ScrollDemo";
import PortfolioCube from "./PortfolioCube";
import HomePage from "../screens/homepage";
import RenderAboutTitle from "./AboutMeComponent/RenderAboutTitle.js";
import BlabberProject from '../screens/projectProfile/CustomProjectProfile/blabber';

function RenderRoutes() {

  return (
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
  );
}

export default RenderRoutes;
