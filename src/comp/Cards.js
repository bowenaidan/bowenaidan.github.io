import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'  id='middle'>
        <br></br>
        <h1>take a look at some of my projects:</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images/vr-img.jpg' text="virtual reality classroom" label='C#' path='https://github.com/dugod/VRClassroom-v2' />
                    <CardItem src='images/language.jpg' text="programming language exploration" label='Haskell' path='https://github.com/bowenaidan/662-final-project' />
                    <CardItem src='images/compiler.jpg' text="building a compiler" label='C++' path='/services' />
                </ul>
                <ul className='cards__items'>
                    <CardItem src='images/chatbot.jpg' text="groupme chatbot" label='Node' path='https://github.com/bowenaidan/kappa-sigma-bot' />
                    <CardItem src='images/web-dev.jpg' text="web development" label='WordPress' path='https://solartosaveks.com/' />
                    <CardItem src='images/data-structure.jpg' text="data structure visualizer"label='JavaScript' path='https://github.com/ezhuo56/ds_visualizerProject4' />
                    <CardItem src='images/data-science.jpg' text="data science" label='Python/R' path='/services' />
                </ul>
            </div>
        </div>
        <h1>see more on my github!</h1>
        <div className='github-container'>
            <a href="https://github.com/bowenaidan" target='_blank' className='github-icon'><i className='fab fa-github'></i></a>
        </div>
    </div>
  )
}

export default Cards