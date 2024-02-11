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
    const imgRef = useRef(null); 

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
        if(imgRef.current){
            if(!imgRef.current.classList.contains("imageGrow")){
                imgRef.current.classList.add("imageGrow")
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
        if(imgRef.current){
            if(imgRef.current.classList.contains("imageGrow")){
                imgRef.current.classList.remove("imageGrow")
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
                className = "rounded-lg flex justify-center items-center w-full h-[250px] bg-center content-center overflow-hidden relative cursor-pointer before:content-[''] before:w-full before:h-full before:absolute before:z-[1] before:opacity-0"
                ref = {galleryItemRef}
            >
                <div
                    className = "h-full w-full absolute"
                >
                    <img 
                        src = {thumbnail}
                        alt = {title}
                        ref = {imgRef}
                        className = "object-cover relative w-full h-full transition-all duration-500"
                    />
                </div>
                <div
                    className = "w-full h-full z-[2] relative galleryItemStyle"
                >
                    <div
                        className = "w-11/12 mx-auto !z-[2] flex !flex-col justify-center items-center top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] absolute"
                    >
                        <img 
                            src = {ProjectIcon}
                            alt = "project icon"
                            className = "w-[50px] h-[50px] m-auto transition-all duration-500 iconStartPos"
                            ref = {iconRef}
                        />
                        <div
                            className = "transition-all duration-500 z-[3] textStartAnim"
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
            </div>
        </motion.div>
    )
}

export default GalleryItem; 