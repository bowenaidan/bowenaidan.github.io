import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import '../App.css';
import { Button } from './Button';
import myPdf from './resume_w.pdf'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    }
    else{
        setButton(true);
        closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
  })

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className = "navBar">
            <div className='navBar-container'>
                <Link to = "/" className='navBar-logo' onClick={closeMobileMenu}>
                    aidan bowen
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>about</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>projects</Link>
                    </li> */}
                    <li>
                        <a href={myPdf} className='nav-links-mobile' onClick={closeMobileMenu} download>resume download</a>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' type="button">resume download</Button>}
            </div>
        </nav>
    </>
    )
}

export default NavBar