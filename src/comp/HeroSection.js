import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  const handleClickScroll = () => {
    const element = document.getElementById('middle');
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='hero-container'>
        <video src='/videos/main-vid.mp4' autoPlay loop muted />
        <h1>hello there!</h1>
        <p>i'm aidan bowen.</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' onClick={handleClickScroll}>take a look at what i do</Button>
            {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle' /></Button> */}
        </div>
    </div>
  )
}

export default HeroSection