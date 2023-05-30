import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import EarthtoneThumbnail from '../../../../components/project_panel/thumbnails/EarthTone.JPG'; 
import MainFrame from '../mainFrame.js'; 
import BrowsingGIF from '../../../../components/project_panel/projects/Earthtone/browsing.gif'; 
import MobileGIF from '../../../../components/project_panel/projects/Earthtone/mobile.gif'; 
import OrderGIF from '../../../../components/project_panel/projects/Earthtone/order.gif'; 
import ReviewGIF from '../../../../components/project_panel/projects/Earthtone/review.gif'; 
import SearchGIF from '../../../../components/project_panel/projects/Earthtone/search.gif'; 
import { 
    ImageFallback,
    SectionFallback,
} from '../../../../components/fallbackComponents.js'

const TechnologyField = lazy(()=>import('../../../../components/TechnologyField.js')); 
const RenderMainImage = lazy(() => import('../../../../components/projectComponents/renderMainImage.js'));

const RenderProjectProfile = (props) => {
    return (
        <MainFrame
            title="Earth Tone: Full Stack Ecommerce Site"
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="EarthtoneMainContent"div
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={EarthtoneThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://earth-tone-project.web.app/" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/EarthToneEcommerce" target="_blank" >
                        Github for client site
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/EarthTone_server" target="_blank" >
                        Github for server site
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <p><b>Earth Tone</b> is a full stack Ecommerce site that services tea enthusiasts. It is a personal project that originally started as a minimal viable product that I built for a client. The client needed a simple site to sell one product. </p>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={BrowsingGIF} /></Suspense>
                <p>However, my ambitions eventually grew significantly beyond the original scope, where I continually added more and more features and my personal design flairs into it. </p>
                <p>A lot of Ecommerse sites are built using platforms such as Squarespace, Woocommerce and Shopify. However, building the site with React JS from scratch offered a lot of flexibility that those platforms cannot provide. My main goal was to build a comprehensive Ecommerce site that provides a smooth shopping experience for online tea enthusiasts. </p>
                <p>That experience gives the users the following capabilities:</p>
                <h3>Searching for the desired products </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={SearchGIF} /></Suspense>
                <h3>Completing an order </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={OrderGIF} /></Suspense>
                <h3>Writing a review about the experience with the product</h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={ReviewGIF} /></Suspense>

                <h2 className ="mt-10">Built with labor of love</h2>
                <p>Like with any project I worked on, ensuring that the user experience was a high priority and that anyone without a technical background can intuitively navigate the site. </p>
                <p>The web application is responsive and can be navigated with mobile devices of nearly all sizes. </p>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={MobileGIF} /></Suspense>
                <div className= "text-sm italic text-center mx-auto w-fit mt-1">Mobile version of the site</div>
                <p>Features such as shopping cart, wish list or checkout are easily accessible through a menu. </p>
                <p>The look and functionality has to look consistent throughout the website. Not only does the color scheme need to be aesthetically pleasing to the eyes, but also it signals to the users nonverbal cues about how certain features behave. The call-to-action buttons are drawn to stand out on a page to effectively guide users on what actions to take. </p>

                <h2>Navigating the complexities of the project</h2>
                <p>Building an Ecommerce site from scratch required a lot of labor. There are a lot of necessary features that combine together into a complete shopping experience. As a developer, I constantly have to put myself in the shoes of a typical shopper to make sure the site is intuitive and easy to use.  </p>
                <p>This process involved a lot of trial and error, and I devoted considerable time and effort to refining the functionality of the web pages. </p>
                <p>The site utilizes Firebase as a non-relational database to store and manage information about the user’s account, items in his cart and wish list and products that he ordered. </p>
                <p>Additionally, financial transactions are secured using Stripe API. I developed a server in Node JS to handle checkout sessions with Stripe when a shopper completes an order, guaranteeing that customers' sensitive information is protected.</p>
                <p>The site took a turn-around time of 3 months to complete and the results are well worth it. </p>
            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["react", "css", "html", "js", "tail", "firebase", "nde", "wpack"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
