import React, { useState } from 'react'; 
import styled, { keyframes } from 'styled-components'; 
import './contactForm.css'; 
import SquarePattern from '../../assets/square_pattern.jpg'

const checkEmail = address => {
    var arr1 = address.split('@')
    if (arr1.length >= 2 && arr1[1]) {
        var arr2 = arr1[1].split('.')
        console.log(arr2)
        if (arr2.length >= 2 && arr2[1]) {
            return true;
        }

    }
    else {
        return false;
    }
}

const RenderContactForm = props => {
    const [name, setName] = useState('')
    const handleNameChange = event => {
        setName(event.target.value); 
    }

    const [email, setEmail] = useState(''); 
    const [phone, setPhone] = useState('')
    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePhoneChange = event => {
        var unformatted = event.target.value; 
        if (event.target.value.length <= 10) {
            setPhone(event.target.value)
        }
    }

    const [message, setMessage] = useState('')

    const handleMessageChange = event => {
        setMessage(event.target.value)
    }

    const reset = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('')
    }

 

    const handleSubmit = () => {
        var errorMessage = 'Please, correct the following errors: \n'; 
        var isEmailValid = checkEmail(email);
        console.log(isEmailValid)
        var isValid = true; 
        if (name == '') {
            errorMessage += 'You have not written down your name yet. \n';
            isValid = false; 
        }
        if (email == '') {
            errorMessage += 'You have not written down your email yet. \n';
            isValid = false; 
        }
        if (!isEmailValid) {
            errorMessage += 'The format of your email should be similar to john@gmail.com \n';
            isValid = false; 
        }
        if (isValid) {
            reset(); 
        }
        else {
            alert(errorMessage)
        }
    }


    return (
        <MainCont id="ContactForm_MainCont">
            <Shell>
                <Title>Contact me</Title>
                <InputWrapper>
                    <Subtitle>Full Name</Subtitle>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Subtitle>Email</Subtitle>
                    <Input
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Subtitle>Phone Number</Subtitle>
                    <Input
                        type="text"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder = "+1"
                    />
                </InputWrapper>
                <InputWrapper>
                    <Subtitle>Message</Subtitle>
                    <TextArea
                        rows='5'
                        value={message}
                        onChange={handleMessageChange}
                    />
                </InputWrapper>
                <Button onClick={handleSubmit}>Submit</Button>
            </Shell>
        </MainCont>)
}

export default RenderContactForm; 

const MainCont = styled.div`
width: 100%; 
height: 100%; 
background: linear-gradient(45deg, red, #6313a2, #0c309f);
position: absolute;
bottom: 0px;
left: 0px;
right: 0px; 
    font-family: 'Montserrat', sans-serif;
`
const Shell = styled.div`
width: 50%; 
height: 90%; 
margin: auto;
`

const Title = styled.h2`
    color: #ffffff;
    margin: 20px auto; 
    text-align: center; 
`
const Subtitle = styled.h3`
text-align: left; 
color: #cdcdcd; 

`

const InputWrapper = styled.div`
margin: 20px auto;
`

const Input = styled.input`
text-align: left; 
width: 100%;
padding: 5px; 
background-color: #ffffff; 
border-radius: 5px; 
` 

const Button = styled.div`
    padding: 5px 10px; 
    font-size: 25px; 
    cursor: pointer; 
    user-select: none; 
    color: 636363; 
    margin: 20px auto; 
    border-radius: 15px; 
    width: 180px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    white-space: nowrap;
    background: linear-gradient(to left, #e3e3e3, #ffffff, #e3e3e3);
    &:hover{
        background-color: #e9e9e9; 
    }
    &:active{
        background-color: #ffffff; 
        transform: translateX(2px) translateY(2px); 
    }
`

const TextArea = styled.textarea`
resize: none; 
width: 100%;
margin: auto;
border-radius: 10px;
padding: 5px;
`