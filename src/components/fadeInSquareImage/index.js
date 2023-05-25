const RenderImage = props =>{
    const {
        image,
        altText = "image", 
        imageRef, 
        customStyle,  
        } = props; 


    return(
        <div
            id={`${altText}`}
            className={`relative block opacity-0 transition-all duration-1000 ${customStyle}`}
            ref={imageRef}
        >
            <div
                className = {`w-full h-auto overflow-hidden top-0 left-0 right-0`}
            >
            <img src = {image} 
                className = "object-fit object-center w-full h-full"
                alt={altText}
            />
            </div>
        </div>
    )
}

export default RenderImage; 