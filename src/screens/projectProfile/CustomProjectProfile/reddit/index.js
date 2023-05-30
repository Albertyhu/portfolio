import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import RedditThumbnail from '../../../../components/project_panel/thumbnails/RedditClone.JPG'; 
import MainFrame from '../mainFrame.js'; 
import ThreadlineJPG from '../../../../components/project_panel/projects/Reddit/threadline.jpg'; 
import Threadline_ComponentJPG from '../../../../components/project_panel/projects/Reddit/threadline_component.jpg';

import { 
    ImageFallback,
    SectionFallback,
} from '../../../../components/fallbackComponents.js'

const TechnologyField = lazy(()=>import('../../../../components/TechnologyField.js')); 
const RenderMainImage = lazy(() => import('../../../../components/projectComponents/renderMainImage.js'));

const RenderProjectProfile = (props) => {
    return (
        <MainFrame
            title="Reddit Clone: React Social Media Site"
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="RedditMainContent"div
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={RedditThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://react-clone-b735d.web.app/" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/Reddit-Clone" target="_blank" >
                        Github
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <p>This a personal project where I attempted to clone one of my favorite sites Reddit.com. Reddit is a social media and news aggregation platform where articles and posts that receive the most popular votes in a given time frame get pushed to the front page. Users have the ability to share trending news and content, and form communities around common interests. </p>
                <p>The one thing that Reddit does fall short on is it lack of mobile responsiveness [I think it's because they want to make mobile device users download and use its mobile app instead]. </p>
                <p>Thus, I wanted to recreate the site and improve its mobile friendliness. </p>
                <h2>Going down the development rabbit hole</h2>
                <p>Recreating the site provided a great learning experience that reminded how much I take for granted features that I use on a common basis such as creating a comment or 'liking' a post. Those features required a lot of thought processes on how they are built and how data should be managed in the backend. </p>
                <h2>Commenting</h2>
                <p>The rich text editor, which allowed users to format the style of their text, was built with the library Slate JS. It took a lot of effort and time to get it to function correctly.  After all, being able to express yourself with style was essential on the site. </p>
                <p>The feature that allows comment tree to collapse was tricky to figure out. </p>
                <p>Reddit has an element on the page called the <b>"threadline"</b> next to each comment tree. If the threadline is clicked, the corresponding tree collapses. Collapsing the comment tree makes it easier for users to navigate through a long line of comments. </p>
                <div className= "grid [&>div]:my-5 md:grid-cols-2 md:w-10/12 md:gap-[20px] md:mx-auto [&>div]:md:border-2">
                    <div className = "grid">
                        <Suspense fallback={<ImageFallback />}>
                            <RenderMainImage image={ThreadlineJPG} />
                        </Suspense>
                        <div className="text-sm italic text-center mx-auto w-fit mt-1">The threadline allows users to collapse a comment tree.</div>
                    </div>
                    <div className="grid">
                        <Suspense fallback={<ImageFallback />}>
                            <RenderMainImage image={Threadline_ComponentJPG} />
                        </Suspense>
                        <div className="text-sm italic text-center mx-auto w-fit mt-1">The threadline is actually made up of multiple smaller threadlines.</div>
                    </div>
                </div>
                <p>After tinkering around with Reddit's threadline, I figured out that the element is made of different lines that correspond to each element the reply. Every time a reply is added to the comment tree, the app dynamically generates a component line that gets added as part of the threadline of the original comment that is the root of the tree. </p>
                <p>Thus, I was able to successfully replicate the functionality of Reddit's threadline in my app. </p>
                <h2>Theme switching</h2>
                <p>Reddit has nice little feature that allows users to change the theme and appearance of threads and communities. Thankfully, the <b>"styled-components"</b> library makes switching themes easily. </p>
                <p>Users can switch from 'light' to 'dark' mode with one click as well as customize the appearance of a community. </p>
            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["react", "css", "html", "js", "firebase", "wpack"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
