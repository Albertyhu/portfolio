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
                <p><a href = "https://primecleaning.netlify.app/" target = "_blank"> <b className = "hover:underline">Prime Cleaning Co.</b></a> is a cleaning company based in Utah. They needed a site to establish their online presence and a platform that makes an impression that they are a professional business.</p>
                <h3>The problem that Prime Cleaning Co. faced</h3>
                <p>The owner complained that she wasted a lot of time handling calls from customers asking the same questions over and over again. This was her bottleneck that kept her from growing her business further because it would take her attention away from more important matters.</p>
                <h3>The solution </h3>
                <p>I helped her create an FAQ page that answers the most commonly asked questions to decrease the number of calls she gets so that she can focus on the more important aspects of her business.</p>
                <p>Furthermore, I spent a lot of time optimizing the user experience. The website is mobile responsive and performs fast. That is because I built the website with Astro framework, which helps the website to achieve optimal performance despite the heavy use of JavaScript. Thus, the site achieves a 100% page speed score and this will allow it to meet Google’s Core Web Vitals, which will help it rank better on Google’s SERPs and outcompete other sites with similar content.</p>
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={PageSpeed} />
                </Suspense>
                <h3>Selling the results</h3>
                <p>The website also features a section that allows users to see before and after photos of the company’s work. This is made by placing two div elements, each containing the before and after image on top of each other and creating a range input that controls the width of the upper div element. This will allow users to see the results that will be delivered to them when they work with Prime Cleaning Co.</p>

                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={BeforeAfter} />
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
