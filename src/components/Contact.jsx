import React from 'react';


export default function Contact() {
    return (
        <section>
            <h1 className='name-header'>Looking Forward to Connecting</h1>



            <div className='contact-links'>
                <a href="https://www.linkedin.com/in/aydagonzalez15">
                    <img src="/LI-In-Bug.png" alt="LinkedIn" className='social-icon-contact' />
                    linkedin.com/in/aydagonzalez15
                </a>
                <a href="https://github.com/aydagonzalez15">
                    <img src="/github-mark.png" alt="GitHub" className='social-icon-contact' />
                    github.com/aydagonzalez15
                </a>
                <a href="mailto:aydagonzalezDev@gmail.com">
                    <img src="/mail-icon.png" alt="Email" className='social-icon-contact' /> 
                    aydagonzalezDev@gmail.com
                </a>

            </div>

        </section>
    );
}

