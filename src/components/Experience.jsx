import React from 'react';

export default function Experience() {
    return (
        <>
            <h1 className='name-header'>Experience</h1>
            <section className="experience-section">
                <div className="experience-item">
                    <h2>Software Engineer Fellow - General Assembly</h2>
                    <p className="experience-dates">2024 - 2024</p>
                    <ul>
                        <li> Completed an intensive Software Engineering Immersive program, focusing on full-stack development skills including modern frameworks and languages, and best practices in software engineering.</li>
                        <li>Engaged in hands-on projects that simulated real-world software development scenarios, strengthening skills in coding, debugging, and deploying applications through collaborative and individual efforts.</li>
                        {/* <li>Led a team of developers in a project that resulted in a major feature rollout that boosted customer satisfaction scores by 30%.</li> */}
                    </ul>
                </div>
                <div className="experience-item">
                    <h2>Cardiology Clinical Research Coordinator I & II - Mass General Brigham Hospital</h2>
                    <p className="experience-dates">2022 - 2024</p>
                    <ul>

                        <li>  Managed industry and federally funded clinical trials on cardiac and vascular diseases for 4 medical doctors working with 4 extensive data registries with over 600 enrolled patients</li>
                        <li> Utilized Epic, REDCap, and LabArchives to verify patient records and collect health information data, collect surveys, and manage study funds, respectively</li>
                        <li>Generated data visualizations and maintain comprehensive spreadsheets for heart and kidney transplant research, enhancing data analysis for publication</li>
                        <li> Managed compilation and maintenance of study documents such as standard operating procedures, study protocols, consent forms, and IRB regulatory approvals</li>
                        <li>  Served as a liaison and quality assurance specialist between the MGH Echocardiography Core Laboratory and 30 national and 10 international sites, facilitating immediate analysis of echocardiogram studies</li>
                        <li>Independently conducted all study procedures, from startup to termination, including medical record review, recruitment materials preparation, and patient enrollment sessions aimed at fostering healthy lifestyle outcomes </li>
                    </ul>
                </div>

                <div className="experience-item">
                    <h2> Graduate Researcher - Emory University </h2>
                    <p className="experience-dates">2018 - 2021</p>
                    <ul>

                        <li>Designed, developed, and executed molecular cloning, protein engineering, and biophysical characterization analysis techniques of nanotubes and expressed proteins using biomolecular techniques</li>
                        <li>Established scientific methods and coordinated project goals through planned experiments, data interpretation, and report analysis to develop answers to critical questions in scientific study</li>
                    </ul>
                </div>
                </section>


                <h1 className='name-header'>Education</h1>
                <section className="experience-section">
                    <div className="experience-item">
                        <h2>Software Engineering Immersive - General Assembly</h2>
                        <p className="experience-dates">2024</p>
                        <ul>
                            <li>
                                Full-stack software engineering 500+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies
                            </li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h2>Master of Science - Emory University </h2>
                        {/* <p className="experience-dates">2018 - 2021</p> */}
                        <ul>
                            <li>Thesis: Designing and Engineering Self-Assembling Systems to Control Quaternary Structures</li>
                        </ul>
                    </div>
                    <div className="experience-item">
                        <h2>Bachelor of Arts, Chemistry - Bard College  </h2>
                        {/* <p className="experience-dates">201 - 2021</p> */}
                        <ul>
                            <li>
                                Thesis: Measuring Glucose Levels in Tears as an Alternative to Blood Glucose levels
                            </li>
                        </ul>
                    </div>
                </section>




            <h1 className='name-header'>Peer Reviewed Publications</h1>
            <section className="experience-section">
                <div className="experience-item">
                    <ul>
                        <li> Ruby Singh, MD, MPH; Richa Asija, DO, MS; Chijioke Chukwudi, MD; Ayda Gonzalez de la Nuez, MS; Asishana A. Osho, MD, MPH. Older Patients Not on Dialysis Pre-Transplant are Potential Candidates for Simultaneous Heart Kidney Transplant. 2023. (In Progress).</li>
                        <li>Jonathan Ludmir, MD; Giselle Suero Abreu, MD, PhD; Ayda Gonzalez de la Nuez, MS; Martin Robles, MD; Maria Vivaldi, MD; Laura Benzaquen, MD; Malissa J. Wood, MD; Marcela G. del Carmen, MD, MPH; Jason H. Wasfy, MD, MPhil. Building a Post-Myocardial Infarction Discharge Intervention Program for Hispanic Patients. Healthcare. 2023.</li>
                        <li>Lim, M.; Guo, X.; Grunblatt, E.; Murphy, M.; Clifton, G.; Gonzalez, A. Augmenting Mask-Based Lithography with Direct Laser Writing to Increase Resolution and Speed. Optics Express. 2018.</li>
                        {/* <li>Led a team of developers in a project that resulted in a major feature rollout that boosted customer satisfaction scores by 30%.</li> */}
                    </ul>
                </div>

            </section>

        </>
    );
}
