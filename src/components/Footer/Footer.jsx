import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <p>
                {' '}
                Designed & Developed By{' '}
                <a style={{color:'blue'}}
                    target="_blank"
                    href="https://www.linkedin.com/in/amulyadixit/"
                >
                  Amulya Dixit.
                </a>{' '}
                Thanks To{' '}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/madhavbahl/"
                >
                    Madhav Bahl
                </a>{' '}
                &{' '}
                <a
                    target="_blank"
                    href="https://www.youtube.com/user/projectevening"
                >
                    The Lean Programmer
                </a>
            </p>
        </div>
    );
};

export default Footer;