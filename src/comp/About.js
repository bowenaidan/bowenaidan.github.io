import React from 'react'
import './About.css'

function About() {
  return (
    <>
        <div className='about-container'>
            <h1 className='about-heading'>a little about me:</h1>
            <div className='about-wrap'>
                <div className='about-img' alt='Picture of Aidan Bowen'>
                    <img src='/images/profilePic.jpg' className='profile-img'></img>
                </div>
                <div className='about-description'>
                    <p>Hello! I am Aidan Bowen, a senior computer science student 
                        at the University of Kansas. Throughout my time in school, 
                        I have developed a passion for using technology to solve problems. 
                        Within the realm of computer science, I have taken great interest 
                        in the areas of data science, software engineering, and machine 
                        learning. I have an endlessly curious mind and am always eager to 
                        meet new people who can show me different perspectives. Outside of 
                        academia, I have interests in the realms of music, finance, and 
                        sports. Feel free to reach out.
                    </p>
                    <br />
                    <p>Cheers! -Aidan</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About