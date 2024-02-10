import { useCallback} from "react"; 
import { motion } from 'framer-motion'; 
import { useNavigate } from "react-router-dom"; 
const GalleryItem = (props) =>{
    const {
        thumbnail, 
        title, 
        path, 
        profileStyle
    } = props; 

    const navigate = useNavigate(); 
    const projectPath = profileStyle === "custom" ? `/${path}` : `/projects/${path}`
    const VisitProject = useCallback(()=>navigate(projectPath), [projectPath])
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
                className = "rounded-lg flex justify-center items-center w-11/12 h-[250px] bg-center content-center overflow-hidden relative cursor-pointer hover:[&>div>img]:scale-125 transition-all duration-[2000ms] hover:[&>div]:opacity-30"
            >
                <div
                    className = "h-full w-full absolute before:content-[''] before:bg-[#3062FF] before:z-[-1] before:w-full before:h-full before:absolute transition-all"
                >
                    <img 
                        src = {thumbnail}
                        alt = {title}
                        className = "object-cover w-full h-full"
                    />
                </div>
            <h2>{title}</h2>
            </div>
        </motion.div>
    )
}

export default GalleryItem; 