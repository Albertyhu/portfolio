import { useRef } from 'react'; 

export const GlobalRefs = () => {
    const HeroRef = useRef(null)
    return { HeroRef}
}
