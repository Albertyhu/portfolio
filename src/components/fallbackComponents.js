
const ImageFallback = props => {
    return (
        <div
            className ="m-auto"
        >
            <span>Loading</span>

        </div>
    )
}

const SectionFallback = props =>{
    return(
        <section 
            className= "w-full h-full"
        >
            <div>Loading...</div>
        </section>
    )
}

export { 
    ImageFallback,
    SectionFallback    
}