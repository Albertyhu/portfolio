import React, { useEffect, useState } from 'react'; 
import {
    QuoteWrapper, 
    Quote, 
    AuthorText
} from './myStyle.js'; 
import './quoteKeyframes.css'

const RenderQuote = props => {
    const {
        QuoteOne, 
        QuoteTwo,
        Author, 
        inView, 
    } = props; 

    var LeftQuote = document.querySelector('#leftQuote');
    var RightQuote = document.querySelector('#rightQuote'); 

    var AuthorElement = document.querySelector('#AuthorElem')

    const inViewEvent = () => {
        LeftQuote = document.querySelector('#leftQuote');
        RightQuote = document.querySelector('#rightQuote'); 
        AuthorElement = document.querySelector('#AuthorElem')
        LeftQuote?.classList.remove('left_blurred');
        RightQuote?.classList.remove('right_blurred');
        LeftQuote?.classList.add('unBlurred');
        RightQuote?.classList.add('unBlurred');
        setTimeout(() => {
            AuthorElement?.classList.remove('AuthorBlurred');
            AuthorElement?.classList.add('AuthorUnblurred');
        }, [1200])
    }; 

    const outOfViewEvent = () => {
        LeftQuote = document.querySelector('#leftQuote');
        RightQuote = document.querySelector('#rightQuote');
        AuthorElement = document.querySelector('#AuthorElem')
        LeftQuote?.classList.remove('unBlurred');
        RightQuote?.classList.remove('unBlurred');
        LeftQuote?.classList.add('left_blurred');
        RightQuote?.classList.add('right_blurred');
        AuthorElement?.classList.remove('AuthorUnblurred');
        AuthorElement?.classList.add('AuthorBlurred');
    } 

    useEffect(() => {
        LeftQuote = document.querySelector('#leftQuote');
        RightQuote = document.querySelector('#rightQuote'); 
    }, [])

    useEffect(() => {
        if (inView) {
            inViewEvent();
        }
        else {
            outOfViewEvent(); 
        }
    }, [inView])

    return (
        <QuoteWrapper>
            <Quote className="left" id ="leftQuote">{QuoteOne}</Quote>
            <Quote className="right" id="rightQuote">{QuoteTwo}</Quote>
            <AuthorText id ="AuthorElem">-{Author}</AuthorText>
        </QuoteWrapper>
       
        )
}

export default RenderQuote; 