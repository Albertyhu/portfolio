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
import CollapsibleGIF from '../../../../components/project_panel/projects/Reddit/collapsible.gif';
import CommentGIF from '../../../../components/project_panel/projects/Reddit/commenting.gif';
import ThreadGIF from '../../../../components/project_panel/projects/Reddit/thread.gif';
import FilterGIF from '../../../../components/project_panel/projects/Reddit/filter.gif';
import ThemesGIF from '../../../../components/project_panel/projects/Reddit/switching_themes.gif';
import MobileGIF from '../../../../components/project_panel/projects/Reddit/mobile.gif';

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
            id="RedditMainContent"
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
                <Suspense fallback={<ImageFallback />}>
                    <RenderMainImage image={MobileGIF} />
                </Suspense>
                <div className="text-sm italic text-center mx-auto w-fit mt-1">Improving Reddit's mobile responsiveness.</div>

                <h2>Going down the development rabbit hole</h2>
                <p>Recreating the site provided a great learning experience that reminded how much I take for granted features that I use on a common basis such as creating a comment or 'liking' a post. Those features required a lot of thought processes on how they are built and how data should be managed in the backend. </p>
                <h2>Organizing the way comments are rendered in a thread</h2>
                <p>The comments in Reddit are organized in a <a className="font-bold underline" href="https://sbme-tutorials.github.io/2020/data-structure-FALL/notes/week08.html" target="__blank">general tree</a> of hierarchical nodes, where each comment [the child node] is positioned under the comment it is replying to [the parent node]. This organizational method allows users to intuitively understand which comment a reply is referring to. </p>
                <p>Thus, rendering the tree requires a recursive function to render a parent node and all its children, grandchildren, etc. </p>
                <h2>The collapsible comment tree</h2>
                <Suspense fallback={<ImageFallback />}>
                    <RenderMainImage image={CollapsibleGIF} />
                </Suspense>
                <div className="text-sm italic text-center mx-auto w-fit mt-1">Collapsing comments with Reddit's threadline component.</div>
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
                <p>However, because Reddit users a <a className = "font-bold underline" href="https://sbme-tutorials.github.io/2020/data-structure-FALL/notes/week08.html" target="__blank">general tree</a> to organize its comments, it makes it difficult to figure out how to render the appropriate length of the threadline to correspond with the rendered comments. </p>
                <p>After tinkering around with Reddit's threadline, I figured out that a single one threadline is made of different lines that correspond to each reply.  </p>
                <p>Thus, creating the threadline requires the following steps.</p>
                <ul className= "list-decimal list-inside">
                    <li>Each comment node is given their own unique identification. </li>
                    <li>The parent node has to keep track of the number relatives that it has and their identification code.</li>
                    <li>Once a comment is rendered, it renders parts of the threadline that correspond to the number of comments replying to the parent comment and then combine them into one single threadline. A recursive function is used to do the same for the comment node's children.</li>
                    <li>If a particular part of the comment tree is collapsed, the app will collapse all the modular threadlines that belong to all the collapsed comment nodes as well using the comment nodes' identification. </li>
                </ul>
                <p>Therefore, I was able to successfully replicate the functionality of Reddit's threadline in my app. For something that looks very simple of a webpage actually involves a lot of complexity to create.  </p>
                <h2>Allowing users to be more expressive with style </h2>
                <p>Reddit allows users to format their text with a rich text editor. Thus, users can make their text bold, italic, indented, etc. The rich text editor in my application was built with the library Slate JS. It took a lot of effort and time to get it to function correctly.  After all, being able to express yourself with style was essential on the site. </p>
                <div className ="my-5">
                    <Suspense fallback={<ImageFallback />}>
                        <RenderMainImage image={ThreadGIF} />
                    </Suspense>
                    <div className="text-sm italic text-center mx-auto w-fit mt-1">Formatting a thread post.</div>
                </div>
                <div className="my-5">
                    <Suspense fallback={<ImageFallback />}>
                        <RenderMainImage image={CommentGIF} />
                    </Suspense>
                    <div className="text-sm italic text-center mx-auto w-fit mt-1">Formatting a comment.</div>
                </div>
                <h2>Theme switching</h2>
                <p>Reddit has nice little feature that allows users to change the theme and appearance of threads and communities. Thankfully, the <b>"styled-components"</b> library makes switching themes easily. </p>
                <p>Users can switch from 'light' to 'dark' mode with one click as well as customize the appearance of a community. </p>
                <Suspense fallback={<ImageFallback />}>
                    <RenderMainImage image={ThemesGIF} />
                </Suspense>
                <div className="text-sm italic text-center mx-auto w-fit mt-1">Switching between different themes is as easy as a click of a button.</div>
                <h2>Sorting threads </h2>
                <p>As a social media site grows, it will have countless content, which will become increasingly difficult to find the exact content a user wants. </p>
                <p>Thus, the application is built with a sorting feature that allows users to sort the threads by how popular, how new, how old and how controversial they are. </p>
                <p>Controversial threads are ones that have a lot activity and have a near equal number of users who like and dislike them. </p>
                <Suspense fallback={<ImageFallback />}>
                    <RenderMainImage image={FilterGIF} />
                </Suspense>
                <div className="text-sm italic text-center mx-auto w-fit mt-1">Sorting threads by most popular, newest, oldest and most controversial.</div>
            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["react", "css", "html", "js", "firebase", "wpack", "jest"]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
