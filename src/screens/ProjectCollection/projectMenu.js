import { useState, useEffect, useContext} from 'react'; 
import { ProjectCollectionContext } from "../../context/contextItem.js"
import "./style.css"; 

const RenderMenu = () =>{
    const {
        setCategory,
        menuRef
    } = useContext(ProjectCollectionContext); 

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
                <h3>Choose by type</h3>
                <h3>Choose by technology used</h3>
            </div>
        </div>
    )
}

export default RenderMenu; 

const MenuItem = (props) =>{

}