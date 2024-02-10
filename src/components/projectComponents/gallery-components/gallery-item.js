import { useCallback, useRef, useEffect } from "react"; 
import { motion } from 'framer-motion'; 
import { useNavigate } from "react-router-dom"; 
import "./style.css"; 
import ProjectIcon from "../../../assets/icons/verified-white.png"; 

const GalleryItem = (props) =>{
    const {
        thumbnail, 
        title, 
        path, 
        profileStyle,
        short
    } = props; 

    const navigate = useNavigate(); 
    const projectPath = profileStyle === "custom" ? `/${path}` : `/projects/${path}`; 
    const VisitProject = useCallback(()=>navigate(projectPath), [projectPath]);
    const galleryItemRef = useRef(null); 
    const iconRef = useRef(null); 
    const textRef = useRef(null); 

    const hoverEvent = (e) =>{
        if(iconRef.current){
            if(iconRef.current.classList.contains("iconStartPos"))
                iconRef.current.classList.remove("iconStartPos"); 
        }
        if(textRef.current){
            if(textRef.current.classList.contains("textStartAnim")){
                textRef.current.classList.remove("textStartAnim")
            }
        }
    }

    const mouseoutEvent = (e) =>{
        if(iconRef.current){
            if(!iconRef.current.classList.contains("iconStartPos"))
                iconRef.current.classList.add("iconStartPos"); 
        }    
        if(textRef.current){
            if(!textRef.current.classList.contains("textStartAnim")){
                textRef.current.classList.add("textStartAnim")
            }
        }
    }

    useEffect(()=>{
        if(galleryItemRef.current){
            galleryItemRef.current.addEventListener("mouseover", hoverEvent); 
            galleryItemRef.current.addEventListener("mouseout", mouseoutEvent);
        }
        return ()=>{
            if(galleryItemRef.current){
                galleryItemRef.current.removeEventListener("mouseover", hoverEvent); 
                galleryItemRef.current.removeEventListener("mouseout", mouseoutEvent); 
            }          
        }
    }, [galleryItemRef.current])

    return(
        <motion.div
            layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
            onClick = {VisitProject}
        >
            <div
                className = "rounded-lg flex justify-center items-center w-11/12 h-[250px] bg-center content-center overflow-hidden relative cursor-pointer hover:[&>div>img]:scale-125 hover:[&>div]:before:opacity-80 hover:[&>div>img]:opacity-20"
                ref = {galleryItemRef}
            >
                <div
                    className = "h-full w-full absolute  before:content-[''] before:w-full before:h-full before:absolute before:bg-[#3062FF] before:z-[0] before:opacity-0 before:transition-all before:duration-500"
                >
                    <img 
                        src = {thumbnail}
                        alt = {title}
                        className = "object-cover relative w-full h-full transition-all duration-500"
                    />
                </div>
                <div
                    className = "z-[1] w-11/12 mx-auto"
                >
                    <img 
                        src = {ProjectIcon}
                        alt = "project icon"
                        className = "w-[50px] h-[50px] m-auto transition-all duration-500 iconStartPos"
                        ref = {iconRef}
                    />
                    <div
                        className = "transition-all duration-500 textStartAnim"
                        ref = {textRef}
                    >
                        <h2
                            className = "font-bold text-lg text-white text-center"
                        >{title}</h2>
                        <p
                            className = "text-white text-center text-lg"
                        >{short}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default GalleryItem; 