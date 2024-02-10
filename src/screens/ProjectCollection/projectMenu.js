import { useState, useEffect, useContext, useCallback } from 'react'; 
import { ProjectCollectionContext } from "../../context/contextItem.js"
import "./style.css"; 
import {  FramerMotionGalleryItems } from '../../components/project_panel/projects.js'
import { useNavigate } from "react-router-dom"; 
import uuid from "react-uuid"; 

const RenderMenu = () =>{
    const {
        setCategory,
        menuRef,
        closeMenu,
    } = useContext(ProjectCollectionContext); 
    const navigate = useNavigate(); 

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
            className = "h-full bg-black overflow-y-scroll py-5 text-white text-center z-[3] projectMenuStyle fixed top-0 bottom-0 left-0 right-auto"
        >
            <div
                id = "MenuItemsWrapper"
                className = "w-11/12 mx-auto [&>h3]:font-bold [&>h3]:text-lg [&>h3]:mt-5 [&>ul>li]:capitalize [&>ul>li]:cursor-pointer"
            >
                <h2
                    className = "text-2xl"
                >Projects</h2>
                <p
                    className ="cursor-pointer hover:font-bold" 
                    onClick ={()=>setCategory("all")}
                >Select All</p>
                <h3>Filter projects by type</h3>
                    <ul
                        className = "list-none list-inside"
                    >
                    {TypeArray && 
                        TypeArray.map(item =>
                            <li
                                className="hover:font-bold"
                                onClick = {()=>setCategory(item)}
                                key={uuid()}
                            >{item}</li>)
                    }
                    </ul>
                <h3>Filter by technology used</h3>
                    <ul
                        className = "list-none list-inside"
                    >
                    {TechnologyArray && 
                        TechnologyArray.map(item =>
                            <li
                                className="hover:font-bold"
                                onClick = {()=>setCategory(item)}
                                key={uuid()}
                            >{item}</li>)
                    }
                    </ul>
                <hr 
                    className ="border-[1px] opacity-50 my-10 "
                />
                <p
                    className ="cursor-pointer hover:font-bold" 
                    onClick = {()=>navigate(-1)}
                >Go Back</p>
                <p
                    className ="cursor-pointer hover:font-bold" 
                    onClick ={useCallback(()=>navigate("/"), [])}
                >Go Home</p>
            </div>
        </div>
    )
}

export default RenderMenu; 

const MenuItem = (props) =>{

}