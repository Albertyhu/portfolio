import { useState, useEffect, useContext} from 'react'; 
import { ProjectCollectionContext } from "../../context/contextItem.js"
import "./style.css"; 
import {  FramerMotionGalleryItems } from '../../components/project_panel/projects.js'
const RenderMenu = () =>{
    const {
        setCategory,
        menuRef,
        closeMenu,
    } = useContext(ProjectCollectionContext); 
    
    const TypeSet = new Set(); 
    const TechnologySet = new Set(); 
    try {

    FramerMotionGalleryItems.forEach(item =>{
        item.type.forEach(val => TypeSet.add(val))
        item.technologies.forEach(val=>TechnologySet.add(val))
    })
    } catch(e) {console.log(`Error in creating type and technology arrays: ${e}`)}
    const TypeArray = Array.from(TypeSet); 
    const TechnologyArray = Array.from(TechnologySet); 

    const checkIfClickedOutside = (event) => {
    if (
        menuRef.current &&
        menuRef.current.classList.contains("closedProjectMenu") &&
        !menuRef.current.contains(event.target)
    ) {
        closeMenu();
    }
    };

    useEffect(() => {
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    });    

    return(
        <div
            ref = {menuRef}
            id = "Project Menu"
            className = "h-full bg-black overflow-scroll py-5 text-white text-center projectMenuStyle fixed top-0 bottom-0 left-0 right-auto"
        >
            <div
                id = "MenuItemsWrapper"
                className = "w-11/12 mx-auto"
            >
                <h2
                    className = "text-2xl"
                >Projects</h2>
                <h3>Filter projects by type</h3>
                    <ul
                        className = "list-none list-inside"
                    >
                    {TypeArray && 
                        TypeArray.map(item =><li>{item}</li>)
                    }
                    </ul>
                <h3>Filter by technology used</h3>
                    <ul
                        className = "list-none list-inside"
                    >
                    {TechnologyArray && 
                        TechnologyArray.map(item =><li>{item}</li>)
                    }
                    </ul>
            </div>
        </div>
    )
}

export default RenderMenu; 

const MenuItem = (props) =>{

}