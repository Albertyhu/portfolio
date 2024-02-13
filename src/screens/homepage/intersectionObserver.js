import { AnimateAboutMeTitle, DeAnimateAboutMeTitle} from "../../components/AboutMeComponent/AboutMeFunctions.js"
import { BlurAboutParagraph, UnblurAboutParagraph } from "../../components/AboutMeComponent/ParagraphFunctions.js"; 

const options = {
    threshold: 0.3,
}
const InitiateObserver = () =>{
    const AnimationObserver = new IntersectionObserver((entries, observer) =>{
        entries.forEach(entry =>{
            //Handles animation of About Me Title
            if(entry.isIntersecting){
                if(entry.target.id === "AboutMe_MainCont"){
                    AnimateAboutMeTitle();
                }
                if(entry.target.classList.contains("About_paragraph")){
                    UnblurAboutParagraph(); 
                }
            }
            else {
                if(entry.target.id === "AboutMe_MainCont"){
                    DeAnimateAboutMeTitle();
                }
                if(entry.target.classList.contains("About_paragraph")){
                    BlurAboutParagraph(); 
                }
                    
                
            } 
            
        })
    }, options)
    return {AnimationObserver}
}

export default InitiateObserver; 
