import { Spinner } from 'react-activity'; 

const ImageFallback = props => {
    const loadingStyle = "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"

    return (
        <div
            className ="m-auto relative"
        >
            <Spinner
                color="#ffffff"
                size={100}
                speed={1}
                animating={true}
                className={loadingStyle}
            />
            <span>Loading</span>

        </div>
    )
}

const SectionFallback = props => {
    const loadingStyle = "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
    return(
        <section 
            className= "w-full h-full relative"
        >
            <Spinner
                color="#ffffff"
                size={100}
                speed={1}
                animating={true}
                className={loadingStyle}
            />
            <div>Loading...</div>
        </section>
    )
}

const HeroFallback = props => {
    const loadingStyle = "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
    return (
        <div
            className="w-full h-screen font-[Montserrat, sans-serif] text-white font-bold relative"
        >
            <div className="absolute top-[50%] left-9 right-0">
                <Spinner
                    color="#ffffff"
                    size={100}
                    speed={1}
                    animating={true}
                    className={loadingStyle}
                />
                <h4
                    className = "text-center text-4xl m-auto"
                >Loading...</h4>
            </div>
        </div>
    )
}

export { 
    ImageFallback,
    SectionFallback,
    HeroFallback
}