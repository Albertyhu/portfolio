import React, {useState, useEffect} from 'react';
import {
    Paragraph, 
    ParaWrapper, 
} from './style/myStyle.js'; 
import {
    BlurParagraph, 
    UnblurParagraph
} from './ParagraphFunctions.js'; 
import './style/keyframes.css'; 

const App = () => {

    const [inView, setInView] = useState(false);
    const TRIGGER = 380
    var WrapperElement = document.querySelector("#About_ParaWrapper")
    const scrollEvent = (event) => {
        WrapperElement = document.querySelector("#About_ParaWrapper")
        if (WrapperElement?.getBoundingClientRect().top <= TRIGGER) {
            setInView(true);
        }
        else {
            setInView(false); 
        }
    }

    useEffect(() => {
        if (inView) {
            UnblurParagraph(); 
        }
        else {
            BlurParagraph(); 
        }
    }, [inView])

    useEffect(() => {
        WrapperElement = document.querySelector("#About_ParaWrapper")
        window.addEventListener("scroll", scrollEvent); 
        return () => { window.removeEventListener("scroll", scrollEvent); }
    }, [])

    return (
        <ParaWrapper id = "About_ParaWrapper">
            <Paragraph className = "About_paragraph">
                After graduating from UCLA, I spent a lot of time exploring various fields of work to find my calling. I decided to follow my natural fondness for problem solving and my curiosity about how far I can push the boundaries of technology. 
                This had led me to the journey of building web applications as a front end developer, which allows me to synergize my technical acumen and my creativity together to build remarkable things. And most importantly, it allows me to scale and maximize the benefits I can provide to a community.  
            </Paragraph>
            <Paragraph className = "About_paragraph">
                I believe that one must constantly strive to live outside their comfort zone and improve on his craft. He can only grow and become the best version of himself by living in the edge. 
            </Paragraph>
            <Paragraph className ="About_paragraph">
                The journey to realize his true potential is like climbing a muddy hill. If he stays still, he slides back and loses the progress he has made. That why he must constantly put in the work to climb to the peak. This is why I am on the path of constant improvement.
                </Paragraph>

        </ParaWrapper>
        )
}

export default App; 