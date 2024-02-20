import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import MainFrame from '../mainFrame.js'; 
import PrimeCleaningThumbnail from "../../../../components/project_panel/thumbnails/prime-cleaning.webp";
import BeforeAfter from "../../../../components/project_panel/projects/PrimeCleaning/prime-cleaning-before-after.gif"
import PageSpeed from "../../../../components/project_panel/projects/PrimeCleaning/PrimeCleaningSpeed.webp"
import { 
    ImageFallback,
    SectionFallback,
} from '../../../../components/fallbackComponents.js'

const TechnologyField = lazy(()=>import('../../../../components/TechnologyField.js')); 
const RenderMainImage = lazy(() => import('../../../../components/projectComponents/renderMainImage.js'));

const RenderProjectProfile = (props) => {
    return (
        <MainFrame
            title="Prime Cleaning Co."
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="PrimeCleaningMainContent"
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={PrimeCleaningThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://primecleaning.netlify.app/" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/PrimeCleaningCompany" target="_blank" >
                        Github
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={BeforeAfter} />
                </Suspense>
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={PageSpeed} />
                </Suspense>
            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["astro-dark", "react", "js", "tail", "css", "html"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
