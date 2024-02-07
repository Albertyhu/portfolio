import {useCallback} from 'react'; 
import ContactForm from "../components/contactForm";
import RenderMenuComponent from '../components/projectComponents/ProjectMenuBar';
import {
      MainCont,
      ContentDiv, 
} from "../components/projectComponents/myStyle.js";
import {useNavigate} from "react-router-dom"

const NotFound = () =>{
    const navigate = useNavigate(); 
    const GoBack = useCallback(()=>navigate(-1))
    return(
        <>
            <RenderMenuComponent />
            <MainCont>
                
                <div
                    class = "flex flex-col mx-auto text-center min-h-[80vh] [&>*]:mb-10"
                >
                    <h1
                        class = "font-bold text-2xl mt-[50px]"
                    >OOPS! 404 Error</h1>
                    <p>The page you are looking for is not found.</p>
                    <button
                        class = "btn-primary !text-center"
                        onClick = {GoBack}
                    >Go back</button>
                </div>
                <ContactForm />
            </MainCont>
        </>
    )
}

export default NotFound; 