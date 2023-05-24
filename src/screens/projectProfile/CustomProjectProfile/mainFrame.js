import React, {
    useEffect,
    useRef,
} from "react";
import {
    MainCont,
    ContentDiv,
} from "../../../components/projectComponents/myStyle.js";
import RenderMenuComponent from '../../../components/projectComponents/ProjectMenuBar';
import RenderHero from '../../../components/projectComponents/heroComponent.js';
import RenderContactFrom from "../../../components/contactForm";

const MainFrame = props => {
    const {
        children, 
        title, 
    } = props; 

    const ContentDivRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <RenderMenuComponent
                ContentDivRef={ContentDivRef}
            />
            <MainCont>
                <RenderHero
                    title={title}
                />
                <div 
                    id="ContentDiv"
                    ref={ContentDivRef}
                    className ="grid my-40px mx-auto w-11/12"
                >
                    {children}
                </div>
                <RenderContactFrom isHomePage={false} />
            </MainCont>
        </>
    );
}

export default MainFrame; 