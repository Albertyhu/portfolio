import {useCallback, useRef, useState, useEffect } from 'react'; 
import ContactFrom from "../../components/contactForm";
import RenderMenuComponent from '../../components/projectComponents/ProjectMenuBar';
import { ProjectCollectionContext } from "../../context/contextItem.js"; 
import {
      MainCont,
      ContentDiv, 
} from "../../components/projectComponents/myStyle.js";
import {FramerMotionGalleryItems} from "../../components/project_panel/projects.js"
import {useNavigate} from "react-router-dom"; 
import ToggleMenuButton from "./menuIcons.js"; 
import ProjectMenu from "./projectMenu.js"; 
import { motion, AnimatePresence } from 'framer-motion'
import ProjectItem from "../../components/projectComponents/ProjectMenuBar/index.js"

const ProjectCollection = ()=>{
      const ContentDivRef = useRef(null); 
      const menuRef = useRef(null);
      const [category, setCategory] = useState("all"); 
      const [selectedProjects, setSelected] = useState(FramerMotionGalleryItems)

      const changeDisplayed = (criteria) =>{
            var selected = FramerMotionGalleryItems.filter(item =>item.technologies.some(val => val === criteria) || item.type.some(val => val === criteria))
            setSelected(selected); 
      }

      const closeMenu = () =>{
            if(menuRef.current && !menuRef.current.classList.contains("closedProjectMenu")){
                  menuRef.current.classList.add("closedProjectMenu")
            }
      }
      const openMenu = (event) =>{
            if(menuRef.current){
                  menuRef.current.classList.remove("closedProjectMenu")
            }
      }

      const toggleMenu = () =>{
            if(menuRef.current) {
                  if(menuRef.current.classList.contains("closedProjectMenu")){
                        menuRef.current.classList.remove("closedProjectMenu")
                  }
                  else{
                        menuRef.current.classList.add("closedProjectMenu")
                  }
            }
      }

      const context = {
            setCategory,
            menuRef, 
            closeMenu,
            openMenu, 
            toggleMenu, 
      }; 
      useEffect(()=>{
            changeDisplayed(category)
      }, [category])
      return(
            <ProjectCollectionContext.Provider value = {context}>
                  <ToggleMenuButton />
                  <ProjectMenu />
                  <MainCont
                        ref = {ContentDivRef}
                  >
                        <div>
                              <AnimatePresence>
                                    {selectedProjects.map((project)=>{
                                          <ProjectItem />
                                    })}
                              </AnimatePresence>
                        </div>
                        <ContactFrom />
                  </MainCont>
            </ProjectCollectionContext.Provider>
      )
}

export default ProjectCollection