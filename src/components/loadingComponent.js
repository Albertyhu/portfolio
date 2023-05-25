import { Levels } from "react-activity";
import "react-activity/dist/library.css";

export const LevelsAnim = props => {
    const loadingStyle = "absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
    return (
        <div
            id="LevelsAnimation"
            className="w-full h-full fixed bg-[rgba(255,255,255,0.7)] z-[25] fixed top-0">
            <div className="w-full h-full relative">
                <Levels 
                    color="#333333"
                    size={100}
                    speed={1}
                    animating={true}
                    className={loadingStyle}
                    />
            </div>
        </div>
    )
}