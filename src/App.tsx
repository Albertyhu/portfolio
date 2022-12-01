import React, { useEffect, useState} from "react";
import RenderProjectProfile from "./screens/projectProfile/projectProfile.js";
import { AppContext } from "./context/contextItem.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RenderTestimonialPage from "./screens/TestimonialPage/renderTestimonialPage.js";
import RenderScrollDemo from "./components/ScrollDemo";
import PortfolioCube from "./components/PortfolioCube";
import HomePage from "./screens/homepage";
import RenderAboutTitle from "./components/AboutMeComponent/RenderAboutTitle.js";

function App() {
  //The following block of code determines who the site will be displayed depending on whether it's being displayed on desktop or mobile
  const [desktopVersion, setDesktopVersion] = useState(true);

  const resizeEvent = () => {
    if (window.innerWidth <= 540) {
      setDesktopVersion(false);
    } else {
      setDesktopVersion(true);
    }
  };

  //Whenever window size changes, trigger resizeEvent function
  useEffect(() => {
    resizeEvent();
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);

  const context = {
    desktopVersion,

    //displayIdentifier decides whether or not the number that identifies each cube will be displayed or not
    displayIdentifier: false,
  };

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project_profile" element={<RenderProjectProfile />} />
          <Route path="/testimonial" element={<RenderTestimonialPage />} />
          <Route path="/ScrollDemo" element={<RenderScrollDemo />} />
          <Route path="/PortfolioCube" element={<PortfolioCube />} />
          <Route path="/RenderAboutTitle" element={<RenderAboutTitle />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
