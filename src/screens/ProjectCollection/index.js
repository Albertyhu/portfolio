import {useRef, useState, useEffect } from 'react'; 
import ContactFrom from "../../components/contactForm";
import { ProjectCollectionContext } from "../../context/contextItem.js"; 
import {
      MainCont,
} from "../../components/projectComponents/myStyle.js";
import {s, ProjectList} from "../../components/project_panel/projects.js"
import ToggleMenuButton from "./menuIcons.js"; 
import ProjectMenu from "./projectMenu.js"; 
import { AnimatePresence } from 'framer-motion'
import ProjectItem from "../../components/projectComponents/gallery-components/gallery-item.js"; 
import uuid from "react-uuid"

const ProjectCollection = ()=>{
      const ContentDivRef = useRef(null); 
      const menuRef = useRef(null);
      const menuIconRef = useRef(null); 
      const [category, setCategory] = useState("all"); 
      const [selectedProjects, setSelected] = useState([...ProjectList])

      const changeDisplayed = (criteria) =>{
            var selected = [];
            if(criteria === "all"){
                  selected = ProjectList; 
            }
            else{
                  selected = ProjectList.filter(item =>{
                        return item.technologyLink.some(val => val === criteria) || item.type.some(val => val === criteria)
                  })
            }
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

      const CheckIfClickedOutside = (e) =>{
            if(menuRef.current 
                  && menuIconRef.current
                  && !menuRef.current.contains(e.target)
                  && !menuIconRef.current.contains(e.target)){
                        closeMenu();
                  }
      }

      const context = {
            setCategory,
            menuRef, 
            closeMenu,
            openMenu, 
            toggleMenu, 
            menuIconRef, 
      }; 
      useEffect(()=>{
            changeDisplayed(category)
      }, [category])

      useEffect(()=>{
            window.scrollTo(0,0)
            document.addEventListener("mousedown", CheckIfClickedOutside)            
      },[])
      return(
            <ProjectCollectionContext.Provider value = {context}>
                  <ToggleMenuButton />
                  <ProjectMenu />
                  <MainCont
                        ref = {ContentDivRef}
                  >
                        <div
                              id = "ProjectGallery"
                              className = "min-h-[100vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 mx-auto w-11/12 mt-[50px] sm:mt-[25px]"
                        >
                              <AnimatePresence>
                                    {selectedProjects.map((project)=>
                                          <ProjectItem 
                                                {...project}
                                                key={uuid()}
                                          />
                                    )}
                              </AnimatePresence>
                        </div>
                        <ContactFrom />
                  </MainCont>
            </ProjectCollectionContext.Provider>
      )
}

export default ProjectCollection