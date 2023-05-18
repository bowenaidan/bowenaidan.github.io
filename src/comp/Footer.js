import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                connect with me on social media!
            </p>
            {/* <p className='footer-subscription-text'>
                I'll try my best to get back to you.
            </p> */}
            {/* <div className='input-areas'>
                <form>
                    <input type="Email" name="email" placeholder='Your email' className='footer-input' />
                    <Button buttonStyle="btn--outline">Submit</Button>
                </form>
            </div> */}
        </section>
        {/* <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-item'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
            </div>
        </div> */}
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    {/* <Link className='social-logo'>
                        aidan bowen
                    </Link> */}
                    <a href="https://www.linkedin.com/in/aidan-bowen-618624202/" target='_blank' className='social-logo'>linkedin</a>
                    <a href="https://www.twitter.com/bowenaidan" target='_blank' className='social-logo'>twitter</a>
                    <a href="https://www.instagram.com/bowenaidan" target='_blank' className='social-logo'>instagram</a>
                </div>
                {/* <div className='social-icons'>
                    <Link className='social-icons-link facebook' to="/" target="_blank" aria-label='Facebook'>
                        <i className='fab fa-facebook-f'></i>
                    </Link>
                    <Link className='social-icons-link instagram' to="/" target="_blank" aria-label='Instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className='social-icons-link linkedin' to="https://www.linkedin.com/in/aidan-bowen-618624202/" target="_blank" aria-label='Linkedin'>
                        <i className='fab fa-linkedin'></i>
                    </Link>
                    <Link className='social-icons-link twitter' to="/" target="_blank" aria-label='Twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default Footer