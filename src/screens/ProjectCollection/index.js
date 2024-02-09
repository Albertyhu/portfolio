import {useCallback} from 'react'; 
import ContactForm from "../../components/contactForm";
import RenderMenuComponent from '../../components/projectComponents/ProjectMenuBar';
import {
      MainCont,
      ContentDiv, 
} from "../../components/projectComponents/myStyle.js";
import {useNavigate} from "react-router-dom"; 

const ProjectCollection = ()=>{
      
      return(
            <>
                  <MainCont>
                        <ContactFrom />
                  </MainCont>
            </>
      )
}

export default ProjectCollection