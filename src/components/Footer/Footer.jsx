import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                {' '}
                Designed & Developed By{' '}
                <a style={{color:'blue'}}
                    target="_blank" rel='noreferrer'
                    href="https://www.linkedin.com/in/amulyadixit/"
                >
                  Amulya Dixit.
                  </a>
            </p>
        </div>
    );
};

export default Footer;