import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import BlabberThumbnail from '../../../../components/project_panel/thumbnails/Blabber.jpg'; 
import MainFrame from '../mainFrame.js'; 
import PaginatedScrollingGIF from '../../../../components/project_panel/projects/Blabber/Paginated-Scrolling.gif'; 
import RichTextEditorJPG from '../../../../components/project_panel/projects/Blabber/rich_text_editor.jpg'; 
import CommentingGIF from '../../../../components/project_panel/projects/Blabber/Liking-and-commenting.gif';
import ProfileScrollingGIF from '../../../../components/project_panel/projects/Blabber/Profile.gif';
import SearchGIF from '../../../../components/project_panel/projects/Blabber/Search.gif';
import ManagePhotosGIF from '../../../../components/project_panel/projects/Blabber/manage-photos.gif';
import { 
    ImageFallback,
    SectionFallback,
} from '../../../../components/fallbackComponents.js'

const TechnologyField = lazy(()=>import('../../../../components/TechnologyField.js')); 
const RenderMainImage = lazy(() => import('../../../../components/projectComponents/renderMainImage.js'));

const RenderProjectProfile = (props) => {
    return (
        <MainFrame
            title="Blabber: Full Stack Social Media Site"
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="BlabberMainContent"div
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={BlabberThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://blabber-71b2c.web.app/" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/BlogClient" target="_blank" >
                        Github for client site
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/BlogAPI" target="_blank" >
                        Github for server site
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <p><b>Blabber</b> is a social media that allows users to speak their mind. It communicates with an API that I built with Node JS and the database MongoDB.</p>
                <h2>The motivation for the project</h2>
                <p>It first started out as a simple project: to build small message board. However, I wanted to see how far I can take this project and overtime, I built more and more features into it. I am always curious how popular social media sites like LinkedIn and Facebook were designed and I wanted to see if I can replicate their features.  I wanted the site to be commercially viable and be ready to be used by thousands of daily visitors. </p>
                <p>Thus, I ended up building a lot of features for users to play around with such as:</p>
                <h3>1. Creating a post and formattting it with a rich text editor. </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={RichTextEditorJPG} /></Suspense>
                
                <h3>2. Creating a replies in a comment tree.</h3> 
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={CommentingGIF} /></Suspense>
                <h3>3. Perusing through other users' profiles </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={ProfileScrollingGIF} /></Suspense>
                <h3>4. Bulk upload and delete multiple photos </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={ManagePhotosGIF} /></Suspense>
                <h3>5. Use filters to search for content on the site </h3>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={SearchGIF} /></Suspense>

                <h3>Overcoming technical challenges</h3>
                <p>A platform that allows users to create projects, make comments and upload images requires dealing with the challenge of having to update multiple documents and collections in the database in one fetch request. </p>
                <p>As the project got larger and larger, and I had to revise my code a lot and constantly think about how I can build components to be reusable later. </p>
                <h2>Making an app that anyone can use</h2>
                <p>The site is built with a lot attention to make sure that the user experience is seamless. I wanted to make sure that anyone who is not technically savvy can intuitively navigate through the app. This requires that the app has the following:</p>
                <ul className="list-disc list-inside mb-5">
                    <li>Mobile responsiveness</li>
                    <li>Well thought-out color direction</li>
                    <li>Filtered search feature</li>
                    <li>Previewed images before loading</li>
                    <li>LinkedIn-style component tree</li>
                    <li>Intuitive icons</li>
                </ul>
                
                <h2>Optimized for speed</h2>
                <p>Fast performance is an important pillar of a seamless user experience. Nobody wants to wait more than 5 seconds for content to load. In the age of abundant information constantly bombarding the typical internet surfer, it is important that applications perform optimally.</p>
                <p>Firstly, I used <b>code splitting</b> to break down the application into smaller chunks that can be loaded independently, allowing the user to only download the code they need to view a specific page. This reduced the initial loading time of the app and improved the overall performance. </p>
                <p>Secondly, I optimized images using <b>compression</b> to reduce the file size of images without losing quality, which in turn decreased the loading time of the images. </p>
                <p>Additionally, the number of fetch request that the client site makes has to be <b>as little as possible</b>, for the reason that fetch requests increases the time it takes for the app to complete tasks. Tasks that require updating more than one document had to be combined in one fetch request. </p>
                <p>Finally, I implemented <b>paginated loading</b>, which means that components that are not immediately needed are not loaded until the user requests them, helping to reduce the initial load time of the page. </p>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={PaginatedScrollingGIF} /></Suspense>
                <div className= "text-sm italic text-center mx-auto w-fit mt-1">Additional content is loaded as the user scrolls down the page</div>
                <p>By using these four techniques, I was able to significantly improve the speed and performance of my React JS app, resulting in a better user experience. </p>
            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                        icons = {["react", "css", "html", "js", "nde", "mongo", "tail"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
