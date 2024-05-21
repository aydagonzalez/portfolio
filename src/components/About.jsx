
export default function About() {
    return (
        <section className='about-section'>
            <div className="profile-container">
                <img src="./portfolio/profile-img.jpg" alt="Profile" className="profile-img" />

                <div className="tech-circle">
                    <div className="tech-item"><img src="./portfolio/public/logo512.png" alt="React logo" /></div>
                    <div className="tech-item"><img src="./portfolio/js.png" alt="JavaScript logo" /></div>
                    <div className="tech-item"><img src="./python.png" alt="Python logo" /></div>
                    <div className="tech-item"><img src="./express.png" alt="express logo" /></div>
                    <div className="tech-item"><img src="./css.png" alt="CSS logo" /></div>
                    <div className="tech-item"><img src="./html.png" alt="HTML logo" /></div>
                    <div className="tech-item"><img src="./django-green.png" alt="Django logo" /></div>
                    <div className="tech-item"><img src="./mongodb.png" alt="MongoDB logo" /></div>
                    <div className="tech-item"><img src="./mongoose.png" alt="Mongoose logo" /></div>
                    <div className="tech-item"><img src="./node3.png" alt="Node.js logo" /></div>
                    {/* <div className="tech-item"><img src="./material-ui-icon.png" alt="Material-UI logo" /></div> */}
                </div>
            </div>

            <h1 className='name-header'>Ayda Gonzalez TRIAL3</h1>
            <h4 className='about-description'>
                Software Engineer with a robust scientific background and expertise in JavaScript,
                Python, and full-stack development, blending methodical problem-solving with creative
                solutions. Eager to leverage technical skills in dynamic engineering roles to enhance
                user experiences and empower communities through innovative technology.
            </h4>

            <div className='social-links'>
                <a href="https://www.linkedin.com/in/aydagonzalez15/">
                    <img src="/LI-In-Bug.png" alt="LinkedIn" className='social-icon' />
                </a>
                <a href="https://github.com/aydagonzalez15">
                    <img src="/github-mark.png" alt="GitHub" className='social-icon' />
                </a>
                <a href="mailto:aydagonzalezDev@gmail.com">
                    <img src="/mail-icon.png" alt="Email" className='social-icon' />
                </a>

            </div>
            <div className="resume-download-container">
            <a href="./resume.pdf" target="_blank" className='no-decor-links resume-link'>
                <img src="/download-icon.png" alt="Download Resume" className='download-icon' />
                <span>Resume</span>
            </a>
        </div>
        </section>
    );
}