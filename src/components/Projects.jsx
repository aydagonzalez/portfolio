import React from 'react';

function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <div>
                <h3>Date Night App</h3>
                <p>Engineered a full-stack social activities hub application that integrates Yelp and Ticketmaster APIs for dynamic activity planning using MongoDB, Express, React, and Node (MERN stack), completed within 1 week.</p>
            </div>

            <div>
                <h3> Connection Farmer </h3>
                <p> Collaborated with a team of 3 developers to create a job and event tracker application for users to track job applications and related events
                    Developed an API using Django to enable reliable access, storage (PostgreSQL), and manipulation of user profile data.</p>
            </div>

            <div>

                <h3>Bookshelf Web App</h3>
                <ul>
                    <li>Created a book application for book enthusiasts to keep track of their favorite books and to create book reviews.</li>
                    <li>Implemented session-based user Google authentication for security and data management. </li>
                    <li>Integrated the Google Book API, allowing users to easily search for and add books to their library, thereby enriching the user experience with the application</li>
                </ul>



                <h3>Spaceman Game</h3>
                <ul>
                    <li> Developed a browser-based word-guessing game where the player tries to figure out a secret word within a certain number of attempts using vanilla JavaScript.</li>
                    <li>Implemented dynamic DOM manipulation and event listeners to create a responsive game in 1 week resulting in an engaging user experience.</li>
                </ul>

                <p>

                </p>
            </div>
            {/* // Add more projects as needed */}
        </section>
    );
}

export default Projects;
