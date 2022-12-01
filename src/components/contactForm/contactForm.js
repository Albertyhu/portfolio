import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { genKey } from "../../utils/randGen.js";
import {
  ContactInfoWrapper,
  ContactInfoText,
  BigHeader,
  MainCont,
  Shell,
  Title,
  Subtitle,
  InputWrapper,
  Input,
  SubjectLineWrapper,
  SubjectLineCounter,
  SubjectLineInput,
  Button,
  TextArea,
} from "./contactFormStyle.js";

const checkEmail = (address) => {
  var arr1 = address.split("@");
  if (arr1.length >= 2 && arr1[1]) {
    var arr2 = arr1[1].split(".");
    if (arr2.length >= 2 && arr2[1]) {
      return true;
    }
  } else {
    return false;
  }
};

const RenderContactForm = (props) => {
  const { isHomePage } = props;
  const [captchaPassed, setCaptcha] = useState(false);
  const [name, setName] = useState("");
  const handleNameChange = (event) => {
    //I have to write it this way because for some reason, on the product profile page
    //The forms are not updating.
    setName((prev) => (prev = event.target.value));
  };

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    var unformatted = event.target.value;
    if (event.target.value.length <= 10) {
      setPhone(event.target.value);
    }
  };
  const [subjectLine, setSubjectLine] = useState("");
  const [subjectLength, setSubjectLength] = useState(subjectLine.length);
  const MAX_SUBJECT_LENGTH = 100;
  const handleSubjectLineChange = (event) => {
    var rawMessage = event.target.value;
    if (rawMessage.length <= MAX_SUBJECT_LENGTH) {
      setSubjectLine(rawMessage);
    }
  };

  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubjectLine("");
    setMessage("");
  };

  const handleSubmit = () => {
    var errorMessage = "Please, correct the following errors: \n";
    var isEmailValid = checkEmail(email);
    var isValid = true;
    if (name == "") {
      errorMessage += "You have not written down your name yet. \n";
      isValid = false;
    }
    if (email == "") {
      errorMessage += "You have not written down your email yet. \n";
      isValid = false;
    }
    if (!isEmailValid) {
      errorMessage +=
        "The format of your email should be similar to john@gmail.com \n";
      isValid = false;
    }

    if (isValid) {
      const templateID = genKey(10);
      const emailObj = {
        subject_line: subjectLine,
        message: message,
        from_name: name,
        reply_to: email,
        phone_number: phone,
      };
      emailjs
        .send(
          `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
          `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
          emailObj,
          `${process.env.REACT_APP_PUBLIC_KEY}`
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email has been successfully sent.");
          },
          (error) => {
            console.log(error.text);
          }
        );
      reset();
    } else {
      alert(errorMessage);
    }
  };

  const [subjectLineFocused, setSubjectLineFocused] = useState(false);

  const MainContRef = useRef();

  //updates the number of characters that the subject line has as the user types it
  useEffect(() => {
    setSubjectLength(subjectLine.length);
  }, [subjectLine]);

  /*The following block of code is for a very small detail, but I want to maintain consistency
      Because the input for the subject line is made up of two components, it doesn't behave like the other
      input elements. Normally, when a user clicks on the input element, it has a white outline for it.
      The following code makes sure that the subject line input behaves the save way. 
     */
  const subjectLineRef = useRef();
  var SubjectLineInputElem = document.getElementById("SubjectLineInput");

  const checkIfFocused = (event) => {
    SubjectLineInputElem = document.getElementById("SubjectLineInput");
    if (
      subjectLineRef.current &&
      subjectLineRef.current.contains(event.target)
    ) {
      setSubjectLineFocused(true);
    } else {
      setSubjectLineFocused(false);
    }
  };

  useEffect(() => {
    if (MainContRef.current) {
      SubjectLineInputElem = document.getElementById("SubjectLineInput");
    }
  }, [MainContRef.current]);

  useEffect(() => {
    document.addEventListener("click", checkIfFocused);
    return () => document.removeEventListener("click", checkIfFocused);
  }, []);

  return (
    <MainCont
      id="ContactForm_MainCont"
      Position={isHomePage ? "absolute" : "relative"}
      ref={MainContRef}
    >
      <Shell>
        <RenderContactInfo />
      </Shell>
      <Shell>
        <Title>Or send me a message</Title>
        <InputWrapper>
          <Subtitle>Full Name</Subtitle>
          <Input type="text" value={name} onChange={handleNameChange} />
        </InputWrapper>
        <InputWrapper>
          <Subtitle>Email</Subtitle>
          <Input type="text" value={email} onChange={handleEmailChange} />
        </InputWrapper>
        <InputWrapper>
          <Subtitle>Phone Number</Subtitle>
          <Input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+1"
          />
        </InputWrapper>
        <InputWrapper id="InputWrapper">
          <Subtitle>Subject Line</Subtitle>
          <SubjectLineWrapper
            id="SubjectLineWrapper"
            Outline={subjectLineFocused ? "2px solid #ffffff" : "none"}
          >
            <SubjectLineInput
              id="SubjectLineInput"
              type="text"
              value={subjectLine}
              onChange={handleSubjectLineChange}
              id="SubjectLineInput"
              ref={subjectLineRef}
            />
            <SubjectLineCounter>
              <span>
                {subjectLength}/{MAX_SUBJECT_LENGTH}
              </span>
            </SubjectLineCounter>
          </SubjectLineWrapper>
        </InputWrapper>
        <InputWrapper>
          <Subtitle>Message</Subtitle>
          <TextArea rows="5" value={message} onChange={handleMessageChange} />
        </InputWrapper>
        <Button onClick={handleSubmit}>Submit</Button>
      </Shell>
    </MainCont>
  );
};

export default RenderContactForm;

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
