import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import MyPdf from './resume_w.pdf';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize, link}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    // const handleClickScroll = () => {
    //     const element = document.getElementById('middle');
    //     if (element) {
    //       // Will scroll smoothly to the top of the next section
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };
    if(type=="button")
        return(
            <a href={MyPdf} className='btn-mobile' download>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} to={link}>
                    {children}
                </button>
            </a>
        )
    else{
        return(
            <Link className='btn-mobile'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} to={link}>
                    {children}
                </button>
            </Link>
        )
    }
}