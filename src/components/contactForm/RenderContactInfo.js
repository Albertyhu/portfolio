import {
    ContactInfoWrapper,
    ContactInfoText,
    BigHeader,
    Title,
} from './contactFormStyle.js'; 

const RenderContactInfo = () => {
    return (
        <ContactInfoWrapper>
            <BigHeader>Interested in working with me?</BigHeader>
            <Title>Let's talk</Title>
            <ContactInfoWrapper>
                <ContactInfoText>Contact me at Hualbert.y@gmail.com</ContactInfoText>
                <ContactInfoText>Call me at (626) 548 - 0643</ContactInfoText>
            </ContactInfoWrapper>
        </ContactInfoWrapper>
    );
};

export default RenderContactInfo; 