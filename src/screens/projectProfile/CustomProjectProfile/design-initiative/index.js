import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import DIThumbnail from '../../../../components/project_panel/thumbnails/full-city.webp'; 
import ScrollingGif from "../../../../components/project_panel/projects/design-initiative/design-initiative-hero-scroll.gif"
import MainFrame from '../mainFrame.js'; 
import { 
    ImageFallback,
    SectionFallback,
} from '../../../../components/fallbackComponents.js'

const TechnologyField = lazy(()=>import('../../../../components/TechnologyField.js')); 
const RenderMainImage = lazy(() => import('../../../../components/projectComponents/renderMainImage.js'));

const RenderProjectProfile = (props) => {
    return (
        <MainFrame
            title="LA Design Initiative: Agency Site"
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="DesignInitiativeMainContent"
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={DIThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://ladesigninitiative.netlify.app" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/design-initiative" target="_blank" >
                        Github
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <p><b>LA Design Initiative</b> is an agency that I operate.</p>
                <p>My agency helps small businesses achieve web application solutions to solve their problems, establish an online presence and stand out amongst their competition.</p>
                <br />
                <h2>Building the multi-layer parallax image</h2>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={ScrollingGif} /></Suspense>
                <p>I wanted to captivate the visitor’s attention and make a remarkable impression. What better way to do that than to create a multilayer parallax hero image.</p>
                <p>The image is made up of multiple layers and makes use of perspective to create a 3-dimensional effect when the user scrolls down the page.</p>
                <p>I worked with a graphic designer to create the visuals and to create each layer of the image. Coding the functionality of the parallax image was a complicated feat.</p>
                <p>It took over a month just to get the multi-layered parallax image to work and look right. I have put in a lot of effort to make sure that the image works on most screen sizes.</p>
                <br />
                <h2>Optimized for performance</h2>
                <p>The site is able to achieve a 100 percent page speed score on Google because it is built with the Astro framework, which aims to ship as little JavaScript as possible.</p>
                <p>This helps the site meet Google's Core Web Vitals and makes it easier to rank better. Also, it improves the user experience because it helps the webpage load and perform faster, even though the web page heavily uses JavaScript.</p>

            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["astro-dark", "react","tail", "css", "html", "js"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;