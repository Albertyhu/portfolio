import React, { useEffect, useState, useRef} from "react";
import { AppContext } from "./context/contextItem.js";
import RenderRoutes from './components/routes.js'

function App() {
  //The following block of code determines who the site will be displayed depending on whether it's being displayed on desktop or mobile
  const [desktopVersion, setDesktopVersion] = useState(true);
    const [loading, setLoading] = useState(false); 

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

  const ContainerRef = useRef(null); 

  const context = {
    desktopVersion,
    loading,
    setLoading,

    //displayIdentifier decides whether or not the number that identifies each cube will be displayed or not
    displayIdentifier: false,
    ContainerRef, 
  };

  return (
    <AppContext.Provider value={context}>
        <div
            id="bodyContainer"
            ref = {ContainerRef}
        >
            <RenderRoutes />
        </div>
    </AppContext.Provider>
  );
}

export default App;
