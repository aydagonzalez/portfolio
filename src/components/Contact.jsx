import React from 'react';


export default function Contact() {
    return (
        <>
            <h1 className='name-header'>Looking Forward to Connecting</h1>
        <section>



            <div className='contact-links'>
                <a href="https://www.linkedin.com/in/aydagonzalez15">
                    <img src="./portfolio/LI-In-Bug.png" alt="LinkedIn" className='social-icon-contact' />
                    linkedin.com/in/aydagonzalez15
                </a>
                <a href="https://github.com/aydagonzalez">
                    <img src="./portfolio/github-mark.png" alt="GitHub" className='social-icon-contact' />
                    github.com/aydagonzalez
                </a>
                <a href="mailto:aydagonzalezDev@gmail.com">
                    <img src="./portfolio/mail-icon.png" alt="Email" className='social-icon-contact' /> 
                    aydagonzalezDev@gmail.com
                </a>

            </div>

        </section>
        </>
    );
}

