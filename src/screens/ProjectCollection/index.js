import {useCallback, useRef, useState, useEffect } from 'react'; 
import ContactForm from "../../components/contactForm";
import RenderMenuComponent from '../../components/projectComponents/ProjectMenuBar';
import {
      MainCont,
      ContentDiv, 
} from "../../components/projectComponents/myStyle.js";
import {FramerMotionGalleryItems} from "../../components/project_panel/projects.js"
import {useNavigate} from "react-router-dom"; 

const ProjectCollection = ()=>{
      const ContentDivRef = useRef(null); 
      const [category, setCategory] = useState("all"); 
      const [selectedProjects, setSelected] = useState(FramerMotionGalleryItems)

      const changeDisplayed = (criteria) =>{
            var selected = FramerMotionGalleryItems.filter(item =>item.technologies.some(val => val === criteria) || item.type.some(val => val === criteria))
      }

      useEffect(()=>{

      }, [category])
      return(
            <>
                  <RenderMenuComponent
                        ContentDivRef={ContentDivRef}
                   />
                  <MainCont>
                        <ContactFrom />
                  </MainCont>
            </>
      )
}

export default ProjectCollection