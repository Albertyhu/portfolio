import { lazy, Suspense } from 'react'; 
import {
    TextDiv,
    LinkButton,
    LinkCont,
} from "../../../../components/projectComponents/myStyle.js";
import ChatAppThumbnail from '../../../../components/project_panel/thumbnails/chat-app.webp'; 
import ChatAppInAction from "../../../../components/project_panel/projects/chat-app/chatapp.gif"; 
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
            title="Socket.IO Chat Application"
            children={<RenderMainContent />}
        />
    );
};

const RenderMainContent = props => {
    return (
        <div
            id="ChatAppMainContent"
            className="grid mx-auto"
        >
            <div
                id=""
                className="grid md:grid-cols-2 mx-auto my-5"
            >
                <Suspense fallback={<ImageFallback />}> 
                    <RenderMainImage image={ChatAppThumbnail} />
                </Suspense>
                <LinkCont id="LinkCont">
                    <LinkButton className="livesite" href="https://chat-app-brax.onrender.com/" target="_blank" >
                        Live Website
                    </LinkButton>
                    <LinkButton className="github" href="https://github.com/Albertyhu/simple-chat-app" target="_blank" >
                        Github 
                    </LinkButton>
                </LinkCont>
            </div>
            <TextDiv className="w-11/12 mx-auto mb-10 [&>h2]:font-bold [&>h2]:mb-1 [&>p]:my-5 [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:text-center">
                <p>This is a chat app created with Node JS, Socket.io library, and EJS.</p>

                <p>It allows persistent user sessions. That means that a user can be in the same chat thread on multiple devices.</p>

                <p>The difficulty in building this app is tracking down all the information that is generated and passed around.</p>

                <p>The authentication doesn't include password security yet because I haven't had time to implement it.</p>

                <p>The user is allowed to create a private chat room and invite another online user to it.</p>

                <p>Once the user logs into the web app, the client first fetches account information if it exists from the server through CRUD operations.</p>

                <p>From then on, information is passed through sockets between the client and the server.</p>

                <p>The app is not backed by a database yet.</p>

                <p>As long as the server runs and doesn't restart, all the client's information and chat history are saved.</p>
                <Suspense fallback={<ImageFallback />}><RenderMainImage image={ChatAppInAction} /></Suspense>
                <br />
                <h2>The challenge of creating multiple chat rooms</h2>
                <p>Socket IDs are used to identify a member of a chatroom. They are necessary to provide functionality for sending a message to a specific user or inviting them to a private chat room.</p>

                <p>However, because different chatrooms are opened on separate pages, a user who is a member of all those chatrooms will have different sockets for each one, each with its own unique socket ID.</p>

                <p>Thus, when sending a message to one user and you want to make sure the user receives the notification in whatever chat room he is in, it's necessary to retrieve all the user's socket IDs and put them in an array.</p>

            </TextDiv>
            <Suspense fallback={<SectionFallback/>}>
                <TechnologyField 
                    iconTitleColor="text-black"
                    icons = {["nde", "socketio", "ejs", "css", "html", "js", ]}
                />
            </Suspense>
        </div>
    )
}

export default RenderProjectProfile;
