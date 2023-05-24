import {
    MainImage
} from './myStyle.js'

const RenderMainImage = props => {
    const {
        image, 
    } = props; 
    return (
        <div
            id="thumbnail wrapper"
            className="w-11/12 h-11/12 mx-auto">
            <MainImage src={image} />
        </div>
    )
}

export default RenderMainImage;
