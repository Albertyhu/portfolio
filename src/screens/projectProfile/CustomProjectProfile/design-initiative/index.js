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